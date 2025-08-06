import { Page, Locator, expect,test } from '@playwright/test';
import { stepLogger } from '../utils/logger';
import { attachScreenshot } from '../utils/reportUtils';

export class Maepage {
  readonly page: Page;
  readonly MAEbtn: Locator;
  readonly cookieRejectBtn: Locator;
  readonly userNameTxt: Locator;
  readonly passwordTxt: Locator;
  readonly newSignInButton2: Locator;
  readonly ASTMSelectBtn: Locator;
  readonly searchfield: Locator;
  readonly selectTypes: Locator;
  readonly searchIcon: Locator;
  readonly accountList: Locator;
  readonly AccessManagement: Locator;
  readonly CompassTab: Locator;
  readonly groupsPointLabel: Locator;
  readonly groupsPointToggle: Locator;
  readonly SaveBtn: Locator;
  readonly AddAuditNoteLabel: Locator;
  readonly textAreaNote: Locator;
  readonly AddNoteAndContinue: Locator;
  readonly Signoutdropdown: Locator;
  readonly SignoutBtn: Locator;
  readonly JWTLabel: Locator;
  readonly JWTToggle: Locator;
  readonly RecentHistoryLabel: Locator; 
  readonly VerifyAuditHistory: Locator;
  readonly userNamePasswordLoginLabel: Locator;   
  readonly userNamePasswordLoginToggle: Locator;
  readonly IpaccessCheckbox: Locator;
  readonly AllowAnonymousOrgAuth: Locator;
  readonly AuditTab: Locator;
  readonly reportTab: Locator;
  readonly UsageReport: Locator;
  readonly UserReport: Locator; 
  readonly ProductEntLink: Locator; 
  readonly StockCodeForm: Locator;
  readonly GracePeriodDDN: Locator;
  readonly SearchBtn: Locator;
  readonly StockCodeInput: Locator;




