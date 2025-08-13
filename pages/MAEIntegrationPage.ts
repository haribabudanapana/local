import { Page, Locator, expect,test } from '@playwright/test';
import { stepLogger } from '../utils/logger';
import { attachScreenshot } from '../utils/reportUtils';

export class Maepage {
  readonly page: Page;
  readonly MAEbtn: Locator;
  readonly cookieRejectBtn: Locator;
  readonly userNameTxt: Locator;
  readonly passwordTxt: Locator;
  readonly newSignInButton2: Locator;
  readonly ASTMSelectBtn: Locator;
  readonly searchfield: Locator;
  readonly selectTypes: Locator;
  readonly searchIcon: Locator;
  readonly accountList: Locator;
  readonly AccessManagement: Locator;
  readonly CompassTab: Locator;
  readonly groupsPointLabel: Locator;
  readonly groupsPointToggle: Locator;
  readonly SaveBtn: Locator;
  readonly AddAuditNoteLabel: Locator;
  readonly textAreaNote: Locator;
  readonly AddNoteAndContinue: Locator;
  readonly Signoutdropdown: Locator;
  readonly SignoutBtn: Locator;
  readonly JWTLabel: Locator;
  readonly JWTToggle: Locator;
  readonly RecentHistoryLabel: Locator; 
  readonly VerifyAuditHistory: Locator;
  readonly userNamePasswordLoginLabel: Locator;   
  readonly userNamePasswordLoginToggle: Locator;
  readonly IpaccessCheckbox: Locator;
  readonly AllowAnonymousOrgAuth: Locator;
  readonly AuditTab: Locator;
  readonly reportTab: Locator;
  readonly UsageReport: Locator;
  readonly UserReport: Locator; 
  readonly ProductEntLink: Locator; 
  readonly StockCodeForm: Locator;
  readonly GracePeriodDDN: Locator;
  readonly SearchBtn: Locator;
  readonly StockCodeInput: Locator;
  readonly selectASTMAccountName: Locator;
  readonly viewEditButton: Locator;
  readonly b2bOrgAdminCheckbox: Locator;
  readonly compassUserName: Locator;
  readonly compassPassword: Locator;
  readonly passwordInput: Locator;
  readonly compassSignInButton: Locator;
  readonly viewDraftTenantsBtn: Locator;
  readonly ViewDraftTenantsHeading: Locator;
  readonly ViewDraftTenantsTable: Locator;
  readonly selectAnAccountHeader: Locator;

  readonly createButton: Locator;
  readonly selectButtonASTM: Locator;

  readonly srchIcon: Locator;

  readonly addUser: Locator;
  readonly compassUserCheckbox: Locator;
  readonly compassUserAdministratorCheckbox: Locator;
  readonly compassUserAdministratorCheckbox_Checked: Locator;
  readonly userAdminCheckbox: Locator;
  readonly userAdminCheckbox_Checked: Locator;

  readonly accountList1: Locator;
  readonly userMangementRole: Locator;
  readonly AccountAdministration: Locator;
  readonly AccountAcronymUpdate: Locator;
  readonly specbuilderTab: Locator;
  readonly SpecBuilderEntitlementsLabel: Locator;
  readonly CompanyLOGOredirectURLtext: Locator;
  readonly ReportTab: Locator;
  readonly JWTTestLoginToggleBtn: Locator;
  readonly compassPointLabel: Locator;
  readonly compassPointToggle1: Locator;

  readonly AppletAccess: Locator;
  readonly EnforceIPAppletWhitelisting: Locator;
  readonly JWTloginBTN: Locator;
  readonly JWTloginheader: Locator;
  readonly loginBtn: Locator;
  readonly AccountUserStatus: Locator;
  readonly OKTAactivationStatus: Locator;
  readonly OKTAactivationStatus_Staged: Locator;
  readonly addUserButton: Locator;
  readonly emailField: Locator; 
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly saveBtn: Locator;
  readonly saveBtnInEditUser: Locator;
  readonly userAdministarionTab: Locator;
  readonly accountDetailsTab: Locator;
  readonly ebsAccountNumber: Locator;
  readonly EBSOrderNoEntry: Locator;
  readonly organizationName: Locator;
  readonly userManagementTab: Locator;
  readonly userManagementTab1: Locator;
  readonly editBtn: Locator;
  readonly MAEuserIDvalue: Locator;
  readonly compassRole: Locator;
  readonly selectSpecbuilderRole: Locator;
  readonly selectCompassRole: Locator;
  readonly selectExternalSpecbuilderRole: Locator;  
  readonly status: Locator;
  readonly close: Locator;
  readonly ModelcloseBtn: Locator;
  readonly accountUserStatus: Locator;
  readonly oKTAActivationStatus: Locator;

