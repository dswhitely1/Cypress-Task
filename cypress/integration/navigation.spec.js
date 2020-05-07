

describe("Navigation", () => {
    before(() => cy.visit('/'))
    it('Should have Don in the Header', () =>{
        cy.contains(/don's task application/i)
    })
    it('Should have a New Task Button', () => {
        cy.contains(/New Task/i)
    })
    it('Button should rename to close on Click', () => {
        const navButton = cy.get('button#nav-button')
        navButton.click()
        cy.contains(/Close/i)
    })
})
