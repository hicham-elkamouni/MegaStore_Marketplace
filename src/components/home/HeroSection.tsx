
import Image from "next/image";
import { useEffect, useRef } from "react";

function HeroSection() {


    return (
        <>
        <div className="flex h-screen justify-between pt-20 bg-gray-50">
            <div className=" h-full w-1/2 flex flex-col justify-center items-center text-gray-700 ">
                <h1 className="font-great-vibes text-4xl font-bold mb-4">MegaStore MarketPlace</h1>
                <h2 className="text-5xl font-semibold text-gray-700 tracking-wider mb-4">Sell what ever you want</h2>
                <h2 className="text-5xl font-semibold text-gray-700 tracking-wider mb-12">When ever you want</h2>   
                <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-black">Start Now</button>             
            </div>
            <div className=" flex justify-center items-center">
                <img className="" src="/img/marketPlace.png" alt="" />
            </div>
        </div>
        <div>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        <h1 className="font-great-vibes text-4xl font-bold">MegaStore MarketPlace</h1>
        </div>
        </>
    )
}

export { HeroSection }