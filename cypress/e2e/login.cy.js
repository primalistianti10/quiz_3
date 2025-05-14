import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Test - OrangeHRM', () => {
  it('should login successfully with valid credentials', () => {
    loginPage.visit();
    loginPage.login('Admin', 'admin123');
    loginPage.verifyDashboardVisible();
  });
});