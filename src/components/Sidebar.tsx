import { FC } from 'react'
import { useSelector } from 'react-redux'
import { activeTechnology } from '@/store/store'
import Drawer from '@mui/material/Drawer'
import SidebarHeader from './SidebarHeader'
import SidebarBody from './SidebarBody'

interface SidebarProps {
  handleClick: () => void
  isOpen: boolean | undefined
}

const Sidebar: FC<SidebarProps> = ({ handleClick, isOpen }) => {
  const technology = useSelector(activeTechnology)

  return (
    <Drawer
      sx={{
        width: 350,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 350,
        },
      }}
      variant="persistent"
      anchor="right"
      open={isOpen && technology.name !== ''}>
      <SidebarHeader technology={technology} handleClick={handleClick} />
      <SidebarBody technology={technology} />
    </Drawer>
  )
}

export default Sidebar
