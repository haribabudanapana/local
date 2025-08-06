import { test, expect } from '@playwright/test';
import { Maepage } from '../../pages/MAEIntegrationPage';
import { LoginPage } from '../../pages/LoginPage';
import { loadTestData } from '../../utils/testDataLoader';


const testData = loadTestData(__filename);

test('MAE and Compass workflow - INT-5447', async ({ page }) => {
const maePage = new Maepage(page);
  const loginPage = new LoginPage(page);
;

  // MAE Login & Navigation
  await maePage.MAElogin(testData.StageUser, testData.StagePassword);
  await maePage.selectASTMTenanat();
  await maePage.SearchMaeAccountID(testData.MAEAccountID);
  await maePage.ClickAccessManagementTab();
  await maePage.VerifyCompassTab();
  const GroupsToggle = await maePage.groupsCheck();
  await maePage.SaveAndAddAuditNote('Compass Note');
  await maePage.getSignoutdropdown();
  await maePage.clickSignoutBtn();
  await page.waitForTimeout(15000);

  // Compass Login & Validation
  await loginPage.CompassLogin(testData.compassUser, testData.compassPwd);
  await loginPage.selectAnAccountCompass('fn ln');
  expect(await page.title()).toBe('compass');
  await loginPage.ValidateGroupsLink(GroupsToggle, testData.CompassPointsLink);
});
