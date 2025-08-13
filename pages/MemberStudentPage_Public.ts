import { Page, Locator } from '@playwright/test';

export class MemberStudentPage_Public {
  private page: Page;

  readonly pageHeader: Locator;
  readonly breadcrumb: Locator;
  readonly activeChildLeftNavigation: Locator;
  readonly forLibrariansLink: Locator;
  readonly activeForLibrariansLink: Locator;
  readonly activeForStudentsLink: Locator;
  readonly onlineApplicationLink: Locator;
  readonly joinNowStudent: Locator;
  readonly studentMembershipBrochureLink: Locator;

  // Step 1: About yourself
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly phoneNumber: Locator;
  readonly email: Locator;
  readonly country: Locator;
  readonly nextBtn: Locator;
  readonly previousBtn: Locator;

  // Step 2: College information
  readonly universityName: Locator;
  readonly universityAddress: Locator;
  readonly universityCity: Locator;
  readonly universityZipCode: Locator;
  readonly universityCountry: Locator;

  // Step 3: Educational degree
  readonly graduationYear: Locator;
  readonly graduationMonth: Locator;
  readonly degreeSought: Locator;
  readonly majorStudy: Locator;
  readonly submitApplication: Locator;
  readonly createAccountHeader: Locator;
  readonly footerLink: Locator;
  readonly goBackBtn: Locator;
  readonly moreLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // ================= Page Headers & Navigation =================
    this.pageHeader = page.locator("//h1[text()='Become a Student Member']");
    this.breadcrumb = page.locator(".breadcrumb.astm-breadcrumb");
    this.activeChildLeftNavigation = page.locator(".nav-link.child.active");
    this.forLibrariansLink = page.locator("//*[contains(@class,'astm-nav-tabs')]//*[text()='For Students']");
    this.activeForLibrariansLink = page.locator("//*[text()='For Librarians']//parent::a[@class='nav-link child active ']");
    this.activeForStudentsLink = page.locator("//*[text()='For Students']//parent::a[@class='nav-link child active ']");
    this.onlineApplicationLink = page.locator("//a[contains(text(),'online')]");
    this.joinNowStudent = page.locator("//a[text()='Join Now']");
    this.studentMembershipBrochureLink = page.locator("text=Student Membership Brochure");

    // ================= Step 1: About yourself =================
    this.firstName = page.locator("//input[@name='firstName']");
    this.middleName = page.locator("//input[@name='middleInitial']");
    this.lastName = page.locator("//input[@name='lastName']");
    this.address = page.locator("//input[@name='address.addressLine1']");
    this.city = page.locator("//input[@name='address.city']");
    this.zipcode = page.locator("//input[@name='address.zipCode']");
    this.phoneNumber = page.locator("//input[@name='phone']");
    this.email = page.locator("//input[@name='email']");
    this.country = page.locator("//select[@data-testid='select_countryCode']");
    this.nextBtn = page.locator("//button[text()='Next']");
    this.previousBtn = page.locator("//button[text()='Previous']");

    // ================= Step 2: College information =================
    this.universityName = page.locator("//*[text()='Name of your College/University']/../div//input[@placeholder]");
    this.universityAddress = page.locator("//*[text()='College/University Address Line 1']/../div//input[@placeholder]");
    this.universityCity = page.locator("//input[@name='address.city']");
    this.universityZipCode = page.locator("//input[@name='address.zipCode']");
    this.universityCountry = page.locator("//option[text()='Please Select Country']/..");

    // ================= Step 3: Educational degree =================
    this.graduationYear = page.locator("//option[text()='Year']/..");
    this.graduationMonth = page.locator("//option[text()='Month']/..");
    this.degreeSought = page.locator("//label[text()='Degree Sought']/../select");
    this.majorStudy = page.locator("//input[@name='majorStudy']");
    this.submitApplication = page.locator("//button[text()='Submit']");
    this.createAccountHeader = page.locator("//*[text()='Create an Account' and @class='base']");
    this.footerLink = page.locator("//*[@class='footer-content bg-primary']");
    this.goBackBtn = page.locator("//a[text()='Go Back']");
    this.moreLink = page.locator("//h4[text()='Student Members']/..//a[text()='More']");
  }

  // Example dynamic locator method
  getPriceForMembershipProduct(fieldText: string): Locator {
    return this.page.locator(`//h4[text()='${fieldText}']/../p`);
  }
}