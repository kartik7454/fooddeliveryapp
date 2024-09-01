"use client"
import { FC } from 'react'
import Link from 'next/link'

interface ordersProps {

}
 async function delay(){ await new Promise(resolve=>setTimeout(resolve,0))}
const Test: FC<ordersProps> = async({}) => {
 await delay()
  return (<div>hi</div>)
}

export default Test