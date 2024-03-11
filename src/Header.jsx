// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="fixed z-10 top-0 bg-white">
    <div className="flex w-screen justify-between items-center px-8 py-2 " id="home"><img src="/images/jalvayu.svg" width="100px" alt="" />
      <div className="px-3 py-6">
        <a href="#home" className="p-2"><button className="text-gray-900 font-semibold text-xl ">Home</button></a>
        <a href="#products" className="p-2"><button className="text-gray-900 font-semibold text-xl">Products</button></a>
        <a href="#blog" className="p-2"><button className="text-gray-900 font-semibold text-xl">Blog</button></a>
        <a href="#contect" className="p-2"><button className="text-gray-900 font-semibold text-xl">Contect</button></a>
      {/* <p className="font-sans">Home</p> */}
      </div>
    </div>
    </div>
  )
}

export default Header
