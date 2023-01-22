/// <reference types="cypress"/>

import FormaPage, { checkLocalStorage } from "./PageObjects/FormaPage.cy"

describe('Organize a Bitrhday', function () {


    it('Fill the form', function () {

        const forma = new FormaPage()
        forma.visit()
        forma.fillOrginizer('Jelena')
        forma.fillBirthdayPerson('Sonja')
        forma.fillAge('1')
        forma.fillWhen('2023-02-04')
        forma.fillTime('17:00')
        forma.fillHowManyPeople('3')
        forma.fillAlergiesYes()
        forma.fillAlergiesNo()
        cy.get('#which').should('not.be.enabled') // ukoliko je kliknuta opcija 'Ne' Alergije ne bi trebalo da budu vidljive
        forma.fillAlergiesMaybe()
        forma.fillWallnuts()
        forma.fillChestnuts()
        forma.fillFish()
        forma.fillMeat()
        forma.fillShrimp()
        forma.fillGluten()
        cy.get('[type=checkbox]').check(['Fish', 'Chestnuts']) //izaberemo neke alergije
        forma.buttonOrganize()

        //Proveravamo da li prozor koji se otvorio, sadrzi podatke koje smo uneli
        cy.get('#cbr').contains('Sonja')
        cy.get('#orr').contains('Jelena')
        cy.get('#agr').contains('1')
        cy.get('#dtr').contains('2023-02-04')
        cy.get('#tmr').contains('17:00')
        cy.get('#gur').contains('11-20')
        cy.get('#alr').contains('Maybe')



        checkLocalStorage('Organizer', 'Jelena')
        checkLocalStorage('Birthday_Person', 'Sonja')
        checkLocalStorage('Age', '1')
        checkLocalStorage('Date', '2023-02-04')
        checkLocalStorage('Time', '17:00')
        checkLocalStorage('Number_Of_People', '11-20')
        checkLocalStorage('alergy', 'Maybe')
        checkLocalStorage('alergies', 'Wallnuts,Chestnuts,Fish,Meat,Shrimp,Gluten,Chestnuts,Fish')
         })
    })










