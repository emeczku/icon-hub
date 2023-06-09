import IconsContainer from '@/components/IconsContainer'
import { technologies } from '@/data/technologies'
import SearchInput from '@/components/SearchInput'

export default function Home() {
  return (
    <>
      <SearchInput />
      <IconsContainer technologies={technologies} />
    </>
  )
}
