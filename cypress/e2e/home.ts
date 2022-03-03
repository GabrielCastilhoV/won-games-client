/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: "New Games" })
    cy.shouldRenderShowcase({ name: "Most Popular Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Upcoming Games", highlight: true })
    cy.shouldRenderShowcase({ name: "Free Games", highlight: true })
  });
});
