/// <reference types="cypress"/>


export const checkLocalStorage = (key, value) => {
    cy.window()
    .its('localStorage')
    .invoke('getItem', key)
    //.then(JSON.parse)
    .should('be.equal', value)
}

class FormaPage {
   


    visit() {
        cy.visit("http://10.15.1.204:3000/reserve")
    }
    
    checkLocalStorage(key, value) {
        cy.window()
        .its('localStorage')
        .invoke('getItem', key)
        //.then(JSON.parse)
        .should('be.equal', value)
    }


    fillOrginizer(value) {
        const field = cy.get('.org')
        field.should('be.visible').should('be.enabled').clear().type(value)
        return this
    }

    fillBirthdayPerson(value) {
        const field = cy.get('.bp')
        field.should('be.visible').should('be.enabled').clear().type(value)
        return this
    }

    fillAge(value) {
        const field = cy.get('#age')
        field.should('be.visible').should('be.enabled').clear().type(value)
        return this
    }

    fillWhen(value) {
        const field = cy.get('#date')
        field.should('be.visible').should('be.enabled').click().clear().type(value)
        return this
    }

    fillTime(value) {
        const field = cy.get('#time')
        field.should('be.visible').should('be.enabled').click().clear().type(value)
        return this
    }

    fillHowManyPeople(value) {
        const field =  cy.get('#persons')
        field.select(value)
        field.should('have.value', value)
        return this
    }

    fillAlergiesYes() {
        const field = cy.get('#alg_y')
        field.should('be.visible').should('not.be.checked').click()
        return this
    }

    fillAlergiesNo() {
        const field = cy.get('#alg_n')
        field.should('be.visible').should('not.be.checked').click()
        return this
    }

    fillAlergiesMaybe() {
        const field = cy.get('#alg_m')
        field.should('be.visible').should('not.be.checked').click()
        return this
    }

    fillWallnuts() {
        const field = cy.get('#alg1')
        field.check().should('be.checked').and('have.value', 'Wallnuts').uncheck().should('not.be.checked')
        return this
    }

    fillChestnuts() {
        const field = cy.get('#alg2')
        field.check().should('be.checked').and('have.value', 'Chestnuts').uncheck().should('not.be.checked')
        return this
    }

    fillFish() {
        const field = cy.get('#alg3')
        field.check().should('be.checked').and('have.value', 'Fish').uncheck().should('not.be.checked')
        return this
    }

    fillMeat() {
        const field = cy.get('#alg4')
        field.check().should('be.checked').and('have.value', 'Meat').uncheck().should('not.be.checked')
        return this
    }

    fillShrimp() {
        const field = cy.get('#alg5')
        field.check().should('be.checked').and('have.value', 'Shrimp').uncheck().should('not.be.checked')
        return this
    }

    fillGluten() {
        const field = cy.get('#alg6')
        field.check().should('be.checked').and('have.value', 'Gluten').uncheck().should('not.be.checked')
        return this
    }

    buttonOrganize() {
        const button = cy.get('.btn-primary')
        button.click()
    }
}

export default FormaPage