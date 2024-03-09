import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
// import Login from "./Login"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Products from "./Products";
import Blog from "./Blog";

export default function App() {
  return (
    <div className="bg-red-200"> 
      <Router>
      <Header />
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/products" element={<Products />}/>

    </Routes>
     <Footer />
    </Router>
    
    </div>
  )
}
