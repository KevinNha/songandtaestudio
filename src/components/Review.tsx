import React from "react";

const Review = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-transparent">
      <h1 className="font-bold text-xl text-gray-400">Client Review</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-orange-200 hover:scale-105 duration-300">
          <h3 className="text-sm font-normal">
            "Having to see my old dog's portrait made me feel that he was alive
            again. Such memories can be brought back to life with great
            sincerity. Thank you"
          </h3>
          <p className="italic text-left text-xs font-thin mt-auto pt-3">
            -Olivia
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-orange-200 hover:scale-105 duration-300">
          <h3 className="text-sm font-normal">
            "Such art should never be forgotten. I love what I've received back.
            The coulours are so vibrant that they feel alive. The time and the
            effort that was spent for my children will never be forgotten."
          </h3>
          <p className="italic text-left text-xs font-thin mt-auto pt-3">
            -Peter
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-orange-200 hover:scale-105 duration-300">
          <h3 className="text-sm font-normal">
            "I'm now debt-free and saving for a home because of your help. Thank
            you. Dagraw!"
          </h3>
          <p className="italic text-left text-xs font-thin  mt-auto pt-3">
            -Claire
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
