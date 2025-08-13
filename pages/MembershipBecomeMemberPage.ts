import { Page, Locator } from '@playwright/test';

export class MembershipBecomeMemberPage {
    private page: Page;
  // Strings
  mainCommitteeDesignationSelected: string = "";
  mainCommitteeTitleForSelectedDesignation: string = "";
  volumeSelected: string = "";

  // Locators
  personalDetailsHeader_reviewApplnPage: Locator;
  representativeDetailsHeader_reviewApplnPage: Locator;
  membershipTypeCostVal: Locator;
  selectCommitteeHeader_reviewApplnPage: Locator;
  selectYourCommitteeHeader: Locator;
  aboutYourOrganizationHeader: Locator;
  joinAnotherMainCommitteeBtn: Locator;
  Reinstateheader: Locator;
  allVolumeComittee: Locator;
  chooseCommittee: Locator;
  chooseCommittee1: Locator;
  chooseCommitteeList: Locator;
  chooseCommitteeList1: Locator;
  describeOrganisationDropdown: Locator;
  ConsumerAdvocacyNoBtn: Locator;
  ConsumerInterestTextArea: Locator;
  describeOrganisationDropdown1: Locator;
  organisationDscription: Locator;
  nextBtn: Locator;
  previousBtn: Locator;
  cancelBtn: Locator;
  AddressValidationHeader: Locator;
  YesBtn: Locator;
  NoBtn: Locator;
  confirmationYesBTN: Locator;
  submitBtn: Locator;
  organisationDscription1: Locator;
  deleteBtnCartPage: Locator;

  constructor(page: Page) {
        this.page = page;
    this.personalDetailsHeader_reviewApplnPage = page.locator("//h5[text()='Personal Details']");
    this.representativeDetailsHeader_reviewApplnPage = page.locator("//h5[text()='Representative Details']");
    this.membershipTypeCostVal = page.locator("//p[text()='Membership Type/Cost:']/following-sibling::p");
    this.selectCommitteeHeader_reviewApplnPage = page.locator("//h4[@data-testid='rc-committee-information-header']");
    this.selectYourCommitteeHeader = page.locator("//h5[text()='Select Your Committee']");
    this.aboutYourOrganizationHeader = page.locator("//h5[text()='About Your Organization']");
    this.joinAnotherMainCommitteeBtn = page.locator("//button[text()=' Join Another Main Committee']");
    this.Reinstateheader = page.locator("//h2[text()='Reinstate your Membership']//following::h3[text()='Organizational Member']");
    this.allVolumeComittee = page.locator("#controlled-tab-example-tab-all");
    this.chooseCommittee = page.locator("(//div[@class='form-box'][1]/descendant::button)[1]");
    this.chooseCommittee1 = page.locator("//div[@class='form-box'][2]/descendant::button");
    this.chooseCommitteeList = page.locator("*[class*='list-group astm-list-group'] li label");
    this.chooseCommitteeList1 = page.locator("*[class*='list-group astm-list-group'] li label");
    this.describeOrganisationDropdown = page.locator("//select[contains(@id,'primaryActivitySelection')]");
    this.ConsumerAdvocacyNoBtn = page.locator("//label[text()='No']");
    this.ConsumerInterestTextArea = page.locator("//textarea[contains(@id,'subform_')]");
    this.describeOrganisationDropdown1 = page.locator("//div[@class='form-box'][2]/descendant::select");
    this.organisationDscription = page.locator("//*[contains(@id,'organizationDescription')]");
    this.nextBtn = page.locator("//button[text()='Next']");
    this.previousBtn = page.locator("//button[text()='Previous']");
    this.cancelBtn = page.locator("//button[text()='Cancel']");
    this.AddressValidationHeader = page.locator("//h5");
    this.YesBtn = page.locator("//button[text()='Yes']");
    this.NoBtn = page.locator("//button[text()='No']");
    this.confirmationYesBTN = page.locator("//button[@class='btn astm-btn btn btn-secondary']");
    this.submitBtn = page.locator("//button[text()='Submit']");
    this.organisationDscription1 = page.locator("//div[@class='form-box'][2]/descendant::textarea");
    this.deleteBtnCartPage = page.locator("(//a/span[contains(text(),'delete')])[1]");
  }

  // Methods for dynamic locators
  memberBenefitDetails_ReviewApplnPage(): Locator {
    return this.page.locator("//p[text()='Selected free volume title:']//following-sibling::p[@class='astm-type-body--lead']");
  }

  organizationActivityDrpdwn(): Locator {
    return this.page.locator("//select[@data-testid='primary-select']/option");
  }

  mainCommitteeTitleVal(mainCommitteeDesignation: string): Locator {
    return this.page.locator(`//label[text()='${mainCommitteeDesignation}']/ancestor::div[@class='flex']/following-sibling::p`);
  }

  selectedCommitteeVal(): Locator {
    return this.page.locator("//h4[@data-testid='rc-committee-information-header']/following-sibling::h5");
  }

  getIsNotAffiliatedCheckbox(): Locator {
    return this.page.locator("#isNotAffiliated");
  }

  getReinstatePageHeader(): Locator {
    return this.Reinstateheader;
  }

  getChooseCommittee(): Locator {
    return this.chooseCommittee;
  }

  getChooseCommittee1(): Locator {
    return this.chooseCommittee1;
  }

  getSelVolume(): Locator {
    return this.page.locator("//div[@class='steps'][3]/p[2]");
  }

  getselMembership(): Locator {
    return this.page.locator("//div[@class='application-review astm-application-review']/p[2]");
  }

  async getAffilationPopupText(): Promise<string> {
    return await this.page.locator("//p[contains(text(),'Do you have an affiliation')]").innerText();
  }

  affilationPopupYesBtn(): Locator {
    return this.page.locator("//button[@data-testid='submit-btn']");
  }

  getjoinAnotherComBtn(): Locator {
    return this.page.locator("//div[@class='form-box txtCenter']/p/following-sibling::button");
  }

  getemptycartMsg(): Locator {
    return this.page.locator("//div[contains(@class,'cart-empty')]/h1/b");
  }

  getOrgAddressFromDropDown(): Locator {
    return this.page.locator("//a[contains(@id,'company_addressLine')]");
  }
}