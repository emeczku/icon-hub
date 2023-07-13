'use client'

import { FC, useState } from 'react'
import type { Technology } from '@/types'
import IconBox from '@/components/IconBox'
import Sidebar from '@/components/Sidebar'
import { useDispatch } from 'react-redux'
import { setActiveTechnology } from '@/store/store'

interface IconsContainerProps {
  technologies: Technology[]
}

const IconsContainer: FC<IconsContainerProps> = ({ technologies }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleDrawerOpen = (technology: Technology) => {
    setOpen(true)
    dispatch(setActiveTechnology(technology))
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div
        className={
          'mt-10 flex flex-wrap justify-between gap-y-20 gap-x-10 md:gap-x-5'
        }>
        {technologies.map((technology) => (
          <IconBox
            key={technology.id}
            technology={technology}
            handleClick={handleDrawerOpen}
          />
        ))}
      </div>
      <Sidebar handleClick={handleDrawerClose} isOpen={open} />
    </>
  )
}

export default IconsContainer
