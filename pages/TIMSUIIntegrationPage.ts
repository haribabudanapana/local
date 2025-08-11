import { expect, Locator, Page, test } from '@playwright/test';

export class TIMSUIIntegrationPage {
  readonly page: Page;
  readonly TIMSbtn: Locator;
  readonly manageTenantsHeader: Locator;

  readonly addTenantBtn: Locator;
  readonly newDraftTenantBtn: Locator;
  readonly tenantDetailsHeader: Locator;

  readonly tenantCodeField: Locator;
  readonly nextButton: Locator;
  readonly tenantCodeErrorMsg1: Locator;
  readonly tenantCodeErrorMsg2: Locator;

  readonly supportEmail: Locator;
  readonly supportEmailError1: Locator;
  readonly supportEmailError2: Locator;

  readonly supportWebPageUrl: Locator;
  readonly supportWebPageURLError1: Locator;
  readonly supportWebPageURLError2: Locator;

  readonly tenantAddress: Locator;
  readonly tenantAddressError1: Locator;
  readonly tenantAddressError2: Locator;

  readonly exitButton: Locator;
  readonly attentionPopup: Locator;
  readonly yesButton: Locator;
  readonly noButton: Locator;
  readonly viewDraftTenantsBtn: Locator;
  readonly ViewDraftTenantsHeading: Locator;
  readonly ViewDraftTenantsTable: Locator;
  readonly ShowDropDown: Locator;
  readonly nextPage1: Locator;
  readonly pageNumList: Locator;
  readonly goToPageInput_ViewDraftTenants: Locator;
  readonly General: Locator;
  readonly ExitBtn: Locator;
  readonly YesBtn: Locator;
  readonly NoBtn: Locator;
  readonly Home: Locator;


  constructor(page: Page) {
    this.page = page;

    this.TIMSbtn = page.locator('//input[@data-testid="TIMS-button"]');
    this.manageTenantsHeader = page.locator('//h3[text()="Manage Tenants"]');
    this.addTenantBtn = page.locator('//button[text()="Add Tenant"]');
    this.newDraftTenantBtn = page.locator('//button[text()="New Draft Tenant"]');
    this.tenantDetailsHeader = page.locator('//*[text()="Tenant Details"]');

    this.tenantCodeField = page.locator('[name="tenantCode"]');
    this.nextButton = page.locator('//button[contains(text(),"Next")]');
    this.tenantCodeErrorMsg1 = page.locator("//p[text()='Tenant Code can only contain alphabets and numbers.']");
    this.tenantCodeErrorMsg2 = page.locator("//p[text()='Tenant Code must be at most 50 characters']");

    this.supportEmail = page.locator('[name="support-email"]');
    this.supportEmailError1 = page.locator("//p[text()='Invalid email address']");
    this.supportEmailError2 = page.locator("//p[text()='Support Email must be at most 320 characters']");

    this.supportWebPageUrl = page.locator('[name="supportWebPageUrl"]');
    this.supportWebPageURLError1 = page.locator("//p[text()='Support Web Page URL must be a valid URL']");
    this.supportWebPageURLError2 = page.locator("//p[text()='Support Web Page URL must be at most 255 characters']");

    this.tenantAddress = page.locator('[name="displayAddress"]');
    this.tenantAddressError1 = page.locator("//p[contains(text(),'Tenant Address can only contain alphabets')]");
    this.tenantAddressError2 = page.locator("//p[text()='Tenant Address must be at most 255 characters']");

    this.exitButton = page.locator('//button[contains(text(),"Exit")]');
    this.attentionPopup = page.locator('//div[contains(text(),"Unsaved Progress will be lost")]');
    this.yesButton = page.locator('//button[text()="Yes"]');
    this.noButton = page.locator('//button[text()="No"]');
    this.viewDraftTenantsBtn = page.locator('//button[text()="View Draft Tenants"]');
    this.ViewDraftTenantsHeading = page.locator('//h3[text()="View Draft Tenants"]');
    this.ViewDraftTenantsTable = page.locator('//table[@id="draft-tenants-list"]');
    this.ShowDropDown = page.locator('#page-size-select');
    this.nextPage1 = page.locator('(//span[text()="Next"])[1]');
    this.pageNumList = page.locator("//div[contains(@class,'align-items-center gap-1')]");
    this.goToPageInput_ViewDraftTenants = page.locator('//input[@id="go-to-page"]');
    this.General = page.locator('//h5[text()="General"]');
    this.ExitBtn = page.locator('//button[contains(text(),"Exit")]');
    this.YesBtn = page.locator('//button[text()="Yes"]');
    this.NoBtn = page.locator('//button[text()="No"]');
    this.Home = page.locator('//span[text()="Home"]');
  }

