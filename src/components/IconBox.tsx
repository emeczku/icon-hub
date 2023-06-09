import { FC } from 'react'
import type { Technology } from '@/types'
import Image from 'next/image'

interface IconBoxProps {
  technology: Technology
}

const IconBox: FC<IconBoxProps> = ({ technology }) => {
  return (
    <div
      className={
        'icon-box w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'
      }>
      <Image
        className={
          'object-cover m-aut rounded-t-xl mr-auto ml-auto bg-transparent mt-10 mb-10'
        }
        width={60}
        height={60}
        src={technology.image}
        alt={technology.name}
      />
      <div className={'px-4 py-3 w-60'}>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {technology.name}
        </p>
      </div>
    </div>
  )
}

export default IconBox
