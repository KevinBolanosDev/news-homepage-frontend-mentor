import React from 'react'

function NewsSidebar() {
  return (
    <div className='bg-neutral-veryDarkBlue sm:w-[330px] px-6 pt-6 border-2 border-black'>
        <h2 className='text-2xl md:text-4xl font-bold text-primary-softOrange mb-4 md:mb-8'>New</h2>
        <ul className='text-neutral-offWhite my-4'>
            <li className='border-b-2 border-neutral-darkGrayishBlue mb-4 md:mb-6'>
            <h3 className='hover:text-primary-softOrange font-bold text-base'>Hydrogen VS Electric Cars</h3>
            <p className='text-neutral-darkGrayishBlue text-sm/6 pe-1 my-3 mb-5'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <li className='border-b-2 border-neutral-darkGrayishBlue mb-4 md:mb-6'>
            <h3 className='hover:text-primary-softOrange font-bold text-base'>The Downsides of AI Artistry</h3>
            <p className='text-neutral-darkGrayishBlue text-sm/6 my-3 mb-5'>What are the possible adverse effects of on-demand AI image generation?</p>
            </li>
            <li>
            <h3 className='hover:text-primary-softOrange font-bold text-base'>Is VC Funding Drying Up?</h3>
            <p className='text-neutral-darkGrayishBlue text-sm/6 pe-1 my-3'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </li>
        </ul>
    </div>
  )
}

export default NewsSidebar