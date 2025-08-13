import { Page, Locator } from '@playwright/test';

export class CommonBillingShippingThirdPartyTestHelper_Public {
	page: Page;
  firstNameTextbox: Locator;
  lastNameTextbox: Locator;
  streetLabel: Locator;
  cityLabel: Locator;
  stateLabel: Locator;
  postCodeLabel: Locator;
  countryLabel: Locator;
  phoneLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTextbox = page.locator("div[name='billingAddress.firstname'] input");
    this.lastNameTextbox = page.locator("div[name='billingAddress.lastname'] input");
    // this.streetLabel = page.locator("//fieldset[@id='billing-new-address-form']/fieldset/legend/span");
    this.streetLabel = page.locator("//div[@name='billingAddress.street.0']//span[1]");
    this.cityLabel = page.locator("//div[@name='billingAddress.city']//span");
    this.stateLabel = page.locator("//div[@name='billingAddress.region']//span");
    this.postCodeLabel = page.locator("//div[@name='billingAddress.postcode']//span");
    this.countryLabel = page.locator("//div[@name='billingAddress.country_id']//span");
    this.phoneLabel = page.locator("//div[@name='billingAddress.telephone']//span[text()='Phone']");

      
  }

 



}