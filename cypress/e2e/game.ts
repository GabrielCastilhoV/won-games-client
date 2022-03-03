/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
    cy.visit('/game/biomutant')
  })

  it('should render game page sections', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Biomutant/i }).should('exist')
      cy.findByText(/^BIOMUTANT® is an open-world/i).should('exist')
      cy.findByText('$99.59').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should(
      'have.length.gt',
      0
    )

    // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })
    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // Details
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')
      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByRole('heading', { name: /genres/i }).should('exist')

      cy.findByText(/Experiment 101/i).should('exist')
      cy.findByText(/May 23, 2021/i).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')
      cy.findByText(/free/i).should('exist')
      cy.findByText('Adventure / Action / Open World').should('exist')
    })

    cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true })
    cy.shouldRenderShowcase({ name: 'You may like these games' })
  })

  it('should add/remove game in cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .contains(1)
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', { name: /Biomutant/i}).should('exist')
    })

    // close dropdown
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // remove from cart
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click()
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    cy.findAllByLabelText(/cart items/i).should('not.exist')
  })
})