  readonly searchIcon1: Locator;
  readonly detailsIcon: Locator;
  readonly APISelectBtn: Locator; 
  readonly AWWASelectBtn: Locator;
  readonly DetailsIconModelContent: Locator;
  readonly Roles: Locator;
  readonly RolesText: Locator;
  readonly OKTAStatus: Locator;
  readonly searchboxUser: Locator;
  readonly seachBTN: Locator;
  readonly astmLogo: Locator;
  readonly ViewUser: Locator;
  readonly AppletAccessLabel: Locator;
  readonly BuildRemoteLogin: Locator;
  readonly DownloadFile: Locator;
  readonly TIMSbtn: Locator;
  readonly manageTenantsHeader: Locator;
  readonly tenantName: Locator;
  readonly TenantInTenantdetailsPage: Locator;
  readonly stockCodeTable: Locator;
  readonly getlistofGracePeriod1: Locator;
  readonly CGAselectBtn: Locator;
  readonly IESselectBtn: Locator;
  readonly IOPselectBtn: Locator;
  readonly CHECKselectBtn: Locator;
  readonly AENORselectBtn: Locator;
  readonly MenuBar: Locator;
  readonly SubscriptionUsageSummary: Locator;
  readonly subscriptionsSettingTab: Locator;
  readonly publishersSubTab: Locator; 
  readonly lCASubTab: Locator;
  readonly assetsSubTab: Locator;
  readonly nextBtn: Locator;
  readonly previousBtn: Locator;
  readonly publishersTablePaginationTIMS: Locator;
  readonly publisherShowDDTIMS: Locator;
  readonly closeBtn: Locator;
  readonly BulkUploadTab: Locator;
  readonly BulkUploadBtn: Locator;
  readonly BulkUploadPopUpHdr: Locator;
  readonly chooseFile: Locator;
  readonly UploadFileBtn: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly General: Locator;
  readonly YesBtn: Locator;
  readonly Home: Locator;
  readonly dataRightsManagement: Locator;
  readonly dataRightsManagementToggle: Locator;
  readonly exportAllCSVbtn: Locator;
  readonly ECommerceOrderNo: Locator;
  readonly MAESelectDropdown: Locator;
  readonly AddAuditNoteModal_SkipButton: Locator;
  readonly AlertRibbon: Locator;
  readonly alertText_accountLocked: Locator;
  readonly logo: Locator;
  readonly logo1: Locator;
  readonly switchTenant: Locator;
  readonly usernameVisibility: Locator;
  readonly reasonForDelegation: Locator;
  readonly textAreaforID: Locator;
  readonly delegateButton: Locator;
  readonly exitDelegation1: Locator;
  readonly userAccountNumber: Locator;
  readonly Signin: Locator;
  readonly ID: Locator;
  readonly ReasonforID: Locator;
  readonly Deleg: Locator;
  readonly banner: Locator;
  readonly newTenant: Locator;
  readonly next_Button: Locator;
  readonly threeDotMenu: Locator;
  readonly exportConfig: Locator;
  readonly popupMsg: Locator;
  readonly IdentityDeleg: Locator;
  readonly upgradeMembership: Locator;
  readonly upgrade: Locator;
  readonly next: Locator;
  readonly checkbox: Locator;
  readonly studentMemberUpgradeTitle: Locator;
  readonly drop: Locator;
  readonly yesdrop: Locator;
  readonly submit: Locator;
  readonly continueButton: Locator;
  readonly myCommittees: Locator;
  readonly outstandingBallots: Locator; 
  readonly ballot: Locator;
  readonly submitBallotButton_1: Locator;
  readonly saveForLater_1: Locator;
  readonly submitBallotButton_2: Locator;
  readonly saveForLater_2: Locator;
  readonly agendasAndMinutes: Locator;
  readonly agendasAndMinutesTracker: Locator;
  readonly inviteACollegue: Locator;
  readonly collegueName: Locator;
  readonly collegueEmail: Locator;
  readonly send: Locator;
  readonly requestACampusVisit_disabled: Locator;
  readonly nominateYourProfessor_disabled: Locator;
  readonly reviewAgain: Locator;
  readonly studentDropdown: Locator;
  readonly myCommittee: Locator;
  readonly myStudentMembership: Locator;
  readonly radioButton: Locator;
  readonly activePageLocator: Locator;
  readonly firstRowEmailLocator: Locator;
  readonly configurationTab: Locator;
  readonly featuresStatus: Locator;
  readonly searchTypesStatus: Locator;
  readonly featuresActions: Locator;
  readonly statusText: Locator;
  readonly statusIcon: Locator;
  readonly featuresViewEditActionSettings: Locator;
  readonly viewSettingsHeader: Locator;
  readonly viewSettingsEdit: Locator;
  readonly viewSettingsTable: Locator;
  readonly viewSettingsAdd: Locator;
  readonly viewSettingsSettingCode: Locator;
  readonly viewSettingsSettingValue: Locator;
  readonly viewSettingsDelete: Locator;
  readonly viewSettingsSave: Locator;
  readonly viewSettingsCancel: Locator;
  readonly greetingsText: Locator;
  readonly welcomeText: Locator;
  readonly helpMenuTable: Locator;
  readonly helpMenuTableColHeader: Locator;
  readonly addButton: Locator;
  readonly idFieldError: Locator;
  readonly keyFieldError: Locator;
  readonly deleteIcon: Locator;
  readonly tipsAndTricksHeaderLabel: Locator;
  readonly membershipInfo: Locator;
  readonly membershipCard: Locator;
  readonly membershipCertificate: Locator;
  readonly membershipReceipt: Locator;
  readonly changeOfEmployment: Locator;
  readonly manageCommittees: Locator;
  readonly ballotsAndWorkItems: Locator;
  readonly submitOrEdit: Locator;
  readonly viewButton: Locator;
  readonly manageSubcommittees: Locator;
  readonly vg8Subcommitte1: Locator;
  readonly vg8Subcommitte2: Locator;
  readonly dropFromMainCommittee: Locator;
  readonly registerAWorkItemRadiobutton: Locator;
  readonly proposeRadioButton: Locator;
  readonly committeeDropdown: Locator;
  readonly committeeOption: Locator;
  readonly subCommitteeDropdown: Locator;
  readonly subCommitteeOption: Locator;
  readonly submittingOriginalRadioButton: Locator;
  readonly agreeButton: Locator;
  readonly targetMonth: Locator;
  readonly targetMonthOpt: Locator;
  readonly targetYearOpt: Locator;
  readonly targetYear: Locator;
  readonly yesRadioButton: Locator;
  readonly patentRadioBtn: Locator;
  readonly typeOfStandard: Locator;
  readonly typeOfStandardOpt: Locator;
  readonly titleTextBox: Locator;
  readonly ManageSearch: Locator;
  readonly ManageSearchButton: Locator;


