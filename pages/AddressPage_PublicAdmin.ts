import { Page, Locator, expect } from '@playwright/test';

export class AddressPage_PublicAdmin {
  private page: Page;

  private accountInformationButton: Locator;
  private spinnerIcon: Locator;
  private addNewAddressButton: Locator;
  private saveAndEditCustomer: Locator;
  private saveCustomerButton: Locator;
  private addressTabActive: Locator;
  private addressTab: Locator;
  private defaultBillingAddress: Locator;
  private defaultShippingAddress: Locator;
  private defaultFreightForwardAddress: Locator;
  private saveAndContinueEdit: Locator;
  private selectButton: Locator;
  private setAsDefaultBillingOption: Locator;
  private setAsDefaultShippingOption: Locator;
  private setAsDefaultFreightForwardOption: Locator;
  private okAlertButton: Locator;
  private loadingIcon: Locator;
  private editButtonUnderTable: Locator;
  private createOrderButton: Locator;
  private newEditButtonUnderTable: Locator;
  private editButtonUnderDefaultBillingAddress: Locator;
  private editButtonUnderDefaultShippingAddress: Locator;
  private editButtonUnderDefaultFreightForwardAddress: Locator;
  private columnNamesInTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountInformationButton = page.locator('.admin__page-nav-items li:nth-of-type(2)');
    this.spinnerIcon = page.locator("div[data-component*='customer_address_listing'] div.spinner");
    this.addNewAddressButton = page.locator('button.add-new-address-button');
    this.saveAndEditCustomer = page.locator("button[title='Save and Continue Edit']");
    this.saveCustomerButton = page.locator("button[title='Save Customer']");
    this.addressTabActive = page.locator('li._active #tab_address');
    this.addressTab = page.locator('#tab_address');
    this.defaultBillingAddress = page.locator('.customer-default-billing-address-content .address_details');
    this.defaultShippingAddress = page.locator('.customer-default-shipping-address-content .address_details');
    this.defaultFreightForwardAddress = page.locator('.customer-default-freight-forward-address-content .address_details');
    this.saveAndContinueEdit = page.locator('button#save_and_continue');
    this.selectButton = page.locator('tr button.action-select');
    this.setAsDefaultBillingOption = page.locator('ul.action-menu._active li:nth-of-type(2)');
    this.setAsDefaultShippingOption = page.locator('ul.action-menu._active li:nth-of-type(3)');
    this.setAsDefaultFreightForwardOption = page.locator('ul.action-menu._active li:nth-of-type(4)');
    this.okAlertButton = page.locator('button.action-primary.action-accept');
    this.loadingIcon = page.locator('loading-mask');
    this.editButtonUnderTable = page.locator('ul.action-menu._active li:nth-of-type(1) a');
    this.createOrderButton = page.locator("button[title='Create Order']");
    this.newEditButtonUnderTable = page.locator('a.action-menu-item');
    this.editButtonUnderDefaultBillingAddress = page.locator('button.edit-default-billing-address-button');
    this.editButtonUnderDefaultShippingAddress = page.locator('button.edit-default-shipping-address-button');
    this.editButtonUnderDefaultFreightForwardAddress = page.locator('button.edit-default-freight-forward-address-button');
    this.columnNamesInTable = page.locator("table[data-role='grid'] > thead .data-grid-cell-content");
  }

  private getColumnDetailsByIndex(index: number): Locator {
    return this.page.locator(`tr.data-row td:nth-of-type(${index})`);
  }

  async clickAccountInformationButton(): Promise<boolean> {
    try {
      await this.accountInformationButton.click();
      return true;
    } catch (e) {
      console.error('Error clicking Account Information button:', e);
      return false;
    }
  }

  async clickAddNewAddressButton(): Promise<boolean> {
    try {
      await this.waitForSpinnerToDisappear();
      await this.addNewAddressButton.click();
      return true;
    } catch (e) {
      console.error('Error clicking Add New Address button:', e);
      return false;
    }
  }

  async clickSaveAndEditCustomerButton(): Promise<boolean> {
    try {
      await this.waitForSpinnerToDisappear();
      await this.saveAndEditCustomer.click();
      return true;
    } catch (e) {
      console.error('Error clicking Save and Edit Customer:', e);
      return false;
    }
  }

  async clickSaveCustomerButton(): Promise<boolean> {
    try {
      await this.waitForSpinnerToDisappear();
      await this.saveCustomerButton.click();
      return true;
    } catch (e) {
      console.error('Error clicking Save Customer:', e);
      return false;
    }
  }

  async clickOnSelectButtonByIndex(index: number): Promise<boolean> {
    try {
      const selectButtons = await this.selectButton.all();
      await selectButtons[index].scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(1000);
      await selectButtons[index].click();
      return true;
    } catch (e) {
      console.error('Error clicking Select button:', e);
      return false;
    }
  }

  async clickOnEditButtonByIndex(index: number): Promise<boolean> {
    try {
      const editButtons = await this.newEditButtonUnderTable.all();
      await editButtons[index].scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(1000);
      await editButtons[index].click();
      return true;
    } catch (e) {
      console.error('Error clicking Edit button:', e);
      return false;
    }
  }

  async getValuePresentUnderColumnByName(columnName: string, indexToGet: number): Promise<string> {
    try {
      const columns = await this.columnNamesInTable.allTextContents();
      const index = columns.findIndex(col => col.trim() === columnName);
      if (index === -1) return '';
      const detailCell = this.getColumnDetailsByIndex(index + 2);
      const cellElements = await detailCell.allTextContents();
      return cellElements[indexToGet] ?? '';
    } catch (e) {
      console.error('Error getting column value:', e);
      return '';
    }
  }

  async checkIfNewAddressIsPresentUnderGridByIndex(addressObject: {
    getStreetAddress(): string;
    getCity(): string;
    getCountry(): string;
    getProvince(): string | null;
    getZipCode(): string;
    getPhoneNumber(): string;
  }, indexToCheck: number): Promise<boolean> {
    try {
      const street = await this.getValuePresentUnderColumnByName('Street Address', indexToCheck);
      const city = await this.getValuePresentUnderColumnByName('City', indexToCheck);
      const country = await this.getValuePresentUnderColumnByName('Country', indexToCheck);
      const state = await this.getValuePresentUnderColumnByName('State', indexToCheck);
      const zip = await this.getValuePresentUnderColumnByName('Zip/Postal Code', indexToCheck);
      const phone = await this.getValuePresentUnderColumnByName('Phone', indexToCheck);

      if (street !== addressObject.getStreetAddress()) return false;
      if (city !== addressObject.getCity()) return false;
      if (zip !== addressObject.getZipCode()) return false;
      if (phone !== addressObject.getPhoneNumber()) return false;
      if (country !== addressObject.getCountry()) return false;
      if (addressObject.getProvince() && state !== addressObject.getProvince()) return false;

      return true;
    } catch (e) {
      console.error('Error verifying address row:', e);
      return false;
    }
  }

  async waitForSpinnerToDisappear() {
    await this.spinnerIcon.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }

  // Exposed Locators if needed externally (Playwright prefers keeping locators private though)
  get editButtonUnderDefaultBillingAddressLocator() {
    return this.editButtonUnderDefaultBillingAddress;
  }

  get editButtonUnderDefaultShippingAddressLocator() {
    return this.editButtonUnderDefaultShippingAddress;
  }

  get editButtonUnderDefaultFreightForwardAddressLocator() {
    return this.editButtonUnderDefaultFreightForwardAddress;
  }

  get createOrderButtonLocator() {
    return this.createOrderButton;
  }

  get loadingIconLocator() {
    return this.loadingIcon;
  }

  get okAlertButtonLocator() {
    return this.okAlertButton;
  }
}