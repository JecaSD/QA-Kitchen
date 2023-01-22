/// <reference types="cypress"/>

import MenuPage from "./PageObjects/MenuPage.cy"

describe('Specialties Menu', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Verify order', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://10.15.1.204:3000/menu')
        let sum = 0

        this.data.productName.forEach(element => {
            cy.selectProduct(element)
            cy.wait(2000)
            cy.get('.text').each(($el, i) => {
                if ($el.text().includes(element))
                    cy.get('.price').each(($span, j) => {
                        if (i == j) {
                            //cy.log($span.text())
                            const amount = $span.text()
                            let res = amount.replace("$", "").trim()
                            //cy.log(res)
                            sum = Number(sum) + Number(res)
                        }
                    })
            })
                .then(function () {
                    //cy.log(sum)
                })
            cy.wait(2000) // ako se ne stavi ovaj wait, pogresno izracuna total
            cy.get('#ukupno').then(function(element) {
                const amount = element.text()
                    let total = amount.replace("$", "").trim()
                    total = Number(total)
                expect(total).to.equal(sum)
            })

        })
      
    })
})



        // cy.selectProduct('Mango Chicken')
        // cy.wait(2000)
        // cy.selectProduct('Beef Gozleme')
        // cy.wait(2000)
        // cy.selectProduct('Pancakes with strawberry cream')
        // cy.wait(2000)
        // cy.selectProduct('Chocolate Mousse')
        // cy.wait(2000)
        // cy.selectProduct('Baklava with Vanilla Ice Cream')
        // cy.wait(2000)
        // cy.selectProduct('Baklava with Vanilla Ice Cream')



        
        // cy.get('.text').each((e1, index, $list) => {
        //     if (e1.text().includes('Mango Chicken'))
        //         cy.get('.btn').eq(index).click()


        // cy.get('.text').each((e1, index, $list) => {
        //     if (e1.text().includes('Beef Gozleme'))
        //         cy.wrap(e1.find('button')).click()
        // })

        // cy.wait(2000)
        // cy.get('.text').each((e1, index, $list) => {
        //     if (e1.text().includes('Pancakes with strawberry cream'))
        //         cy.wrap(e1.find('button')).click()
        // })

        // cy.wait(2000)
        // cy.get('.text').each((e1, index, $list) => {
        //     if (e1.text().includes('Chocolate Mousse'))
        //         cy.wrap(e1.find('button')).click()
        // })

        // cy.wait(2000)
        // cy.get('.text').each((e1, index, $list) => {
        //     if (e1.text().includes('Baklava with Vanilla Ice Cream'))
        //         cy.wrap(e1.find('button')).dblclick()

        // })





        //         let specijaliteti = ['Mango Chicken', 'Beef Gozleme', 'Pancakes with strawberry cream', 'Chocolate Mousse', 'Baklava with Vanilla Ice Cream']
        //         let sum = 0
        //         let lista = []
        //         cy.get('.text .one-half h3').each(($span, i) => {

        //             if (specijaliteti.includes($span.text())) {
        //                 cy.log(i)
        //                 cy.get('.text .btn').each(($span1, j) => {
        //                     if (i === j) {
        //                         cy.wait(2000)
        //                         $span1.click()
        //                        cy.get('.text .price').each(($span3, k) => {
        //                         if(i==k) {
        //                            cy.log($span3.text())
        //                             cy.log(lista)
        //                         }
        //                        })
        //                     }
        //                 })
        //             }
        //       })  
        //       for (let c = 0; c<= lista.length; c++){

        //         cy.log(lista1)

        //       }

        //       //cy.log(sum)



        // cy.get('.card').each((e1, index, $list) => {

  

        //     if(e1.text().includes('Leto ili zima'))
        //       cy.wrap(e1.find('button')).click()
        //       //cy.get('[data-testid="category-item-edit"]').click();
        //       //ovde si stao, cekas mina da promeni data-testid
        //       //cy.contains('Edit').click()
        //       //data-testid="category-item-edit"
          
        //   })