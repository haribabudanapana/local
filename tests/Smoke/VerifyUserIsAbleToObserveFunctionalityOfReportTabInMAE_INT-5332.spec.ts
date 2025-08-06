import { test } from '@playwright/test';
import { Maepage } from '../../pages/MAEIntegrationPage';
import { loadTestData } from '../../utils/testDataLoader';

const testData = loadTestData(__filename);

test.describe('@Smoke Verify Report Tab functionality', () => {
test('Verify Report Tab functionality', async ({ page }) => {

  const maePage = new Maepage(page);

  // MAE Login & Navigation
  await maePage.MAElogin(testData.StageUser, testData.StagePassword);
  await maePage.clickMAEButton();
  await maePage.selectASTMTenanat();
  await maePage.SearchMaeAccountID(testData.MAEAccountID);
  await maePage.clickReportTab();
});
});