  constructor(page: Page) {

    this.JWTLabel = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/span)[1]");
    this.JWTToggle = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/i)[1]");
    this.SaveBtn = page.locator("//input[@value='Save']");
    this.AddAuditNoteLabel = page.locator("//h5[text()='Add Audit Note']");
    this.textAreaNote = page.locator("//textarea[@id='note-textarea']");
    this.AddNoteAndContinue = page.locator("//button[text()='Add Note & Continue']");
    this.AuditTab = page.locator("//span[text()='Audit']");
    this.RecentHistoryLabel = page.locator("//h3[text()='Recent History']");
    this.VerifyAuditHistory = page.locator("//div[@id='AuditDataIndex-0']/div[2]");
    this.CompassTab = page.locator("//span[text()='Compass']");
    this.userNamePasswordLoginLabel = page.locator("//span[text()='UserName & Password Login']/../div/label");
    this.userNamePasswordLoginToggle = page.locator("//span[text()='UserName & Password Login']/following-sibling::div/i");
    this.IpaccessCheckbox = page.locator("#ipEnabled");
    this.AllowAnonymousOrgAuth = page.locator("#anonymousOrgAuthEnabled");

    this.page = page;
    this.MAEbtn = page.locator("//input[@data-testid='MAE-button']");
    this.cookieRejectBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
    this.userNameTxt = page.locator("#userName");
    this.passwordTxt = page.locator("#encPass");
    this.newSignInButton2 = page.locator("//button[text()='Sign In']");
    this.ASTMSelectBtn = page.locator("//span[text()='ASTM']/following-sibling::input");
    this.searchfield = page.locator("//div[contains(@class,'search-content')]//input");
    this.selectTypes = page.locator("//select[@id='types']");
    this.searchIcon = page.locator("//button[contains(@class,'search-button')]");
    this.accountList = page.locator("//table[@id='datatable']//tbody//tr");
    this.AccessManagement = page.locator("//span[text()='Access Management']");
    this.CompassTab = page.locator("//span[text()='Compass']");
    this.groupsPointLabel = page.locator("//span[text()='Groups']/../div/label");
    this.groupsPointToggle = page.locator("//span[text()='Groups']/following-sibling::div/i");
    this.SaveBtn = page.locator("//input[@value='Save']");
    this.AddAuditNoteLabel = page.locator("//h5[text()='Add Audit Note']");
    this.textAreaNote = page.locator("//textarea[@id='note-textarea']");
    this.AddNoteAndContinue = page.locator("//button[text()='Add Note & Continue']");
    this.Signoutdropdown = page.locator("//div[@class='user-nav-menu']/li/a[2]/span");
    this.SignoutBtn = page.locator("//a[@class='dropdown-item logout-btn']");
    this.reportTab = page.locator("//span[text()='Reports']");
    this.UsageReport = this.page.locator("//span[text()='Usage Report']");
    this.UserReport = this.page.locator("//span[text()='User Report']");
    this.ProductEntLink = page.locator("//p[@class='tab astm-type-heading--h6']/span[contains(text(),'Product')]"); 
    this.StockCodeForm = page.locator("#form-control-stock");
    this.GracePeriodDDN = page.locator("(//div[@class='css-1xc3v61-indicatorContainer'])[3]");
    this.SearchBtn = page.locator("//button[contains(@class,'search-btn')]");
    this.StockCodeInput = page.locator("//input[@id='stockCode']"); 
    this.selectASTMAccountName = page.locator("//span[text()='ASTM']//following-sibling::input");
    this.viewEditButton = page.locator("//td[@class='row-actions']//span[2]");
    this.b2bOrgAdminCheckbox = page.locator("//div[text()='B2B Org Admin']//input");
    this.compassUserName = page.locator("#userName");
    this.compassPassword = page.locator("#password");
    this.passwordInput = page.locator("#encPass");
    this.compassSignInButton = page.locator("//button[@type='submit' and contains(text(), 'Sign In')]");
    this.viewDraftTenantsBtn = page.locator("//button[text()='View Draft Tenants']");
    this.ViewDraftTenantsHeading = page.locator("//h3[text()='View Draft Tenants']");
    this.ViewDraftTenantsTable = page.locator("//table[@id='draft-tenants-list']");
    this.selectAnAccountHeader = page.locator("//*[text()='Select an Account']");
    this.Signoutdropdown = page.locator("//div[@class='user-nav-menu']/li/a[2]/span");
    this.SignoutBtn = page.locator("//a[@class='dropdown-item logout-btn']");
    this.createButton = page.locator("//button[contains(text(),'Create New Group')]");
    this.selectButtonASTM = page.locator("//*[text()='ASTM']//following-sibling::input");
    this.selectTypes = page.locator("//select[@id='types']");
    this.searchfield = page.locator("//div[contains(@class,'search-content')]//input");
    this.srchIcon = page.locator("//button[@class='search-button']");
    this.searchIcon = page.locator("//button[contains(@class,'search-button')]");
    this.addUser = page.locator("//button[contains(@class,'add-user')]");
    this.compassUserCheckbox = page.locator("//div[text()='Compass User']/input");
    this.compassUserAdministratorCheckbox = page.locator("//div[text()='Compass User Administrator']/input");
    this.compassUserAdministratorCheckbox_Checked = page.locator("//div[text()='Compass User Administrator']//input[@checked]");
    this.userAdminCheckbox = page.locator("//div[text()='User Admin']/input");
    this.userAdminCheckbox_Checked = page.locator("//div[text()='User Admin']/input[@checked]");
    this.accountList = page.locator("//table[@id='datatable']//tbody//tr");
    this.accountList1 = page.locator("//table[@id='datatable']//tbody//tr[1]/td[2]");
    this.userMangementRole = page.locator("//span[text()='User Management']");
    this.AccessManagement = page.locator("//span[text()='Access Management']");
    this.AccountAdministration = page.locator("//span[text()='Account Administration']");
    this.AccountAcronymUpdate = page.locator("//div[@class='form-group']/input[@data-testid='acroynm-selecter']");
    this.specbuilderTab = page.locator("//span[text()='SpecBuilder']");
    this.SpecBuilderEntitlementsLabel = page.locator("//div[@id='spec-builder-account']/h3");
    this.CompanyLOGOredirectURLtext = page.locator("//div[text()='Company Logo Redirect URL']/../input");
    this.ReportTab = page.locator("//span[text()='Reports']");
    this.UsageReport = page.locator("//span[text()='Usage Report']");
    this.UserReport = page.locator("//span[text()='User Reports']");
    this.JWTTestLoginToggleBtn = page.locator("(//h4[@id='jwtTestLogin']/following-sibling::div/span)[1]");
    this.JWTLabel = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/span)[1]");
    this.JWTToggle = page.locator("(//h4[@id='jwtEnabled']/following-sibling::div/i)[1]");
    this.userNamePasswordLoginLabel = page.locator("//span[text()='UserName & Password Login']/../div/label");
    this.userNamePasswordLoginToggle = page.locator("//span[text()='UserName & Password Login']/following-sibling::div/i");
    this.compassPointLabel = page.locator("//span[text()='Compass Points']/../div/label");
    this.compassPointToggle1 = page.locator("//span[text()='Compass Points']/following-sibling::div/i");
    this.groupsPointLabel = page.locator("//span[text()='Groups']/../div/label");
    this.groupsPointToggle = page.locator("//span[text()='Groups']/following-sibling::div/i");
    this.IpaccessCheckbox = page.locator("#ipEnabled");
    this.AppletAccess = page.locator("#appletEnabled");
    this.AllowAnonymousOrgAuth = page.locator("#anonymousOrgAuthEnabled");
    this.EnforceIPAppletWhitelisting = page.locator("#enforceWhiteListing");
    this.CompassTab = page.locator("//span[text()='Compass']");
    this.JWTloginBTN = page.locator("//button[text()='JWT Login']");
    this.JWTloginheader = page.locator("//h5[text()='JWT Login']");
    this.loginBtn = page.locator("//button[text()='Login']");
    this.AccountUserStatus = page.locator("//table[contains(@class,'table dataTable')]/thead/tr/th[text()='Account User Status']/../../../tbody/tr/td[@title='Active']/span");
    this.OKTAactivationStatus = page.locator("//table[contains(@class,'table dataTable')]/thead/tr/th[text()='OKTA Activation Status']/../../../tbody/tr/td[@title='ACTIVE']/span");
    this.OKTAactivationStatus_Staged = page.locator("//table[contains(@class,'table dataTable')]/thead/tr/th[text()='OKTA Activation Status']/../../../tbody/tr/td[@title='STAGED']/span");
    this.addUserButton = page.locator("//*[contains(text(),'Add User')]");
    this.emailField = page.locator("//label[text()='Email']//following-sibling::input");
    this.firstName = page.locator("//label[text()='First Name']//following-sibling::input");
    this.lastName = page.locator("//label[text()='Last Name']//following-sibling::input");
    this.saveBtn = page.locator("//*[@value='Save']");
    this.saveBtnInEditUser = page.locator("//button[text()='Save']");
    this.userAdministarionTab = page.locator("//span[text()='User Administration']");
    this.accountDetailsTab = page.locator("//span[text()='Account Details']");
    this.ebsAccountNumber = page.locator("//span[text()='Account Number:']/../span[@class='astm-type-heading--h6 ml-1 text_color']");
    this.EBSOrderNoEntry = page.locator("//input[@id='form-control-ebs']");
    this.organizationName = page.locator("//span[text()='Name:']/../span[@class='astm-type-heading--h5 ml-1 text_color']");
    this.userManagementTab = page.locator("//span[text()='User Management']");
    this.userManagementTab1 = page.locator("//span[text()='User Management']/parent::p");
    this.editBtn = page.locator("//span[contains(@id,'edit')]");
    this.MAEuserIDvalue = page.locator("//label[text()='MAE User ID']/following-sibling::input");
    this.compassRole = page.locator("//*[text()='Compass User']//.//input");
    this.selectSpecbuilderRole = page.locator("//*[text()='Specbuilder User']/.//input");
    this.selectCompassRole = page.locator("//*[text()='Compass User']//.//input");
    this.selectExternalSpecbuilderRole = page.locator("//*[text()='Specbuilder External User']/.//input");
    this.status = page.locator("//span[text()='Active']");
    this.close = page.locator("(//span[text()='�'])[2]");
    this.ModelcloseBtn = page.locator("//button[contains(text(),'Close')]");
    this.accountUserStatus = page.locator("//th[text()='Account User Status']");
    this.oKTAActivationStatus = page.locator("//th[text()='OKTA Activation Status']");
    this.ProductEntLink = page.locator("//p[@class='tab astm-type-heading--h6']/span[contains(text(),'Product')]");
    this.searchIcon1 = page.locator("//button[contains(@class,'search-btn')]");
    this.detailsIcon = page.locator("//span[@class='action-icon'][1]");
    this.ASTMSelectBtn = page.locator("//span[contains(text(),'ASTM')]/following-sibling::input");
    this.APISelectBtn = page.locator("//span[contains(text(),'API')]/following-sibling::input");
    this.AWWASelectBtn = page.locator("//span[contains(text(),'AWWA')]/following-sibling::input");
    this.DetailsIconModelContent = page.locator("//div[@class='modal-content']/div/div");
    this.Roles = page.locator("//input[@type='checkbox']");
    this.RolesText = page.locator("//input[@type='checkbox']/parent::div");
    this.OKTAStatus = page.locator("(//span[@class='badge bg-success'])[3]");
    this.searchboxUser = page.locator("(//input[@name='search'])[2]");
    this.seachBTN = page.locator("(//input[@name='search'])[2]/following-sibling::button");
    this.astmLogo = page.locator("img[src*='images/astm'].astm-logo");
    this.cookieRejectBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
    this.ViewUser = page.locator("//h5[text()='View User']/../button/span");
    this.AppletAccessLabel = page.locator("//h6[@id='toggler_appletAccess']");
    this.BuildRemoteLogin = page.locator("//button[text()='Build Remote Login']");
    this.DownloadFile = page.locator("//button[text()=' Download File']");
    this.MAEbtn = page.locator("//input[@data-testid='MAE-button']");
    this.TIMSbtn = page.locator("//input[@data-testid='TIMS-button']");
    this.manageTenantsHeader = page.locator("//h3[text()='Manage Tenants']");
    this.tenantName = page.locator("//table[@id='tenants-list']/../table/tbody/tr[1]/td[1]");
    this.TenantInTenantdetailsPage = page.locator("//div[@class='content-wrapper']/div/div/div/p[text()='Tenant:']/following-sibling::p");
    this.StockCodeForm = page.locator("#form-control-stock");
    this.SearchBtn = page.locator("//button[contains(@class,'search-btn')]");
    this.stockCodeTable = page.locator("//td[@class='sku_code']/div");
    this.GracePeriodDDN = page.locator("(//div[@class='css-1xc3v61-indicatorContainer'])[3]");
    this.getlistofGracePeriod1 = page.locator("(//div[@class='css-19bb58m'])[3]");
    this.SaveBtn = page.locator("//input[@value='Save']");
    this.AddAuditNoteLabel = page.locator("//h5[text()='Add Audit Note']");
    this.textAreaNote = page.locator("//textarea[@id='note-textarea']");
    this.AddNoteAndContinue = page.locator("//button[text()='Add Note & Continue']");
    this.AuditTab = page.locator("//span[text()='Audit']");
    this.VerifyAuditHistory = page.locator("//div[@id='AuditDataIndex-0']/div[2]");
    this.RecentHistoryLabel = page.locator("//h3[text()='Recent History']");
    this.userNameTxt = page.locator("#userName");
    this.passwordTxt = page.locator("#encPass");
    this.newSignInButton2 = page.locator("//button[text()='Sign In']");
    this.CGAselectBtn = page.locator("//span[contains(text(),'CGA')]/following-sibling::input");
    this.IESselectBtn = page.locator("//span[contains(text(),'IES')]/following-sibling::input");
    this.IOPselectBtn = page.locator("//span[contains(text(),'IOP1')]/following-sibling::input");
    this.CHECKselectBtn = page.locator("//span[contains(text(),'CHECK')]/following-sibling::input");
    this.AENORselectBtn = page.locator("//span[contains(text(),'AENOR')]/following-sibling::input");
    this.MenuBar = page.locator("//span[@class='label label-menu']");
    this.SubscriptionUsageSummary = page.locator("//a[text()='Subscription Usage Summary']");
    this.subscriptionsSettingTab = page.locator("//span[text()='Subscription Settings']");
    this.publishersSubTab = page.locator("//span[text()='Publishers']");
    this.lCASubTab = page.locator("//span[text()='LCA']");
    this.assetsSubTab = page.locator("(//span[text()='Assets'])[2]");
    this.nextBtn = page.locator("//a[text()='Next']");
    this.previousBtn = page.locator("//a[text()='Previous']");
    this.publishersTablePaginationTIMS = page.locator("//ul[contains(@class,'pagination')]");
    this.publisherShowDDTIMS = page.locator("//select[@id='page-size-select']");
    this.closeBtn = page.locator("//h5[text()='View User']/../button/span");
    this.BulkUploadTab = page.locator("//span[text()='Bulk Upload']");
    this.BulkUploadBtn = page.locator("//button[text()='Bulk Upload']");
    this.BulkUploadPopUpHdr = page.locator("//h5[text()='Bulk Upload']");
    this.chooseFile = page.locator("[name='bulk_file_upload']");
    this.UploadFileBtn = page.locator("//button[text()='Upload File']");
    this.successMessage = page.locator("//span[contains(text(),'You will recieve an email once all users')]");
    this.errorMessage = page.locator("//span[contains(text(),'Invalid file format')]");
    this.General = page.locator("//h5[text()='General']");
    this.YesBtn = page.locator("//button[text()='Yes']");
    this.Home = page.locator("//span[text()='Home']");
    this.dataRightsManagement = page.locator("//span[text()='Data Rights Management']/../div/label");
    this.dataRightsManagementToggle = page.locator("//span[text()='Data Rights Management']/following-sibling::div/i");
    this.exportAllCSVbtn = page.locator("//button[@data-testid='export-btn']");
    this.ECommerceOrderNo = page.locator("//button[@data-testid='export-btn']");
    this.MAESelectDropdown = page.locator(".header-nav .select-search-select");
    this.AddAuditNoteModal_SkipButton = page.locator(".skip-and-continue-btn");
    this.AlertRibbon = page.locator(".app-notification .astm-alert-text");
    this.alertText_accountLocked = page.locator("//div[@class='astm-alert-text')]");
    this.logo = page.locator("//a[@class='user-logo']");
    this.logo1 = page.locator("//img[@class='navbar-brand-logo']");
    this.switchTenant = page.locator("//a[text()='Switch Tenant']");
    this.usernameVisibility = page.locator("(//span[text()='astm.org atester'])[1]");
    this.reasonForDelegation = page.locator("//label[text()='Reason for Identity Delegation ']");
    this.textAreaforID = page.locator("//textarea[@id='reasonForDelegation']");
    this.delegateButton = page.locator("//button[text()=' Delegate']");
    this.exitDelegation1 = page.locator("//button[text()='Exit Delegation']");
    this.userAccountNumber = page.locator("//b[text()='test user (80509262)']");
    this.Signin = page.locator("//*[@id='loginModel']/h3");
    this.ID = page.locator("//*[@id='app-view-container']/div[2]/div/div/div[4]/div/div/h4");
    this.ReasonforID = page.locator("//textarea[@name='reasonForDelegation']");
    this.Deleg = page.locator("//button[@class='astm-btn btn btn-primary']");
    this.banner = page.locator("//div[@class='card-text d-flex flex-row justify-content-between pt-2 pb-2']");
    this.newTenant = page.locator("//td[text()='HMM123']/..");
    this.next_Button = page.locator("//button/span[text()='Next']");
    this.threeDotMenu = page.locator("//td[text()='HMM123']/..//li[@id='tenant-menu']");
    this.exportConfig = page.locator("//td[text()='HMM123']/..//button[text()='Export Tenant Config']");
    this.popupMsg = page.locator("//*[contains(text(),'Tenant config exported successfully')]");
    this.IdentityDeleg = page.locator("//b[contains(text(),'student user (80509410)')]");
    this.upgradeMembership = page.locator("//button[text()='Upgrade Membership']");
    this.upgrade = page.locator("//button[text()='Upgrade']");
    this.next = page.locator("//button[text()='Next']");
    this.checkbox = page.locator("#isNotAffiliated");
    this.studentMemberUpgradeTitle = page.locator("//h2[text()='Student Upgrade Membership']");
    this.drop = page.locator("//button[text()='Drop from Main Committee']");
    this.yesdrop = page.locator("//button[text()='Yes, I Want To Drop']");
    this.submit = page.locator("//button[text()='Submit']");
    this.continueButton = page.locator("//button[text()='Continue']");
    this.myCommittees = page.locator("(//a[text()='MyCommittees'])[2]");
    this.outstandingBallots = page.locator("(//button[text()='MyOutstanding Ballots '])[2]");
    this.ballot = page.locator("(//a[text()='VG8 (25-23)'])[2]");
    this.submitBallotButton_1 = page.locator("(//button[text()='Submit Ballot to ASTM'])[1]");
    this.saveForLater_1 = page.locator("(//button[text()='Save and Return Later'])[1]");
    this.submitBallotButton_2 = page.locator("(//button[text()='Submit Ballot to ASTM'])[2]");
    this.saveForLater_2 = page.locator("(//button[text()='Save and Return Later'])[2]");
    this.agendasAndMinutes = page.locator("(//button[text()='Meetings, Minutes & Agendas'])[2]");
    this.agendasAndMinutesTracker = page.locator("(//a[text()='Agendas/Minutes/Closing Reports tracker'])[2]");
    this.inviteACollegue = page.locator("(//a[text()='Invite a Colleague'])[2]");
    this.collegueName = page.locator("#Name");
    this.collegueEmail = page.locator("#Email");
    this.send = page.locator("//button[text()='Send' and @disabled]");
    this.requestACampusVisit_disabled = page.locator("(//span[@class='astm-identity-delegation-font-bg astm-identity-delegation-link'])[1]");
    this.nominateYourProfessor_disabled = page.locator("(//span[@class='astm-identity-delegation-font-bg astm-identity-delegation-link'])[2]");
    this.reviewAgain = page.locator("//button[text()='Review Again']");
    this.studentDropdown = page.locator("//span[text()='student']");
    this.myCommittee = page.locator("//a[text()='MyCommittees']");
    this.myStudentMembership = page.locator("(//a[text()='MyStudent Membership'])[2]");
    this.radioButton = page.locator("#allAbstain_0");
    this.activePageLocator = page.locator("//ul[@class='astm-pagination pagination']/li[contains(@class,'active')]");
    this.firstRowEmailLocator = page.locator("(//div[@class='table_container']/table//tbody/tr/td[3]/span)[1]");
    this.configurationTab = page.locator("//p//span[text()='Configuration']");
    this.featuresStatus = page.locator("//h4[text()='Features']//..//following-sibling::div[@class='collapse show']//ul//div[@class='icon_style featureStatus']");
    this.searchTypesStatus = page.locator("//h4[text()='Search Types']//..//following-sibling::div[@class='collapse show']//li//div[contains(@class, 'search_section')][2]");
    this.featuresActions = page.locator("//h4[text()='Features']//..//following-sibling::div[@class='collapse show']//li[@id='tenant-menu']");
    this.statusText = page.locator(".icon_text");
    this.statusIcon = page.locator(".icon_cursor");
    this.featuresViewEditActionSettings = page.locator("//button[text()='View/Edit Settings']");
    this.viewSettingsHeader = page.locator("//form//h5[text()='View Settings']");
    this.viewSettingsEdit = page.locator("//button[text()='Edit']");
    this.viewSettingsTable = page.locator("table.settingTable");
    this.viewSettingsAdd = page.locator("//form//button//span[text()='Add']");
    this.viewSettingsSettingCode = page.locator("//input[@placeholder='Enter Setting Code']");
    this.viewSettingsSettingValue = page.locator("//input[@placeholder='Enter Setting Value']");
    this.viewSettingsDelete = page.locator("//table[contains(@class, 'settingTable')]//tr//td//button");
    this.viewSettingsSave = page.locator("//form//button[text()='Save']");
    this.viewSettingsCancel = page.locator("//form//button[text()='Cancel']");
    this.greetingsText = page.locator("//label[text()='Greeting Text']");
    this.welcomeText = page.locator("//label[text()='Welcome Text']");
    this.helpMenuTable = page.locator("//div[@data-testid='help-menu-row']//table");
    this.helpMenuTableColHeader = page.locator("//div[@data-testid='help-menu-row']//table//th");
    this.addButton = page.locator("//button//span[text()='Add']");
    this.idFieldError = page.locator("//div[text()='Please Provide Id']");
    this.keyFieldError = page.locator("//div[text()='Please Provide Key']");
    this.deleteIcon = page.locator("button i.fa-trash");
    this.tipsAndTricksHeaderLabel = page.locator("//h4[text()='Tips and Tricks']//ancestor::div[@class='col']//label[text()='Header Label']");
    this.membershipInfo = page.locator("(//a[text()='Membership Info'])[2]");
    this.membershipCard = page.locator("//a[text()='Print Membership Card']");
    this.membershipCertificate = page.locator("//a[text()='Print Member Certificate']");
    this.membershipReceipt = page.locator("Print Membership Receipt");
    this.changeOfEmployment = page.locator("(//a[text()='Change Of Employment'])[2]");
    this.manageCommittees = page.locator("(//a[text()='Manage Committees'])[2]");
    this.ballotsAndWorkItems = page.locator("(//button[text()='Ballots & Work Items'])[2]");
    this.submitOrEdit = page.locator("(//a[text()='Submit/Edit'])[2]");
    this.viewButton = page.locator("//a[text()='View']");
    this.manageSubcommittees = page.locator("//a[text()='Subcommittee memberships']");
    this.vg8Subcommitte1 = page.locator("//p[text()='VG8.01']");
    this.vg8Subcommitte2 = page.locator("//p[text()='VG8.02']");
    this.dropFromMainCommittee = page.locator("//button[text()='Drop from Main Committee']");
    this.registerAWorkItemRadiobutton = page.locator("#workItem1");
    this.proposeRadioButton = page.locator("#IsNewStandard0");
    this.committeeDropdown = page.locator("#MainCommitteeId");
    this.committeeOption = page.locator("//option[@aria-describedby='VG8 - Test']");
    this.subCommitteeDropdown = page.locator("#SubCommitteeId");
    this.subCommitteeOption = page.locator("//option[@aria-describedby='VG8.01 - test']");
    this.submittingOriginalRadioButton = page.locator("#copyright1");
    this.agreeButton = page.locator("//button[text()='Agree']");
    this.targetMonth = page.locator("#TargetDateMonth");
    this.targetMonthOpt = page.locator("(//option[@value='01'])[1]");
    this.targetYearOpt = page.locator("(//option[@value='2027'])[1]");
    this.targetYear = page.locator("#TargetDateYear");
    this.yesRadioButton = page.locator("#IsAuthorizedWorkItem0");
    this.patentRadioBtn = page.locator("#IsPatented0");
    this.typeOfStandard = page.locator("#StandardTypeId");
    this.typeOfStandardOpt = page.locator("//option[@value='1']");
    this.titleTextBox = page.locator("#Title");
    this.ManageSearch = page.locator("(//input[@type='text'])[2]");
    this.ManageSearchButton = page.locator("(//i[@class='fas fa-search'])[2]");
  }

  async MAElogin(email: string, password: string) {
    await test.step('Login to MAE with valid credentials', async () => {
    await this.page.goto('https://stage-manage.astm.org/');
    await this.handleOneTrustCookie();
    await this.NewLoginPublic2(email, password);
    await attachScreenshot(this.page, 'Logged in and clicked MAE button');
    });
  }

  async clickMAEButton(): Promise<void> {
  await this.MAEbtn.waitFor({ state: 'visible', timeout: 10000 });
  await this.MAEbtn.click();
}



  async handleOneTrustCookie() {
    if (await this.cookieRejectBtn.isVisible()) {
      await this.cookieRejectBtn.click();
    }
  }

  async NewLoginPublic2(userEmail: string, password: string) {
    stepLogger('Performing new login with email and password');
    await test.step('Performing new login with email and password', async () => {
    await this.newSignInButton2.waitFor({ state: 'visible', timeout: 30000 });
    await this.userNameTxt.fill(userEmail);
    await this.passwordTxt.fill(password);
    await this.handleOneTrustCookie();
    await this.newSignInButton2.click();
    });
  }

  async selectASTMTenanat() {
    //stepLogger('Selecting ASTM Tenant');
    await test.step('Selecting ASTM Tenant', async () => {
    await this.ASTMSelectBtn.scrollIntoViewIfNeeded();
    await this.ASTMSelectBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.ASTMSelectBtn.click();
    await attachScreenshot(this.page, 'Selected ASTM Tenant');
    });
  }

  async SearchMaeAccountID(MAEAccountID: string) {
    //stepLogger(`Searching for MAE Account ID: ${MAEAccountID}`);
     await test.step('Searching for MAE Account ID:: ${MAEAccountID}`', async () => {
    await this.searchAndOpenAccountNumber(MAEAccountID);
    await attachScreenshot(this.page, 'Searched and opened MAE Account ID');
    });
  }

  async selectValueInDropdown(dropdown: Locator, value: string) {
    stepLogger(`Selecting value in dropdown: ${value}`);
    await dropdown.waitFor({ state: 'visible', timeout: 30000 });
    await dropdown.selectOption({ label: value });
    await dropdown.click();
  }

  async searchAndOpenAccountNumber(ebsNumber: string) {
    stepLogger(`Searching and opening account number: ${ebsNumber}`);
    await this.selectValueInDropdown(this.selectTypes, 'MAE Account ID');
    await this.searchfield.fill(ebsNumber);
    await this.searchIcon.click();
    await this.accountList.first().waitFor({ state: 'visible', timeout: 30000 });
    await this.accountList.first().click();
  }

  async ClickAccessManagementTab() {
  //stepLogger('Clicking on Access Management Tab');
  await test.step('Clicking on Access Management Tab', async () => {
    await this.AccessManagement.waitFor({ state: 'visible', timeout: 5000 });
    await this.AccessManagement.click();
  });
  }

