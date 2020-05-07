describe('Task List', () => {
    before(() => cy.visit('/'))

    it('should have Active Tasks', () => {
        cy.contains(/Active Tasks/i)
    })

    it('should have Completed Tasks', () => {
        cy.contains(/Completed Tasks/i)
    })

    it('Should add 3 Tasks', () => {
        cy.contains(/New Task/i).click()
        cy.get('#task_input').type('Test 1')
        cy.contains(/Submit/i).click()
        cy.get('#task_input').type('Test 2')
        cy.contains(/Submit/i).click()
        cy.get('#task_input').type('Test 3')
        cy.contains(/Submit/i).click()
        const getActiveTasks = () => cy.get('.ten > :nth-child(1) > .segments >')
        getActiveTasks().should(t => expect(t.length).equal(3))
    })
    it('Should Move Tasks to Complete on Click', () => {
        const getActiveTasks = () => cy.get('.ten > :nth-child(1) > .segments >')
        const getCompletedTasks = () => cy.get('.ten > :nth-child(2) > .segments >')
        getActiveTasks().should(t => expect(t.length).equal(3))
        getCompletedTasks().should(t => expect(t.length).equal(0))
        cy.contains(/test 1/i).click()
        getActiveTasks().should(t => expect(t.length).equal(2))
        getCompletedTasks().should(t => expect(t.length).equal(1))
        cy.contains(/test 2/i).click()
        getActiveTasks().should(t => expect(t.length).equal(1))
        getCompletedTasks().should(t => expect(t.length).equal(2))
        cy.contains(/test 3/i).click()
        getActiveTasks().should(t => expect(t.length).equal(0))
        getCompletedTasks().should(t => expect(t.length).equal(3))
    })
    it('should move Item 1 back to active and Delete the Compeleted', () => {
        const getActiveTasks = () => cy.get('.ten > :nth-child(1) > .segments >')
        const getCompletedTasks = () => cy.get('.ten > :nth-child(2) > .segments >')
        cy.contains(/test 1/i).click()
        cy.contains(/Clear Completed/).click()
        getActiveTasks().should(t => expect(t.length).equal(1))
        getCompletedTasks().should(t => expect(t.length).equal(0))
    })
})
