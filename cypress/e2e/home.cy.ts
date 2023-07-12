/// <reference types="cypress" />

import { technologies } from '../../src/data/technologies'

describe('home view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('renders all icon boxes from data file', () => {
    cy.get('.icon-box').should('have.length', technologies.length)
  })

  it('can search for the corresponding icon box', async () => {
    const searchingIcon = 'HTML'

    cy.get('input').type(searchingIcon)

    cy.get('.icon-box')
      .should('have.length', 1)
      .first()
      .should('have.text', searchingIcon)
  })

  it('returns error text if the technology is not found', async () => {
    const searchingIcon = 'test'

    cy.get('input').type(searchingIcon)
    
    cy.get('.icon-box').should('have.length', 0)
  })

//  it('opens modal on click icon box', () => {
//    cy.get('.dialog').should('not.be.visible')
//
//    cy.get('.icon-box').first().click()
//
//    cy.get('.dialog').should('be.visible')
//    cy.contains(technologies[0].description)
//  })
})
