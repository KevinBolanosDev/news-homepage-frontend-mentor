import React from "react";

function ArticleOne() {
  return (
    <div className="flex gap-5">
      <img 
      className="w-21 h-28" src="src\assets\images\image-retro-pcs.jpg" 
    />
      <div className="flex flex-col justify-between">
        <h2 className="text-2xl text-neutral-grayishBlue font-bold">01</h2>
        <h3 className="text-base font-extrabold text-neutral-veryDarkBlue">Reviving Retro PCs</h3>
        <p className="text-sm text-neutral-darkGrayishBlue w-48">What happens when old PCs are given modern upgrades?</p>
      </div>
    </div>
  );
}

export default ArticleOne;
