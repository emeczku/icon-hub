import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import SearchInput from '@/components/SearchInput'
import IconsContainer from '@/components/IconsContainer'
import { technologies } from '@/data/technologies'

let searchingIcon: string

describe('search input', () => {
  const { getByTestId, getByText, container } = render(
    <>
      <SearchInput data-testid="search-input" />
      <IconsContainer technologies={technologies} />
    </>
  )

  const searchInput = getByTestId('search-input')
  const iconBoxes = container.getElementsByClassName('icon-box')

  test('renders search input', () => {
    expect(SearchInput).toBeInTheDocument()
  })

  test('looks for a special icon', () => {
    searchingIcon = 'React'

    userEvent.type(searchInput, searchingIcon)

    const icon = getByText(searchingIcon)

    expect(icon).toBeInTheDocument()
    expect(iconBoxes).toBe(1)
  })

  test('checks if the length of the icon boxes has changed', () => {
    searchingIcon = 'React'

    expect(iconBoxes).toBe(technologies.length)

    userEvent.type(searchInput, searchingIcon)

    expect(iconBoxes).toBe(1)
  })

  test('renders the error text for the failed lookup value', () => {
    searchingIcon = 'test'

    userEvent.type(searchInput, searchingIcon)

    expect(iconBoxes).toBe(0)
  })
})
