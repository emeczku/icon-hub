'use client'

import SearchInput from '@/components/SearchInput'
import { useSelector } from 'react-redux'
import { filteredTechnologies } from '@/store/store'
import IconsContainer from '@/components/IconsContainer'

export default function Home() {
  const technologies = useSelector(filteredTechnologies)

  const sortedTechnologies = [...technologies].sort(function (a, b) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })

  return (
    <>
      <SearchInput />
      <IconsContainer technologies={sortedTechnologies} />
    </>
  )
}
