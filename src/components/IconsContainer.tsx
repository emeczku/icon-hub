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
        'mt-10 flex flex-wrap justify-between gap-y-20 gap-x-10 md:gap-x-5'
      }>
      {technologies.map((technology) => (
        <IconBox key={technology.id} technology={technology} />
      ))}
    </div>
  )
}

export default IconsContainer
