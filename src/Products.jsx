// import { useState } from "react"

function Products() {
// const [whichOne, setWhichOne] = useState();
function handleClick(e){
 console.log(e)
}

  return (
    <div>
      <div className="rounded-md bg-white flex gap-4 p-3">
       <p onClick={handleClick} className="text-red-300 font-semibold">INCENSE STICKS</p>
       <p onClick={handleClick} className="text-red-300 font-semibold">HOLI COLORS</p>
       <p onClick={handleClick} className="text-red-300 font-semibold ">DECOR</p>
      </div>
     <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="border-slate-950 border-2 rounded-lg">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div><div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>
       <div className="border-slate-950 border-r-4 rounded-md">
          <img src="/images/5.jpg" alt="" />
       </div>

     </div>
    </div>
  )
}

export default Products