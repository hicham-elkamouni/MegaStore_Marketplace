
function Footer() {
    return (
        <footer className='pt-12 md:pt-24 pb-10 px-5 sm:px-10 md:px-24 lg:px-32'>
            <div className='flex flex-col space-y-8 lg:flex-row lg:space-y-0 md:mb-20 mb-10'>
                <div className='lg:w-7/12 flex md:flex-row md:justify-between md:space-y-0 space-y-10 flex-col'>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Company</h4>
                        <h5 className='text-sm mb-3 text-gray-600 leading-7'>Find a location nearest you See <a className='underline underline-offset-1 hover:text-gray-700 hover:font-semibold' href='#'>Our Stores</a></h5>
                        <h5 className='text-sm font-semibold mb-2'>+33245366446644</h5>
                        <h5 className='text-sm text-gray-600'>helo@megastore.com</h5>
                    </div>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Useful Links</h4>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>New Products</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Best Sellers</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Bundle & Save</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Online Gift Card</a></h5>

                    </div>
                    <div className='md:w-44'>
                        <h4 className='font-semibold text-lg mb-3'>Information</h4>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>About Us</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Contact Us</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Delivery Information</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Privacy Policy</a></h5>
                        <h5 className='text-sm hover:underline hover:font-semibold underline-offset-1 mb-3 text-gray-600'><a href='#'>Terms & Conditions</a></h5>
                    </div>

                </div>
                <div className=' flex-1'>
                    <h3 className='font-semibold tracking-wide text-3xl mb-4'>Good emails</h3>
                    <p className='text-sm text-gray-600 mb-10'>Enter your email below to be the first to know about new collections and product launches</p>
                    <div className='flex '>
                        <input className=' flex-1 border-2 p-2 rounded-l-sm focus:outline-none focus:border-gray-400 focus:drop-shadow-lg' type='text' placeholder='Enter your email' />
                        <button className='bg-gray-700 text-white px-6 rounded-r-sm hover:bg-black transition-colors duration-200'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-between  '>
                <div className='flex items-center mb-5'>
                    <div className='flex items-center text-gray-600 text-xs mr-4'><img className='w-3 h-3 mr-1' src="https://img.icons8.com/metro/26/000000/copyright.png" /><h5>MegaStore 2022</h5></div>
                    <div className='flex space-x-4 h-5'>
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" />
                        <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/youtube-play.png" />
                    </div>
                </div>
                <div className="lg:order-none order-first lg:w-fit w-full mb-5 text-center" >
                    <h1 className="text-4xl font-bold tracking-wider text-gray-700">MEGASTORE</h1>
                </div>
                <div className="flex items-center mb-5">
                    <img src="/img/icon-pay.png" alt="" />
                </div>
            </div>

        </footer>
    )
}

export { Footer }