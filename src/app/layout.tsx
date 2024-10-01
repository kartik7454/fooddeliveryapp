
import type { Metadata } from "next";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/utils/authoptions"
import "./globals.css";
import Link from "next/link";

import LogoutButton from '@/components/logoutButton'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)
  const user = session?.user
  

  
  return (
    <html>
      <body>
        <div>
        <nav className="bg-slate-100 border-gray-200 pt-5 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      
      <span className="self-center text-4xl font-bold whitespace-nowrap font-sans text-red-500  ml-16">Pizzeria</span>
  </a>
  
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
 <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-100 dark:border-gray-700">
  <li><Link href="/dashboard/profile" className="block py-2 px-3 md:p-0 font-bold text-stone-500 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{user?user.name:"username"}</Link></li>
 <li><LogoutButton/> </li>
 <li><a href="/cart" className="block py-2 px-3 font-bold text-stone-500 text-xl md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700   md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cart</a></li>
 </ul>
        
      
      
      
        
      
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-slate-100 text-stone-500 dark:border-gray-700">
      <li>
      <Link href="/home" className="block py-2 px-3 md:p-0 font-bold text-stone-500 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700   md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
      </li>
      <li>
        <Link href="/menu" className="block py-2 px-3 md:p-0 font-bold text-stone-500 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-red-500  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</Link>
      </li>
      <li>
        <Link href="/menu" className="block py-2 px-3 md:p-0 font-bold text-stone-500 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="/menu" className="block py-2 px-3 md:p-0 font-bold text-stone-500 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
      
      
    </ul>
  </div>
  </div>
</nav>
      <aside className=''>
      {children}
      </aside>
      </div>
      </body>
      </html>
    
    
  );
}
