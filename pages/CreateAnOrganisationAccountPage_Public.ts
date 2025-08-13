import { Page, Locator } from '@playwright/test';

export class CreateAnOrganisationAccountPage_Public {
	page: Page;
  organisationTextbox: Locator;
  pageheader: Locator;
  createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.organisationTextbox = page.locator("#organization_name");
    this.pageheader = page.locator("//*[text()='Create an Organizational Account']");
    this.createAccountButton = page.locator("//button[@title='Create Account']");
  
  }

 



}