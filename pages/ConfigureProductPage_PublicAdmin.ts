import { Page, Locator } from '@playwright/test';

export class ConfigureProductPage_PublicAdmin {
	page: Page;
  standardItemTypeDropDown: Locator;
  languageCodeDropDown: Locator;
  productQuantityDropDown: Locator;
  okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.standardItemTypeDropDown = page.locator("select#attribute688");
    this.languageCodeDropDown = page.locator("select#attribute691");
    this.productQuantityDropDown = page.locator("input#product_composite_configure_input_qty");
    this.okButton = page.locator(".page-actions-buttons button.action-primary");

      
  }

 



}