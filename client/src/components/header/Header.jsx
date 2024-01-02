import logo from '/logo.svg';
import NavBar from './NavBar'

function Header() {
  return (
    <header className='flex justify-between items-center my-6 ms-4 sm:my-12 sm:ms-[10em]  sm:w-[1005px]'>
        <img className='w-12' src={logo} />
        <NavBar />
    </header>
  )
}

export default Header