async groupsCheck(): Promise<string> {
  return await test.step('Checking Groups Point Toggle', async () => {
    const label = await this.groupsPointLabel.textContent();

    if (label === 'Disabled') {
      await this.groupsPointToggle.click();
      return 'Enabled';
    } else if (label === 'Enabled') {
      await this.groupsPointToggle.click();
      return 'Disabled';
    }

    return label || '';
  });
}

  async SaveAndAddAuditNote(Note: string) {
    //stepLogger('Saving changes and adding audit note');
    await test.step('Saving changes and adding audit note', async () => {
    await this.SaveBtn.scrollIntoViewIfNeeded();
    await this.SaveBtn.click();
    await this.AddAuditNoteLabel.waitFor({ state: 'visible', timeout: 15000 });
    await this.textAreaNote.fill(Note);
    await this.AddNoteAndContinue.waitFor({ state: 'visible', timeout: 3000 });
    await this.AddNoteAndContinue.click();
    });
  }

  async getSignoutdropdown() {
    stepLogger('Clicking on Signout dropdown');
    await test.step('Clicking on Signout dropdown', async () => {
    await this.Signoutdropdown.click();
    await this.SignoutBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.SignoutBtn.click();
    });
  }

  async clickSignoutBtn() {
    stepLogger('Clicking on Signout button');   
    await test.step('Clicking on Signout button', async () => {
    await this.SignoutBtn.click();
    });
  }


  async verifyClickAccessManagementTab() {
  stepLogger('Verifying click on Access Management Tab');
  await test.step('Verifying click on Access Management Tab', async () => {
    try {
      await this.AccessManagement.waitFor({ state: 'visible', timeout: 5000 });
      await this.AccessManagement.waitFor({ state: 'attached', timeout: 10000 });
      await this.AccessManagement.click();
      await this.page.screenshot({ path: 'test-results/Screenshots/AccessManagementTab.png' });
    } catch (e) {
      console.error("Failed to click on AccessManagementTab", e);
      throw e;
    }
  });
  }

  async VerifyJWTToken(): Promise<string> {
  stepLogger('Verifying JWT Token Enabled/Disabled');
  return await test.step('Verifying JWT Token Enabled/Disabled', async () => {
  let token = "";
  try {
    await this.JWTLabel.waitFor({ state: 'visible', timeout: 3000 });

    const toggleHandle = await this.JWTToggle.elementHandle();
    if (toggleHandle) {
      await this.page.evaluate((el) => el.scrollIntoView(), toggleHandle);
    } else {
      throw new Error("JWTToggle element not found");
    }

    const labelText = await this.JWTLabel.textContent();
    if (labelText?.includes("Disabled")) {
      await this.JWTToggle.click();
      token = '"Y"';
    } else if (labelText?.includes("Enabled")) {
      await this.JWTToggle.click();
      token = '"N"';
    }

    await this.page.screenshot({ path: 'test-results/Screenshots/VerifyJWTToken.png' });
  } catch (e) {
    console.error("Failed to validate JWT token enabled", e);
    throw e;
  }

  return token;
});
}


  async verifyAuditTab(note: string) {
  stepLogger('Verifying Audit tab with note');
  await test.step('Verifying Audit tab with note', async () => {
    try {
      await this.AuditTab.scrollIntoViewIfNeeded();
      await this.AuditTab.waitFor({ state: 'attached', timeout: 30000 });
      await this.AuditTab.click();
      await this.RecentHistoryLabel.waitFor({ state: 'visible', timeout: 30000 });

      await this.VerifyAuditHistory.waitFor({ state: 'visible', timeout: 30000 });
      const historyText = await this.VerifyAuditHistory.textContent();
      if (!historyText?.includes(note)) {
        throw new Error("Note not found in audit history");
      }
    } catch (e) {
      console.error("Failed to verify Audit tab history", e);
      throw e;
    }
  });
  }

  async VerifyCompassTab() {
  stepLogger('Verifying Compass Tab');
  await test.step('Verifying Compass Tab', async () => {
    try {
      await this.CompassTab.waitFor({ state: 'attached', timeout: 30000 });
      await this.CompassTab.click();
      await this.page.screenshot({ path: 'test-results/Screenshots/CompassTab.png' });
    } catch (e) {
      console.error("Failed to click Compass Tab", e);
      throw e;
    }
  });
  }

