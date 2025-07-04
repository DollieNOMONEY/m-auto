'use client'
import { useState } from 'react'
// import Image from 'next/image'
// import Logo from '@/img/icons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {

    const [menuOpened, setMenuOpened] = useState(false);
    function openMenu() {
        setMenuOpened(!menuOpened);
        // if (menuOpened == true) {
        //     document.body.style.overflow = "hidden";
        // }
        // else {
        //     document.body.style.overflow = "";
        // }
    }

  return (
    <nav className='w-full sticky top-0 z-100'>  {/* h-dvh  */}
    
        <div className='flex flex-col justify-between'> {/* h-dvh  */}
            <div className='w-full'>
                <div className='relative flex justify-start lg:justify-between align-middle py-5 px-4 bg-black z-20'>
                    <div className='flex gap-5 md:w-3/6'>
                        <button onClick={openMenu} className='text-2xl opacity-75 lg:hidden text-white'>☰</button>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase text-white'>Home</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase text-white'>Vehicles</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase text-white'>About</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase text-white'>Contact</a>
                        </div>
                    </div>
                    {/* <Image
                        src={Logo}
                        alt="Precious"
                        width={100}
                        className='object-contain'
                    /> */}
                    <h1 className='text-white font-bold uppercase text-nowrap text-xl absolute left-1/2 -translate-x-1/2'>h Auto</h1>
                   <div className='flex gap-5 md:w-3/6 md:justify-end md:gap-5'>
                        <span className=' hidden md:inline'>
                            <FontAwesomeIcon icon={faSearch} color='white'/>
                        </span>
                   </div>
                </div>
               { menuOpened && (
                <div className='absolute top-0 left-0 w-full h-dvh'>
                    <div className='flex flex-col justify-between fixed bg-black top-0 left-0 w-full z-10'>
                        <div>
                            <div className='mb-20'/>
                            <input 
                            placeholder='SEARCH'
                            className='w-full p-2 border-b-2 opacity-35 outline-0 outline-transparent text-xs text-white'
                            />
                            <div className='w-full p-3 uppercase text-sm font-[outfit] text-white'>Home</div>
                            <div className='w-full p-3 uppercase text-sm font-[outfit] text-white'>Vehicles</div>
                            <div className='w-full p-3 uppercase text-sm font-[outfit] text-white'>About</div>
                            <div className='w-full p-3 uppercase text-sm font-[outfit] text-white'>Contact</div>
                            {/* <div className='w-full p-3 uppercase text-xs font-[outfit]'>Account</div> */}
                        </div>
                    </div>
                </div>

               ) }
            </div>

            {/* { menuOpened && (
                
            )} */}
        </div>

    </nav>
  )
}
