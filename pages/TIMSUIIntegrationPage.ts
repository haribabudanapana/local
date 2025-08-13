import { expect, Locator, Page, test } from '@playwright/test';

export class TIMSUIIntegrationPage {
  readonly page: Page;
  readonly TIMSbtn: Locator;
  readonly manageTenantsHeader: Locator;

  readonly addTenantBtn: Locator;
  readonly newDraftTenantBtn: Locator;
  readonly tenantDetailsHeader: Locator;

  readonly tenantCodeField: Locator;
  readonly nextButton: Locator;
  readonly tenantCodeErrorMsg1: Locator;
  readonly tenantCodeErrorMsg2: Locator;

  readonly supportEmail: Locator;
  readonly supportEmailError1: Locator;
  readonly supportEmailError2: Locator;

  readonly supportWebPageUrl: Locator;
  readonly supportWebPageURLError1: Locator;
  readonly supportWebPageURLError2: Locator;

  readonly tenantAddress: Locator;
  readonly tenantAddressError1: Locator;
  readonly tenantAddressError2: Locator;

  readonly exitButton: Locator;
  readonly attentionPopup: Locator;
  readonly yesButton: Locator;
  readonly noButton: Locator;
  readonly viewDraftTenantsBtn: Locator;
  readonly ViewDraftTenantsHeading: Locator;
  readonly ViewDraftTenantsTable: Locator;
  readonly ShowDropDown: Locator;
  readonly nextPage1: Locator;
  readonly pageNumList: Locator;
  readonly goToPageInput_ViewDraftTenants: Locator;
  readonly General: Locator;
  readonly ExitBtn: Locator;
  readonly YesBtn: Locator;
  readonly NoBtn: Locator;
  readonly Home: Locator;
  readonly menu: Locator;
  readonly ProductInformationManagment: Locator;
  readonly AddTenant: Locator;
  readonly newDraftTenant: Locator;
  readonly TenantDetailsHdr: Locator;
  readonly TenantName: Locator;
  readonly TenantCode: Locator;
  readonly TenantPhoneNo: Locator;
  readonly TenantAddress: Locator;
  readonly NextBtn: Locator;
  readonly PreviousBtn: Locator;
  readonly TenantNameErrorMsg1: Locator;
  readonly TenantNameErrorMsg2: Locator;
  readonly TenantCodeErrorMsg1: Locator;
  readonly TenantCodeErrorMsg2: Locator;
  readonly SupportEmailErrorMsg1: Locator;
  readonly SupportEmailErrorMsg2: Locator;
  readonly SupportWebPageURLErrorMsg1: Locator;
  readonly SupportWebPageURLErrorMsg2: Locator;
  readonly SupportTenantAddressErrorMsg1: Locator;
  readonly SupportTenantAddressErrorMsg2: Locator;
  readonly AttentionPopup: Locator;
  readonly ListOfTenantName: Locator;
  readonly Domain: Locator;
  readonly RootDomain: Locator;
  readonly compassDomain: Locator;
  readonly MAEDomain: Locator;
  readonly centralLoginDomain: Locator;
  readonly OktaDomain: Locator;
  readonly RootDomainErrorMsg1: Locator;
  readonly RootDomainErrorMsg2: Locator;
  readonly CompassDomainErrorMsg1: Locator;
  readonly CompassDomainErrorMsg2: Locator;
  readonly MAEDomainErrorMsg1: Locator;
  readonly MAEDomainErrorMsg2: Locator;
  readonly CentralLoginDomainErrorMsg1: Locator;
  readonly CentralLoginDomainErrorMsg2: Locator;
  readonly OktaDomainErrorMsg1: Locator;
  readonly OktaDomainErrorMsg2: Locator;
  readonly NextPage: Locator;
  readonly compassApplicationName: Locator;
  readonly defaultLanguageForCompass: Locator;
  readonly useDefaultUserMessages: Locator;
  readonly errorMessageForContentAccess: Locator;
  readonly noPdfMessageForContentAccess: Locator;
  readonly noAccessMessageForContent: Locator;
  readonly noAccessToFeatureMessage: Locator;
  readonly publisherRefinementSection: Locator;
  readonly wistiaProjectID: Locator;
  readonly compassGroupEmailSenderName: Locator;
  readonly compassGroupSenderEmail: Locator;
  readonly compassAppNameErrorMsg1: Locator;
  readonly compassAppNameErrorMsg2: Locator;
  readonly wistiaProjectIDErrorMsg1: Locator;
  readonly wistiaProjectIDErrorMsg2: Locator;
  readonly EmailSenderNameErrorMsg1: Locator;
  readonly EmailSenderNameErrorMsg2: Locator;
  readonly EmailSenderEmailErrorMsg1: Locator;
  readonly EmailSenderEmailErrorMsg2: Locator;
  readonly outgoingEmailAddress: Locator;
  readonly outgoingEmailName: Locator;
  readonly EmailAddressErrorMsg1: Locator;
  readonly EmailAddressErrorMsg2: Locator;
  readonly EmailNameErrorMsg1: Locator;
  readonly groupCreateEnabled: Locator;
  readonly sendGroupEmailEnabled: Locator;
  readonly contentShareGroupEnabled: Locator;
  readonly contentShareUserEnabled: Locator;
  readonly groupCreateTemplateId: Locator;
  readonly sendGroupEmailTemplateId: Locator;
  readonly contentShareGroupTemplateId: Locator;
  readonly contentShareUserTemplateId: Locator;
  readonly JWT: Locator;
  readonly JWTOnly: Locator;
  readonly JWTLoginMessage: Locator;
  readonly JWTLoginURL: Locator;
  readonly IP: Locator;
  readonly BasicAuthentication: Locator;
  readonly EnableDelegatedUserAdmin: Locator;
  readonly CentralLogin: Locator;
  readonly Compass: Locator;
  readonly MyAccountAPI: Locator;
  readonly MyAccountUI: Locator;
  readonly OneTrustScriptID: Locator;
  readonly OktaIssuerURL: Locator;
  readonly OktaAuthServerId: Locator;
  readonly MAEUI: Locator;
  readonly ErrorMsg1: Locator;
  readonly ErrorMsg2: Locator;
  readonly OneTrustScriptIDErrorMsg1: Locator;
  readonly OktaIssuerURLErrorMsg1: Locator;
  readonly OktaIssuerURLErrorMsg2: Locator;
  readonly AddPublisherBtn: Locator;
  readonly AddPublisherHdr: Locator;
  readonly selectPublisher: Locator;
  readonly selectPublisherDropdown: Locator;
  readonly selectPublisherList: Locator;
  readonly Tracker: Locator;
  readonly Refinements: Locator;
  readonly Billboard: Locator;
  readonly BillboardTitle: Locator;
  readonly BillboardTitleErrorMsg: Locator;
  readonly CancelBtn: Locator;
  readonly NextBtnDisabled: Locator;
  readonly NextPageBnt: Locator;
  readonly saveBtn: Locator;
  readonly closeBtn: Locator;
  readonly PublisherAssignedMsg: Locator;
  readonly showDropDown: Locator;
  readonly centralLoginTab: Locator;
  readonly assetsSubTab: Locator;
  readonly sAMLConfigurationHdr: Locator;
  readonly sAMLConfiguration: Locator;
  readonly uploadFileBtn: Locator;
  readonly audienceURI: Locator;
  readonly audienceURIErrorMsg: Locator;
  readonly metadataFile: Locator;
  readonly metadataFileSizeErrorMsg: Locator;
  readonly fileTypeNotSupportedMsg: Locator;
  readonly TenantInTenantdetailsPage: Locator;
  readonly subscriptionsSettingTab: Locator;
  readonly partnersTab: Locator;
  readonly addPartnerBtn: Locator;
  readonly addPartnerPopUpHdr: Locator;
  readonly viewPartnerPopUpHdr: Locator;
  readonly partnerName: Locator;
  readonly partnerCode: Locator;
  readonly partnerSecret: Locator;
  readonly partnerNameErrorMsg: Locator;
  readonly eyeIcon: Locator;
  readonly assetsTab: Locator;
  readonly assetsHdr: Locator;
  readonly webLogo: Locator;
  readonly emailLogo: Locator;
  readonly cssFile: Locator;
  readonly fileSizeExceedErrorMsg: Locator;
  readonly fileTypeNotSupportedErrorMsg: Locator;
  readonly compassBannerImage: Locator;
  readonly compassWebLogo: Locator;
  readonly compassBannerPrerequisitesMsg: Locator;
  readonly compassWebLogoPrerequisitesMsg: Locator;
  readonly tenantStatusEditIcon: Locator;
  readonly TenantStatus: Locator;
  readonly updateTenantStatusHdr: Locator;
  readonly tenantStatus: Locator;
  readonly ViewSettingsBtn: Locator;
  readonly viewTenantSettingsHdr: Locator;
  readonly tenantSettings: Locator;
  readonly filter: Locator;
  readonly searchField: Locator;
  readonly manageLCAHdr: Locator;
  readonly uploadLCABtn: Locator;
  readonly ViewLCABtn: Locator;
  readonly uploadLCAHdr: Locator;
  readonly viewLCADetailsHdr: Locator;
  readonly inputRevisionComment: Locator;
  readonly lCAEffectiveDate: Locator;
  readonly lcaEffectiveDate: Locator;
  readonly uploadLcaDocument: Locator;
  readonly LCATab: Locator;
  readonly sizeExceedInUploadLCA: Locator;
  readonly uploadValidFile: Locator;
  readonly assetsSubTab1: Locator;
  readonly userWatermark: Locator;
  readonly organizationWatermark: Locator;
  readonly additionalDetails: Locator;
  readonly tooltipValue: Locator;
  readonly addContentTypebtn: Locator;
  readonly publisherPageSelect: Locator;
  readonly viewSettings: Locator;
  readonly editPencilIcon: Locator;
  readonly statusDropdown: Locator;
  readonly saveButton: Locator;
  readonly statusBadge: Locator;



