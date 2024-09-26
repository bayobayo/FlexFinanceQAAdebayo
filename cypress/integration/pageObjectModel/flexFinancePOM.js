class flexFinance {

    open () {
        cy.visit('/')
    }
    get searchField() {
        return cy.get('#fi-q');
    }
    get searchButton() {
        return cy.get('#search > .btn')
    }
    get searchResultPage() {
        return cy.get('.card > .-paxs')
    }
    get searchNoResultPage() {
        return cy.get('.row > .-tac')
    }
    get addToCartButton() {
        return cy.get('#add-to-cart > .add')
    }
    get cartButton() {
        return cy.get('.col > .-gy9')
    }
    get viewItem() {
        return cy.get('._spn > .core > .img-c > .img')
    }
    get addToCartBanner() {
        return cy.get('.cnt')
    }
    get cartResult() {
        return cy.get('.main > .name')
    }
    get removeFromCartButton1() {
        return cy.get('._def')
    }
    get removeFromCartButton2() {
        return cy.get('form.-fw > .btn')
    }
    get accountButton() {
        return cy.get(':nth-child(1) > .trig')
    }
    get loginButton() {
        return cy.get('#dpdw-login-box > .inbox > .-pam > .btn')
    }
    get captcha() {
        return cy.get('#JStsl2 > :nth-child(1) > div')
    }
}

export default new flexFinance();