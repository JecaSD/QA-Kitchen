/// <reference types="cypress"/>

describe('Read my mind', function () {

    beforeEach(() => {
            cy.viewport(1920, 1080)
            cy.visit("http://10.15.1.204:3000/questionaire")
    
        })
        
    function readMyMind(p1) {
            switch(true) {
                case p1 <=1:
                    return "Avocado Benedict"
                    break; 
                case p1 >= 2 && p1 <=3:
                    return "Strawberry Sundae"
                    break;
                case p1 >= 4 && p1 <=5:
                    return "Soy Salmon"
                    break;
                case p1 >= 6 && p1 <=7:
                    return "Culiflower Dipper"
                    break;
                    case p1 >= 8 && p1 <=9:
                    return "Blonde"
                    break;
                default:
                    return "Unhandled results"      
            }
        }
    

    it('Check all buttons are clickable and first and last recomendations', function () {

        let buttonIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
        let buttonIDRight = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]

        // click only left buttons
        for (let i = 0; i < buttonIDLeft.length; i++) {
            cy.get(buttonIDLeft[i]).click()
        }

        cy.reload()

        // click only right buttons

        for (let i = 0; i < buttonIDRight.length; i++) {
            cy.get(buttonIDRight[i]).click()
        }

        cy.reload()

        // check first and last meal is recomanded

        for (let i = 0; i < buttonIDLeft.length; i++) {
            cy.get(buttonIDLeft[i]).click()
        }

        cy.get('#readmymind').click()
        cy.get('#recHeader').should('have.text','Blonde')
        cy.reload()

        for (let i = 0; i < buttonIDRight.length; i++) {
            cy.get(buttonIDRight[i]).click()
        }
        cy.get('#readmymind').click()   
        cy.get('#recHeader').should('have.text','Avocado Benedict')
        cy.reload()

    })

        it('Check all recomendations', function () {

        let buttons = [["#btn1", "#btn2"],["#btn3","#btn4"],["#btn5","#btn6"],["#btn7","#btn8"],["#btn9","#btn10"],
                       ["#btn11","#btn12"],["#btn13","#btn14"],["#btn15","#btn16"],["#btn17","#btn18"]]

        let possibleMeals = {
            //"Avocado Benedict" : "False",
            "Strawberry Sundae" : "False",
            "Soy Salmon" : "False",
            "Culiflower Dipper" : "False",
           // "Blonde" : "False"
        }

        let exists = Object.values(possibleMeals).includes("False")

        while  (exists === true) {
        let sum = 0
        for (let i = 0; i <= buttons.length-1; i++) {
            let choice = Math.round(Math.random())
            if ( choice === 0) {
                sum = sum + 1
            } 
           //cy.wait(2000)
           cy.get(buttons[i][choice]).click()   
        }

        //cy.log(sum)
        cy.log(readMyMind(sum))
        cy.log(possibleMeals[readMyMind(sum)])
        possibleMeals[readMyMind(sum)] = "True"
        cy.log(possibleMeals[readMyMind(sum)])
        cy.get('#readmymind').click()
        cy.wait(2000)
        cy.get('#recHeader').should('have.text', readMyMind(sum))
        exists = Object.values(possibleMeals).includes("False")
        cy.wait(1000)
        for (const meal in possibleMeals) {
            cy.log(meal + " : " + possibleMeals[meal])
        }
        cy.wait(2000)
        cy.reload()
    }
})
})