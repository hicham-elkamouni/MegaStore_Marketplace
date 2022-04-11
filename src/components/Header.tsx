
import { useEffect, useRef } from 'react'
import Headroom from "headroom.js";

const Header = () => {

    useEffect(() => {
        let headroom = new Headroom(document.getElementById("headroom") as Node);
        // initialise
        headroom.init();
    });

    const sideBar = useRef<HTMLDivElement>(null);

    const openSideBar = () => {
        // show sideBare
        if (sideBar.current) {
            sideBar.current.style.display = "flex";
        }
    };
    const closeSideBar = () => {
        // hide sideBare
        if (sideBar.current) {
            sideBar.current.style.display = "none";
        }
    };

    return (

        <header >
            {/* navbar */}
            <div id='headroom' className='p-9 flex w-full justify-between align-baseline z-50'>
                <div onClick={openSideBar} className='md:hidden h-7 cursor-pointer'>
                    <img className='h-full' src="https://img.icons8.com/ios-glyphs/90/000000/menu--v1.png" />
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold tracking-wider text-gray-700">MEGASTORE</h1>
                </div>
                <div className=" w-96 my-auto md:block hidden">
                    <ul className="flex  mt-4  md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className='flex items-center space-x-2 text-gray-600'>
                            <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">HOME</a>
                            <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
                        </li>
                        <li className='flex items-center space-x-1 text-gray-600'>
                            <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">SHOP</a>
                            <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
                        </li>
                        <li className='flex items-center space-x-1 text-gray-600'>
                            <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">ABOUT</a>
                            <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
                        </li>
                        <li className='flex items-center space-x-1 text-gray-600'>
                            <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm " aria-current="page">CONTACT</a>
                            <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-down.png" />
                        </li>
                    </ul>
                </div>
                <div className="flex  space-x-5 h-7">
                    <img className='cursor-pointer' src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
                    <div className=" space-x-5 h-7 md:flex hidden" >

                        <img className='cursor-pointer' src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/64/000000/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" />
                        <div className='h-full cursor-pointer'>
                            <div className='absolute bg-black text-white flex content-center justify-center right-[140px] rounded-full w-4 h-4'>
                                <p className='text-xs'>0</p>
                            </div>
                            <img className='h-full' src="https://img.icons8.com/ios/50/000000/star--v1.png" />
                        </div>
                        <div className='cursor-pointer' >
                            <p >$ 0.00</p>
                        </div>
                        <div className='h-full cursor-pointer'>
                            <div className='absolute bg-black text-white flex content-center justify-center right-7 rounded-full w-4 h-4'>
                                <p className='text-xs'>0</p>
                            </div>
                            <img className='h-full' src="https://img.icons8.com/wired/64/000000/shopping-bag--v1.png" />
                        </div>
                    </div>
                </div>
            </div>
            {/* sideBar */}
            <div ref={sideBar} className='hidden fixed w-full h-full z-50'>
                <div className='bg-white p-10  h-full w-[400px]'>
                    <div className='flex justify-between'>
                        <div></div>
                        <h1 className="text-2xl font-bold">MEGASTORE</h1>
                        <div onClick={closeSideBar} className='my-auto cursor-pointer'>
                            <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" />
                        </div>
                    </div>
                    <div className='mt-12 h-[90%]'>
                        <ul className="flex flex-col mt-4 px-6  ">
                            <li className='flex items-center justify-between text-gray-600'>
                                <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">HOME</a>
                                <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-right.png" />
                            </li>
                            <li className='flex items-center justify-between text-gray-600'>
                                <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">SHOP</a>
                                <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-right.png" />
                            </li>
                            <li className='flex items-center justify-between text-gray-600'>
                                <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm" aria-current="page">ABOUT</a>
                                <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-right.png" />
                            </li>
                            <li className='flex items-center justify-between text-gray-600'>
                                <a href="#" className="py-2 pr-4 pl-3 md:p-0 text-sm " aria-current="page">CONTACT</a>
                                <img width={10} src="https://img.icons8.com/ios-glyphs/30/000000/sort-right.png" />
                            </li>
                        </ul>
                    </div>
                    <div className='bottom-0'>© 2021 MegaStore.
                        All rights reserved.</div>
                </div>
                <div className='flex-1 z-40 h-full opacity-70 bg-black '>

                </div>
            </div>
        </header>
    )
}

export { Header }