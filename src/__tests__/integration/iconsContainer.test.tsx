import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import IconsContainer from '@/components/IconsContainer'
import { technologies } from '@/data/technologies'
import type { Technology } from '@/types'

describe('icons container', () => {
  test('renders the container with the provided technologies from the data file', () => {
    render(
      <IconsContainer
        data-testid={'icons-container'}
        technologies={technologies}
      />
    )

    const container = screen.getByTestId('icons-container')

    expect(container).toBeInTheDocument()

    technologies.forEach((item: Technology) => {
      const technologyName = screen.getByText(item.name)
      const technologyImage = screen.getByAltText(item.name)

      expect(technologyName).toBeInTheDocument()
      expect(technologyImage).toBeInTheDocument()
    })
  })
})