  constructor(page: Page) {

    this.JWTLabel = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/span)[1]");
    this.JWTToggle = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/i)[1]");
    this.SaveBtn = page.locator("//input[@value='Save']");
    this.AddAuditNoteLabel = page.locator("//h5[text()='Add Audit Note']");
    this.textAreaNote = page.locator("//textarea[@id='note-textarea']");
    this.AddNoteAndContinue = page.locator("//button[text()='Add Note & Continue']");
    this.AuditTab = page.locator("//span[text()='Audit']");
    this.RecentHistoryLabel = page.locator("//h3[text()='Recent History']");
    this.VerifyAuditHistory = page.locator("//div[@id='AuditDataIndex-0']/div[2]");
    this.CompassTab = page.locator("//span[text()='Compass']");
    this.userNamePasswordLoginLabel = page.locator("//span[text()='UserName & Password Login']/../div/label");
    this.userNamePasswordLoginToggle = page.locator("//span[text()='UserName & Password Login']/following-sibling::div/i");
    this.IpaccessCheckbox = page.locator("#ipEnabled");
    this.AllowAnonymousOrgAuth = page.locator("#anonymousOrgAuthEnabled");

    this.page = page;
    this.MAEbtn = page.locator("//input[@data-testid='MAE-button']");
    this.cookieRejectBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
    this.userNameTxt = page.locator("#userName");
    this.passwordTxt = page.locator("#encPass");
    this.newSignInButton2 = page.locator("//button[text()='Sign In']");
    this.ASTMSelectBtn = page.locator("//span[text()='ASTM']/following-sibling::input");
    this.searchfield = page.locator("//div[contains(@class,'search-content')]//input");
    this.selectTypes = page.locator("//select[@id='types']");
    this.searchIcon = page.locator("//button[contains(@class,'search-button')]");
    this.accountList = page.locator("//table[@id='datatable']//tbody//tr");
    this.AccessManagement = page.locator("//span[text()='Access Management']");
    this.CompassTab = page.locator("//span[text()='Compass']");
    this.groupsPointLabel = page.locator("//span[text()='Groups']/../div/label");
    this.groupsPointToggle = page.locator("//span[text()='Groups']/following-sibling::div/i");
    this.SaveBtn = page.locator("//input[@value='Save']");
    this.AddAuditNoteLabel = page.locator("//h5[text()='Add Audit Note']");
    this.textAreaNote = page.locator("//textarea[@id='note-textarea']");
    this.AddNoteAndContinue = page.locator("//button[text()='Add Note & Continue']");
    this.Signoutdropdown = page.locator("//div[@class='user-nav-menu']/li/a[2]/span");
    this.SignoutBtn = page.locator("//a[@class='dropdown-item logout-btn']");
    this.reportTab = page.locator("//span[text()='Reports']");
    this.UsageReport = this.page.locator("//span[text()='Usage Report']");
    this.UserReport = this.page.locator("//span[text()='User Report']");
    this.ProductEntLink = page.locator("//p[@class='tab astm-type-heading--h6']/span[contains(text(),'Product')]"); 
    this.StockCodeForm = page.locator("#form-control-stock");
    this.GracePeriodDDN = page.locator("(//div[@class='css-1xc3v61-indicatorContainer'])[3]");
    this.SearchBtn = page.locator("//button[contains(@class,'search-btn')]");
    this.StockCodeInput = page.locator("//input[@id='stockCode']"); 
  }

  async MAElogin(email: string, password: string) {
    await test.step('Login to MAE with valid credentials', async () => {
    await this.page.goto('https://stage-manage.astm.org/');
    await this.handleOneTrustCookie();
    await this.NewLoginPublic2(email, password);
    await attachScreenshot(this.page, 'Logged in and clicked MAE button');
    });
  }

  async clickMAEButton(): Promise<void> {
  await this.MAEbtn.waitFor({ state: 'visible', timeout: 10000 });
  await this.MAEbtn.click();
}



  async handleOneTrustCookie() {
    if (await this.cookieRejectBtn.isVisible()) {
      await this.cookieRejectBtn.click();
    }
  }

  async NewLoginPublic2(userEmail: string, password: string) {
    stepLogger('Performing new login with email and password');
    await test.step('Performing new login with email and password', async () => {
    await this.newSignInButton2.waitFor({ state: 'visible', timeout: 10000 });
    await this.userNameTxt.fill(userEmail);
    await this.passwordTxt.fill(password);
    await this.handleOneTrustCookie();
    await this.newSignInButton2.click();
    });
  }

  async selectASTMTenanat() {
    //stepLogger('Selecting ASTM Tenant');
    await test.step('Selecting ASTM Tenant', async () => {
    await this.ASTMSelectBtn.scrollIntoViewIfNeeded();
    await this.ASTMSelectBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.ASTMSelectBtn.click();
    await attachScreenshot(this.page, 'Selected ASTM Tenant');
    });
  }

  async SearchMaeAccountID(MAEAccountID: string) {
    //stepLogger(`Searching for MAE Account ID: ${MAEAccountID}`);
     await test.step('Searching for MAE Account ID:: ${MAEAccountID}`', async () => {
    await this.searchAndOpenAccountNumber(MAEAccountID);
    await attachScreenshot(this.page, 'Searched and opened MAE Account ID');
    });
  }

  async selectValueInDropdown(dropdown: Locator, value: string) {
    stepLogger(`Selecting value in dropdown: ${value}`);
    await dropdown.waitFor({ state: 'visible', timeout: 30000 });
    await dropdown.selectOption({ label: value });
    await dropdown.click();
  }

  async searchAndOpenAccountNumber(ebsNumber: string) {
    stepLogger(`Searching and opening account number: ${ebsNumber}`);
    await this.selectValueInDropdown(this.selectTypes, 'MAE Account ID');
    await this.searchfield.fill(ebsNumber);
    await this.searchIcon.click();
    await this.accountList.first().waitFor({ state: 'visible', timeout: 30000 });
    await this.accountList.first().click();
  }

  async ClickAccessManagementTab() {
  //stepLogger('Clicking on Access Management Tab');
  await test.step('Clicking on Access Management Tab', async () => {
    await this.AccessManagement.waitFor({ state: 'visible', timeout: 5000 });
    await this.AccessManagement.click();
  });
  }