  constructor(page: Page) {
    this.page = page;

    this.TIMSbtn = page.locator('//input[@data-testid="TIMS-button"]');
    this.manageTenantsHeader = page.locator('//h3[text()="Manage Tenants"]');
    this.addTenantBtn = page.locator('//button[text()="Add Tenant"]');
    this.newDraftTenantBtn = page.locator('//button[text()="New Draft Tenant"]');
    this.tenantDetailsHeader = page.locator('//*[text()="Tenant Details"]');

    this.tenantCodeField = page.locator('[name="tenantCode"]');
    this.nextButton = page.locator('//button[contains(text(),"Next")]');
    this.tenantCodeErrorMsg1 = page.locator("//p[text()='Tenant Code can only contain alphabets and numbers.']");
    this.tenantCodeErrorMsg2 = page.locator("//p[text()='Tenant Code must be at most 50 characters']");

    this.supportEmail = page.locator('[name="support-email"]');
    this.supportEmailError1 = page.locator("//p[text()='Invalid email address']");
    this.supportEmailError2 = page.locator("//p[text()='Support Email must be at most 320 characters']");

    this.supportWebPageUrl = page.locator('[name="supportWebPageUrl"]');
    this.supportWebPageURLError1 = page.locator("//p[text()='Support Web Page URL must be a valid URL']");
    this.supportWebPageURLError2 = page.locator("//p[text()='Support Web Page URL must be at most 255 characters']");

    this.tenantAddress = page.locator('[name="displayAddress"]');
    this.tenantAddressError1 = page.locator("//p[contains(text(),'Tenant Address can only contain alphabets')]");
    this.tenantAddressError2 = page.locator("//p[text()='Tenant Address must be at most 255 characters']");

    this.exitButton = page.locator('//button[contains(text(),"Exit")]');
    this.attentionPopup = page.locator('//div[contains(text(),"Unsaved Progress will be lost")]');
    this.yesButton = page.locator('//button[text()="Yes"]');
    this.noButton = page.locator('//button[text()="No"]');
    this.viewDraftTenantsBtn = page.locator('//button[text()="View Draft Tenants"]');
    this.ViewDraftTenantsHeading = page.locator('//h3[text()="View Draft Tenants"]');
    this.ViewDraftTenantsTable = page.locator('//table[@id="draft-tenants-list"]');
    this.ShowDropDown = page.locator('#page-size-select');
    this.nextPage1 = page.locator('(//span[text()="Next"])[1]');
    this.pageNumList = page.locator("//div[contains(@class,'align-items-center gap-1')]");
    this.goToPageInput_ViewDraftTenants = page.locator('//input[@id="go-to-page"]');
    this.General = page.locator('//h5[text()="General"]');
    this.ExitBtn = page.locator('//button[contains(text(),"Exit")]');
    this.YesBtn = page.locator('//button[text()="Yes"]');
    this.NoBtn = page.locator('//button[text()="No"]');
    this.Home = page.locator('//span[text()="Home"]');
     this.ViewDraftTenantsTable = page.locator("//table[@id='draft-tenants-list']");
    this.goToPageInput_ViewDraftTenants = page.locator("//input[@id='go-to-page']");
    this.viewDraftTenantsBtn = page.locator("//button[text()='View Draft Tenants']");
    this.ViewDraftTenantsHeading = page.locator("//h3[text()='View Draft Tenants']");
    this.menu = page.locator("//div[@data-testid='menu-icon']//i");
    this.ProductInformationManagment = page.locator("//a[text()='Product Information Managment']");
    this.manageTenantsHeader = page.locator("//h3[text()='Manage Tenants']");
    this.AddTenant = page.locator("//button[text()='Add Tenant']");
    this.newDraftTenant = page.locator("//button[text()='New Draft Tenant']");
    this.TenantDetailsHdr = page.locator("//*[text()='Tenant Details']");
    this.General = page.locator("//h5[text()='General']");
    this.TenantName = page.locator("[name='tenantName']");
    this.TenantCode = page.locator("[name='tenantCode']");
    this.supportEmail = page.locator("[name='support-email']");
    this.supportWebPageUrl = page.locator("[name='supportWebPageUrl']");
    this.TenantPhoneNo = page.locator("//input[@class='form-control tenantPhoneNo']");
    this.TenantAddress = page.locator("[name='displayAddress']");
    this.NextBtn = page.locator("//button[contains(text(),'Next')]");
    this.ExitBtn = page.locator("//button[contains(text(),'Exit')]");
    this.PreviousBtn = page.locator("//button[contains(text(),'Previous')]");
    this.TenantNameErrorMsg1 = page.locator("//p[text()='Tenant Name can only contain Alphabets, Numbers and Spaces']");
    this.TenantNameErrorMsg2 = page.locator("//p[text()='Tenant Name must be at most 40 characters']");
    this.TenantCodeErrorMsg1 = page.locator("//p[text()='Tenant Code can only contain alphabets and numbers.']");
    this.TenantCodeErrorMsg2 = page.locator("//p[text()='Tenant Code must be at most 50 characters']");
    this.SupportEmailErrorMsg1 = page.locator("//p[text()='Invalid email address']");
    this.SupportEmailErrorMsg2 = page.locator("//p[text()='Support Email must be at most 320 characters']");
    this.SupportWebPageURLErrorMsg1 = page.locator("//p[text()='Support Web Page URL must be a valid URL']");
    this.SupportWebPageURLErrorMsg2 = page.locator("//p[text()='Support Web Page URL must be at most 255 characters']");
    this.SupportTenantAddressErrorMsg1 = page.locator("//p[contains(text(),'Tenant Address can only contain alphabets, numbers, space')]");
    this.SupportTenantAddressErrorMsg2 = page.locator("//p[text()='Tenant Address must be at most 255 characters']");
    this.AttentionPopup = page.locator("//div[contains(text(),'Unsaved Progress will be lost')]");
    this.YesBtn = page.locator("//button[text()='Yes']");
    this.NoBtn = page.locator("//button[text()='No']");
    this.ListOfTenantName = page.locator("//table[@id='draft-tenants-list']/tbody/tr/td[2]");
    this.ShowDropDown = page.locator("#page-size-select");
    this.pageNumList = page.locator("//div[contains(@class,'align-items-center gap-1')]");
    this.Home = page.locator("//span[text()='Home']");
    this.Domain = page.locator("//h5[text()='Domain']");
    this.RootDomain = page.locator("[name='domain']");
    this.compassDomain = page.locator("[name='compassDomain']");
    this.MAEDomain = page.locator("[name='maeDomain']");
    this.centralLoginDomain = page.locator("[name='centralLoginDomain']");
    this.OktaDomain = page.locator("[name='oktaDomain']");
    this.RootDomainErrorMsg1 = page.locator("//p[text()='Invalid root domain']");
    this.RootDomainErrorMsg2 = page.locator("//p[text()='Root Domain must be at most 32 characters']");
     this.CompassDomainErrorMsg1 = page.locator("//p[text()='Invalid compass domain']");
    this.CompassDomainErrorMsg2 = page.locator("//p[text()='Compass Domain must be at most 32 characters']");
    this.MAEDomainErrorMsg1 = page.locator("//p[text()='Invalid mae domain']");
    this.MAEDomainErrorMsg2 = page.locator("//p[text()='Mae Domain must be at most 32 characters']");
    this.CentralLoginDomainErrorMsg1 = page.locator("//p[text()='Invalid central login domain']");
    this.CentralLoginDomainErrorMsg2 = page.locator("//p[text()='Central Login Domain must be at most 32 characters']");
    this.OktaDomainErrorMsg1 = page.locator("//p[text()='Invalid okta domain']");
    this.OktaDomainErrorMsg2 = page.locator("//p[text()='Okta Domain must be at most 32 characters']");
    this.NextPage = page.locator("//a[text()='Next']");
    this.nextPage1 = page.locator("(//span[text()='Next'])[1]");
    this.compassApplicationName = page.locator("[name='compassApplicationName']");
    this.defaultLanguageForCompass = page.locator("[name='defaultLanguageForCompass']");
    this.useDefaultUserMessages = page.locator("[name='useDefaultUserMessages']");
    this.errorMessageForContentAccess = page.locator("[name='errorMessageForContentAccess']");
    this.noPdfMessageForContentAccess = page.locator("[name='noPdfMessageForContentAccess']");
    this.noAccessMessageForContent = page.locator("[name='noAccessMessageForContent']");
    this.noAccessToFeatureMessage = page.locator("[name='noAccessToFeatureMessage']");
    this.publisherRefinementSection = page.locator("[name='publisherRefinementSectionLabel']");
    this.wistiaProjectID = page.locator("[name='wistiaProjectID']");
    this.compassGroupEmailSenderName = page.locator("[name='compassGroupEmailSenderName']");
    this.compassGroupSenderEmail = page.locator("[name='compassGroupSenderEmail']");
    this.compassAppNameErrorMsg1 = page.locator("//p[text()='Invalid compass application name']");
    this.compassAppNameErrorMsg2 = page.locator("//p[text()='Compass Application Name must be at most 50 characters']");
    this.wistiaProjectIDErrorMsg1 = page.locator("//p[text()='Invalid wistia project id']");
    this.wistiaProjectIDErrorMsg2 = page.locator("//p[text()='Wistia Project ID must be at most 150 characters']");
    this.EmailSenderNameErrorMsg1 = page.locator("//p[text()='Invalid compass group email sender name']");
    this.EmailSenderNameErrorMsg2 = page.locator("//p[text()='Compass Group Email Sender Name must be at most 30 characters']");
    this.EmailSenderEmailErrorMsg1 = page.locator("//p[text()='Invalid email address']");
    this.EmailSenderEmailErrorMsg2 = page.locator("//p[text()='Compass Group Sender Email must be at most 320 characters']");
    this.outgoingEmailAddress = page.locator("[name='outgoingEmailAddress']");
    this.outgoingEmailName = page.locator("[name='outgoingEmailName']");
    this.EmailAddressErrorMsg1 = page.locator("//p[contains(text(),'Default Outgoing Email Address can only')]");
    this.EmailAddressErrorMsg2 = page.locator("//p[text()='Default Outgoing Email Address must be at most 30 characters']");
    this.EmailNameErrorMsg1 = page.locator("//p[contains(text(),'Default Outgoing Email Name can only')]");
    this.groupCreateEnabled = page.locator("[name='groupCreateEnabled']");
    this.sendGroupEmailEnabled = page.locator("[name='sendGroupEmailEnabled']");
    this.contentShareGroupEnabled = page.locator("[name='contentShareGroupEnabled']");
    this.contentShareUserEnabled = page.locator("[name='contentShareUserEnabled']");
    this.groupCreateTemplateId = page.locator("[name='groupCreateTemplateId']");
    this.sendGroupEmailTemplateId = page.locator("[name='sendGroupEmailTemplateId']");
    this.contentShareGroupTemplateId = page.locator("[name='contentShareGroupTemplateId']");
    this.contentShareUserTemplateId = page.locator("[name='contentShareUserTemplateId']");
    this.JWT = page.locator("[name='jwt']");
    this.JWTOnly = page.locator("[name='jwtOnly']");
    this.JWTLoginMessage = page.locator("[name='jwtLoginMessage']");
    this.JWTLoginURL = page.locator("[name='jwtLoginURL']");
    this.IP = page.locator("[name='ip']");
    this.BasicAuthentication = page.locator("[name='basicAuth']");
    this.EnableDelegatedUserAdmin = page.locator("[name='enableDelegatedUserAdmin']");
    this.CentralLogin = page.locator("[name='centralLogin']");
    this.Compass = page.locator("[name='compass']");
    this.MyAccountAPI = page.locator("[name='myAccountAPI']");
    this.MyAccountUI = page.locator("[name='myAccountUI']");
    this.OneTrustScriptID = page.locator("[name='oneTrustScriptID']");
    this.OktaIssuerURL = page.locator("[name='oktaIssuerURL']");
    this.OktaAuthServerId = page.locator("[name='oktaAuthServerId']");
    this.MAEUI = page.locator("[name='maeUI']");
    this.ErrorMsg1 = page.locator("//p[contains(text(),'only contain alphabets and numbers')]");
    this.ErrorMsg2 = page.locator("//p[contains(text(),'most 150 characters')]");
    this.OneTrustScriptIDErrorMsg1 = page.locator("//p[contains(text(),'Only Alphabets')]");
    this.OktaIssuerURLErrorMsg1 = page.locator("//p[text()='Okta Issuer URL must be a valid URL']");
    this.OktaIssuerURLErrorMsg2 = page.locator("//p[text()='Okta Issuer URL must be at most 255 characters']");
    this.AddPublisherBtn = page.locator("//*[text()='Add Publisher']");
    this.AddPublisherHdr = page.locator("//h5[text()='Add Publisher']");
    this.selectPublisher = page.locator("[name='selectPublisher']");
    this.selectPublisherDropdown = page.locator("#selectPublisher");
    this.selectPublisherList = page.locator("//select[@name='selectPublisher']/option");
    this.Tracker = page.locator("[name='tracker']");
    this.Refinements = page.locator("[name='refinements']");
    this.Billboard = page.locator("[name='billboard']");
    this.BillboardTitle = page.locator("[name='billboardTitle']");
    this.BillboardTitleErrorMsg = page.locator("//*[text()='Billboard Title is a required field']");
    this.CancelBtn = page.locator("//*[text()='Cancel']");
    this.NextBtnDisabled = page.locator("(//*[@class='page-item disabled']//span[text()='Next'])[1]");
    this.NextPageBnt = page.locator("//button[@aria-label='Next']");
    this.saveBtn = page.locator("//*[contains(text(),'Save')]");
    this.closeBtn = page.locator("//button[contains(text(),'Close')]");
    this.PublisherAssignedMsg = page.locator("//div[contains(text(),'Publisher assigned successfully')]");
    this.showDropDown = page.locator("[name='page-size-select']");
    this.centralLoginTab = page.locator("//span[text()='Central Login']");
    this.assetsSubTab = page.locator("//span[text()='Central Login']/following::span[text()='Assets']");
    this.sAMLConfigurationHdr = page.locator("//*[text()='SAML Configuration']");
    this.sAMLConfiguration = page.locator("//h4[text()='SAML Configuration']/..//*[contains(text(),'saml')]");
    this.uploadFileBtn = page.locator("//*[contains(text(),'Upload File')]/i");
    this.audienceURI = page.locator("[name='audienceUri']");
    this.audienceURIErrorMsg = page.locator("//p[contains(text(),'Audience URI  must be')]");
    this.metadataFile = page.locator("//*[contains(text(),'Metadata File')]/../input");
    this.metadataFileSizeErrorMsg = page.locator("//*[contains(text(),'File size should not exceed')]");
    this.fileTypeNotSupportedMsg = page.locator("//*[contains(text(),'File type not supported')]");
    this.TenantInTenantdetailsPage = page.locator("//p[text()='Tenant:']/following-sibling::p");
    this.subscriptionsSettingTab = page.locator("//span[text()='Subscription Settings']");
    this.partnersTab = page.locator("//span[text()='Partners']");
    this.addPartnerBtn = page.locator("//*[text()='Add Partner']");
    this.addPartnerPopUpHdr = page.locator("//h5[text()='Add Partner']");
    this.viewPartnerPopUpHdr = page.locator("//h5[text()='View Partner']");
    this.partnerName = page.locator("[name='partnerName']");
    this.partnerCode = page.locator("[name='partnerCode']");
    this.partnerSecret = page.locator("[name='partnerSecret']");
    this.partnerNameErrorMsg = page.locator("//*[contains(text(),'Partner Name must')]");
    this.eyeIcon = page.locator("//i[contains(@class,'secret-icon')]");
    this.assetsTab = page.locator("//span[text()='Assets']");
    this.assetsHdr = page.locator("//h3[text()='Assets']");
    this.webLogo = page.locator("[name='WEBSITE_LOGO']");
    this.emailLogo = page.locator("[name='EMAIL_LOGO']");
    this.cssFile = page.locator("[name='TENANT_CSS']");
    this.fileSizeExceedErrorMsg = page.locator("//*[contains(text(),'File size should not exceed')]");
    this.fileTypeNotSupportedErrorMsg = page.locator("//*[contains(text(),'File type not supported')]");
    this.compassBannerImage = page.locator("#compassBannerImage");
    this.compassWebLogo = page.locator("#compassWebLogo");
    this.compassBannerPrerequisitesMsg = page.locator("//label[contains(text(),'Compass Banner Image')]/../small");
    this.compassWebLogoPrerequisitesMsg = page.locator("//label[contains(text(),'Compass Web Logo')]/../small");
    this.tenantStatusEditIcon = page.locator("//p[contains(text(),'Tenant Status')]/..//i");
    this.TenantStatus = page.locator("//p[contains(text(),'Tenant Status')]/..//span");
    this.updateTenantStatusHdr = page.locator("//*[text()='Update Tenant Status']");
    this.tenantStatus = page.locator("[name='tenantStatus']");
    this.ViewSettingsBtn = page.locator("//button[text()='View Settings']");
    this.viewTenantSettingsHdr = page.locator("//*[text()='View Tenant Settings']");
    this.tenantSettings = page.locator("[name='tenantSettings']");
    this.filter = page.locator("[name='filter']");
    this.searchField = page.locator("[name='search']");
    this.manageLCAHdr = page.locator("//*[text()='Manage LCA']");
    this.uploadLCABtn = page.locator("//button[text()=' Upload LCA']");
    this.ViewLCABtn = page.locator("//button[text()=' View LCA']");
    this.uploadLCAHdr = page.locator("//*[text()='Upload LCA']");
    this.viewLCADetailsHdr = page.locator("//*[text()='View LCA Details']");
    this.inputRevisionComment = page.locator("//input[@name='revisionComment']");
    this.lCAEffectiveDate = page.locator("//*[text()='LCA Effective Date']/ancestor::table//tr[last()]/td[1]");
    this.lcaEffectiveDate = page.locator("[name='lcaEffectiveDate']");
    this.uploadLcaDocument = page.locator("[name='upload-lca-document']");
    this.LCATab = page.locator("//span[text()='LCA']");
    this.sizeExceedInUploadLCA = page.locator("//*[contains(text(),'File size should not exceed')]");
    this.uploadValidFile = page.locator("//*[contains(text(),'please upload valid file.')]");
    this.assetsSubTab1 = page.locator("(//span[text()='Assets'])[2]");
    this.userWatermark = page.locator("//i[@id='watermark-tooltip']");
    this.organizationWatermark = page.locator("//i[@id='organization-watermark-tooltip']");
    this.additionalDetails = page.locator("//i[@id=\"additional-details-tooltip\"]");
    this.tooltipValue = page.locator("//div[@class='tooltip-inner']");
    this.addContentTypebtn = page.locator("//button[text()=' Add Content Type']");
    this.publisherPageSelect = page.locator("#page-size-select");
    this.viewSettings = page.locator("//button[@data-testid='view-tenant-setting-btn']");
    this.editPencilIcon = page.locator("i.fa.fa-pencil.icon.ms-2.fa-xs");
    this.statusDropdown = page.locator("#tenantStatus");
    this.saveButton = page.locator("//button[text()='Save']");
    this.statusBadge = page.locator("span.badge");
  }

