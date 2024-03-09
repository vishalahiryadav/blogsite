// import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-4"><img src="/images/jalvayu.svg" width="100px" alt="" />
    <div className="px-3 py-6">
    <a href="#section1">footer</a>
    <a href="#section2">Slider</a>

    {/* <Link className="p-2" to="/"><button className="text-gray-900 font-semibold text-xl">Home</button></Link> */}
    {/* <Link classNameName="p-2" to="/blog"><button className="text-gray-900 font-semibold text-xl">Blog</button></Link> */}
    {/* <Link className="p-2" to="/products"><button className="text-gray-900 font-semibold text-xl">Products</button></Link> */}
    {/* <Link className="p-2" to="/products"><button className="text-gray-900 font-semibold text-xl">Contect Us</button></Link> */}
    </div>
    </div>

  )
}

export default Header
