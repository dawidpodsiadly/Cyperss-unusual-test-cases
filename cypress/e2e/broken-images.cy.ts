it('Broken Images', () => {
    cy.visit('/broken_images');
    cy.intercept('GET', '/img/avatar-blank.jpg').as('avatarJpg');
    cy.intercept('GET', '/asdf.jpg').as('asdfJpg');
    cy.intercept('GET', '/hjkl.jpg').as('hjklJpg');

    cy.wait('@avatarJpg').its('response.statusCode').should('eq', 200);
    cy.wait('@asdfJpg').its('response.statusCode').should('eq', 200);
    cy.wait('@asdfJpg').its('response.statusCode').should('eq', 200);
});
