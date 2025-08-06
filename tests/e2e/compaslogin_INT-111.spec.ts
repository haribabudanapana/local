import { test } from '@playwright/test';
import { ASTMLoginPage } from '../../pages/ASTMLoginPage';
import { SelectApplicationPage } from '../../pages/SelectApplicationPage';
import { SelectAccountPage } from '../../pages/SelectAccountPage';
import { CompassHomePage } from '../../pages/CompassHomePage';
import { loadTestData } from '../../utils/testDataLoader';

const testData = loadTestData(__filename);

test('Compass Login INT-111 - Login, select app/account, verify, logout', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://stage-secure.astm.org/');

  // Login
  const loginPage = new ASTMLoginPage(page);
  await loginPage.login(testData.username, testData.password, true);

  // Optionally, ensure redirected to login page again (if needed)
  //await page.goto('https://stage-secure.astm.org/login');

  // Select application
  const selectAppPage = new SelectApplicationPage(page);
  await selectAppPage.selectApplication(testData.application);

  // Go to Compass
  //await page.goto('https://stage-compass.astm.org/');

  // Accept cookies
  await selectAppPage.acceptAllCookies();

  // Select account
  const selectAccountPage = new SelectAccountPage(page);
  await selectAccountPage.selectAccount(testData.account);

  // Verify greeting
  const compassHomePage = new CompassHomePage(page);
  await compassHomePage.verifyWelcomeMessage(testData.welcomeName);

  // Logout
  await compassHomePage.logout();


});