   async selectTIMSEntitlement() {
    await test.step('Click on TIMS Entitlement', async () => {
      try {
        await this.TIMSbtn.waitFor({ state: 'visible', timeout: 20000 });
        await this.TIMSbtn.click();
        await this.page.waitForTimeout(30000); // equivalent to waitForSec(15)
        await expect(this.page).toHaveTitle('TIMS UI');
        await this.page.screenshot({ path: 'selectTIMSEntitlement_1.png' });
        await this.manageTenantsHeader.waitFor({ state: 'visible', timeout: 10000 });
      } catch (e) {
        console.error('Unable to select TIMS Entitlement', e);
        throw e;
      }
    });
  }

  async clickAddTenant() {
    await test.step('Click Add Tenant and New Draft Tenant buttons', async () => {
      await this.addTenantBtn.click();
      await this.page.screenshot({ path: 'ClickAddTenant_1.png' });
      await this.newDraftTenantBtn.click();
      await this.tenantDetailsHeader.waitFor({ timeout: 10000 });
      await this.page.screenshot({ path: 'ClickAddTenant_2.png' });
    });
  }

  async validateTenantCodeField(): Promise<string> {
  let tenantCode = '';
  
  await test.step('Validate Tenant Code field errors and enter valid code', async () => {
    // Special characters check
    await this.tenantCodeField.fill('abc$ #');
    await this.nextButton.click();
    await this.page.screenshot({ path: 'validateTenantCodeField_1.png' });
    await expect(this.tenantCodeErrorMsg1).toBeVisible();

    // Length > 50 check
    await this.tenantCodeField.fill('a'.repeat(52));
    await this.nextButton.click();
    await this.page.screenshot({ path: 'validateTenantCodeField_2.png' });
    await expect(this.tenantCodeErrorMsg2).toBeVisible();

    // Valid value entry
    const randomString = Math.random().toString(36).substring(2, 7).toUpperCase(); // 5 random chars
    const randomNum = Math.floor(100 + Math.random() * 900); // 3-digit random number
    tenantCode = `Auto${randomString}${randomNum}`;

    await this.tenantCodeField.fill(tenantCode);
    await this.page.screenshot({ path: 'validateTenantCodeField_3.png' });
  });

  return tenantCode;
}


  async validateSupportEmailField(): Promise<string> {
  let supportEmail = '';

  await test.step('Validate Support Email field with invalid and valid input', async () => {
    // Invalid email check
    await this.supportEmail.fill('abc@@yopmail');
    await this.page.screenshot({ path: 'validateSupportEmailField_1.png' });
    await expect(this.supportEmailError1).toBeVisible();

    // Email > 320 chars
    const longEmail = 'a'.repeat(325) + '@yopmail.com';
    await this.supportEmail.fill(longEmail);
    await this.page.screenshot({ path: 'validateSupportEmailField_2.png' });
    await expect(this.supportEmailError2).toBeVisible();

    // Valid email input
    const randomStr = Math.random().toString(36).substring(2, 7);
    supportEmail = `${randomStr}@yopmail.com`;
    await this.supportEmail.fill(supportEmail);
    await this.page.screenshot({ path: 'validateSupportEmailField_3.png' });
  });

  return supportEmail;
}


