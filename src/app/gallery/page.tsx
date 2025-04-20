import GallerySection from '@/components/GallerySection';
import { getImages } from '@/utils/images';
import { Gowun_Batang, Josefin_Sans } from 'next/font/google';

export const dynamic = 'force-dynamic';

const josefinSans = Josefin_Sans({ weight: '300', subsets: ['latin'] });
const gowun = Gowun_Batang({ weight: '400', subsets: ['latin'] });

const Page = async () => {
  const dataMom = await getImages('galleryMom');
  const momImageUrls = await dataMom.json();

  const dataDad = await getImages('galleryDad');
  const dadImageUrls = await dataDad.json();

  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      <GallerySection
        images={momImageUrls}
        title="Song Jeong Kim / 김송정"
        fontClassName={josefinSans.className}
      />
      <GallerySection
        images={dadImageUrls}
        title="Tae Moon Jeon / 전태문"
        fontClassName={gowun.className}
      />
    </div>
  );
};

export default Page;
