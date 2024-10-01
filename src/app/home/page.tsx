

import { getUserSession } from '@/lib/session'
import HomeMenuComponent from "@/components/homemenucomponent"
export default async function Home() {

  const user = await getUserSession()
  return (
<div className="h-screen bg-slate-100">

  <div className="white h-3/5 ml-32 pt-20">
  <div className=" inline">
    <h1 className="text-5xl font-bold font-sans">Everything </h1>
<h1 className="text-5xl font-bold font-sans"> is better </h1>
<h1 className="text-5xl font-bold font-sans ">with a <span className="text-red-500">Pizza</span></h1>
<div className="mt-8 "><h1 className="text-lg font-medium font-sans text-stone-500 ">Pizza is the missing piece that makes every day</h1>
<h1 className="text-lg font-medium font-sans text-stone-500 ">complete. a simple yet delicious joy in life</h1></div>

</div>
<div  className=" absolute top-20 right-64 h-5/6   "><img src="https://www.easypages.url.tw/w3layouts061/assets/images/products/3.jpg" className="h-4/6 inline"></img>
</div>

</div>

  <div><h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic"> Our Best Seller</h1>
  </div>
  
  <div className="h-4/6  bg-slate-100">
 
  <HomeMenuComponent 
id={user.id}
/>
    
  </div>
  <div className="h-3/4 bg-slate-100">
    <div><h1 className='h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic'>About us</h1>
    </div>
    <div><p className="text-lg text-center font-medium font-sans text-stone-500 pl-40 pr-40 leading-loose ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Ornare arcu odio ut sem nulla. Amet aliquam id diam maecenas ultricies. Felis donec et odio pellentesque diam volutpat commodo sed. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Tincidunt tortor aliquam nulla facilisi cras fermentum. Felis eget nunc lobortis mattis aliquam faucibus purus in. Magna ac placerat vestibulum lectus mauris ultrices. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.

</p>
<br></br>
<p className="text-lg text-center font-medium font-sans text-stone-500 pl-40 pr-40 leading-loose ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Ornare arcu odio ut sem nulla. Amet aliquam id diam maecenas ultricies. Felis donec et odio pellentesque diam volutpat commodo sed. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Tincidunt tortor aliquam nulla facilisi cras fermentum. Felis eget nunc lobortis mattis aliquam faucibus purus in. Magna ac placerat vestibulum lectus mauris ultrices. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.

</p>
</div>
  </div>
  <div className="h-3/4 bg-slate-100">
    <div><h1 className='h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic'>Contact us</h1> </div>
    <p className="text-5xl text-center font-medium font-sans text-stone-500  leading-loose underline decoration-solid">+91 887 4882 3483

</p>
  </div>




</div>
    
    
  );
}
