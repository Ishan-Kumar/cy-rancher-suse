describe('template spec', () => {


  // re-usable elements
  var locators = {
    login_username: '[data-testid="local-login-username"]',
    login_password: '[data-testid="local-login-password"] > .labeled-input > input',
    login_submit: '[data-testid="login-submit"] > span'
  }

  beforeEach(() => {
    // Visit the Rancher login page
    cy.visit('/auth/login')
    cy.get(locators.login_username).type('admin')
    cy.get(locators.login_password).type('admin@123456')
    cy.get(locators.login_submit).click()
  })

  // Assert that the login was successful by checking for the Rancher logo
  it('Should be able to login to Rancher web page', () => {
    cy.get('.side-menu-logo').should('exist')
  })

  // Assert that the main web page has loaded by checking for a banner title
  it('Should open up the main web page', () => {
    cy.get('[data-testid="banner-title"]').should('exist')
  })

  // Assert that the title of the page is correct
  it('Should have the correct main web page title', () => {
    cy.title().should('eq', 'Rancher')
  })
})