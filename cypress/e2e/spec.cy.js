describe('Burrito building flow test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: 'orders.json' })
    cy.intercept('POST', 'http://localhost:3001/api/v1/orders', {
      statusCode: 200,
      body: {
        id: 4,
        name: 'User123',
        ingredients: ['beans', 'steak', 'guacamole', 'cilantro']
      }
    })
    cy.intercept('DELETE', 'http://localhost:3001/api/v1/orders/2', { statusCode: 204 })
    .visit('http://localhost:3000');
  });
  
  // Page loading, user should see the Burrito Builder name, a form with an input for the name and buttons to select and submit, and current orders
  it('Should display the app name, order form, and current orders', () => {
    cy.get('h1').should('contain', 'Burrito Builder')
    
    .get('input')
    .get('.ingredient-button')
    .get('[type="submit"]')

    .get('#order1')
    .get('#order1 > h3').should('contain', 'Pat')
    .get('#order1 > .ingredient-list');
  });

  // The user should be able to type in a name, select their ingredients, submit their order, and see it on the page.
  it('Should be able to create a new order', () => {
    cy.get('input').type('User123')
    .get('[name="beans"]').click()
    .get('[name="steak"]').click()
    .get('[name="guacamole"]').click()
    .get('[name="cilantro"]').click()
    .get('[type="submit"]').click()

    .get('#order4')
    .get('#order4 > h3').should('contain', 'User123')

    .get('#order4 > .ingredient-list')
    .get('#order4 > .ingredient-list > :nth-child(1)').should('contain', 'beans')
    .get('#order4 > .ingredient-list > :nth-child(2)').should('contain', 'steak')
    .get('#order4 > .ingredient-list > :nth-child(3)').should('contain', 'guacamole')
    .get('#order4 > .ingredient-list > :nth-child(4)').should('contain', 'cilantro');
  });

  // The user should see an error when they try to submit an order without a name or without an ingredient
  it('Should display an error when there is no name or no ingredients', () => {
    cy.get('[type="submit"]').click()
    .get('#incompleteFormError').should('exist')

    .reload()

    .get('input').type('User123')
    .get('[type="submit"]').click()
    .get('#incompleteFormError').should('exist')

    .reload()

    .get('[name="beans"]').click()
    .get('[type="submit"]').click()
    .get('#incompleteFormError').should('exist');
  });

  // The user should be able to delete an order and have it removed from the DOM
  it('Should be able to delete orders', () => {
    cy.get('#delete2').click()
    
    .get('#order2').should('not.contain', 'Sam');
  });
});