async groupsCheck(): Promise<string> {
  return await test.step('Checking Groups Point Toggle', async () => {
    const label = await this.groupsPointLabel.textContent();

    if (label === 'Disabled') {
      await this.groupsPointToggle.click();
      await this.page.waitForTimeout(2000);
      return 'Enabled';
    } else if (label === 'Enabled') {
      await this.groupsPointToggle.click();
      await this.page.waitForTimeout(2000);
      return 'Disabled';
    }

    return label || '';
  });
}

  async SaveAndAddAuditNote(Note: string) {
    //stepLogger('Saving changes and adding audit note');
    await test.step('Saving changes and adding audit note', async () => {
    await this.SaveBtn.scrollIntoViewIfNeeded();
    await this.SaveBtn.click();
    await this.AddAuditNoteLabel.waitFor({ state: 'visible', timeout: 15000 });
    await this.textAreaNote.fill(Note);
    await this.AddNoteAndContinue.waitFor({ state: 'visible', timeout: 3000 });
    await this.AddNoteAndContinue.click();
    });
  }

  async getSignoutdropdown() {
    stepLogger('Clicking on Signout dropdown');
    await test.step('Clicking on Signout dropdown', async () => {
    await this.Signoutdropdown.click();
    await this.SignoutBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.SignoutBtn.click();
    await this.page.waitForTimeout(5000); // Wait for signout to complete
    });
  }

  async clickSignoutBtn() {
    stepLogger('Clicking on Signout button');   
    await test.step('Clicking on Signout button', async () => {
    await this.SignoutBtn.click();
    });
  }


  async verifyClickAccessManagementTab() {
  stepLogger('Verifying click on Access Management Tab');
  await test.step('Verifying click on Access Management Tab', async () => {
    try {
      await this.AccessManagement.waitFor({ state: 'visible', timeout: 5000 });
      await this.AccessManagement.waitFor({ state: 'attached', timeout: 10000 });
      await this.AccessManagement.click();
      await this.page.screenshot({ path: 'AccessManagementTab.png' });
    } catch (e) {
      console.error("Failed to click on AccessManagementTab", e);
      throw e;
    }
  });
  }

  async VerifyJWTToken(): Promise<string> {
  stepLogger('Verifying JWT Token Enabled/Disabled');
  return await test.step('Verifying JWT Token Enabled/Disabled', async () => {
  let token = "";
  try {
    await this.JWTLabel.waitFor({ state: 'visible', timeout: 3000 });

    const toggleHandle = await this.JWTToggle.elementHandle();
    if (toggleHandle) {
      await this.page.evaluate((el) => el.scrollIntoView(), toggleHandle);
    } else {
      throw new Error("JWTToggle element not found");
    }

    const labelText = await this.JWTLabel.textContent();
    if (labelText?.includes("Disabled")) {
      await this.JWTToggle.click();
      token = '"Y"';
    } else if (labelText?.includes("Enabled")) {
      await this.JWTToggle.click();
      token = '"N"';
    }

    await this.page.screenshot({ path: 'VerifyJWTToken.png' });
  } catch (e) {
    console.error("Failed to validate JWT token enabled", e);
    throw e;
  }

  return token;
});
}


  async verifyAuditTab(note: string) {
  stepLogger('Verifying Audit tab with note');
  await test.step('Verifying Audit tab with note', async () => {
    try {
      await this.AuditTab.scrollIntoViewIfNeeded();
      await this.AuditTab.waitFor({ state: 'attached', timeout: 10000 });
      await this.AuditTab.click();
      await this.page.waitForTimeout(6000);
      await this.RecentHistoryLabel.waitFor({ state: 'visible', timeout: 10000 });
      const historyText = await this.VerifyAuditHistory.textContent();
      if (!historyText?.includes(note)) {
        throw new Error("Note not found in audit history");
      }
    } catch (e) {
      console.error("Failed to verify Audit tab history", e);
      throw e;
    }
  });
  }

  async VerifyCompassTab() {
  stepLogger('Verifying Compass Tab');
  await test.step('Verifying Compass Tab', async () => {
    try {
      await this.CompassTab.waitFor({ state: 'attached', timeout: 5000 });
      await this.CompassTab.click();
      await this.page.screenshot({ path: 'CompassTab.png' });
    } catch (e) {
      console.error("Failed to click Compass Tab", e);
      throw e;
    }
  });
  }

async userNameAndPasswordLoginCheck(): Promise<string> {
  return await test.step('Checking UserName and Password Login under Compass Tab', async () => {
    let auth = "";

    try {
      await this.page.screenshot({ path: 'UserNamePasswordLabel.png' });
      const labelText = await this.userNamePasswordLoginLabel.textContent();

      if (labelText?.includes("Disabled")) {
        const labelHandle = await this.userNamePasswordLoginLabel.elementHandle();
        if (!labelHandle) throw new Error("UserNamePasswordLoginLabel element not found");  

        await this.page.evaluate(el => el.scrollIntoView(), labelHandle);
        await this.page.waitForTimeout(5000);

        await this.userNamePasswordLoginToggle.click();
        await this.IpaccessCheckbox.waitFor({ state: 'attached', timeout: 5000 });
        await this.IpaccessCheckbox.click();
        await this.AllowAnonymousOrgAuth.click();
        auth = "true";

      } else if (labelText?.includes("Enabled")) {
        const labelHandle = await this.userNamePasswordLoginLabel.elementHandle();
        if (!labelHandle) throw new Error("UserNamePasswordLoginLabel element not found");

        await this.page.evaluate(el => el.scrollIntoView(), labelHandle);
        await this.page.waitForTimeout(5000);

        await this.userNamePasswordLoginToggle.click();
        auth = "false";
      }

    } catch (e) {
      console.error("Failed to validate Username and Password Login check under Compass Tab", e);
      throw e;
    }

    return auth;
  });
}


