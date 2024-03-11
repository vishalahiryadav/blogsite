import SinglBlog from "./SinglBlog"
import { getDatabase, ref, child, get } from "firebase/database";


const dbRef = ref(getDatabase());
get(child(dbRef, `users/${1}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

function Blog() {
  return (
    <div id="blog">
      <div className="p-5 text-center">
        <h3 className="p-4 font-semibold text-xl">RECYCLE MANAGEMENT FROM TEMPLE</h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
        <img className="mx-auto rounded-xl" src="/images/9.jpg" width="300px" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed debitis non ducimus maiores neque deleniti id voluptatem similique excepturi autem voluptates et veritatis, quisquam eos? Optio eum obcaecati maxime expedita a iste dolore sunt ex nisi corporis nemo ut ipsum maiores debitis quod sint, itaque explicabo quia asperiores beatae porro alias consectetur? Tenetur, sequi dolorem dolor eum sit cupiditate incidunt vel soluta explicabo ducimus molestias fugiat suscipit!</p>
    </div></div>
<SinglBlog />

    </div>
  )
}

export default Blog