  async validateSupportWebPageURLField(): Promise<string> {
  let validUrl = '';

  await test.step('Validate Support Web Page URL with invalid and valid URLs', async () => {
    // Invalid URL
    await this.supportWebPageUrl.fill('https://abc');
    await this.page.screenshot({ path: 'validateSupportWebPageURLField_1.png' });
    await expect(this.supportWebPageURLError1).toBeVisible();

    // URL longer than 255 characters
    const longUrl = 'https://' + 'a'.repeat(260) + '.com';
    await this.supportWebPageUrl.fill(longUrl);
    await this.page.screenshot({ path: 'validateSupportWebPageURLField_2.png' });
    await expect(this.supportWebPageURLError2).toBeVisible();

    // Valid URL (randomized)
    const randomStr = Math.random().toString(36).substring(2, 7);
    validUrl = `https://${randomStr}.com`;
    await this.supportWebPageUrl.fill(validUrl);
    await this.page.screenshot({ path: 'validateSupportWebPageURLField_3.png' });
  });

  return validUrl;
}


  async validateTenantAddressField(): Promise<string> {
  let validAddress = '';

  await test.step('Validate Tenant Address field with invalid and valid input', async () => {
    // Invalid special character "_"
    await this.tenantAddress.fill('abc_');
    await this.page.screenshot({ path: 'validateTenantAddressField_1.png' });
    await expect(this.tenantAddressError1).toBeVisible();

    // More than 255 characters
    await this.tenantAddress.fill('a'.repeat(250) + '1234567890');
    await this.page.screenshot({ path: 'validateTenantAddressField_2.png' });
    await expect(this.tenantAddressError2).toBeVisible();

    // Valid randomized address with special chars
    const randomValidAddress = Math.random().toString(36).substring(2, 7) + Math.floor(10000 + Math.random() * 90000) + '$#';
    await this.tenantAddress.fill(randomValidAddress);
    await this.page.screenshot({ path: 'validateTenantAddressField_3.png' });

    validAddress = randomValidAddress;
  });

  return validAddress;
}


 async validateExitButton() {
  await test.step('Validate Exit button and confirmation popup', async () => {
    await this.page.waitForTimeout(5000); // waitForSec(5)

    await this.exitButton.scrollIntoViewIfNeeded(); // mimic scrollToElement
    await this.exitButton.click(); // click

    await this.page.screenshot({ path: 'validateExitButton_1.png' });

    await this.attentionPopup.waitFor({ timeout: 5000 }); // wait for popup

    await expect(this.attentionPopup).toBeVisible(); // assert popup
    await expect(this.yesButton).toBeVisible(); // assert yes button
    await expect(this.noButton).toBeVisible(); // assert no button

    await this.page.screenshot({ path: 'validateExitButton_2.png' });
  });
}


async validateYesButton(tenantCode: string) {
    await test.step('Validate Yes button', async () => {
      try {
        await this.YesBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.YesBtn.click();

        await this.page.screenshot({ path: 'validateYesButton_Clicked.png' });

        await this.VerifyDraftWLTenantsRecords();
        await this.ValidateListOfViewDraftTenants(tenantCode);

      } catch (e) {
        console.error('Failed to validate Yes button', e);
        throw e;
      }
    });
  }

   async VerifyDraftWLTenantsRecords() {
    await test.step('Validate List of Tenants in Tabular format', async () => {
      await this.viewDraftTenantsBtn.scrollIntoViewIfNeeded();
      await this.viewDraftTenantsBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.viewDraftTenantsBtn.click();
      await this.page.waitForURL('**/view/draft-tenants');
      await expect(this.page).toHaveURL(/.*view\/draft-tenants/);
      await expect(this.ViewDraftTenantsHeading).toBeVisible();
      await expect(this.ViewDraftTenantsTable).toBeVisible();
      await this.page.screenshot({ path: 'VerifyDraftWLTenantsRecords.png' });
    });
  }

  async ValidateListOfViewDraftTenants(tenantCode: string) {
    await test.step(`Validate List of View Draft Tenants - ${tenantCode}`, async () => {
      await this.ViewDraftTenantsTable.waitFor({ state: 'visible', timeout: 10000 });
      await this.ShowDropDown.selectOption({ label: 'Show 50' });
      await this.page.waitForTimeout(5000);
      await this.page.screenshot({ path: 'ValidateListOfViewDraftTenants_dropdown.png' });
      await this.nextPage1.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(5000);
      await this.validateTenantNameInListOfViewDraftTenants(tenantCode, 'all');
    });
  }

