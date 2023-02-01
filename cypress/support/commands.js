Cypress.Commands.add('tastediveGetBySimilar',(music) => {
    cy.request({
        url: `https://tastedive.com/api/similar?q=${music}`
    }) 
})