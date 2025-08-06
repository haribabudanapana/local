import { Page, Locator } from '@playwright/test';
import { stepLogger } from '../utils/logger';

export class LoginPage {
  readonly page: Page;
  readonly cookieAcceptBtn: Locator;
  readonly agreeAndContinue: Locator;
  readonly Compass_SignInButton: Locator;
  readonly Compass_Username: Locator;
  readonly Compass_Password: Locator;
  readonly UnexpectedErrorBanner: Locator;
  readonly spinner: Locator;
  readonly MenuBar: Locator;
  readonly sideBarOptions: Locator;
  readonly AccountSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieAcceptBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
    this.agreeAndContinue = page.locator("//button[text()='Agree and Continue']");
    this.Compass_SignInButton = page.locator("#header-tabs .user-sign-in");
    this.Compass_Username = page.locator("//input[@id='userName']");
    this.Compass_Password = page.locator("//input[@id='encPass']");
    this.UnexpectedErrorBanner = page.locator("//h2[text()='An unexpected error has occurred.']");
    this.spinner = page.locator(".spinner");
    this.MenuBar = page.locator("//a[@class='brand-logo']/label/span");
    this.sideBarOptions = page.locator("//div[@id='sidebar']/div/p/a");
    this.AccountSelect = page.locator("//h1[contains(text(),'Select an Account')]");
  }

  async CompassLogin(email: string, password: string) {
    stepLogger('Logging in to Compass with email and password');
  await this.page.goto('https://stage-compass.astm.org/');

  if (await this.cookieAcceptBtn.isVisible({ timeout: 10000 })) {
    await this.cookieAcceptBtn.click();
  }

  if (!(await this.Compass_Username.isVisible({ timeout: 90000 }))) {

    // Hard wait before checking 'Agree and Continue'
    await this.page.waitForTimeout(90000);

    if (await this.agreeAndContinue.isVisible({ timeout: 10000 })) {
      await this.agreeAndContinue.click();

    }

    if (await this.Compass_SignInButton.isVisible({ timeout: 10000 })) {
      await this.Compass_SignInButton.click();
    }

    await this.Compass_Username.waitFor({ state: 'visible', timeout: 60000 });
  }

  await this.Compass_Username.fill(email);
  await this.Compass_Password.fill(password);
  await this.page.locator("//button[text()='Sign In']").click();

  await this.page.waitForTimeout(10000);

  if (await this.UnexpectedErrorBanner.isVisible({ timeout: 10000 })) {
    await this.page.reload();
  }

  await this.spinner.waitFor({ state: 'hidden', timeout: 10000 });

  if (await this.cookieAcceptBtn.isVisible()) {
    await this.cookieAcceptBtn.click();
  }

  await this.page.waitForTimeout(10000);
}


  async selectAnAccountCompass(accountToSelect: string) {
  stepLogger(`Selecting account: ${accountToSelect} in Compass`);
  try {
 
    if (await this.AccountSelect.isVisible({ timeout: 30000 })) {
      const accountBtn = this.page.locator(`//button[contains(., '${accountToSelect}')]`);

      if (await accountBtn.isVisible({ timeout: 5000 })) {
        await accountBtn.click();
        // Wait for the spinner to disappear
        await this.spinner.waitFor({ state: 'hidden', timeout: 30000 });
      }
    }
  } catch (error) {
    console.error(" Failed to select an account in Compass page", error);
    throw new Error(` Failed to select an account in Compass: ${error}`);
  }
}


  async ValidateGroupsLink(CompassPointToggle: string, GroupsLink: string) {
    stepLogger(`Validating Groups Link: ${GroupsLink} with CompassPointToggle: ${CompassPointToggle}`);
    await this.MenuBar.click();
    if (CompassPointToggle === 'Enabled' || CompassPointToggle === 'Disabled') {
      await this.validateMenuBarOptions(GroupsLink);
    }
  }

  async validateMenuBarOptions(Link: string): Promise<boolean> {
    stepLogger(`Validating Menu Bar Options for Link: ${Link}`);
    const groupElements = await this.sideBarOptions.all();
    for (const groupElement of groupElements) {
      if ((await groupElement.textContent()) === Link) {
        await groupElement.click();
        return true;
      }
    }
    return false;
  }
}
