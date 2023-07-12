import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test } from 'vitest'
import SearchInput from '@/components/SearchInput'
import IconsContainer from '@/components/IconsContainer'
import ReduxProvider from '@/components/ReduxProvider'
import { technologies } from '@/data/technologies'

describe('search input', () => {
  const { container } = render(
    <ReduxProvider>
      <SearchInput data-testid="search-input" />
      <IconsContainer technologies={technologies} />
    </ReduxProvider>
  )

  const searchInput = screen.getByRole('textbox')

  test('renders search input', () => {
    expect(searchInput).toBeInTheDocument()
  })

  test('looks for a special icon', () => {
    userEvent.type(searchInput, 'HTML')

    const box = screen.findByText('HTML')

    waitFor(() => expect(box).toBeInTheDocument())
  })

  test('checks if the length of the icon boxes has changed', () => {
    let iconBoxes = container.querySelectorAll('.icon-box')

    waitFor(() => expect(iconBoxes.length).toBe(technologies.length))

    userEvent.type(searchInput, 'HTML')

    iconBoxes = container.querySelectorAll('.icon-box')

    waitFor(() => expect(iconBoxes.length).toBe(1))
  })

  test('renders the error text for the failed lookup value', () => {
    const iconBoxes = container.querySelectorAll('.icon-box')

    userEvent.type(searchInput, 'test')

    expect(iconBoxes.length).toBe(0)
  })
})
