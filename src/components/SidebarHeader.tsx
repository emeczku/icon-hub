import { FC } from 'react'
import EastIcon from '@mui/icons-material/East'
import { Technology } from '@/types'

interface SidebarHeaderProps {
  handleClick: () => void
  technology: Technology
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ handleClick, technology }) => {
  return (
    <div
      className={
        'flex justify-between px-4 py-3 bg-white border-solid border-b-2 border-b-black-100'
      }>
      <span
        className={'text-lg font-bold text-black truncate block capitalize'}>
        {technology.name}
      </span>
      <button onClick={handleClick}>
        <EastIcon />
      </button>
    </div>
  )
}

export default SidebarHeader
