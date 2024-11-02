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
    <div className="w-full py-2 px-4 bg-transparent flex justify-center">
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
