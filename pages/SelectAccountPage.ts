import { Page, Locator } from '@playwright/test';

export class SelectAccountPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Selects an account by its visible text (e.g., 'ASTM InternationalSelect')
   * @param accountName The visible text of the account to select
   */
  async selectAccount(accountName: string) {
    const accountButton = this.page.getByRole('paragraph').filter({ hasText: accountName }).getByRole('button');
    await accountButton.click();
  }
}
