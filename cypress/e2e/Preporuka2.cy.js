/// <reference types="cypress"/>

import PreporukaPage from "./PageObjects/PreporukaPage.cy"

describe('Read my mind', function () {


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
    

    it('Check all buttons are clickable', function () {
        cy.viewport(1920, 1080)
        cy.visit("http://10.15.1.204:3000/questionaire")

        // let buttons = [["#btn1", "#btn2"],["#btn3","#btn4"],["#btn5","#btn6"],["#btn7","#btn8"],["#btn9","#btn10"],
        //                ["#btn11","#btn12"],["#btn13","#btn14"],["#btn15","#btn16"],["#btn17","#btn18"]]

        // let possibleMeals = {
        //     "Avocado Benedict" : "False",
        //     "Strawberry Sundae" : "False",
        //     "Soy Salmon" : "False",
        //     "Culiflower Dipper" : "False",
        //     "Blonde" : "False"
        // }
        
        // // let exists = Object.values(possibleMeals).includes("False");
        // // cy.log(exists)
        // // let i = 0
        // // while (i<10) {
        // //     cy.log(exists)
        // //     i++
        // // }

        // // for (const meal in possibleMeals) {
        // //     cy.log(meal + " : " + possibleMeals[meal])
        // // }               
        
        // let exists = Object.values(possibleMeals).includes("False")

        // while  (exists === true) {
        // let sum = 0
        // for (let i = 0; i <= buttons.length-1; i++) {
        //     let choice = Math.round(Math.random())
        //     if ( choice === 0) {
        //         sum = sum + 1
        //     } 
        //    //cy.wait(2000)
        //    cy.get(buttons[i][choice]).click()
        //     //cy.log(buttons[i][choice])
            
        // }

        // //cy.log(sum)
        // cy.log(readMyMind(sum))
        // cy.log(possibleMeals[readMyMind(sum)])
        // possibleMeals[readMyMind(sum)] = "True"
        // cy.log(possibleMeals[readMyMind(sum)])
        // cy.get('#readmymind').click()
        // cy.wait(2000)
        // cy.get('#recHeader').should('have.text', readMyMind(sum))
        // exists = Object.values(possibleMeals).includes("False")
        // cy.wait(1000)
        // for (const meal in possibleMeals) {
        //     cy.log(meal + " : " + possibleMeals[meal])
        // }
        // cy.wait(2000)
        // cy.reload()

        

        
        
        cy.get('.btn-group').each(($e,index, $list) =>{
            cy.log(cy.wrap($e.text()))
            // $list.each(($e1, i) =>{
            //     cy.log($e1)
            })
            
        // })            //cy.get('.btn').eq(index).each(($e2, index2, $list2) =>{
                //cy.log($e2.text())
            })
        })
    
        

        
            //cy.get('.btn-group').eq(index).each(($e2, index2, $list2) => {
            
        
            
        
       //})



        // let buttonIDLeft = ["#btn1", "#btn3", "#btn5", "#btn7", "#btn9", "#btn11", "#btn13", "#btn15", "#btn17"]
        // let buttonIDRight = ["#btn2", "#btn4", "#btn6", "#btn8", "#btn10", "#btn12", "#btn14", "#btn16", "#btn18"]




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


        // cy.log(specijaliteti[1])