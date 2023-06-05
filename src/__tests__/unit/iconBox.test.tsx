import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import type { Technology } from '@/types'
import IconBox from '@/components/IconBox'

describe('icon box', () => {
  test('renders icon box with provided props', () => {
    const props: Technology = {
      name: 'JavaScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description:
        'JavaScript is a high-level, interpreted programming language that is primarily used for creating interactive and dynamic elements on websites. It is often referred to as the language of the web because it is supported by all major web browsers and enables the creation of dynamic web pages.',
      category: 'Front-end',
    }

    const { getByText, getByAltText } = render(<IconBox technology={props} />)

    const nameElement = getByText(props.name)
    const imageElement = getByAltText(props.name)

    expect(nameElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
  })
})
