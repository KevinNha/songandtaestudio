import { Josefin_Sans, Lato } from 'next/font/google';
import { getReviews } from '@/utils/reviews';
import { Review as ReviewType } from '@/utils/reviews';
import Review from '@/components/Review';

const josefinSans = Josefin_Sans({ weight: '300', subsets: ['latin'] });
const lato = Lato({ weight: '400', subsets: ['latin'] });

export const dynamic = 'force-dynamic';

const Page = async () => {
  const reviews = await getReviews();
  return (
    <div>
      <div className="mb-12">
        <h1
          className={`${josefinSans.className} font-bold text-2xl w-full text-center tracking-[10px]`}
        >
          TESTIMONIALS
        </h1>
        <h2
          className={`${lato.className} text-center text-gray-400 tracking-wide`}
        >
          What people are saying about us
        </h2>
      </div>
      {reviews.map((review: ReviewType, index: number) => {
        return (
          <div key={index}>
            <Review name={review.name.S} review={review.review.S} />
            {index < reviews.length - 1 && (
              <hr className="my-8 border-t border-gray-300 " />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Page;
