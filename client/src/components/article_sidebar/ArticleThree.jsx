import React from "react";

function ArticleThree() {
  return (
    <div className="flex gap-5">
      <img
        className="w-21 h-28"
        src="src\assets\images\image-gaming-growth.jpg"
      />
      <div className="flex flex-col justify-around">
      <h2 className="text-2xl text-neutral-grayishBlue font-bold">03</h2>
      <h3 className="text-base font-extrabold text-neutral-veryDarkBlue">The Growth of Gaming</h3>
      <p className="text-sm text-neutral-darkGrayishBlue w-56">How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  );
}

export default ArticleThree;