   async selectTIMSEntitlement() {
    await test.step('Click on TIMS Entitlement', async () => {
      try {
        await this.TIMSbtn.waitFor({ state: 'visible', timeout: 20000 });
        await this.TIMSbtn.click();
        await expect(this.page).toHaveTitle('TIMS UI');
        await this.page.screenshot({ path: 'test-results/Screenshots/selectTIMSEntitlement_1.png' });
        await this.manageTenantsHeader.waitFor({ state: 'visible', timeout: 10000 });
      } catch (e) {
        console.error('Unable to select TIMS Entitlement', e);
        throw e;
      }
    });
  }

  async clickAddTenant() {
    await test.step('Click Add Tenant and New Draft Tenant buttons', async () => {
      await this.addTenantBtn.click();
      await this.page.screenshot({ path: 'test-results/Screenshots/ClickAddTenant_1.png' });
      await this.newDraftTenantBtn.click();
      await this.tenantDetailsHeader.waitFor({ timeout: 10000 });
      await this.page.screenshot({ path: 'test-results/Screenshots/ClickAddTenant_2.png' });
    });
  }

  async validateTenantCodeField(): Promise<string> {
  let tenantCode = '';
  
  await test.step('Validate Tenant Code field errors and enter valid code', async () => {
    // Special characters check
    await this.tenantCodeField.fill('abc$ #');
    await this.nextButton.click();
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantCodeField_1.png' });
    await expect(this.tenantCodeErrorMsg1).toBeVisible();

    // Length > 50 check
    await this.tenantCodeField.fill('a'.repeat(52));
    await this.nextButton.click();
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantCodeField_2.png' });
    await expect(this.tenantCodeErrorMsg2).toBeVisible();

    // Valid value entry
    const randomString = Math.random().toString(36).substring(2, 7).toUpperCase(); // 5 random chars
    const randomNum = Math.floor(100 + Math.random() * 900); // 3-digit random number
    tenantCode = `Auto${randomString}${randomNum}`;

    await this.tenantCodeField.fill(tenantCode);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantCodeField_3.png' });
  });

  return tenantCode;
}