async userNameAndPasswordLoginCheck(): Promise<string> {
  return await test.step('Checking UserName and Password Login under Compass Tab', async () => {
    let auth = "";

    try {
      await this.page.screenshot({ path: 'test-results/Screenshots/UserNamePasswordLabel.png' });
      const labelText = await this.userNamePasswordLoginLabel.textContent();

      if (labelText?.includes("Disabled")) {
        const labelHandle = await this.userNamePasswordLoginLabel.elementHandle();
        if (!labelHandle) throw new Error("UserNamePasswordLoginLabel element not found");  

        await this.page.evaluate(el => el.scrollIntoView(), labelHandle);
        await this.userNamePasswordLoginToggle.click();
        await this.IpaccessCheckbox.waitFor({ state: 'attached', timeout: 5000 });
        await this.IpaccessCheckbox.click();
        await this.AllowAnonymousOrgAuth.click();
        auth = "true";

      } else if (labelText?.includes("Enabled")) {
        const labelHandle = await this.userNamePasswordLoginLabel.elementHandle();
        if (!labelHandle) throw new Error("UserNamePasswordLoginLabel element not found");

        await this.page.evaluate(el => el.scrollIntoView(), labelHandle);
        await this.userNamePasswordLoginToggle.click();
        auth = "false";
      }

    } catch (e) {
      console.error("Failed to validate Username and Password Login check under Compass Tab", e);
      throw e;
    }

    return auth;
  });
}


