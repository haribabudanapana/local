import { test } from '@playwright/test';
import { Maepage } from '../../pages/MAEIntegrationPage';
import { TIMSUIIntegrationPage } from '../../pages/TIMSUIIntegrationPage';
import { loadTestData } from '../../utils/testDataLoader';

const testData = loadTestData(__filename);

test.describe('@Smoke TIMS UI | Draft WL Tenant General', () => {
test('TIMS UI || Verify user is able to Create Draft WL Tenant - General', async ({ page }) => {

  const maePage = new Maepage(page);  
  const timsuiPage = new TIMSUIIntegrationPage(page);

  //const tenantCode = 'Auto' + Math.random().toString(36).substring(2, 7) + Math.floor(Math.random() * 900 + 100);


  // MAE Login & Navigation
  await maePage.MAElogin(testData.StageUser, testData.StagePassword);
  await timsuiPage.selectTIMSEntitlement();
  await timsuiPage.clickAddTenant();
  const tenantCode = await timsuiPage.validateTenantCodeField();
  await timsuiPage.validateSupportEmailField(); 
  await timsuiPage.validateSupportWebPageURLField();
  await timsuiPage.validateTenantAddressField();
  await timsuiPage.validateExitButton();


  if (tenantCode) {
    await timsuiPage.validateYesButton(tenantCode);
  } else {
    throw new Error('Tenant code is null. Please assign a valid tenantCode before calling validateYesButton.');
  }
  await timsuiPage.ClickExitButton();
  await timsuiPage.validateNoButton();
});
});
