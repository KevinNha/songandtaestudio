import { Josefin_Sans } from 'next/font/google';
import { Gowun_Batang } from 'next/font/google';
import { getImages } from '@/utils/images';
import AboutProfile from '@/components/AboutProfile';

const josefinSans = Josefin_Sans({ weight: '300', subsets: ['latin'] });
const gowun = Gowun_Batang({ weight: '400', subsets: ['latin'] });

const Page = async () => {
  const data = await getImages('about');
  const imageUrls = await data.json();

  // TODO can maybe store these in ddb
  const momDescription = `I was inspired by someone's definition of an artist: an artist is
    simply someone who keeps creating. I love finding beauty in nature
    and in living beings, capturing it with my humble hands and eyes,
    and share its beauty with others.`;

  const dadDescription = `어느 철학자는 이렇게 말합니다. '어린시절은 마치 아름다운 풍경을 말을
    거꾸로 타고 가면서 바라보는것과 같다' 아름다움이 시야에서 사라지기
    시작하는 바로 그 순간 아름다움을 진정으로 깨닫게 된다라고요. 저 또한
    어릴 때의 기억이 과거와 지금 살고 있는 현재를 연결시켜주는 징검
    다리의 역할을 하는 것 같습니다. 그래서 그 기억을 통해 과거와 현재를
    캔버스에 붓으로 조형적으로 펼치려고 합니다.`;

  return (
    <div>
      <AboutProfile
        font={josefinSans.className}
        name="Song Jeong Kim / 김송정"
        description={momDescription}
        imageUrl={imageUrls.filter((url: string) => url.includes('mom'))[0]}
        alt="about_image_mom"
        leftToRight={true}
      />
      <hr className="my-8 border-t border-gray-300 shadow mx-auto" />
      <AboutProfile
        font={gowun.className}
        name="Tae Moon Jeon / 전태문"
        description={dadDescription}
        imageUrl={imageUrls.filter((url: string) => url.includes('dad'))[0]}
        alt="about_image_dad"
        leftToRight={false}
      />
    </div>
  );
};

export default Page;
