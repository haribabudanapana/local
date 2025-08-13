import { Page, Locator } from '@playwright/test';

export class MemberShipPage {
  private page: Page;
  readonly leftMyCommittee: Locator;
  readonly userMenuOptionsContainer: Locator;
  readonly myCommitteesLinkUnderUserMenuOptionsContainer: Locator;
  readonly headerTxt: Locator;
  readonly myCommitteesTitles: Locator;
  readonly myCommitteeAgendasAndMinutesMeetingDatesLinks: Locator;
  readonly myCommitteesMinutesAndAgendasHeader: Locator;
  readonly myCommitteeDocumentHeading: Locator;
  readonly membershipPageMembershipTypesHeaders: Locator;
  readonly membershipAndParticipationLink: Locator;
  readonly MemberTypes: Locator;
  readonly MemberTypesLink: Locator;
  readonly joinNowExploreBenefitsLink: Locator;
  membershipPageMemberDetailsMap: Map<string, string> | null = null;
  membershipPageMembershipTypesList: string[] | null = null;
  readonly printRenewalInvoiceLink: Locator;
  readonly membershipInfoLink: Locator;
  readonly printMembershipCertificateLink: Locator;
  readonly printMembershipCardLink: Locator;
  readonly dataValuesPopulatedToInvoiceTemplateInMem: Locator;
  readonly dataValuesPopulatedToMemCardTemplateInMem: Locator;
  readonly dataValuesPopulatedToMemCertificateTemplateInMem: Locator;
  readonly renewInvoiceTemplateEle: Locator;
  readonly memCardTemplateEle: Locator;
  readonly memCertificateTemplateEle: Locator;
  readonly downloadASPDFbuttonInMember: Locator;
  readonly committeesLink: Locator;
  readonly myToolsHeader: Locator;
  readonly myCollaborationArea: Locator;
  readonly lauchAdminCollabArea: Locator;
  readonly memberSignoutDropdown: Locator;
  private membersignoutBTN: Locator;
  readonly memberMyAccountBTN: Locator;
  readonly managementMemberShipTypeDetailsMemberShpName: Locator;
  readonly managementMemberShipTypeDetailsMemberShpFees: Locator;
  private joinNow: string;

  constructor(page: Page) {
    this.page = page;
    this.leftMyCommittee = page.locator("//a[@id='13']");

    // INT-5343
    this.userMenuOptionsContainer = page.locator("div.dropdown-menu-right.show");
    this.myCommitteesLinkUnderUserMenuOptionsContainer = page.locator("text=My Committees");
    this.headerTxt = page.locator("h1.astm-type-heading--h1");
    this.myCommitteesTitles = page.locator("//div[@class='myComLister']//li//h5");
    this.myCommitteeAgendasAndMinutesMeetingDatesLinks = page.locator("//td[@class='astm-table-td']/div");
    this.myCommitteesMinutesAndAgendasHeader = page.locator("div[data-testid='MinutesAgendaCmp'] >h1");
    this.myCommitteeDocumentHeading = page.locator("//h1[@class='astm-type-heading--h1']");

    // INT-4961
    this.membershipPageMembershipTypesHeaders = page.locator("//div[contains(@class,'styles_contentText__2dEJA')]/descendant::h4[contains(text(),'Members')]");
    this.membershipAndParticipationLink = page.locator("(//button[contains(text(),'Membership & Participation')])[2]");
    this.MemberTypes = page.locator("(//a[contains(@class, 'header-navigation_nestedNavigation') and @title='Member Types'])[3]");
    this.MemberTypesLink = page.locator("(//a[contains(@class,'header-navigation_nestedNavigation') and @href='/membership-participation/memberships/member-types'])[4]");
    this.joinNowExploreBenefitsLink = page.locator("//a[contains(text(),'Join Now')]");

    // INT-4964
    this.printRenewalInvoiceLink = page.locator("#renew-invoice");
    this.membershipInfoLink = page.locator("//a[@id='9' and text()='Membership Info']");
    this.printMembershipCertificateLink = page.locator("//a[@data-testid='certificate-link' and text()='Print Member Certificate']");
    this.printMembershipCardLink = page.locator("//a[@data-testid='card-link' and text()='Print Membership Card']");
    this.dataValuesPopulatedToInvoiceTemplateInMem = page.locator("div.boxRenewInvoice>div,div.boxRenewInvoice>span");
    this.dataValuesPopulatedToMemCardTemplateInMem = page.locator("h5[data-testid='full-name'],div[data-testid='front-div'] span");
    this.dataValuesPopulatedToMemCertificateTemplateInMem = page.locator("h5[data-testid='full-name']");
    this.renewInvoiceTemplateEle = page.locator("div.boxRenewInvoice");
    this.memCardTemplateEle = page.locator("div.boxFront");
    this.memCertificateTemplateEle = page.locator("div.boxCert");
    this.downloadASPDFbuttonInMember = page.locator("//button[@type='button' and text()='Download AS PDF']");

    // Other
    this.committeesLink = page.locator("//li//a[contains(@href,'/MyASTM/MyCommittees')]");
    this.myToolsHeader = page.locator("//h4[text()='My Tools']");
    this.myCollaborationArea = page.locator("//button[text()='My Collaboration Areas']");
    this.lauchAdminCollabArea = page.locator("//button[text()='My Collaboration Areas']//following::a[contains(@href,'accountID=413') and text()='Launch Admin Collaboration Area'][1]| //button[text()='My Collaboration Areas']");
    this.memberSignoutDropdown = page.locator("//button[contains(@id,'dropdown-menu-align-right')]");
    this.membersignoutBTN = page.locator("//button[contains(@class,'dropdown-item') and (text()='Sign Out')]");
    this.memberMyAccountBTN = page.locator("//a[contains(@class,'dropdown-item') and (text()='MyAccount')]");
    this.managementMemberShipTypeDetailsMemberShpName = page.locator("//h4[text()='Organizational Members']");
    this.managementMemberShipTypeDetailsMemberShpFees = page.locator("//h4[text()='Organizational Members']/parent::div//p");
    this.joinNow = "//a[text()='Join Now' and contains(@href,'[MEMBERTYPE]')]";
  }

  minutesAndAgendasLink(committeeName: string): Locator {
    return this.page.locator(`//a[contains(@href,'${committeeName}')]/parent::h5/following-sibling::div/div[@class='minutesLink']`);
  }

  committeeNameInTabularData(committeeName: string): Locator {
    return this.page.locator(`//td[@class='astm-table-td' and contains(text(),'${committeeName}')]`);
  }

  uploadedCommitteeDocumentInMemberApp(committeeName: string): Locator {
    return this.page.locator(`//li[@class='astm-type-body--lead mb16 mt16']/child::a[contains(text(),'${committeeName}')]`);
  }

  getJoinNow(membershipType: string): Locator {
    return this.page.locator(this.joinNow.replace('[MEMBERTYPE]', membershipType));
  }
}