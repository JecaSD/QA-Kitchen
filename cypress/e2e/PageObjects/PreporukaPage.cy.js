/// <reference types="cypress"/>

class PreporukaPage {

    visit() {
        cy.visit("http://10.15.1.204:3000/questionaire")
    }

    evenCheck(broj) {
       const belo = cy.get('btn5').click()
       return this
        
    }
}

export default PreporukaPage