  async validateSupportEmailField(): Promise<string> {
  let supportEmail = '';

  await test.step('Validate Support Email field with invalid and valid input', async () => {
    // Invalid email check
    await this.supportEmail.fill('abc@@yopmail');
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportEmailField_1.png' });
    await expect(this.supportEmailError1).toBeVisible();

    // Email > 320 chars
    const longEmail = 'a'.repeat(325) + '@yopmail.com';
    await this.supportEmail.fill(longEmail);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportEmailField_2.png' });
    await expect(this.supportEmailError2).toBeVisible();

    // Valid email input
    const randomStr = Math.random().toString(36).substring(2, 7);
    supportEmail = `${randomStr}@yopmail.com`;
    await this.supportEmail.fill(supportEmail);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportEmailField_3.png' });
  });

  return supportEmail;
}


  async validateSupportWebPageURLField(): Promise<string> {
  let validUrl = '';

  await test.step('Validate Support Web Page URL with invalid and valid URLs', async () => {
    // Invalid URL
    await this.supportWebPageUrl.fill('https://abc');
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportWebPageURLField_1.png' });
    await expect(this.supportWebPageURLError1).toBeVisible();

    // URL longer than 255 characters
    const longUrl = 'https://' + 'a'.repeat(260) + '.com';
    await this.supportWebPageUrl.fill(longUrl);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportWebPageURLField_2.png' });
    await expect(this.supportWebPageURLError2).toBeVisible();

    // Valid URL (randomized)
    const randomStr = Math.random().toString(36).substring(2, 7);
    validUrl = `https://${randomStr}.com`;
    await this.supportWebPageUrl.fill(validUrl);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateSupportWebPageURLField_3.png' });
  });

  return validUrl;
}


