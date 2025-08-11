import { test, expect } from '@playwright/test';
import { Maepage } from '../../pages/MAEIntegrationPage';
import { loadTestData } from '../../utils/testDataLoader';
import { PostgresDBUtil } from '../../utils/PostgresDBUtil';
import { Client } from 'pg';


 
const testData = loadTestData(__filename);

test.describe('@Smoke Verify user can update MAE Access Settings and validate DB - INT-5330', () => {
test('Verify user can update MAE Access Settings and validate DB - INT-5330', async ({ page }) => {
  test.setTimeout(120000) ;
  const maePage = new Maepage(page);
  const AccountSettingNote = 'ActNote' + Date;
  const CompassNote = 'CompassNote' + Date;

  await maePage.MAElogin(testData.StageUser, testData.StagePassword);
  await maePage.clickMAEButton();
  await maePage.selectASTMTenanat();
  await maePage.SearchMaeAccountID(testData.MAEAccountID);

  await maePage.ClickAccessManagementTab();
  const jwtToken = await maePage.VerifyJWTToken();
  await maePage.SaveAndAddAuditNote(AccountSettingNote);
  await maePage.verifyAuditTab(AccountSettingNote);

  await maePage.ClickAccessManagementTab();
  await maePage.VerifyCompassTab();
  const authStatus = await maePage.userNameAndPasswordLoginCheck();
  await maePage.SaveAndAddAuditNote(CompassNote);
  await maePage.verifyAuditTab(CompassNote);
  
//   const query = `
//   SELECT aaas."IPEnabled", aaas."AnonymousOrgAuthEnabled", aaas."ModifiedDate"
//   FROM aisdm."AccountApplicationAuthenticationSetting" aaas
//   WHERE aaas."AccountAuthenticationSettingID" = (
//     SELECT aas."AccountAuthenticationSettingID"
//     FROM aisdm."AccountAuthenticationSetting" aas
//     WHERE "AccountID" = '552515'
//   );
// `;

//   const rows = await resultForDBQuery(query, 'stage');
//   console.log('Database rows:', rows);


//   /**
//  * Executes a query on the DB and returns the results as an array of objects.
//  * @param query       SQL SELECT query string.
//  * @param environment QA/dev/stage, etc. for picking connection info.
//  * @returns           Promise<Array<Record<string, any>>> (array of {column: value} objects)
//  */
//  async function resultForDBQuery(
//   query: string,
//   environment: string):
//  Promise<Array<Record<string, any>>> {
//   const dbUtil = new PostgresDBUtil();
//   let client: Client | null = null;
//   try {
//     client = await dbUtil.connect(environment);
//     if (!client) {
//       throw new Error(
//         'Connection is not established to PostgreSQL DB. Please ensure VPN1 is connected.'
//       );
//     }

//     // Execute the query
//     const result = await client.query(query);

//     Return all rows (each row is an object with key/values)
//     return result.rows;
//   } catch (error) {
//     console.error('Failed to get data from database by query', error);
//     // Optionally, you can throw or log via your own logger
//     throw error;
//   } finally {
//     if (dbUtil) {
//       await dbUtil.closeDBConnection();
//     }
//   }
// }
// const dbUtil = new PostgresDBUtil();
// const connection = await dbUtil.connect('stage');
 
// const isDbConnected = await dbUtil.isConnected();
 
// if (isDbConnected) {
//   console.log('✅ DB connection is established.');
// } else {
//   console.log('❌ Failed to connect to DB.');
// }

});
});
