// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add('getIframeBody', () => {
//     // get the iframe > document > body
//     return cy
//       .get('iframe[id="com.example.myapp__hello-world__bde5e06"]', { log: false })
//       .its('0.contentDocument.body', { log: false })
//       .should('not.be.empty')
//       .then(cy.wrap);
//   });
  

Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    return cy
      .get('iframe[id="com.example.myapp__hello-world__bde5e06"]', { log: false })
      .should(($iframe) => {
        // Check if the iframe has contentDocument and body
        expect($iframe.contents().find('body')).to.exist;
      })
      .then(($iframe) => {
        // Get the iframe body and return it
        return cy.wrap($iframe.contents().find('body'), { log: false });
      });
  });
  