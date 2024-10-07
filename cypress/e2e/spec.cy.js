

describe('Order Page', () => {


  describe("inputs", () => {

    beforeEach(() => {
      cy.visit('http://localhost:5173/order')
    });
    it("isim", () => {

      cy.get('[data-cy="isim-input"]').type("ir")


    })
    it("size", () => {

      cy.get('[data-cy="boyut-input"]').eq(0).check()
      cy.get('[data-cy="hamur-input"]').select('kalın')

      cy.get('[data-cy="malzeme-input"]').eq(0).check()
      cy.get('[data-cy="malzeme-input"]').eq(1).check()
      cy.get('[data-cy="malzeme-input"]').eq(2).check()

      cy.get('[data-cy="isim-input"]').type("can")

    })
    it("buton", () => {

      cy.get('[data-cy="submit-button"]').should('be.disabled')
      cy.get('[data-cy="boyut-input"]').eq(0).check()
      cy.get('[data-cy="boyut-input"]').eq(0).should('be.checked')

      cy.get('[data-cy="hamur-input"]').select('kalın')
      cy.get('[data-cy="hamur-input"]').should('have.value', 'kalın')

      cy.get('[data-cy="malzeme-input"]').eq(0).check()
      cy.get('[data-cy="malzeme-input"]').eq(0).should('be.checked');
      cy.get('[data-cy="malzeme-input"]').eq(1).check()
      cy.get('[data-cy="malzeme-input"]').eq(1).should('be.checked');
      cy.get('[data-cy="malzeme-input"]').eq(2).check()
      cy.get('[data-cy="malzeme-input"]').eq(2).should('be.checked');
      cy.get('[data-cy="malzeme-input"]').eq(3).check()
      cy.get('[data-cy="malzeme-input"]').eq(3).should('be.checked');

      cy.get('[data-cy="isim-input"]').type('can')

      cy.get('[data-cy="isim-input"]').should('have.value', 'can')





      cy.get('[data-cy="submit-button"]').should('not.be.disabled')



    })


  })
  describe("aciktim buton", () => {
    it("aciktim", () => {
      cy.visit('http://localhost:5173')

      cy.get('[data-cy="aciktim-button"]').click();

      cy.url().should('include', '/order');

    })


  })
})

