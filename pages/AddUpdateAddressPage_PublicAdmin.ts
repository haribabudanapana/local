import { Page, Locator, expect } from '@playwright/test';
//import { Address_PublicAdmin } from '../testobjects/Address_PublicAdmin';

export class AddUpdateAddressPage_PublicAdmin {
  readonly page: Page;

  // Locators
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly defaultBillingAddressCheckbox: Locator;
  readonly defaultShippingAddressCheckbox: Locator;
  readonly defaultFreightForwardCheckbox: Locator;
  readonly streetAddressTextField: Locator;
  readonly cityTextField: Locator;
  readonly countryDropDown: Locator;
  readonly zipCodeTextField: Locator;
  readonly phoneNumberTextField: Locator;
  readonly saveButton: Locator;
  readonly provinceDropDown: Locator;
  readonly closeButton: Locator;
  readonly ebsShippingId: Locator;
  readonly ebsBillingId: Locator;
  readonly ebsDeliveringId: Locator;
  readonly companyName: Locator;
  readonly addressDescription: Locator;
  readonly faxTextField: Locator;
  readonly nameSuffixTextField: Locator;
  readonly middleNameTextField: Locator;
  readonly streetAddressSecondTextField: Locator;
  readonly streetAddressThirdTextField: Locator;
  readonly streetAddressFourthTextField: Locator;
  readonly vatNumberTextField: Locator;
  readonly ebsShippingSiteId: Locator;
  readonly ebsBillingSiteId: Locator;
  readonly ebsDeliverSiteId: Locator;
  readonly ebsShippingActiveToggleInputTag: Locator;
  readonly ebsBillingActiveToggleInputTag: Locator;
  readonly ebsDeliverActiveToggleInputTag: Locator;
  readonly activeToggleButton: Locator;
  readonly activeToggleInputTag: Locator;
  readonly defaultBillingAddressToggleInputTag: Locator;
  readonly defaultShippingAddressToggleInputTag: Locator;
  readonly defaultFreightForwardToggleInputTag: Locator;
  readonly ebsShippingActiveToggleButton: Locator;
  readonly ebsBillingActiveToggleButton: Locator;
  readonly ebsDeliverActiveToggleButton: Locator;
  readonly errorMessage: Locator;
  readonly stateDivForRequiredTest: Locator;
  readonly requiredErrorMessageForStateField: Locator;

  constructor(page: Page) {
    this.page = page;

    // Define locators
    this.firstNameField = page.locator("(//input[@name='firstname'])[2]");
    this.lastNameField = page.locator("(//input[@name='lastname'])[2]");
    this.defaultBillingAddressCheckbox = page.locator("input[name='default_billing'] + label");
    this.defaultShippingAddressCheckbox = page.locator("input[name='default_shipping'] + label");
    this.defaultFreightForwardCheckbox = page.locator("input[name='default_freight_forward'] + label");
    this.streetAddressTextField = page.locator("input[name='street[0]']");
    this.cityTextField = page.locator("(//input[@name='city'])[2]");
    this.countryDropDown = page.locator("(//select[@name='country_id'])[2]");
    this.zipCodeTextField = page.locator("(//input[@name='postcode'])[2]");
    this.phoneNumberTextField = page.locator("(//input[@name='telephone'])[3]");
    this.saveButton = page.locator("aside[class*='address_customer_address_update_modal'] #save");
    this.provinceDropDown = page.locator("(//select[@name='region_id'])[1]");
    this.closeButton = page.locator(".customer_form_areas_address_address_customer_address_update_modal button.action-close");
    this.ebsShippingId = page.locator("input[name='ebs_shipping_id']");
    this.ebsBillingId = page.locator("input[name='ebs_billing_id']");
    this.ebsDeliveringId = page.locator("input[name='ebs_deliver_id']");
    this.companyName = page.locator("input[name='company']");
    this.addressDescription = page.locator("textarea[name='address_description']");
    this.faxTextField = page.locator("input[name='fax']");
    this.nameSuffixTextField = page.locator("input[name='customer[suffix]']");
    this.middleNameTextField = page.locator("input[name='middlename']");
    this.streetAddressSecondTextField = page.locator("input[name='street[1]']");
    this.streetAddressThirdTextField = page.locator("input[name='street[2]']");
    this.streetAddressFourthTextField = page.locator("input[name='street[3]']");
    this.vatNumberTextField = page.locator("input[name='vat_id']");
    this.ebsShippingSiteId = page.locator("input[name='ebs_shipping_site_id']");
    this.ebsBillingSiteId = page.locator("input[name='ebs_billing_site_id']");
    this.ebsDeliverSiteId = page.locator("input[name='ebs_delivery_site_id']");
    this.ebsShippingActiveToggleInputTag = page.locator("input[name='ebs_shipping_active']");
    this.ebsBillingActiveToggleInputTag = page.locator("input[name='ebs_billing_active']");
    this.ebsDeliverActiveToggleInputTag = page.locator("input[name='ebs_delivery_active']");
    this.activeToggleButton = page.locator("input[name='is_active'] + label");
    this.activeToggleInputTag = page.locator("input[name='is_active']");
    this.defaultBillingAddressToggleInputTag = page.locator("input[name='default_billing']");
    this.defaultShippingAddressToggleInputTag = page.locator("input[name='default_shipping']");
    this.defaultFreightForwardToggleInputTag = page.locator("input[name='default_freight_forward']");
    this.ebsShippingActiveToggleButton = page.locator("input[name='ebs_shipping_active'] + label");
    this.ebsBillingActiveToggleButton = page.locator("input[name='ebs_billing_active'] + label");
    this.ebsDeliverActiveToggleButton = page.locator("input[name='ebs_delivery_active'] + label");
    this.errorMessage = page.locator(".customer_form_areas_address_address_customer_address_update_modal_update_customer_address_form_loader div.message-error");
    this.stateDivForRequiredTest = page.locator("div[data-index='region_id']");
    this.requiredErrorMessageForStateField = page.locator("select[name='region_id'] + label.admin__field-error");
  }