  async validateTenantAddressField(): Promise<string> {
  let validAddress = '';

  await test.step('Validate Tenant Address field with invalid and valid input', async () => {
    // Invalid special character "_"
    await this.tenantAddress.fill('abc_');
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantAddressField_1.png' });
    await expect(this.tenantAddressError1).toBeVisible();

    // More than 255 characters
    await this.tenantAddress.fill('a'.repeat(250) + '1234567890');
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantAddressField_2.png' });
    await expect(this.tenantAddressError2).toBeVisible();

    // Valid randomized address with special chars
    const randomValidAddress = Math.random().toString(36).substring(2, 7) + Math.floor(10000 + Math.random() * 90000) + '$#';
    await this.tenantAddress.fill(randomValidAddress);
    await this.page.screenshot({ path: 'test-results/Screenshots/validateTenantAddressField_3.png' });

    validAddress = randomValidAddress;
  });

  return validAddress;
}


 async validateExitButton() {
  await test.step('Validate Exit button and confirmation popup', async () => {
    await this.exitButton.scrollIntoViewIfNeeded(); // mimic scrollToElement
    await this.exitButton.click(); // click
    await this.page.screenshot({ path: 'test-results/Screenshots/validateExitButton_1.png' });
    await this.attentionPopup.waitFor({ timeout: 5000 }); // wait for popup
    await expect(this.attentionPopup).toBeVisible(); // assert popup
    await expect(this.yesButton).toBeVisible(); // assert yes button
    await expect(this.noButton).toBeVisible(); // assert no button
    await this.page.screenshot({ path: 'test-results/Screenshots/validateExitButton_2.png' });
  });
}


async validateYesButton(tenantCode: string) {
    await test.step('Validate Yes button', async () => {
      try {
        await this.YesBtn.waitFor({ state: 'visible', timeout: 10000 });
        await this.YesBtn.click();

        await this.page.screenshot({ path: 'test-results/Screenshots/validateYesButton_Clicked.png' });

        await this.VerifyDraftWLTenantsRecords();
        await this.ValidateListOfViewDraftTenants(tenantCode);

      } catch (e) {
        console.error('Failed to validate Yes button', e);
        throw e;
      }
    });
  }

