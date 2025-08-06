import { Page, expect, Locator } from '@playwright/test';

export class CompassHomePage {
  private page: Page;
  private greetingHeading: Locator;

  private profileMenu: Locator;
  private logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.greetingHeading = page.getByTestId('greeting-heading');
    // Select the profile menu using a robust XPath based on class and SVG icon, not the username
    // this.profileMenu = page.locator(
    //   "//a[contains(@class, 'header-dropdown') and contains(@class, 'dropdown-toggle') and .//svg[contains(@data-icon, 'user-circle')]]"
    // );
    this.profileMenu = page.getByRole('link', { name: 'n24q3s3t1 lname' });
    this.logoutButton = page.getByTestId('test-account_menu_ipad_logout');
  }

  /**
   * Verifies the greeting heading contains the expected welcome text.
   * @param expectedName The expected name to appear in the greeting (e.g., 'Welcome Back, John Doe')
   */
  async verifyWelcomeMessage(expectedName: string) {
    await expect(this.greetingHeading).toContainText(expectedName);
  }

  async openProfileMenu() {
    await this.profileMenu.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async logout() {
    await this.openProfileMenu();
    await this.clickLogout();
  }
}
