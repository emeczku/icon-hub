/// <reference types="cypress" />

import { technologies } from '@/data/technologies'

describe('home view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('renders all icon boxes from data file with correct names', () => {
    cy.get('.icon-box').should('have.length', technologies.length)

    technologies.forEach((item, index) => {
      cy.get('.icon-box')
        .eq(index)
        .should('have.text', technologies[index].name)
    })
  })

  it('can search for the corresponding icon box', () => {
    const searchingIcon = 'React'

    cy.get('[data-test=search-for-icon]').type(`${searchingIcon}{enter}`)

    cy.get('.icon-box')
      .should('have.length', 1)
      .first()
      .should('have.text', searchingIcon)
  })

  it('returns error text if the technology is not found', () => {
    const searchingIcon = 'test'

    cy.get('[data-test=search-for-icon]').type(`${searchingIcon}{enter}`)

    cy.get('.icon-box').should('have.length', 0)

    cy.contains('Item not found')
  })

  it('opens modal on click icon box', () => {
    cy.get('.dialog').should('not.be.visible')

    cy.get('.icon-box').first().click()

    cy.get('.dialog').should('be.visible')
    cy.contains(technologies[0].description)
  })
})
