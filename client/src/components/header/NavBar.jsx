import React from 'react'

function NavBar() {
  return (
    <div className='hidden sm:flex'>
        <ul className='flex sm:gap-8 text-neutral-darkGrayishBlue'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>New</a>
            </li>
            <li>
              <a href='#'>popular</a>
            </li>
            <li>
              <a href='#'>Trending</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar