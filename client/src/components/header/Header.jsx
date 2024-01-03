import logo from '/logo.svg';
import NavBar from './NavBar'

function Header() {
  return (
    <header className='flex justify-between items-center my-6 ms-4 sm:ms-8 sm:my-8 sm:w-[920px] lg:ms-[3em] lg:w-[935px] xl:w-[980px] xl:ms-[10em] xl:my-12'>
        <img className='w-12' src={logo} />
        <NavBar />
    </header>
  )
}

export default Header