   async VerifyDraftWLTenantsRecords() {
    await test.step('Validate List of Tenants in Tabular format', async () => {
      await this.viewDraftTenantsBtn.scrollIntoViewIfNeeded();
      await this.viewDraftTenantsBtn.waitFor({ state: 'visible', timeout: 10000 });
      await this.viewDraftTenantsBtn.click();
      await this.page.waitForURL('**/view/draft-tenants');
      await expect(this.page).toHaveURL(/.*view\/draft-tenants/);
      await expect(this.ViewDraftTenantsHeading).toBeVisible();
      await expect(this.ViewDraftTenantsTable).toBeVisible();
      await this.page.screenshot({ path: 'test-results/Screenshots/VerifyDraftWLTenantsRecords.png' });
    });
  }

  async ValidateListOfViewDraftTenants(tenantCode: string) {
    await test.step(`Validate List of View Draft Tenants - ${tenantCode}`, async () => {
      await this.ViewDraftTenantsTable.waitFor({ state: 'visible', timeout: 10000 });
      await this.ShowDropDown.selectOption({ label: 'Show 50' });
      await this.page.screenshot({ path: 'test-results/Screenshots/ValidateListOfViewDraftTenants_dropdown.png' });
      await this.nextPage1.scrollIntoViewIfNeeded();
      await this.validateTenantNameInListOfViewDraftTenants(tenantCode, 'all');
    });
  }

