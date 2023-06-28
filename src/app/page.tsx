'use client'

import SearchInput from '@/components/SearchInput'
import { useSelector } from 'react-redux'
import { filteredTechnologies } from '@/store/store'
import IconsContainer from '@/components/IconsContainer'

export default function Home() {
  const technologies = useSelector(filteredTechnologies)

  return (
    <>
      <SearchInput />
      <IconsContainer technologies={technologies} />
    </>
  )
}
