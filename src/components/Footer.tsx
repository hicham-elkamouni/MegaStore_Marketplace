import React from 'react'

function Footer() {
    return (
        <footer className='pt-12 md:pt-24 pb-10 px-2 md:px-5'>
            <div className='flex flex-col lg:flex-row lg:mb-20 '>
                <div className='lg:w-7/12 flex md:flex-row md:justify-around md:space-y-0 space-y-10 flex-col'>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Company</h4>
                        <h5 className='text-sm mb-3'>Find a location nearest you See <a className='underline underline-offset-1 hover:text-gray-700 hover:font-semibold' href='#'>Our Stores</a></h5>
                        <h5 className='text-sm font-semibold '>+33245366446644</h5>
                        <h5 className='text-sm '>helo@megastore.com</h5>
                    </div>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Useful Links</h4>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>New Products</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Best Sellers</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Bundle & Save</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Online Gift Card</a></h5>

                    </div>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Information</h4>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>About Us</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Contact Us</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Delivery Information</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Privacy Policy</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3'><a href='#'>Terms & Conditions</a></h5>

                    </div>

                </div>
                <div className='bg-blue-500 flex-1'>d</div>
            </div>
            <div className='bg-purple-800'>d</div>

        </footer>
    )
}

export { Footer }