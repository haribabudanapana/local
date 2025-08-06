
import { Page, Locator } from '@playwright/test';

export class ASTMLoginPage {
  private page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;
  private cookieAcceptBtn: Locator;
  private agreeAndContinue: Locator;
  private Compass_SignInButton: Locator;
  private Compass_Username: Locator;
  private Compass_Password: Locator;
  private UnexpectedErrorBanner: Locator;
  private spinner: Locator;
  private MenuBar: Locator;
  private sideBarOptions: Locator;
  private AccountSelect: Locator;

  private rememberMeCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.rememberMeCheckbox = page.locator('#rememberMe');
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

  async enterUsername(username: string) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }


  // ...existing code...

  async checkRememberMe() {
    await this.rememberMeCheckbox.check();
  }

  async enterPassword(password: string) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async login(username: string, password: string, rememberMe: boolean = false) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSignIn();
  }

  async CompassLogin(email: string, password: string) {
    await this.page.goto('https://stage-compass.astm.org/');
    if (await this.cookieAcceptBtn.isVisible({ timeout: 10000 })) {
      await this.cookieAcceptBtn.click();
    }
    if (!(await this.Compass_Username.isVisible({ timeout: 90000 }))) {
      if (await this.agreeAndContinue.isVisible({ timeout: 10000 })) {
        await this.agreeAndContinue.click();
      }
      await this.page.waitForTimeout(5000);
      if (await this.Compass_SignInButton.isVisible({ timeout: 10000 })) {
        await this.Compass_SignInButton.click();
      }
      await this.Compass_Username.waitFor({ state: 'visible', timeout: 30000 });
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
    await this.AccountSelect.waitFor({ state: 'visible', timeout: 30000 });
    const accountBtn = this.page.locator(`//button[contains(., '${accountToSelect}')]`);
    await accountBtn.click();
    await this.spinner.waitFor({ state: 'hidden', timeout: 30000 });
  }

  async ValidateGroupsLink(CompassPointToggle: string, GroupsLink: string) {
    await this.MenuBar.click();
    if (CompassPointToggle === 'Enabled' || CompassPointToggle === 'Disabled') {
      await this.validateMenuBarOptions(GroupsLink);
    }
  }

  async validateMenuBarOptions(Link: string): Promise<boolean> {
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
