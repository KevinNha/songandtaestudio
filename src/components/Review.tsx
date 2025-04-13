import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['italic', 'normal'],
});

export type ReviewProps = {
  name: string;
  review: string;
};

const Review = (reviewProps: ReviewProps) => {
  const name = reviewProps.name;
  const review = reviewProps.review;

  return (
    <div className="w-full py-2 px-4 bg-transparent flex justify-center">
      <div className="w-full md:w-2/3">
        <div className="w-full shadow-xl flex flex-col p-10 rounded-lg hover:scale-105 duration-300">
          <p
            className={`${raleway.className} text-sm font-normal tracking-widest italic`}
          >
            "{review}"
          </p>
          <p
            className={`${raleway.className} font-bold tracking-widest text-xs text-left mt-auto pt-3`}
          >
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
