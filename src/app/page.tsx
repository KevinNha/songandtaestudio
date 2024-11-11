import { getImages } from '@/utils/images';
import { Lato } from 'next/font/google';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const lato = Lato({ weight: '400', subsets: ['latin'] });

const Home = async () => {
  const data = await getImages('home');
  const image_urls = await data.json();

  return (
    <div>
      <h1
        className={`${lato.className} tracking-widest text-lg text-[#111111] text-center mt-10`}
      >
        Highlights.
      </h1>
      <div className="columns-1 gap-4 grid justify-items-center mt-4">
        {image_urls.map((url: string, index: number) => (
          <div
            className="mb-8 w-full h-auto md:w-[calc(700px-5vw)] md:max-w-[600px]"
            key={index}
          >
            <Image
              className="object-cover"
              src={`https://${url}`}
              alt={`home_image_${index}`}
              layout="responsive"
              width={1500} // using arbitrary values
              height={1500} // using arbitrary values
              sizes="(max-width: 1280) 55vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
