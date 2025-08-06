import { Page, Locator } from '@playwright/test';

export class SelectApplicationPage {
  private page: Page;
  private acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole('button', { name: 'Accept All Cookies' });
  }

  /**
   * Selects an application by its name (e.g., 'Compass Select', 'Membership', 'SpecBuilder', 'Web Store')
   * @param appName The visible text of the application to select
   */
  async selectApplication(appName: string) {
    const appButton = this.page.locator('form').filter({ hasText: appName }).getByRole('button');
    await appButton.click();
  }

  async acceptAllCookies() {
    await this.acceptCookiesButton.click();
  }
}
