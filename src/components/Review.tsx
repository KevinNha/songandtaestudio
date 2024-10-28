// import React from "react";

// type Review = {
//   name: string;
//   review: string;
//   backgroundColor: string;
// };

// type ReviewProps = {
//   reviews: Review[];
// };

// const Review = ({ reviews }: ReviewProps) => {
//   return (
//     <div className="w-full py-[5rem] px-4 bg-transparent">
//       <h1 className="font-bold text-xl text-gray-400">Client Reviews</h1>
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
//         {reviews.map((review, index) => (
//           <div
//             key={index}
//             className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
//             style={{ backgroundColor: review.backgroundColor }}
//           >
//             <h3 className="text-sm font-normal">{review.review}</h3>
//             <p className="italic text-left text-xs font-thin mt-auto pt-3">
//               - {review.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React from "react";

// type Review = {
//   name: string;
//   review: string;
//   backgroundColor: string;
// };

// type ReviewProps = {
//   review: Review;
// };

// const Review = ({ review }: ReviewProps) => {
//   return (
//     <div className="w-full py-[5rem] px-4 bg-transparent">
//       <h1 className="font-bold text-xl text-gray-400">Client Reviews</h1>
//       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-col-2 gap-8">
//         <div
//           className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
//           style={{ backgroundColor: review.backgroundColor }}
//         >
//           <h3 className="text-sm font-normal">{review.review}</h3>
//           <p className="italic text-left text-xs font-thin mt-auto pt-3">
//             - {review.name}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React from "react";

// type Review = {
//   name: string;
//   review: string;
//   backgroundColor: string;
// };

// type ReviewProps = {
//   review: Review;
// };

// const Review = ({ review }: ReviewProps) => {
//   return (
//     <div className="w-full py-[5rem] px-4 bg-transparent">
//       <h1 className="font-bold text-xl text-gray-400">Client Reviews</h1>
//       <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-col-2 gap-8">
//         <div
//           className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
//           style={{ backgroundColor: review.backgroundColor }}
//         >
//           <h3 className="text-sm font-normal">{review.review}</h3>
//           <p className="italic text-left text-xs font-thin mt-auto pt-3">
//             - {review.name}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;

import React from 'react';

type ReviewProps = {
  name: string;
  review: string;
  backgroundColor: string;
};

const Review = (reviewProps: ReviewProps) => {
  const name = reviewProps.name;
  const review = reviewProps.review;
  const backgroundColor = reviewProps.backgroundColor;

  return (
    <div className="w-full py-[5rem] px-4 bg-transparent flex justify-center">
      <div className="w-full md:w-1/2">
        <div
          className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
          style={{ backgroundColor: backgroundColor }}
        >
          <h3 className="text-sm font-normal">{review}</h3>
          <p className="italic text-left text-xs font-thin mt-auto pt-3">
            - {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
