'use client';

import {
  useActionState,
  useState,
  startTransition,
  useEffect,
  useRef,
} from 'react';
import { sendEmail } from '@/app/contact/actions';
import { Lato, Raleway } from 'next/font/google';

const lato = Lato({ weight: '400', subsets: ['latin'] });
const raleway = Raleway({ weight: ['400', '600'], subsets: ['latin'] });

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [state, formAction, pending] = useActionState(sendEmail, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
      setSubmitted(true);
    }
  }, [state]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col p-10 border-2 rounded-lg gap-4">
        <h1 className={`${raleway.className} text-2xl font-bold`}>
          Thank you for your message!
        </h1>
        <p className={`${lato.className}`}>
          We will get back to you as soon as possible.
        </p>
        <button
          className={`bg-[#111111] text-white p-2 rounded-lg mt-4 hover:bg-[#333333] transition-colors duration-300 ${lato.className}`}
          onClick={() => {
            setSubmitted(false);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 border-2 rounded-lg gap-10">
      <h1 className={`${raleway.className} text-2xl font-bold`}>Contact Us</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="flex flex-col gap-2">
          <label
            className={`${raleway.className} font-bold text-sm`}
            htmlFor="name"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-2 rounded-lg p-2 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent ${lato.className}`}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <p className="text-red-500">{state?.errors?.name?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className={`${raleway.className} font-bold text-sm`}
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className={`border-2 rounded-lg p-2 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent ${lato.className}`}
            type="text"
            name="email"
            placeholder="your.email@example.com"
          />
          <p className="text-red-500">{state?.errors?.email?.[0]}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label
            className={`${raleway.className} font-bold text-sm`}
            htmlFor="message"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className={`border-2 rounded-lg p-2 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent ${lato.className}`}
            placeholder="For inquiries, please contact us regarding gallery or art show invitations, portrait requests, or collaboration opportunities"
            rows={5}
            name="message"
          />
          <p className="text-red-500">{state?.errors?.message?.[0]}</p>
        </div>
        <button
          className={`bg-[#111111] text-white p-2 rounded-lg hover:bg-[#333333] transition-colors duration-300 ${lato.className}`}
          type="submit"
          disabled={pending}
        >
          {pending ? 'Submitting...' : 'Submit'}
        </button>
        <p className="text-red-500">{state?.errors?.submit?.[0]}</p>
      </form>
    </div>
  );
}
