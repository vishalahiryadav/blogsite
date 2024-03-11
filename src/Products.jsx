// import { useState } from "react"

function Products() {
// const [whichOne, setWhichOne] = useState();
function handleClick(e){
 console.log(e)
}

  return (
    <div>
      <div className="rounded-md bg-white flex gap-4 p-3" id="products">
       <p onClick={handleClick} className=" font-semibold">INCENSE STICKS</p>
       <p onClick={handleClick} className=" font-semibold">HOLI COLORS</p>
      </div>
     <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>
       <div className="border-slate-950 border-2 rounded-lg shadow-md shadow-slate-500">
          <img className="rounded-md" src="/images/9.jpg" alt="" />
          <div className="p-5 flex justify-center"> 
          <button className="bg-red-600 w-full py-2 px-7 bottom-0 rounded-lg">buy</button>
          </div>
       </div>

     </div>
    </div>
  )
}

export default Products