describe('OrangeHRM Login Feature', () => {
    const baseUrl = 'https://opensource-demo.orangehrmlive.com/';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('menampilkan halaman login', () => {
      cy.url().should('include', 'orangehrmlive.com');
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
    });

    it('login dengan username dan password yang benar', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });

    it('login tanpa memasukkan username', () => {
      cy.get('input[name="username"]').clear();
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
    });

    it('login dengan memasukkan username yang salah', () => {
        cy.get('input[name="username"]').type('prima');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
    });

    it('login tanpa memasukkan password', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').click();
    });

    it('login dengan memasukkan password yang salah', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('123456');
        cy.get('button[type="submit"]').click();
    });

    it('login tanpa memasukkan username dan password', () => {
        cy.get('input[name="username"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').click();
    });

});
   


