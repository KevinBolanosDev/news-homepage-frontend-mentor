import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";
import ArticleThree from "./ArticleThree";

function ArticlesSidebar() {
  return (
    <div className="flex mx-4 my-14 sm: sm:mx-0 sm:ps-10 sm:w-[940px] lg:ms-5 xl:w-[1005px] xl:ms-[8em]">
      <ul className="flex flex-col sm:w-[1200px] xl:w-[1005px] sm:flex-row gap-10">
        <li>
          <ArticleOne />
        </li>
        <li>
          <ArticleTwo />
        </li>
        <li>
          <ArticleThree />
        </li>
      </ul>
    </div>
  );
}

export default ArticlesSidebar;
