/// <reference types="Cypress" />

// GIVEN I am logged user on article page
describe('Login Page', () => {                                                        
it('should load books website', () => {                                               //mel by nacist stranku
    cy.visit('http://localhost:4100/')                    
    cy.get('.navbar > .container > .nav > .nav-item:nth-child(2) > .nav-link')
      .click()                                                                        //klik na tlacitko prihlaseni
    cy.get('.col-md-6 > form > fieldset > .form-group:nth-child(1) > .form-control')  //element zalozky 'Email'
      .type('ferrro@gmail.com') 
    cy.get('.col-md-6 > form > fieldset > .form-group:nth-child(2) > .form-control')  //element zalozky 'Password'
      .type('ferrro111')        
    cy.get('.row > .col-md-6 > form > fieldset > .btn')                               //element zaskrtavaciho tlacitka 'Sign in'
      .click() 
    })                                              

// WHEN I write and save comment
it('should write a comment and save', () => {                                         //mel by napsat komentar a ulozit
  cy.get('#root')                                                                     //oznaceni
    .contains('New Post')                                                             //obsahuje element-prvek 'New Post'
    .click()
  cy.get('.col-md-10 > form > fieldset > .form-group > .form-control-lg')
    .click()
    .type('Article Title - text')
  cy.get('.col-md-10 > form > fieldset > .form-group:nth-child(2) > .form-control')
    .type('What is the article about? - text')
    .get('.col-md-10 > form > fieldset > .form-group:nth-child(3) > .form-control')
    .click()
    .type('Test article on the page - text')
  cy.get('button')
    .click()
  })

// THEN the comment is saved
it('A comment should be saved', () => {
  cy.get('.col-xs-12 > div > .card > .card-block > .form-control')
    .type('Write a comment - text')
    .get('.col-xs-12 > div > .card > .card-footer > .btn')
    .click()
  })

// GIVEN I am logged user on article page with my comment
it('I am loggen with my comment', () => {
  cy.get('h1').should('be.visible')
  })

// WHEN I click on bin icon
it('bin icon', () => {
  cy.get('.mod-options > .ion-trash-a')
    .wait(3000)
    .click()
  })

// THEN the comment is deleted
it('comment is deleted', () => {
  cy.url()
    .wait(2000)
  })
})
