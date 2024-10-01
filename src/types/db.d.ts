
interface Session {
 user:{name: string
      email: string
      image: string
      phonenumber:number
      admin:boolean
      id: string
      postalcode:Number
      address:string}
  
  }
  interface Session1 {
    name: any
         email: aany
         image: any
         phonenumber:any
         admin:amy
         id: any
         postalcode:any
         address:any
     
     }
interface Menuitem {
 
  _id:string
    title: string
    discription: string
    image: string
    price:number
    type:string
    file:file|null
    size:{
      name: string,
      price: number} []
   extraIngredientPrices: {
    name: string,
    price: number}[]
  }
  
  interface Cartitem {
 _id:string
    key:string
      title: string
      discription: string
      image: string
      price:number
      type:string
      file:file|null
      size:{
        name: string
        price: number} []
     extraIngredientPrices: {
      name: string,
      price: number}[]
      total:number
    }

    interface User {
      name: string
      email: string
      image: string
      phonenumber:number
      admin:boolean
      id: string
      postalcode:number
      address:string
    }


    
    interface Orders{
      _id:String
      email: String
      name:string
      phonenumber: number
      address: string
      postalCode: number
      status: String
     
      cartitem: {
        
      _id:string
        key:String
        title :String
        discription:String
       image:String
       price:Number
       type:String
       size:{
        name: String
        price: Number
      }
       extraIngredientPrices: {
        name: String
        price: Number
      }[]
        total:Number
      }[]
      
    }