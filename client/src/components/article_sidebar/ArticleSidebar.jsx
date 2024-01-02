import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";
import ArticleThree from "./ArticleThree";

function ArticlesSidebar() {
  return (
    <div className="flex mx-4 my-14 sm:ms-[10em] sm:w-[1005px]">
      <ul className="flex flex-col sm:w-[1005px] sm:flex-row gap-10">
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
