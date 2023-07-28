// import 'cypress-iframe';


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://anamika-optimizory.atlassian.net/plugins/servlet/ac/com.example.myapp/hello-world?project.key=TNG32&project.id=10005');

    // cy.iframe('iframe[id="com.example.myapp__hello-world__39a83a3a"]').within(() => {
    //   cy.get('h1').should('have.text', 'Hello World');
    // });


    // Use the custom command to access the iframe content
    cy.getIframeBody().then((iframeBody) => {
      // Check if the "Hello World" text exists within the iframe content
      cy.wrap(iframeBody).contains('Hello World').should('be.visible');
    });
  });
});












// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://anamika-optimizory.atlassian.net/plugins/servlet/upm');
//     // cy.visit('https://anamika-optimizory.atlassian.net/plugins/servlet/ac/com.example.myapp/hello-world?project.key=TNG32&project.id=10005');
//  cy.get('#username').type('anamika@optimizory.com')
//  cy.get('#login-submit > .css-178ag6o').click()
//  cy.get('#password').type('')
//  cy.get('#login-submit > .css-178ag6o').click()



//     cy.wait(5000);

// // cy.origin('https://anamika-optimizory.atlassian.net', () => {
//     cy.get('[data-testid="overflow-menu-trigger"]').click();


//     // Use the custom command to access the iframe content
//     // cy.getIframeBody().then((iframeBody) => {
//     //   // Check if the "Hello World" text exists within the iframe content
//     //   cy.wrap(iframeBody).contains('Hello World').should('be.visible');
//     // });
//   // });
// });

// });

