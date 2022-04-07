
import React from 'react'

const Header = () => {
    return (
        <div className=' p-9 flex w-full justify-between align-baseline'>
            <div className="w-2/12">
                <h1 className="text-2xl font-bold">MEGASTORE</h1>
            </div>
            <div className=" w-96 my-auto">
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
            <div className="w flex  space-x-5 h-7">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
                <img src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/64/000000/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png" />
                <div className='h-full'>
                    <div className='absolute bg-black text-white flex content-center justify-center right-[140px] rounded-full w-4 h-4'>
                        <p className='text-xs'>0</p>
                    </div>
                    <img className='h-full' src="https://img.icons8.com/ios/50/000000/star--v1.png" />
                </div>
                <div>
                    <p >$ 0.00</p>
                </div>
                <div className='h-full'>
                    <div className='absolute bg-black text-white flex content-center justify-center right-7 rounded-full w-4 h-4'>
                        <p className='text-xs'>0</p>
                    </div>
                    <img className='h-full' src="https://img.icons8.com/wired/64/000000/shopping-bag--v1.png" />
                </div>
            </div>
        </div>
    )
}

export { Header }