  import { FC } from 'react'
import { useState,useEffect } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { getUserSession } from '@/lib/session'
interface addtocartdivProps {
  
    menuitems:Menuitem|undefined
    id:string|undefined
    setvisi:Function
}

const Addtocartdiv: FC<addtocartdivProps> = ({menuitems,id,setvisi}) => {
 
 const [cartitemtotal, setcartitemtotal] = useState<number>(menuitems?.size[0].price||0)
  const [cartitem, setcartitem] = useState<Cartitem>({
    _id:"",
    key:id||"",
title: menuitems?.title||"",
discription:menuitems?.discription|| "",
image:menuitems?.image|| "",
price:menuitems?.price|| 0,
type:menuitems?.type|| "",
file:null,
size: menuitems?.size|| [{name:"",price:0}] ,
extraIngredientPrices:  [],
total:0
})
 

 useEffect(() => {
    
  let arr: number[] = [];
  cartitem.extraIngredientPrices.map((item)=>{arr.push(item.price)     })
  arr.push(cartitem.size[0].price)
  arr.reduce(myFunc)
  function myFunc(total, num) {
    return total+num ;
  }
setcartitemtotal(arr.reduce(myFunc))



}, [cartitem])

useEffect(() => {
    
  setcartitem((prevState)=>{
    return{
        ...prevState,
        total: cartitemtotal
    }
})
  



}, [cartitemtotal])

 async function handelclick1(e:any){
  
  const [userId1, userId2] = e.target.value.split('_')

     setcartitem((prevState)=>{
                    return{
                        ...prevState,
                        size:[{name:userId1,price:Number(userId2)}] 
                    }
                })              
          }
  async function handelclick2(e:any){
  
if(e.target.checked){
const [userId1, userId2] = e.target.value.split('_')
setcartitem(  (prevState)=>{
            return{
                ...prevState,
                extraIngredientPrices:[ ...prevState.extraIngredientPrices,{name:userId1,price:Number(userId2)}] 
            }
    })}

        else{ const [userId1, userId2] = e.target.value.split('_')
         const ext =   cartitem.extraIngredientPrices.filter((item)=>{return item.name != userId1})
          
            setcartitem((prevState)=>{
            return{
                ...prevState,
                extraIngredientPrices:ext 
            }
        })
        }
        
        

       
       
      
      }






  return(<div   className="bg-slate-100 rounded-xl min-h-fit w-1/3 my-10 ml-14 mb-11 fixed left-96 top-5  pb-9 pt-9 border-2 border-red-500" >

    
<div className='  mb-5 '> <img className='h-48 w-96 object-cover ml-10 rounded-xl' src={"/images/"+menuitems?.image}></img>
    <h1 className='mb-1  mt-5 text-xl font-bold font-sans text-center'>{menuitems?.title}</h1>
    <h1 className='mb-1 mt-1 text-center mx-5 text-base font-medium font-sans'>{menuitems?.discription}</h1>
   
    <div className='mb-1 mt-1 inline-block ml-14 mr-5 '>
       <h1 className='mb-1 mt-1 text-red-500 text-lg font-semibold font-sans '> size</h1>
      <select onChange={async(e)=>{handelclick1(e)}}> 
              
              
              {menuitems?.size.map((item)=>{
      return(

<option className='text-base font-medium font-sans' value={item.name+"_"+item.price} >{item.name + " ($"+item.price +")"}</option>
        
        
      )
    })}</select></div>


<div className='mb-1 mt- inline-block'>
  <h1 className='mb-1 mt-1 text-red-500 text-lg font-semibold font-sans '>extras</h1>
  
  {menuitems?.extraIngredientPrices.map((item)=>{
      return(<div className='mb-1 mt-1'>
        <input value={item.name+"_"+item.price}type="checkbox" onChange={async (e)=>{  await handelclick2(e);

       
        }}/>
        <h1 className='inline mb-1 mt-1 text-base font-medium font-sans ml-2'  >{item.name + " ($"+item.price +")"}</h1>
      </div>)
    })}</div></div>
   

    <div className='w-full mb-1 mt-1'> <button type='button'   onClick ={ async()=> {
      
         console.log(cartitem)
const response = await fetch('/addtocart',{
  method:"POST",
  body :  JSON.stringify(cartitem ) //convert to json from object
  
})    
const json = await response.json()
if (!response.ok){
console.log(json.error)


}
if (response.ok){
  setvisi(true)
  
}

    }} className=' h-10 w-11/12 focus:outline-none ml-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-sm px-5  me-2  dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-900'>add to cart  $ {cartitemtotal}
    </button></div>
    <button type='button'  onClick={()=>{setvisi()}}   className=' h-10 w-11/12 focus:outline-none ml-4 mt-3 text-black focus:ring-4 focus:ring-red-300  rounded-3xl  px-5  me-2  text-lg font-bold font-sans  '>Cancel
 </button>
 
  </div>
  
) 

}

export default Addtocartdiv