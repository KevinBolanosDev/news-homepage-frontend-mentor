import logo from '/logo.svg';
import NavBar from './NavBar'

function Header() {
  return (
    <header className='flex justify-between items-center my-12 w-[1005px]'>
        <img className='w-12' src={logo} />
        <NavBar />
    </header>
  )
}

export default Header