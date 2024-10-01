import { FC } from 'react'
import Link from 'next/link'

interface ordersProps {
  orders:Orders[]
}
 async function delay(){ await new Promise(resolve=>setTimeout(resolve,0))}
const Orders: FC<ordersProps> = async({orders}) => {
 await delay()
  return (<div>{
    (orders.toReversed().map(async(item)=>{ 
     
       function convertDateFormat(isoString: string): string {
         const date = new Date(isoString);
       
         // Format the date as desired
         const options: Intl.DateTimeFormatOptions = {
           year: 'numeric',
           month: 'long',
           day: 'numeric',
           hour: 'numeric',
           minute: 'numeric',
           second: 'numeric',
           // Adjust time zone display as needed
         };
       
         const formattedDate = date.toLocaleDateString('en-US', options);
       
         return formattedDate;
       }
       
       // Example usage:
       const isoString ="" ;
       const formattedDate = convertDateFormat(isoString);
       console.log(formattedDate); // Output: August 7, 2024, 3:22 PM EDT (or equivalent based on your time zone)
     
       return(
 
         
       <div className='bg-slate-200  h-32 mb-10  rounded-lg pt-5 '>
         
       <div className=' '>
         <button type="button"  className="text-grey-700   w-28 ml-7 focus:ring-4 focus:ring-blue-300  rounded-lg   px-5 py-2.5 me-2 mb-2 dark:bg-slate-200 border-2  border-black focus:outline-none  text-base font-medium font-sans">{item.status}</button>
      
       <h1 className='inline-block w-96 m-5  font-semibold  text-xl'>{item.name}</h1>
     <h1 className='inline-block w0 m-5 '>{formattedDate}</h1>
    <Link href={"orders/"+item._id} ><button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 pr-5 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-blue-800">view</button></Link> 
     <h1 className='ml-44'>{item.cartitem[0].title}</h1>
     
     </div>
    
     </div> )}))}</div>)
}

export default Orders