async clickReportTab() {
  //stepLogger('Clicking on Report Tab'); 
  await test.step('Clicking on Report Tab', async () => {
  try {
    await this.reportTab.waitFor({ state: 'visible', timeout: 5000 });
    await this.reportTab.waitFor({ state: 'attached', timeout: 10000 });
    await this.reportTab.click();
    await attachScreenshot(this.page, 'ReportTab_Clicked.png');
  } catch (e) {
    console.error('Failed to click on ReportTab', e);
    throw e;
  }
   });
}

async verifySubscriptionUsageReport() {
  stepLogger('Verifying Subscription Usage Report');
  await test.step('Verifying Subscription Usage Report', async () => {
  try {
    await this.UsageReport.waitFor({ state: 'visible', timeout: 15000 });
    await expect(this.UsageReport).toBeVisible();
    await expect(this.UserReport).toBeVisible();
    await this.page.screenshot({ path: 'test-results/Screenshots/UsageReport_Visible.png' });

    // Scroll down using keyboard
    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'test-results/Screenshots/After_PageDown_1.png' });
    await this.page.keyboard.press('PageDown');
    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'test-results/Screenshots/After_PageDown_2.png' });
    await this.UserReport.click();
    await this.page.keyboard.press('PageDown');
    await this.page.screenshot({ path: 'test-results/Screenshots/Final_Scroll_UserReport.png' });
  } catch (e) {
    console.error('Failed to verify Subscription Usage Report', e);
    throw e;
  }
});
  }

  async validateProductEntitlementTab() {
  stepLogger('Clicking on Product Entitlement');

  await test.step('Click on Product Entitlement tab', async () => {
    try {
      await this.ProductEntLink.scrollIntoViewIfNeeded();
      await this.ProductEntLink.waitFor({ state: 'visible', timeout: 10000 });
      await this.ProductEntLink.click();
    } catch (e) {
      console.error('Failed to click on Product Entitlement tab', e);
      throw e; // fail the test
    }
  });
}

