import { Carousel } from "flowbite-react"

function HeroSection() {
  return (
    // <div className="vishal flex flex-nowrap overflow-x-scroll h-[500px] w-screen">
    //     <img className="p-3" src="/images/1.jpg" alt="" />
    //     <img className="p-3" src="/images/2.jpg" alt="" />
    //     <img className="p-3" src="/images/3.jpg" alt="" />

    // </div>

    <div className="h-56 sm:h-64 xl:h-[700px] 2xl:h-[600px] mt-40">
      <Carousel>
        <img  className="object-none" src="/images/a.svg" alt="..." />
        <img src="/images/b.svg" alt="..." />
        <img  src="/images/c.svg" alt="..." />
        <img className="object-none" src="/images/z.png" alt="..." />

      </Carousel>
    </div>


  ) 
}

export default HeroSection