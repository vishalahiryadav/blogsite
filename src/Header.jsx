import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-around items-center"><img src="/images/logo.png" width="100px" alt="" />
    <div className="p-3">
    <Link className="p-2" to="/"><button className="text-white font-semibold text-xl">Home</button></Link>
    <Link className="p-2" to="/blog"><button className="text-white font-semibold text-xl">Blog</button></Link>
    <Link className="p-2" to="/products"><button className="text-white font-semibold text-xl">Products</button></Link>
    </div>
    </div>
  )
}

export default Header
