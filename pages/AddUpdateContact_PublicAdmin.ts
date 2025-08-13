// addUpdateContact_PublicAdmin.ts
import { Page, Locator, expect } from '@playwright/test';

export class AddUpdateContact_PublicAdmin {
  private page: Page;

  // Locators
  readonly firstNameTextField: Locator;
  readonly middleNameTextField: Locator;
  readonly lastNameTextField: Locator;
  readonly emailTextField: Locator;
  readonly telephoneNumberField: Locator;
  readonly jobTitleTextField: Locator;
  readonly phoneTextField: Locator;
  readonly saveButton: Locator;
  readonly emailFormatError: Locator;
  readonly tptLearnerToggleButton: Locator;
  readonly billToToggleButton: Locator;
  readonly shipToToggleButton: Locator;
  readonly deliverToToggleButton: Locator;
  readonly billToInputTag: Locator;
  readonly shipToInputTag: Locator;
  readonly deliverToInputTag: Locator;
  readonly tptLearnerInputTag: Locator;
  readonly requiredErrorMessageFirstName: Locator;
  readonly requiredErrorMessageLastName: Locator;
  readonly requiredErrorMessageStartDate: Locator;
  readonly startDateField: Locator;
  readonly endDateField: Locator;
  readonly closeButton: Locator;
  readonly activeToggleButton: Locator;
  readonly spinnerIcon: Locator;
  readonly activeToggleInputTag: Locator;
  readonly monthDropDown: Locator;
  readonly yearDropDown: Locator;
  readonly activeDateLabel: Locator;
  readonly startDateCalendarIcon: Locator;
  readonly endDateCalendarIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameTextField = page.locator("div.modal-content input[name='first_name']");
    this.middleNameTextField = page.locator("div.modal-content input[name='middle_name']");
    this.lastNameTextField = page.locator("div.modal-content input[name='last_name']");
    this.emailTextField = page.locator("div.modal-content input[name='email']");
    this.telephoneNumberField = page.locator("//*[@id='XWLCDN5']");
    this.jobTitleTextField = page.locator("div.modal-content input[name='job_title']");
    this.phoneTextField = page.locator("div.modal-content input[name='phone']");
    this.saveButton = page.locator("aside.customer_form_areas_contact_contact_customer_contact_update_modal._show button#save");
    this.emailFormatError = page.locator("//label[contains(text(),'Please enter a valid email address')]");
    this.tptLearnerToggleButton = page.locator("input[name='is_tpt_learner'] + label");
    this.billToToggleButton = page.locator("input[name='is_bill_to'] + label");
    this.shipToToggleButton = page.locator("input[name='is_ship_to'] + label");
    this.deliverToToggleButton = page.locator("input[name='is_deliver_to'] + label");
    this.billToInputTag = page.locator("input[name='is_bill_to']");
    this.shipToInputTag = page.locator("input[name='is_ship_to']");
    this.deliverToInputTag = page.locator("input[name='is_deliver_to']");
    this.tptLearnerInputTag = page.locator("input[name='is_tpt_learner']");
    this.requiredErrorMessageFirstName = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal input[name='first_name'] + label.admin__field-error");
    this.requiredErrorMessageLastName = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal input[name='last_name'] + label.admin__field-error");
    this.requiredErrorMessageStartDate = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal input[name='start_date'] + button + label.admin__field-error");
    this.startDateField = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal input[name='start_date']");
    this.endDateField = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal input[name='end_date']");
    this.closeButton = page.locator(".customer_form_areas_contact_contact_customer_contact_update_modal button.action-close");
    this.activeToggleButton = page.locator("input[name='is_active'] + label");
    this.spinnerIcon = page.locator("div[data-component='customer_contact_form.customer_contact_form'] .spinner");
    this.activeToggleInputTag = page.locator("input[name='is_active']");
    this.monthDropDown = page.locator("select[data-handler='selectMonth']");
    this.yearDropDown = page.locator("select[data-handler='selectYear']");
    this.activeDateLabel = page.locator("td[data-handler='selectDay'] a");
    this.startDateCalendarIcon = page.locator("input[name='start_date'] + button");
    this.endDateCalendarIcon = page.locator("input[name='end_date'] + button");
  }

  async pickDateFromCalendar(date: string): Promise<void> {
    // date format: "MM/dd/yyyy"
    const parsedDate = new Date(date);
    const day = parsedDate.getDate().toString();
    const month = parsedDate.toLocaleString('default', { month: 'short' });
    const year = parsedDate.getFullYear().toString();

    await this.yearDropDown.selectOption(year);
    await this.monthDropDown.selectOption(month);
    const dayLocator = this.page.locator(`td[data-handler='selectDay'] a:text-is("${day}")`);
    await dayLocator.click();
  }

  async addNewContact(firstName: string, lastName: string, email: string, phone: string): Promise<void> {
    // Click toggles
    await this.tptLearnerToggleButton.click();
    await this.billToToggleButton.click();
    await this.shipToToggleButton.click();
    await this.deliverToToggleButton.click();

    // Fill text fields
    await this.firstNameTextField.fill(firstName);
    await this.lastNameTextField.fill(lastName);
    await this.emailTextField.fill(email);
    await this.phoneTextField.fill(phone);

    // Save
    await this.saveButton.click();

    // Wait for spinner to disappear
    await expect(this.spinnerIcon).toBeHidden({ timeout: 10000 });
  }
}