  async validateTenantNameInListOfViewDraftTenants(tenantCode: string, pagination: string) {
  const tenantCodeUpper = tenantCode.toUpperCase();
  const tenantLocator = (code: string) => this.page.locator(`//td[text()='${code}']`);
  const tenantDotsLocator = this.page.locator(`//td[text()='${tenantCodeUpper}']//following-sibling::td[contains(@class,'row-actions')]//a[@href='#']`);
  const tenantResumeLocator = this.page.locator(`//td[text()='${tenantCodeUpper}']//following-sibling::td[contains(@class,'row-actions')]//button[text()='Resume']`);

  const pageText = await this.pageNumList.textContent();
  const maxPageNum = parseInt((pageText?.split('of ')[1] || '1').trim());
  let tenantFound = false;

  if (pagination === 'last') {
    await this.goToPageInput_ViewDraftTenants.fill(`${maxPageNum}`);
    await this.goToPageInput_ViewDraftTenants.press('Enter');
    await this.page.waitForTimeout(2000);

    if (await tenantLocator(tenantCodeUpper).count() > 0) {
      tenantFound = true;
      await tenantLocator(tenantCodeUpper).scrollIntoViewIfNeeded();
      await this.page.screenshot({ path: `TenantFound_LastPage_${tenantCode}.png` });
      await expect(tenantLocator(tenantCodeUpper)).toBeVisible();
    } else {
      // fallback to full search if not on last page
      await this.validateTenantNameInListOfViewDraftTenants(tenantCode, 'all');
      return;
    }
  } else if (pagination === 'all') {
    for (let i = 1; i <= maxPageNum; i++) {
      if (await tenantLocator(tenantCodeUpper).count() > 0) {
        tenantFound = true;
        await tenantLocator(tenantCodeUpper).scrollIntoViewIfNeeded();
        await this.page.screenshot({ path: `TenantFound_Page${i}_${tenantCode}.png` });
        await expect(tenantLocator(tenantCodeUpper)).toBeVisible();
        break;
      } else {
        await this.nextPage1.scrollIntoViewIfNeeded();
        await this.page.screenshot({ path: `Tenant_Not_Found_Page${i}.png` });

        // Don't click next on last page
        if (i < maxPageNum) {
          await this.nextPage1.click();
          await this.page.waitForTimeout(3000);
        }
      }
    }
  }

  if (!tenantFound) {
    await this.page.screenshot({ path: `Tenant_Not_Found_${tenantCode}.png` });
    throw new Error(`Tenant code "${tenantCode}" was not found in any pages.`);
  }

  // Only proceed if tenant was found
  await tenantDotsLocator.scrollIntoViewIfNeeded();
  await tenantDotsLocator.click();
  await this.page.screenshot({ path: `TenantDots_Clicked_${tenantCode}.png` });
//  await this.page.waitForTimeout(5000);

  await tenantResumeLocator.click();
  await expect(this.General).toBeVisible({ timeout: 20000 });
  await this.page.screenshot({ path: `Tenant_Resume_Page_${tenantCode}.png` });
}


  async ClickExitButton(): Promise<void> {
    await test.step('Click Exit Button', async () => {
      try {
        await this.ExitBtn.scrollIntoViewIfNeeded();
        await this.ExitBtn.waitFor({ state: 'attached', timeout: 100000 });
        await this.ExitBtn.waitFor({ state: 'visible', timeout: 100000 });
        await this.ExitBtn.click();
        await this.page.screenshot({ path: 'ClickExitButton.png' });
        await this.page.waitForTimeout(10000);
      } catch (error) {
        console.error("Failed to Click Exit Button", error);
        throw error;
      }
    });
  }

  async validateNoButton(): Promise<void> {
    await test.step('Validate No Button', async () => {
      try {
        await this.page.screenshot({ path: 'ValidateNoButton_1.png' });
        await this.NoBtn.waitFor({ state: 'visible', timeout: 30000 });
        await this.NoBtn.click();
        await this.Home.scrollIntoViewIfNeeded();
        await this.ViewDraftTenantsHeading.waitFor({ state: 'visible', timeout: 10000 });
        expect(await this.ViewDraftTenantsHeading.isVisible()).toBeTruthy();
        await this.page.screenshot({ path: 'ValidateNoButton_2.png' });
      } catch (error) {
        console.error("Failed to validate No button", error);
        throw error;
      }
    });
  }



}
