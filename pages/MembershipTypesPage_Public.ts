import { Page, Locator } from '@playwright/test';

export class MembershipTypesPage_Public {
  private page: Page;
  CostOfMembership: string="";
  participatingMembersMoreBtn: Locator;
  organizationalMoreBtn: Locator;
  informationalMoreBtn: Locator;
  studentMoreBtn: Locator;
  membershipTitle: Locator;
  participatingMembersheading: Locator;
  participatingMembershipCost: Locator;
  benefitsOfParticipatingMembers: Locator;
  becomeParticipatingMemberBtn: Locator;
  orgMemberHeading: Locator;
  orgCost: Locator;
  benefitsOfOrganizationalMembers: Locator;
  becomeOrganizationalMemberBtn: Locator;
  infoHeading: Locator;
  infoCost: Locator;
  benefitsOfInformationalMembers: Locator;
  learnMoreInformationalMemberBtn: Locator;
  becomeInformationalMemberBtn: Locator;
  membershipText: Locator;
  stdHeading: Locator;
  stdCost: Locator;
  benefitsOfStudentsMembers: Locator;
  becomeStudentMemberBtn: Locator;
  studentMemberPrice: Locator;
  price: Locator;
  pageHeader: Locator;
  onlineApplication: Locator;
  studentMemberButton: Locator;
  joinNowBtn: Locator;
  text: Locator;
  bookOfStandardVolumeLink: Locator;
  annualBookHeader: Locator;
  renewMembershipButton: Locator;
  renewMembershipButton1: Locator;
  renewMembershipButton2: Locator;
  MembershipCost: Locator;
  CartProductItem: Locator;
  CartSubTotal: Locator;
  MembershipCostCartPage: Locator;
  MembershipType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.participatingMembersMoreBtn = page.locator("//div//h4[text()='Participating Members']//following-sibling::a");
    this.organizationalMoreBtn = page.locator("//h4[contains(text(),'Organizational Members')]/following-sibling::a");
    this.informationalMoreBtn = page.locator("//div//h4[text()='Informational Members']/following-sibling::a");
    this.studentMoreBtn = page.locator("//div//h4[text()='Student Members']//following::a[contains(@href,'https://stage.astm.org/get-involved/students-and-professors/for-students/memstudent21.html')][1]");
    this.membershipTitle = page.locator("//h1[text()='Membership']");
    this.participatingMembersheading = page.locator("//h4[text()='Participating Members']");
    this.participatingMembershipCost = page.locator("//div//h4[text()='Participating Members']//following::p[1]//strong");
    this.benefitsOfParticipatingMembers = page.locator("//div//h4[text()='Participating Members']//following::strong[text()='Benefits']");
    this.becomeParticipatingMemberBtn = page.locator("//a[contains(@href,'participating') and contains(text(),'Learn')]");
    this.orgMemberHeading = page.locator("//h4[text()='Organizational Members']");
    this.orgCost = page.locator("//div//h4[text()='Organizational Members']//following::p[1]//strong");
    this.benefitsOfOrganizationalMembers = page.locator("//div//h4[text()='Organizational Members']//following::strong[text()='Benefits']");
    this.becomeOrganizationalMemberBtn = page.locator("//a[contains(@href,'organizational') and contains(text(),'Learn')]");
    this.infoHeading = page.locator("//h4[text()='Informational Members']");
    this.infoCost = page.locator("//div//h4[text()='Informational Members']//following::p[1]//strong");
    this.benefitsOfInformationalMembers = page.locator("//div//h4[text()='Informational Members']//following::strong[text()='Benefits']");
    this.learnMoreInformationalMemberBtn = page.locator("//a[contains(@href,'memindividual') and contains(text(),'Learn')]");
    this.becomeInformationalMemberBtn = page.locator("//a[contains(@href,'informational')]");
    this.membershipText = page.locator("//span[text()='Membership']");
    this.stdHeading = page.locator("//h4[text()='Student Members']");
    this.stdCost = page.locator("//div//h4[text()='Student Members']//following::p[1]//strong");
    this.benefitsOfStudentsMembers = page.locator("//div//h4[text()='Student Members']//following::strong[text()='Benefits']");
    this.becomeStudentMemberBtn = page.locator("//a[contains(text(),'Student Member')]");
    this.studentMemberPrice = page.locator("//h4[text()='Student Members']/../p");
    this.price = page.locator("//b[text()='Price']/../span");
    this.pageHeader = page.locator("//h1[text()='Membership']");
    this.onlineApplication = page.locator("//p/a[contains(text(),'online')]");
    this.studentMemberButton = page.locator("//*[text()='Become a Student Member']");
    this.joinNowBtn = page.locator("//a[contains(text(),'Join Now')]");
    this.text = page.locator("//h1[text()='Benefits for ASTM Informational Members']");
    this.bookOfStandardVolumeLink = page.locator("//a[text()='Book of Standards Volume']");
    this.annualBookHeader = page.locator("//h1[text()='Annual Book of ASTM Standards']");
    this.renewMembershipButton = page.locator("//*[contains(text(),'Renew Membership')]");
    this.renewMembershipButton1 = page.locator("//*[@id=\"v-pills-tab-indented\"]/a[2]/span[contains(text(),'Membership')]");
    this.renewMembershipButton2 = page.locator("//a[contains(text(),'Join Now - Explore the Benefits of Membership')]");
    this.MembershipCost = page.locator("//div[@class='membership-block border-top mt-4 pt-4 astm-type-body--lead']/p");
    this.CartProductItem = page.locator("//strong[@class='product-item-name']");
    this.CartSubTotal = page.locator("//div[@class='subtotal-row']/p/span/span");
    this.MembershipCostCartPage = page.locator("(//span[@class='price'])[2]");
    this.MembershipType = page.locator("//span[@class='astm-type-body account-membership']");
  }

  getPriceForMembershipProduct(fieldText: string): Locator {
    return this.page.locator(`//h4[text()='${fieldText}']/../p`);
  }
}