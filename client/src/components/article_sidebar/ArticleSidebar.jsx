import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";
import ArticleThree from "./ArticleThree";

function ArticlesSidebar() {
  return (
    <div className="flex justify-center my-14 w-[350px] sm:w-[1005px]">
      <ul className="flex flex-col w-[330px] sm:w-[1005px] sm:flex-row gap-10">
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
