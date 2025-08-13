import { Page, Locator } from '@playwright/test';

export class AccountInformationEdit_PublicAdmin {
  page: Page;
  emailField: Locator;
  saveButton: Locator;
  emailFieldRequiredError: Locator;
  firstNamField: Locator;
  lastNameField: Locator;
  middleNameField: Locator;
  referralCodeDropDown: Locator;
  oktaStatusDisabledField: Locator;
  oktaUuidDisabledField: Locator;
  maeStatusDisabledField: Locator;
  maeAccountIdDisabledField: Locator;
  maeUserIdDisabledField: Locator;
  maeAccountUserIdDisabledField: Locator;
  firstNameRequiredErrorMessageLabel: Locator;
  lastNameRequiredErrorMessageLabel: Locator;
  phoneNumberTextField: Locator;
  ebsAccountNumber: Locator;
  ebsStatusTextField: Locator;
  accountNameHeading: Locator;
  arInvoiceTypeDropDown: Locator;
  saveAndContinueEdit: Locator;
  createB2BUser: Locator;
  emailInvalidFormatErrorMessage: Locator;
  classificationDropDown: Locator;
  paymentTermDisabledField: Locator;
  profileClassDropDown: Locator;
  organizationTextField: Locator;
  creditHoldToggleButton: Locator;
  creditHoldInputTag: Locator;
  associateToWebsiteDropDown: Locator;
  customerTypeDropDown: Locator;
  communicationEmailTextField: Locator;
  welcomeEmailFromWebSiteDropDown: Locator;
  ebsPartyIdDisabledTextField: Locator;
  orgNameFieldRequiredErrorMessage: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator("input[name='customer[email]']");
    this.saveButton = page.locator("button#save");
    this.emailFieldRequiredError = page.locator("//input[@name='customer[email]']/following::label[contains(text(),'This is a required field.')]");
    this.firstNamField = page.locator("input[name='customer[firstname]']");
    this.lastNameField = page.locator("input[name='customer[lastname]']");
    this.middleNameField = page.locator("input[name='customer[middlename]']");
    this.referralCodeDropDown = page.locator("select[name='customer[referral_code]']");
    this.oktaStatusDisabledField = page.locator("input[name='customer[okta_status]']");
    this.oktaUuidDisabledField = page.locator("input[name='customer[okta_uuid]']");
    this.maeStatusDisabledField = page.locator("input[name='customer[mae_status]']");
    this.maeAccountIdDisabledField = page.locator("input[name='customer[mae_account_id]']");
    this.maeUserIdDisabledField = page.locator("input[name='customer[mae_user_id]']");
    this.maeAccountUserIdDisabledField = page.locator("input[name='customer[mae_account_user_id]']");
    this.firstNameRequiredErrorMessageLabel = page.locator("input[name='customer[firstname]'] + label.admin__field-error");
    this.lastNameRequiredErrorMessageLabel = page.locator("input[name='customer[lastname]'] + label.admin__field-error");
    this.phoneNumberTextField = page.locator("input[name='customer[phone_number]']");
    this.ebsAccountNumber = page.locator("input[name='customer[ebs_account_number]']");
    this.ebsStatusTextField = page.locator("input[name='customer[ebs_status]']");
    this.accountNameHeading = page.locator("h1.page-title");
    this.arInvoiceTypeDropDown = page.locator("select[name='customer[ar_invoice_type]']");
    this.saveAndContinueEdit = page.locator("button#save_and_continue");
    this.createB2BUser = page.locator("button#create_b2b_user");
    this.emailInvalidFormatErrorMessage = page.locator("//label[contains(text(),'Please enter a valid email address (Ex: johndoe@domain.com).')]");
    this.classificationDropDown = page.locator("select[name='customer[classification]']");
    this.paymentTermDisabledField = page.locator("select[name='customer[payment_term]']");
    this.profileClassDropDown = page.locator("select[name='customer[profile_class]']");
    this.organizationTextField = page.locator("input[name='customer[organization_name]']");
    this.creditHoldToggleButton = page.locator("input[name='customer[credit_hold]'] + label");
    this.creditHoldInputTag = page.locator("input[name='customer[credit_hold]']");
    this.associateToWebsiteDropDown = page.locator("select[name='customer[website_id]']");
    this.customerTypeDropDown = page.locator("select[name='customer[customer_type]']");
    this.communicationEmailTextField = page.locator("input[name='customer[communication_email]']");
    this.welcomeEmailFromWebSiteDropDown = page.locator("select[name='customer[sendemail_store_id]']");
    this.ebsPartyIdDisabledTextField = page.locator("input[name='customer[ebs_party_id]']");
    this.orgNameFieldRequiredErrorMessage = page.locator("input[name='customer[organization_name]'] + label.admin__field-error");

      
  }

 



}