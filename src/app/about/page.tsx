// import React from "react";
// import Review from "@/components/Review";

// const reviews = [
//   {
//     name: "Olivia",
//     review:
//       "Having to see my old dog's portrait made me feel that he was alive again. Such memories can be brought back to life with great sincerity. Thank you.",
//     backgroundColor: "#FED7AA",
//   },
//   {
//     name: "Peter",
//     review:
//       "Such art should never be forgotten. I love what I've received back. The colors are so vibrant that they feel alive. The time and the effort that was spent for my children will never be forgotten.",
//     backgroundColor: "#FED7AA",
//   },
//   {
//     name: "Claire",
//     review:
//       "I'm now debt-free and saving for a home because of your help. Thank you. Dagraw!",
//     backgroundColor: "#FED7AA",
//   },
// ];

// const Page = () => {
//   return (
//     <>
//       <div>about placeholder</div>
//       <Review reviews={reviews} />
//     </>
//   );
// };

// export default Page;

import React from 'react';
import Review from '@/components/Review';

// const review = {
//   name: 'Olivia',
//   review:
//     "Having to see my old dog's portrait made me feel that he was alive again. Such memories can be brought back to life with great sincerity. Thank you.",
//   backgroundColor: '#FED7AA',
// };

const reviews = [
  {
    name: 'Olivia',
    review:
      "Having to see my old dog's portrait made me feel that he was alive again. Such memories can be brought back to life with great sincerity. Thank you.",
    backgroundColor: '#FED7AA',
  },
  {
    name: 'Peter',
    review:
      "Such art should never be forgotten. I love what I've received back. The colors are so vibrant that they feel alive. The time and the effort that was spent for my children will never be forgotten.",
    backgroundColor: '#FED7AA',
  },
  {
    name: 'Claire',
    review:
      "I'm now debt-free and saving for a home because of your help. Thank you. Dagraw!",
    backgroundColor: '#FED7AA',
  },
];
//   {
//     name: "Peter",
//     review:
//       "Such art should never be forgotten. I love what I've received back. The colors are so vibrant that they feel alive. The time and the effort that was spent for my children will never be forgotten.",
//     backgroundColor: "#FED7AA",
//   },
//   {
//     name: "Claire",
//     review:
//       "I'm now debt-free and saving for a home because of your help. Thank you. Dagraw!",
//     backgroundColor: "#FED7AA",
//   },
// ];

const Page = () => {
  return (
    <>
      <h1 className="font-bold text-xl text-gray-400 text-center">
        Client Review
      </h1>
      {reviews.map((review: any) => {
        return (
          <Review
            name={review.name}
            review={review.review}
            backgroundColor={review.backgroundColor}
          />
        );
      })}
    </>
  );
};

export default Page;
