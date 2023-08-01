// 1. directly check in iframe with id selector

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:1234/');
//   });

//   it('checks for text in iframe', () => {
//     cy.wait(1000);

//     // Select the first iframe with id "my-iframe-1"
//     cy.get('#my-iframe-1').then(($iframe) => {
//       const doc = $iframe.contents().get(0);
//       cy.wrap(doc).find('h1').should('contain', 'Sample file');
//     });

//     // Select the second iframe with id "my-iframe-2"
//     // cy.get('#my-iframe-2').then(($iframe) => {
//     //   const doc = $iframe.contents().get(0);
//     //   cy.wrap(doc).find('h1').should('contain', 'Hello from example.com');
//     // });
//   });
// });

// 2. By using customm command 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1234/');
  });

  it('checks for text in iframe', () => {
    cy.wait(1000);

    // Use the custom command to interact with the iframe
    cy.getIframeBody('my-iframe-1').find('h1').should('contain', 'Sample file');
  });
});