  async validateTenantNameInListOfViewDraftTenants(tenantCode: string, pagination: string) {
  const tenantCodeUpper = tenantCode.toUpperCase();
  const tenantLocator = (code: string) => this.page.locator(`//td[text()='${code}']`);
  const tenantDotsLocator = this.page.locator(`//td[text()='${tenantCodeUpper}']//following-sibling::td[contains(@class,'row-actions')]//a[@href='#']`);
  const tenantResumeLocator = this.page.locator(`//td[text()='${tenantCodeUpper}']//following-sibling::td[contains(@class,'row-actions')]//button[text()='Resume']`);

  const pageText = await this.pageNumList.textContent();
  const maxPageNum = parseInt((pageText?.split('of ')[1] || '1').trim());
  let tenantFound = false;

  if (pagination === 'last') {
    await this.goToPageInput_ViewDraftTenants.fill(`${maxPageNum}`);
    await this.goToPageInput_ViewDraftTenants.press('Enter');
    if (await tenantLocator(tenantCodeUpper).count() > 0) {
      tenantFound = true;
      await tenantLocator(tenantCodeUpper).scrollIntoViewIfNeeded();
      await this.page.screenshot({ path: `TenantFound_LastPage_${tenantCode}.png` });
      await expect(tenantLocator(tenantCodeUpper)).toBeVisible();
    } else {
      // fallback to full search if not on last page
      await this.validateTenantNameInListOfViewDraftTenants(tenantCode, 'all');
      return;
    }
  } else if (pagination === 'all') {
    for (let i = 1; i <= maxPageNum; i++) {
      if (await tenantLocator(tenantCodeUpper).count() > 0) {
        tenantFound = true;
        await tenantLocator(tenantCodeUpper).scrollIntoViewIfNeeded();
        await this.page.screenshot({ path: `TenantFound_Page${i}_${tenantCode}.png` });
        await expect(tenantLocator(tenantCodeUpper)).toBeVisible();
        break;
      } else {
        await this.nextPage1.scrollIntoViewIfNeeded();
        await this.page.screenshot({ path: `Tenant_Not_Found_Page${i}.png` });

        // Don't click next on last page
        if (i < maxPageNum) {
          await this.nextPage1.click();
        }
      }
    }
  }

  if (!tenantFound) {
    await this.page.screenshot({ path: `Tenant_Not_Found_${tenantCode}.png` });
    throw new Error(`Tenant code "${tenantCode}" was not found in any pages.`);
  }

  // Only proceed if tenant was found
  await tenantDotsLocator.scrollIntoViewIfNeeded();
  await tenantDotsLocator.click();
  await this.page.screenshot({ path: `TenantDots_Clicked_${tenantCode}.png` });

  await tenantResumeLocator.click();
  await expect(this.General).toBeVisible({ timeout: 20000 });
  await this.page.screenshot({ path: `Tenant_Resume_Page_${tenantCode}.png` });
}


