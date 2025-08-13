import { Page, Locator } from '@playwright/test';

export class MembershipPage_Public {
  private page: Page;
  readonly header: Locator;
  readonly renewMembershipLink: Locator;
  readonly reinstateMembershipLink: Locator;
  readonly reinstateMembershipLinkOnMyAccount: Locator;
  readonly memberNotAssociatedWithOrg: Locator;
  readonly modalLabelConfirmationPopup: Locator;
  readonly yesBtnConfirmationPopup: Locator;
  readonly inviteAColleague: Locator;
  readonly myCommitteeBullet: Locator;
  readonly rosterMaintenanceLink: Locator;
  readonly myAccount: Locator;
  readonly userOptionsMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator("//h1[text()='Membership']");
    this.renewMembershipLink = page.locator("text=Renew Membership for 2020");
    this.reinstateMembershipLink = page.locator("//a[contains(text(),'Reinstate Membership for')]");
    this.reinstateMembershipLinkOnMyAccount = page.locator("//button[text()='Reinstate Membership']");
    this.memberNotAssociatedWithOrg = page.locator("//input[@id='isNotAffiliated']/../label");
    this.modalLabelConfirmationPopup = page.locator("//h5[@id='exampleModalLabel']");
    this.yesBtnConfirmationPopup = page.locator("//button[@class='btn astm-btn btn btn-secondary']");
    this.inviteAColleague = page.locator("//a[contains(text(),'Invite a Colleague to Join')]");
    this.myCommitteeBullet = page.locator("//ul[@class='bulletList']/li/a[text()='MyCommittees']");
    this.rosterMaintenanceLink = page.locator("//div[@class='myTools']/div/div[1]/div/h2/a[text()='Roster Maintenance ']");
    this.myAccount = page.locator("//a[text()='MyAccount']");
    this.userOptionsMenu = page.locator("//button[@aria-controls='user-menu-options']");
  }

  async getElements(locator: Locator): Promise<Locator[]> {
    try {
      // In Playwright, we don't need "waitForElementPresent" — locator waits are built-in.
      const count = await locator.count();
      const locators: Locator[] = [];
      for (let i = 0; i < count; i++) {
        locators.push(locator.nth(i));
      }
      return locators;
    } catch (error) {
      console.error(`Some error occurred while locating elements: ${locator}`, error);
      return [];
    }
  }
}