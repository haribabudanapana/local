import { Page, Locator } from '@playwright/test';

export class ConduiteLoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;
  private signInLink: Locator;

  constructor(private page: Page) {
    // Email input
    this.emailInput = this.page.locator('input[placeholder="Email"]');

    // Password input
    this.passwordInput = this.page.locator('input[placeholder="Password"]');

    // Sign In button (form submit)
    this.signInButton = this.page.locator('button[type="submit"]:has-text("Sign in")');

    // Sign In link in the navbar
    this.signInLink = this.page.locator('a.nav-link[href="/login"]');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignInButton();
  }
}
