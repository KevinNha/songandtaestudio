import React from 'react';
import Review, { ReviewProps } from '@/components/Review';
import ComingSoon from '@/components/ComingSoon';

// const reviews = [
//   {
//     name: 'Olivia',
//     review:
//       "Having to see my old dog's portrait made me feel that he was alive again. Such memories can be brought back to life with great sincerity. Thank you.",
//     backgroundColor: '#FED7AA',
//   },
//   {
//     name: 'Peter',
//     review:
//       "Such art should never be forgotten. I love what I've received back. The colors are so vibrant that they feel alive. The time and the effort that was spent for my children will never be forgotten.",
//     backgroundColor: '#FED7AA',
//   },
//   {
//     name: 'Claire',
//     review:
//       "I'm now debt-free and saving for a home because of your help. Thank you. Dagraw!",
//     backgroundColor: '#FED7AA',
//   },
// ];

const Page = () => {
  return <ComingSoon />;
  // return (
  //   <>
  //     <h1 className="font-bold text-xl text-gray-400 text-center mt-20 mb-10">
  //       Client Review
  //     </h1>
  //     {reviews.map((review: ReviewProps, index: number) => {
  //       return (
  //         <Review
  //           key={index}
  //           name={review.name}
  //           review={review.review}
  //           backgroundColor={review.backgroundColor}
  //         />
  //       );
  //     })}
  //   </>
  // );
};

export default Page;
