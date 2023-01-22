/// <reference types="cypress"/>

import PreporukaPage from "./PageObjects/PreporukaPage.cy"

describe('Read my mind', function () {

    // function isEven(n) {
    //     if (n%2===0) {
    //         return 0
    //     } else {
    //         return 1
    //     }
    //}

    // beforeEach(() => {
    //     cy.visit("http://10.15.1.204:3000/questionaire")

    //})
    

    it('Check all buttons are clickable', function () {
        cy.viewport(1920, 1080)
        cy.visit("http://10.15.1.204:3000/questionaire")

        // cy.get('.card').each(($e1, index, $list) => {
        //     cy.get('button').click({multiple:true})
        //     })
           
        // })



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

        // check weather good meal is recomanded

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

        

        // let slika3 = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
        // let slika4 = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]


        let buttonitdIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
        let slika2 = ["#btn1", "#btn3", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]
        let slika3 = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]
        //let slika4 = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]
        let slika4 = ["#btn2", "#btn4", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]

        for (let i = 0; i < slika3.length; i++) {
            cy.get(slika3[i]).click()
        }
        cy.get('#readmymind').click()   
        cy.get('#recHeader').should('have.text','Soy Salmon')
        cy.reload()



        for (let i = 0; i < slika4.length; i++) {
            cy.get(slika4[i]).click()
        }
        cy.get('#readmymind').click()   
        cy.get('#recHeader').should('have.text','Culiflower Dipper')
        cy.reload()

        for (let i = 0; i < slika2.length; i++) {
            cy.get(slika2[i]).click()
        }
        cy.get('#readmymind').click()   
        cy.get('#recHeader').should('have.text','Strawberry Sundae')



    
})

    // it('Verify right answers', function () {

    //     let buttonIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
    //     let buttonIDRight = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]

    //     for (let j = 0; j < buttonIDRight.length; j++) {
    //         cy.get(buttonIDRight[j]).click()
    //     }
    // })


    // it('Verify combinations left and right answers', function () {

    //     let buttonIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
    //     let buttonIDRight = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]

    //     for (let i = 0; i < buttonIDLeft.length; i++) {
    //         cy.get(buttonIDLeft[i]).click()
    //         for (let j = 0; j < buttonIDRight.length; j++) {
    //             if (i != j) {
    //                 cy.get(buttonIDRight[j]).click()
    //             }
    //         }
    //         cy.get('#readmymind').click()
    //         cy.reload()
    //     }

    

    // it('Nesto', function () {

    //     let buttonIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
    //     let buttonIDRight = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]
    //     let choice = [".resultText1", ".resultText2", ".resultText3", ".resultText4", ".resultText5", ".resultText6", ".resultText7", ".resultText8", ".resultText9"]
    //     let sum = 0
    //     let onePoint = ["Leto", "Caj", "Belo", "Slatko", "Kiselo", "Kasika", "Duboki", "Voce", "Koktel"]
    //     let zeroPoint = ["Zima", "Kafa", "Crno", "Slano", "Ljuto", "Viljuska", "Plitki", "Povrce", "Pivo"]

    //     for (let i = 0; i < choice.length; i++) {
    //         if (onePoint.includes(choice[i])) {
    //             sum = sum + 1
    //         }
    //     }

    //})
    // function readMyMind(p1) {
//     switch(true) {
//         case p1 <=1:
//             return "Avocado Benedict"
//             break; 
//         case p1 >= 2 && p1 <=3:
//             return "Strawberry Sundae"
//             break;
//         case p1 >= 4 && p1 <=5:
//             return "Soy Salmon"
//             break;
//         case p1 >= 6 && p1 <=7:
//             return "Cauliflower Dipper"
//             break;
//             case p1 >= 8 && p1 <=9:
//             return "Blonde"
//             break;
//         default:
//             return "Unhandled results"      
//     }
// }


// cy.get('[data-test-id="hero__headline"]').then($value => {
//     const textValue = $value.text()
//     cy.wrap(textValue).as('wrapValue')
// })


// cy.get('[data-test-id="hero__headline"]').then($value => {
//     const textValue = $value.text()
//     uradis sta treba sa ovom textValue vrednosti
// })

// cy.get('.elements-class').each(($el, index, $list) => {
// // do something with the current element
// cy.wrap($el).click();
// });

// cy.get('.elements-class').each(($el, index, $list) => {
// // do something with the current element
// cy.wrap($el).get(.btn).click()
// });

// cy.get('.elements-class').each(($el, index, $list) => {
// // do something with the current element
// cy.wrap($el).get(.btn).each(($el) => {
//     cy.get($el).click()
// })
// });

// cy.get('.elements-class').each(($el, index, $list) => {
// if (index % 2 === 0) {
// cy.wrap($el).click();
// }
// });
// cy.get('.elements-class').each(($el, index, $list) => {
// if (index <= 1) {
// cy.wrap($el).click();
// }
// });

// cy.get('.elements-class').each(($el, index, $list) => {
// if (index <= 1) {
// cy.get('.elements-class').each(($el, index, $list) => {
// if (index % 2 === 0) {
// cy.wrap($el).click();
// }
// });
// }
// });

// cy.get('#parentId').find('.child-class').find('#childId').click();




// cy.get('.menu-wrap').each(($el, index, $list) => {
        //     if (index <= 1) {
        //         cy.get('.btn').each(($el, index, $list) => {
        //             //if (index % 2 === 0) {
        //                 cy.wrap($el).click()})
        //             }
        //         })
        //     })
        // })





        // cy.get('.menu-wrap .one-half h3').each(($el, index, $list) => {
            // if (index % 2 === 0) {
            // cy.wrap($el).click();
            // }
            // });
            // }




            
        // cy.get('.text .one-half h3').then($els => {
        //     const textValue = Array.from($els, el => el.innerText)
        //     cy.log(textValue)

        })
        // cy.log(specijaliteti[1])