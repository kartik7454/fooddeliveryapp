"use client"


import Dsblayout from "../../components/dsblayout";






export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
  
  
  
  return (
    
      
        
      
    <div className="bg-slate-100">
<Dsblayout/>








        <div>{children}</div></div>
        
      
      
    
      
    
    
  );
}