async clickReportTab() {
  //stepLogger('Clicking on Report Tab'); 
  await test.step('Clicking on Report Tab', async () => {
  try {
    await this.reportTab.waitFor({ state: 'visible', timeout: 5000 });
    await this.reportTab.waitFor({ state: 'attached', timeout: 10000 });
    await this.reportTab.click();
    await attachScreenshot(this.page, 'ReportTab_Clicked.png');
  } catch (e) {
    console.error('Failed to click on ReportTab', e);
    throw e;
  }
   });
}

async verifySubscriptionUsageReport() {
  stepLogger('Verifying Subscription Usage Report');
  await test.step('Verifying Subscription Usage Report', async () => {
  try {
    await this.UsageReport.waitFor({ state: 'visible', timeout: 15000 });
    await expect(this.UsageReport).toBeVisible();
    await expect(this.UserReport).toBeVisible();

    await this.page.waitForTimeout(15000); // Equivalent to PublicCommon.waitForSec(15)
    await this.page.screenshot({ path: 'UsageReport_Visible.png' });

    // Scroll down using keyboard
    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'After_PageDown_1.png' });

    await this.page.keyboard.press('PageDown');
    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'After_PageDown_2.png' });

    await this.UserReport.click();
    await this.page.waitForTimeout(20000); // Equivalent to PublicCommon.waitForSec(20)

    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'Final_Scroll_UserReport.png' });
  } catch (e) {
    console.error('Failed to verify Subscription Usage Report', e);
    throw e;
  }
});
  }

  async validateProductEntitlementTab() {
  stepLogger('Clicking on Product Entitlement');

  await test.step('Click on Product Entitlement tab', async () => {
    try {
      await this.ProductEntLink.scrollIntoViewIfNeeded();
      await this.ProductEntLink.waitFor({ state: 'visible', timeout: 10000 });
      await this.ProductEntLink.click();
      await this.page.waitForTimeout(10000); // equivalent to waitForSec(10)
    } catch (e) {
      console.error('Failed to click on Product Entitlement tab', e);
      throw e; // fail the test
    }
  });
}

async verifyStockcode_Graceperiodcheck_1(stockcode: string): Promise<string | null> {
  return await test.step('Verify stockcode and grace period', async () => {
    let selectedGracePeriod: string | null = null;

    try {
      // Enter stock code
      await this.StockCodeForm.fill('');
      await this.StockCodeForm.fill(stockcode);
      await test.info().attach('Entered Stock Code', {
        body: Buffer.from(stockcode),
        contentType: 'text/plain',
      });

      // Click Search button
      await this.SearchBtn.click();
      await this.page.waitForTimeout(2000);

      // Click on Grace Period dropdown
      await this.GracePeriodDDN.scrollIntoViewIfNeeded();
      await this.GracePeriodDDN.click();
      await this.page.waitForTimeout(1000);

      // Wait for grace period options
      const graceOptions = this.page.locator("[id^='react-select-8-option']");
      const count = await graceOptions.count();
      if (count === 0) throw new Error("No grace period options found.");

      // Pick a random option
      const index = Math.floor(Math.random() * count);
      const selectedOption = graceOptions.nth(index);
      selectedGracePeriod = (await selectedOption.textContent())?.trim() || null;

      // Click using JS if needed
      const optionHandle = await selectedOption.elementHandle();
      if (optionHandle) {
        await this.page.evaluate((el) => {
          if (el && 'click' in el) (el as HTMLElement).click();
        }, optionHandle);
      } else {
        throw new Error("Element handle not found for grace option");
      }

      await test.info().attach('Selected Grace Period', {
        body: Buffer.from(selectedGracePeriod || 'None'),
        contentType: 'text/plain',
      });

      // Wait and click Save if enabled
      await this.SaveBtn.waitFor({ state: 'visible', timeout: 5000 });
      if (await this.SaveBtn.isEnabled()) {
        await this.SaveBtn.click();
      } else {
        throw new Error("Save button is disabled after selecting grace period.");
      }

      return selectedGracePeriod;

    } catch (error) {
      console.error("Grace period selection failed:", error);
      throw error;
    }
  });
}







}
