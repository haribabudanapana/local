import { test } from '@playwright/test';
import { Maepage } from '../../pages/MAEIntegrationPage';
import { loadTestData } from '../../utils/testDataLoader';

const testData = loadTestData(__filename);

test.describe('@Smoke Verify that user is able to update Product Entitlement tab in MAE UI and Observe the changes in database', () => {
test('Verify that user is able to update Product Entitlement tab in MAE UI and Observe the changes in database', async ({ page }) => {

  const maePage = new Maepage(page);
  const stockcode = 'MEMINDIVIDUAL25';

  // MAE Login & Navigation
  await maePage.MAElogin(testData.StageUser, testData.StagePassword);
  await maePage.clickMAEButton();
  await maePage.selectASTMTenanat();
  await maePage.SearchMaeAccountID(testData.MAEAccountID);
  await maePage.validateProductEntitlementTab();
  const selectedGrace = await maePage.verifyStockcode_Graceperiodcheck_1(stockcode);
});
});
