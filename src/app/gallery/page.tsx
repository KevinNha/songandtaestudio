import GalleryImage from '@/components/GalleryImage';
import { getImages } from '@/utils/images';
import { Gowun_Batang, Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({ weight: '300', subsets: ['latin'] });
const gowun = Gowun_Batang({ weight: '400', subsets: ['latin'] });

const Page = async () => {
  const dataMom = await getImages('galleryMom');
  const momImageUrls = await dataMom.json();
  console.log(momImageUrls);

  const dataDad = await getImages('galleryDad');
  const dadImageUrls = await dataDad.json();

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      <p className={`${josefinSans.className} col-span-4 text-2xl`}>
        Song Jeong Kim / 김송정
      </p>
      <div className="col-span-4 overflow-x-auto">
        <div className="flex flex-row gap-4">
          {momImageUrls.map((image: string, index: number) => (
            <GalleryImage key={index} imageUrl={image} index={index} />
          ))}
        </div>
      </div>
      <p className={`${gowun.className} col-span-4 text-2xl`}>
        Tae Moon Jeon / 전태문
      </p>
      <div className="col-span-4 overflow-x-auto">
        <div className="flex flex-row gap-4">
          {dadImageUrls.map((image: string, index: number) => (
            <GalleryImage key={index} imageUrl={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
