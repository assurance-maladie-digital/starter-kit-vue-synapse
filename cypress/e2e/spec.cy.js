it('adds todos', () => {
	cy.visit('https://example.cypress.io/')

	cy.get('.home-list').find('a').contains('type').click()
})
