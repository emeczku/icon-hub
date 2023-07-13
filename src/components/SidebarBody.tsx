import { FC } from 'react'
import { Technology } from '@/types'

interface SidebarBodyProps {
  technology: Technology
}

const SidebarBody: FC<SidebarBodyProps> = ({ technology }) => {
  return (
    <>
      <span className={'ml-5 mt-5'}>HTML Code</span>
      <div className="bg-gray-50 p-5 ml-5 mr-5 mt-3 whitespace-nowrap w-75 overflow-x-auto">
        &lt;img src={technology.image} /&gt;
      </div>
    </>
  )
}

export default SidebarBody
