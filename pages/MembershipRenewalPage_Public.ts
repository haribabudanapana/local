import { Page, Locator } from '@playwright/test';

export class MembershipRenewalPage_Public {
  private page: Page;
  readonly renewMembershipHeader: Locator;
  readonly reinstateMembership: Locator;
  readonly chooseVolumeButton: Locator;
  readonly impChangesMsg: Locator;
  readonly impChangesOkBtn: Locator;
  readonly product: Locator;
  readonly allVolumesBtn: Locator;
  readonly selectVolume: Locator;
  readonly doneButton: Locator;
  readonly submitBtn: Locator;
  readonly confirmationPopupText: Locator;
  readonly errorMsgQuoteDoesNotExist: Locator;
  readonly addressValidationHeader: Locator;
  readonly addressValContinueBtn: Locator;
  readonly continueBtn: Locator;
  readonly agreementCheckbox: Locator;
  readonly noVolumeCheckbox: Locator;
  readonly checkoutButton: Locator;
  readonly paymentInfoHeader: Locator;
  readonly volumeAllBtn: Locator;
  readonly scheduleBtn: Locator;
  readonly cancelBtn: Locator;
  readonly yesBtn: Locator;
  readonly renewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.renewMembershipHeader = page.locator("//a[text()='Renew Membership']");
    this.reinstateMembership = page.locator("//button[text()='Reinstate Membership']");
    this.chooseVolumeButton = page.locator("//*[text()='Choose Volume']");
    this.impChangesMsg = page.locator("//div[@class='modal-header']");
    this.impChangesOkBtn = page.locator("//div[@class='modal-header']/../div/div/button");
    this.product = page.locator("//*[text()='Cement; Lime; Gypsum']");
    this.allVolumesBtn = page.locator("//span[text()='All Volumes']");
    this.selectVolume = page.locator("(//ul[@class='list-group astm-list-group']//li//p)[1]");
    this.doneButton = page.locator("//*[text()='Done']");
    this.submitBtn = page.locator("//*[text()='Submit']");
    this.confirmationPopupText = page.locator("//h5[text()='Confirmation']");
    this.errorMsgQuoteDoesNotExist = page.locator("//div[@class='page messages']/div/div/div/div[text()='The quote does not exist for that unique id.']");
    this.addressValidationHeader = page.locator("//header[@class='modal-header']/h1[contains(text(),'Address Validation')]");
    this.addressValContinueBtn = page.locator("//button[@class='btn astm-btn btn-secondary action-accept']/span[text()='Continue']");
    this.continueBtn = page.locator("//button[text()='Continue']");
    this.agreementCheckbox = page.locator("//input[@id='check_isAgree']");
    this.noVolumeCheckbox = page.locator("//b[text()='Not Now,']");
    this.checkoutButton = page.locator("//*[text()='Checkout']");
    this.paymentInfoHeader = page.locator("//h4[text()='Payment Information']");
    this.volumeAllBtn = page.locator("//span[text()='All Volumes']");
    this.scheduleBtn = page.locator("//button[contains(text(),'Schedule')]");
    this.cancelBtn = page.locator("//button[contains(text(),'Cancel')]");
    this.yesBtn = page.locator("//button[contains(text(),'Yes')]");
    this.renewButton = page.locator("//button[text()='Renew Membership']");
  }

  async getElements(locator: Locator): Promise<Locator[]> {
    try {
      const count = await locator.count();
      const elements: Locator[] = [];
      for (let i = 0; i < count; i++) {
        elements.push(locator.nth(i));
      }
      return elements;
    } catch (error) {
      console.error(`Some error occurred while creating element: ${locator}`, error);
      return [];
    }
  }
}