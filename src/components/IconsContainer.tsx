import { FC } from 'react'
import type { Technology } from '@/types'
import IconBox from '@/components/IconBox'

interface IconsContainerProps {
  technologies: Technology[]
}

const IconsContainer: FC<IconsContainerProps> = ({ technologies }) => {
  return (
    <div
      className={
        'w-fit mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-5 mt-10 mb-5'
      }>
      {technologies.map((technology) => (
        <IconBox key={technology.id} technology={technology} />
      ))}
    </div>
  )
}

export default IconsContainer
