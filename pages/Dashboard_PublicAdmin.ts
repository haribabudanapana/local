import { Page, Locator } from '@playwright/test';

export class Dashboard_PublicAdmin {
	page: Page;
  profileDropDown: Locator;
  signoutButton: Locator;
  accountSettings: Locator;
  customerView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileDropDown = page.locator("a[title='My Account']");
    this.signoutButton = page.locator("a.account-signout");
    this.accountSettings = page.locator("a[title='Account Setting']");
    this.customerView = page.locator("a[title='Customer View']");

      
  }

 



}