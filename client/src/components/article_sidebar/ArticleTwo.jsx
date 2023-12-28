import React from "react";

function ArticleTwo() {
  return (
    <div className="flex gap-5">
      <img
        className="w-21 h-28"
        src="src\assets\images\image-top-laptops.jpg"
      />
      <div className="flex flex-col justify-around">
        <h2 className="text-2xl text-neutral-grayishBlue font-bold">02</h2>
        <h3 className="text-base font-extrabold text-neutral-veryDarkBlue">Top 10 Laptops of 2022</h3>
        <p className="text-sm text-neutral-darkGrayishBlue w-48">Our best picks for various needs and budgets.</p>
      </div>
    </div>
  );
}

export default ArticleTwo;
