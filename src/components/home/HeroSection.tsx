
import Image from "next/image";
import { useEffect, useRef } from "react";

function HeroSection() {


    return (
        <div className="flex h-screen justify-center lg:justify-between pt-20 bg-gray-50">
            <div className=" h-full lg:w-1/2 flex flex-col justify-center items-center ">
                {/* background image */}
                <img className="absolute z-0 lg:hidden blur-md" src="/img/marketPlace.png" alt="" />
                {/* heading */}
                <div className="flex flex-col z-10 justify-center items-center text-center lg:text-gray-700">
                    <h1 className="font-great-vibes z-10 text-1xl md:text-2xl lg:text-3xl font-bold mb-4">MegaStore MarketPlace</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mb-4">Sell what ever you want</h2>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mb-12">When ever you want</h2>
                </div>
                {/* button */}
                <button className="bg-gray-700 z-10 text-white px-6 py-3 rounded hover:bg-black transition-colors duration-200">Start Now</button>
            </div>
            {/* left image */}
            <div className=" hidden lg:flex justify-center items-center">
                <img className="" src="/img/marketPlace.png" alt="" />
            </div>
        </div>
    )
}

export { HeroSection }