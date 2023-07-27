'use client'

import { FC, useState, SyntheticEvent } from 'react'
import { Technology } from '@/types'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface SidebarBodyProps {
  technology: Technology
}

const SidebarBody: FC<SidebarBodyProps> = ({ technology }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <span className={'ml-5 mt-5'}>HTML Code</span>
      <div className="bg-gray-50 p-5 ml-5 mr-5 mt-3 whitespace-nowrap w-75 overflow-x-auto">
        &lt;img src={technology.image} /&gt;
      </div>
      <span className={'ml-5 mt-5'}>Description</span>
      <p
        onClick={handleClick}
        className="bg-gray-50 p-5 ml-5 mr-5 mt-3 w-75 cursor-pointer">
        {technology.description}
      </p>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={handleClose} sx={{ width: '100%' }}>
          Successful copied text
        </Alert>
      </Snackbar>
    </>
  )
}

export default SidebarBody
