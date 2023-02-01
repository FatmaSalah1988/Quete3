it('GET',()=>{
    cy.request({
        url: 'https://tastedive.com/api/similar?q=Fatma',
    })
})

it('Tester fixtures',() => {
  cy.fixture('userData').then (fixt => {
    cy.request({
      url: 'https://tastedive.com/api/similar?q=${fixt.music}'
  })
  cy.request({
    url: 'https://tastedive.com/api/similar?q=${fixt.movie}'
})
  })
})
it('Commande personnalisée', () => {
  cy.tastediveGetBySimilar("Blue").then(response => {
    cy.log (JSON.stringify(response));
    expect(response.body.music).eq('Blue');
    //expect(response.body.Similar).to.have.property('Blue');
    //expect(response.body.Similar.Info[0].Name).eq("Avengers");
  })
})