  async ClickExitButton(): Promise<void> {
    await test.step('Click Exit Button', async () => {
      try {
        await this.ExitBtn.scrollIntoViewIfNeeded();
        await this.ExitBtn.waitFor({ state: 'attached', timeout: 100000 });
        await this.ExitBtn.waitFor({ state: 'visible', timeout: 100000 });
        await this.ExitBtn.click();
        await this.page.screenshot({ path: 'test-results/Screenshots/ClickExitButton.png' });
      } catch (error) {
        console.error("Failed to Click Exit Button", error);
        throw error;
      }
    });
  }

  async validateNoButton(): Promise<void> {
    await test.step('Validate No Button', async () => {
      try {
        await this.page.screenshot({ path: 'test-results/Screenshots/ValidateNoButton_1.png' });
        await this.NoBtn.waitFor({ state: 'visible', timeout: 30000 });
        await this.NoBtn.click();
        await this.Home.scrollIntoViewIfNeeded();
        await this.ViewDraftTenantsHeading.waitFor({ state: 'visible', timeout: 10000 });
        expect(await this.ViewDraftTenantsHeading.isVisible()).toBeTruthy();
        await this.page.screenshot({ path: 'test-results/Screenshots/ValidateNoButton_2.png' });
      } catch (error) {
        console.error("Failed to validate No button", error);
        throw error;
      }
    });
  }



}