async verifyStockcode_Graceperiodcheck_1(stockcode: string): Promise<string | null> {
  return await test.step('Verify stockcode and grace period', async () => {
    let selectedGracePeriod: string | null = null;

    try {
      // Enter stock code
      await this.StockCodeForm.fill('');
      await this.StockCodeForm.fill(stockcode);
      await test.info().attach('Entered Stock Code', {
        body: Buffer.from(stockcode),
        contentType: 'text/plain',
      });

      // Click Search button
      await this.SearchBtn.click();

      // Click on Grace Period dropdown
      await this.GracePeriodDDN.scrollIntoViewIfNeeded();
      await this.GracePeriodDDN.click();

      // Wait for grace period options
      const graceOptions = this.page.locator("[id^='react-select-8-option']");
      const count = await graceOptions.count();
      if (count === 0) throw new Error("No grace period options found.");

      // Pick a random option
      const index = Math.floor(Math.random() * count);
      const selectedOption = graceOptions.nth(index);
      selectedGracePeriod = (await selectedOption.textContent())?.trim() || null;

      // Click using JS if needed
      const optionHandle = await selectedOption.elementHandle();
      if (optionHandle) {
        await this.page.evaluate((el) => {
          if (el && 'click' in el) (el as HTMLElement).click();
        }, optionHandle);
      } else {
        throw new Error("Element handle not found for grace option");
      }

      await test.info().attach('Selected Grace Period', {
        body: Buffer.from(selectedGracePeriod || 'None'),
        contentType: 'text/plain',
      });

      // Wait and click Save if enabled
      await this.SaveBtn.waitFor({ state: 'visible', timeout: 5000 });
      if (await this.SaveBtn.isEnabled()) {
        await this.SaveBtn.click();
      } else {
        throw new Error("Save button is disabled after selecting grace period.");
      }

      return selectedGracePeriod;

    } catch (error) {
      console.error("Grace period selection failed:", error);
      throw error;
    }
  });
}







}