  async enterTextInFirstNameField(value: string): Promise<boolean> {
    try {
      await this.firstNameField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async enterTextInLastNameField(value: string): Promise<boolean> {
    try {
      await this.lastNameField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async clickDefaultBillingAddressCheckbox(): Promise<boolean> {
    try {
      await this.defaultBillingAddressCheckbox.click();
      return true;
    } catch {
      return false;
    }
  }

  async clickDefaultShippingAddressCheckbox(): Promise<boolean> {
    try {
      await this.defaultShippingAddressCheckbox.click();
      return true;
    } catch {
      return false;
    }
  }

  async clickDefaultFreightForwardCheckbox(): Promise<boolean> {
    try {
      await this.defaultFreightForwardCheckbox.click();
      return true;
    } catch {
      return false;
    }
  }

  async enterTextInStreetAddressTextField(value: string): Promise<boolean> {
    try {
      await this.streetAddressTextField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async enterTextInCityTextField(value: string): Promise<boolean> {
    try {
      await this.cityTextField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async selectOptionInCountryDropDown(value: string): Promise<boolean> {
    try {
      await this.countryDropDown.selectOption({ label: value });
      return true;
    } catch {
      return false;
    }
  }

  async enterTextInZipCodeTextField(value: string): Promise<boolean> {
    try {
      await this.zipCodeTextField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async enterTextInPhoneNumberTextField(value: string): Promise<boolean> {
    try {
      await this.phoneNumberTextField.fill(value);
      return true;
    } catch {
      return false;
    }
  }

  async clickSaveButton(): Promise<boolean> {
    try {
      await this.saveButton.click();
      await this.saveButton.waitFor({ state: 'detached' });
      return true;
    } catch {
      return false;
    }
  }

  async selectOptionInProvinceDropDown(value: string): Promise<boolean> {
    try {
      await this.provinceDropDown.selectOption({ label: value });
      return true;
    } catch {
      return false;
    }
  }

  async checkIfAddressIsPopulatedOnUpdateAddressPage(addressObject: Address_PublicAdmin): Promise<boolean> {
    try {
      if (!(await this.streetAddressTextField.inputValue()).includes(addressObject.streetAddress)) return false;
      if (!(await this.cityTextField.inputValue()).includes(addressObject.city)) return false;
      if (!(await this.zipCodeTextField.inputValue()).includes(addressObject.zipCode)) return false;
      if (!(await this.phoneNumberTextField.inputValue()).includes(addressObject.phoneNumber)) return false;

      const countryValue = await this.countryDropDown.inputValue();
      if (!countryValue.includes(addressObject.country)) return false;

      if (addressObject.province) {
        const provinceValue = await this.provinceDropDown.inputValue();
        if (!provinceValue.includes(addressObject.province)) return false;
      }

      if (addressObject.addressDescription) {
        if (!(await this.addressDescription.inputValue()).includes(addressObject.addressDescription)) return false;
      }

      if (addressObject.streetAddress2) {
        if (!(await this.streetAddressSecondTextField.inputValue()).includes(addressObject.streetAddress2)) return false;
      }

      if (addressObject.streetAddress3) {
        if (!(await this.streetAddressThirdTextField.inputValue()).includes(addressObject.streetAddress3)) return false;
      }

      if (addressObject.streetAddress4) {
        if (!(await this.streetAddressFourthTextField.inputValue()).includes(addressObject.streetAddress4)) return false;
      }

      if (addressObject.company) {
        if (!(await this.companyName.inputValue()).includes(addressObject.company)) return false;
      }

      if (addressObject.vatNumber) {
        if (!(await this.vatNumberTextField.inputValue()).includes(addressObject.vatNumber)) return false;
      }

      if (addressObject.nameSuffix) {
        if (!(await this.nameSuffixTextField.inputValue()).includes(addressObject.nameSuffix)) return false;
      }

      return true;
    } catch {
      return false;
    }
  }
}
