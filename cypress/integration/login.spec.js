/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('User login', () => {
    it('Login', () => {
        //Registration
        cy.visit('index.php');
        cy.get('a[class="login"]').click();
        cy.url().should('contain', '?controller=authentication&back=my-account')

        //Log in
        cy.get('input[id="email_create"]').type(chance.email());
        cy.get('button[id="SubmitCreate"]').click();
        cy.url().should('contain', '?controller=authentication&back=my-account#account-creation')

        //Filling the form
        cy.get('input[id=id_gender2]').check('2');
        cy.get('input[id="customer_firstname"]').type(chance.first());
        cy.get('input[id="customer_lastname"]').type(chance.last());
        cy.get('input[id="company"]').type('LTDA');
        cy.get('input[id="passwd"]').type('Agili');
        cy.get('select[id="days"]').select('5');
        cy.get('select[id="months"]').select('June');
        cy.get('select[id="years"]').select('1996');
        cy.get('input[id="newsletter"]').check();
        cy.get('input#optin').check();
        cy.get('input[id="address1"]').type('591 Grand Avenue');
        cy.get('input[id="address2"]').type('Suite G102');
        cy.get('input[id="city"]').type('San Marcos');
        cy.get('select[id="id_country"]').select('United States');
        cy.get('select[id=id_state]').select('California');
        cy.get('input[id="postcode"]').type('57057');
        cy.get('textarea[id="other"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac ex sit amet nibh efficitur eleifend. ');
        cy.get('input[id="phone"]').type(chance.phone({formatted: true}));
        cy.get('input[id="phone_mobile"]').type(chance.phone({formatted: true}));
        cy.get('input[id="alias"]').type(' extra info');
        cy.get('button[id="submitAccount"]').click();
        
        //Url and text assertion
        cy.url().should('contain', '?controller=my-account')
        cy.get('p[class="info-account"]').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    });
});