/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('User login', () => {
    it('Login', () => {
        //Registration
        cy.visit('index.php');
        cy.get('a.login').click();
        cy.url().should('contain', '?controller=authentication&back=my-account')

        //Log in
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();
        cy.url().should('contain', '?controller=authentication&back=my-account#account-creation')

        //Fill form
        cy.get('input#id_gender2').check('2');
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#company').type('LTDA');
        cy.get('input#passwd').type('Agili');
        cy.get('select#days').select('5');
        cy.get('select#months').select('June');
        cy.get('select#years').select('1996');
        cy.get('input#newsletter').check();
        cy.get('input#optin').check();
        cy.get('input#address1').type('591 Grand Avenue');
        cy.get('input#address2').type('Suite G102');
        cy.get('input#city').type('San Marcos');
        cy.get('select#id_country').select('United States');
        cy.get('select#id_state').select('California');
        cy.get('input#postcode').type('57057');
        cy.get('textarea#other').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ex sit amet nibh efficitur eleifend. ');
        cy.get('input#phone').type(chance.phone({formatted: true}));
        cy.get('input#phone_mobile').type(chance.phone({formatted: true}));
        cy.get('input#alias').type(' extra info');
        cy.get('button#submitAccount').click();
        
        //Url and text assertion
        cy.url().should('contain', '?controller=my-account')
        cy.get('p.info-account').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    });
});