'use server';

import { z } from 'zod';
import { Resource } from 'sst';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const schema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Invalid email address',
  }),
  message: z.string().min(1, {
    message: 'Message must be at least 1 character long',
  }),
  submit: z.string().optional(),
});

const sesClient = new SESClient({});

export async function sendEmail(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, message } = validatedFields.data;

  const bodyHtml = `
<html>
  <body>
    <p>Hi, you received a new inquiry message from songandtaestudio.com</p>
    <p>안녕하세요, songandtaestudio.com 에서 새로운 문의 메시지를 받았습니다.</p>
    
    <p><strong>Sender:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <br/>
    <p><strong>Message:</strong> ${message}</p>
    <br/>
    <p>Please reply to this email to respond to the sender.</p>
    <p>보낸 사람에게 답장을 보내려면 이 이메일로 답장을 보내주세요.</p>
  </body>
</html>
`;

  try {
    const command = new SendEmailCommand({
      Source: `contact@${Resource.sesSenderLinkable.email}`,
      Destination: {
        ToAddresses: [process.env.SES_DESTINATION as string],
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: `Songandtaestudio.com - New inquiry message`,
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: bodyHtml,
          },
        },
      },
      ReplyToAddresses: [email],
    });
    await sesClient.send(command);

    return { success: true };
  } catch (error) {
    return {
      errors: {
        submit: [
          'Failed to send email. Please try again or contact us at songandtaestudio@gmail.com',
        ],
      },
    };
  }
}
