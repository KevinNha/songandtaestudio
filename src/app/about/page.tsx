import React from "react";
import Review from "@/components/Review";

const reviews = [
  {
    name: "Olivia",
    review:
      "Having to see my old dog's portrait made me feel that he was alive again. Such memories can be brought back to life with great sincerity. Thank you.",
    backgroundColor: "#FED7AA",
  },
  {
    name: "Peter",
    review:
      "Such art should never be forgotten. I love what I've received back. The colors are so vibrant that they feel alive. The time and the effort that was spent for my children will never be forgotten.",
    backgroundColor: "#FED7AA",
  },
  {
    name: "Claire",
    review:
      "I'm now debt-free and saving for a home because of your help. Thank you. Dagraw!",
    backgroundColor: "#FED7AA",
  },
];

const Page = () => {
  return (
    <>
      <div>about placeholder</div>
      <Review reviews={reviews} />
    </>
  );
};

export default Page;
