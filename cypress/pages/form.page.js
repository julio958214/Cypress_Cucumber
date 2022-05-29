class formPage {

    accessForms() {
        cy.visit('/treinamento/home');
        cy.get('a[class="collapsible-header "]').click();
    }

    accessCreation() {
        cy.get('a[href="/users/new"]').click();
    }

    emailPassw(name, ultimoNome, email, address, university, profession, genre, age) {
        cy.get('input[id="user_name"]').type(name);
        cy.get('input[id="user_lastname"]').type(ultimoNome);
        cy.get('input[id="user_email"]').type(email);
        cy.get('input[id="user_address"]').type(address);
        cy.get('input[id="user_university"]').type(university);
        cy.get('input[id="user_profile"]').type(profession);
        cy.get('input[id="user_gender"]').type(genre);
        cy.get('input[id="user_age"]').type(age);
    }

    creatingAccount() {
        cy.get('input[type="submit"]').click();
    }

    accessUser() {
        cy.get('a[href="/users"]').click();
    }

    searchMyRecord() {
        cy.get('span[class="last"]').click();
    }
}

module.exports = new formPage();