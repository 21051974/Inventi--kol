// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@cypress/code-coverage/support'
import '@testing-library/cypress/add-commands';
import {configure} from '@testing-library/cypress'
import {randomString} from "./helpers";
configure({testIdAttribute: 'data-testid'})

before(() => {
    cy.log('Test Suite Started')
        const token ='sefasefsaf'
        cy.exec(`export CI_TOKEN=${token}`)
})
