///reference types ="cypress"/>
  beforeEach(() => {
        cy.visit("https://automationteststore.com/");
       
    });
    describe('Checkout process', () => {
        let name = "sedra__33";
        let password="sedra@123";
    
      
    
        it('add items to the cart', () => {
            //login
            cy.get('#customer_menu_top > li >a').click();
            cy.get('#loginFrm_loginname').type(name);
            cy.get('#loginFrm_password').type(password);
            cy.get('#loginFrm > fieldset > .btn > .fa').click();
            cy.get('.logo > img').click();
            
//add items
cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click()
    cy.get('.cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
            cy.get('.maintext').should('include','processed!')

        });
     
    });


