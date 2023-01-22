/// <reference types="cypress"/>

class MenuPage {

    visit() {
        cy.visit("http://10.15.1.204:3000/menu")
    }

    StuffedVeal() {
        const button = cy.get(':nth-child(1) > :nth-child(2) > .text > .btn')
        button.should('be.enabled').click()
        return this
    }
    Beef () {
        const button = cy.get(':nth-child(9) > .text > .btn')
        button.should('be.enabled').click()
        //return this
    }
     Pancakes() {
        const button = cy.get(':nth-child(2) > :nth-child(2) > .text > .btn')
        button.should('be.enabled').click()
        return this
    }
    ChocolateMoussee() {
        const button = cy.get(':nth-child(2) > :nth-child(4) > .text > .btn')
        button.should('be.enabled').click()
        return this
    }
    Baklava() {
        const button = cy.get(':nth-child(2) > :nth-child(6) > .text > .btn')
        Cypress._.times(2, () => {
        button.click()
        return this
    })
    }
   
}

export default MenuPage