import { FC } from 'react'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
interface loadingProps {}

const Loading: FC<loadingProps> = ({}) => {
  return (
<div className='flex flex-col h-full items-center'>
    <h1 className='h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10 mb-10'>loading...</h1>
    </div>
  )
}

export default Loading