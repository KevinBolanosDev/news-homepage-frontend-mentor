import Header from './components/header/Header'
import MainSection from './components/main_section/MainSection'
import NewsSidebar from './components/news_sidebar/NewsSidebar'
import ArticleSidebar from './components/article_sidebar/ArticleSidebar'

import './App.css'

function App() {

  return (
    <>
    <div>
      <Header />
      <div className='flex flex-wrap mx-4 sm:mx-6 sm:px-2 sm:w-[940px] sm:flex-nowrap sm:gap-3 lg:ms-[3em] xl:w-[1005px] xl:ms-[10em]'>
      <MainSection />
      <NewsSidebar />
      </div>
      <ArticleSidebar />
    </div>
    </>
  )
}

export default App
