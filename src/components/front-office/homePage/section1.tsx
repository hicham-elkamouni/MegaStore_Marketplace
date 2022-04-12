import type { NextPage } from 'next'
import ButtonStandart from './buttonStandart'
import image1 from'@/images/image1.jpg'
// import Image from 'next/image'




const Section1: NextPage = () => {



  const styling = {
    backgroundImage: "url(" + `${require("@/images/image1.jpg")}` + ")",
    width:"100%",
    height:"100%"
   }

  return (
    <div className="flex-col items-start" style={styling}>
      <h1>Beauty Inspired by Real Life</h1>
      {/* <Image
      src={image1}
      alt="Picture of the author"
      width="350px"
      height="300px"
    /> */}
      <p>Made using for clean, non-taxuc ingredients, our products are designed for everyone</p>
      <ButtonStandart title="Shop Now"></ButtonStandart>
      </div>
  )
}

export default Section1
