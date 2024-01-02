import Header from './components/header/Header'
import MainSection from './components/main_section/MainSection'
import NewsSidebar from './components/news_sidebar/NewsSidebar'
import ArticleSidebar from './components/article_sidebar/ArticleSidebar'

import './App.css'

function App() {

  return (
    <>
    <div className='container sm:p-6'>
      <Header />
      <div className='flex flex-wrap mx-4 sm:ms-[10em] sm:w-[1005px] sm:flex-nowrap sm:gap-3'>
      <MainSection />
      <NewsSidebar />
      </div>
      <ArticleSidebar />
    </div>
    </>
  )
}

export default App
