import { Page, Locator } from '@playwright/test';

export class HomePage_Public {
	page: Page;

  constructor(page: Page) {
    this.page = page;
    

private loginButtonOnHomepage = page.locator("//span[contains(text(),'Sign In')]");
private btnhomePageSignIn = page.locator("//a[contains(text(), 'SIGN IN')]");
private loggedInMyASTMButton = page.locator("//span[contains(text(),'My ASTM')]");
private cartLinkOnHomePage = page.locator("//a[contains(@class,'headercart')]/span[contains(text(),'Cart')]");
public banner = page.locator(".banner-item");
private workBetterHeader = page.locator("//h2[text()='Work Better']");
private ASTMCompassImage = page.locator("//h3[text()='ASTM Compass']/..//img[@alt='computer monitor']");
private ASTMCompassHeader = page.locator("//h3[text()='ASTM Compass']");
private astmProductDescription = page.locator("//h3[text()='ASTM Compass']/following-sibling::p");
private astmCompassLearnMoreButton = page.locator("//h3[text()='ASTM Compass']/..//button");
private learningProgramsImage = page.locator("//h3[text()='Learning Programs']/..//img[@alt='graduation hat']");
public learningProgramsHeader = page.locator("//h3[text()='Learning Programs']");
private learningProgramsDescription = page.locator("//h3[text()='Learning Programs']/following-sibling::p");
private learningProgramsLearnMoreButton = page.locator("//h3[text()='Learning Programs']/..//button");
private integratedServicesImage = page.locator("//h3[text()='Integrated Services']/..//img[contains(@src,'integrated-services')]");
public integratedServicesHeader = page.locator("//h3[text()='Integrated Services']");
private integratedServicesDescription = page.locator("//h3[text()='Integrated Services']/following-sibling::p");
private integratedServicesLearnMoreButton = page.locator("//h3[text()='Integrated Services']/..//button");
private proficiencyTestingProductImage = page.locator("//h3[text()='Proficiency Testing Programs']/..//img[contains(@src,'test-tubes')]");
public proficiencyTestingHeader = page.locator("//h3[text()='Proficiency Testing Programs']");
public proficiencyTestingHeader1 = page.locator("//h2[contains(text(),'ASTM Proficiency Testing Programs (PTP)')]");
private proficiencyTestingDescription = page.locator("//h3[text()='Proficiency Testing Programs']/following-sibling::p");
private proficiencyTestingLearnMoreButton = page.locator("//h3[text()='Proficiency Testing Programs']/..//button");
private theLatestHeader = page.locator("//span[text()='The Latest']");
private latestNewsCount = page.locator(".pagebuilder-column figure");
private latestSectionImages = page.locator(".pagebuilder-column-group .pagebuilder-mobile-hidden");
private latestSectionArticleTitle = page.locator(".pagebuilder-column-group h4 a");
private latestSectionArticleSummary = page.locator("//div[@class='pagebuilder-column-group']//h4/following-sibling::p/span");
private latestSectionArticleType = page.locator(".pagebuilder-column-group .card-text p span");
private aboutASTMSection = page.locator("//*[text()='About ASTM International']");
public findOutMoreAboutASTMBtn = page.locator("//*[contains(text(),'FIND OUT MORE ABOUT ASTM')]");
private homePageBanner = page.locator("//*[@class='home-top-banner']");
private bannerImageMatch1 = page.locator("//*[@class='home-top-banner']//div[contains(@data-background-images, 'hero-1.jpg')]");
private bannerImageMatch2 = page.locator("//*[@class='home-top-banner']//div[contains(@data-background-images, 'hero-2.jpg')]");
private bannerImageMatch3 = page.locator("//*[@class='home-top-banner']//div[contains(@data-background-images, 'hero-3.jpg')]");
private bannerImage = "//*[@class='home-top-banner']//div[contains(@data-background-images, 'hero-bannerIndex.jpg')]";
private bannerTitle = page.locator("//*[@class='home-top-banner']//*[@class='pagebuilder-poster-content']//div//h3");
private bannerDescription = page.locator("//*[@class='home-top-banner']//*[@class='pagebuilder-poster-content']//div//p");
private bannerButtonAndLink = page.locator("//*[@class='home-top-banner']//*[@class='pagebuilder-poster-content']//a");
private twitterSectionHeader = page.locator("//h2[contains(text(),'Latest on Twitter')]");
private twitterBody = page.locator("//div[@class=\"timeline-Viewport\"]//ol[@class=\"timeline-TweetList\"]//li[@class=\"timeline-TweetList-tweet customisable-border\"]");
private twitterFrameId = "twitter-widget-0";
public invalidKey = page.locator("//div[contains(text(),'Invalid Form Key.')]");
public favicon = page.locator("*[type='image/x-icon'][rel='icon']");
public unauthorisedB2BAdminUserErrorMsg = page.locator("//div[@class='prepare-message astm-alert-text']");
public PTPErrorMsg = page.locator("//div[@class='prepare-message astm-alert-text' and contains(text(),'We are sorry. This product conflicts with a product currently in your cart. To add this product, you must first clear your cart. Please ')]");
public PTPErrorMsg1 = page.locator("//div[@class='prepare-message astm-alert-text']");
public contactUs = page.locator("(//a[text()='contact us'])");
public contactUs1 = page.locator("(//a[text()='contact us'])[2]");
public contactUsLink = page.locator("text=Contact Us");
public contactHeader = page.locator("//h2[contains(text(),'Contact ASTM')]");
public productsAndServicesNavigation = page.locator("(//*[@id='productsDropdownMenuLink'])[1]");
public proficiencyTestingNavigation = page.locator("(//a[contains(text(),'Proficiency Testing')])[1]");
public fullListOption = page.locator("//button[contains(text(),'Full List')]");
public cementCommitteeLink = page.locator("//button[contains(text(),'Committee C01 on Cement and C09 on Concrete and Aggregates')]");
public CommitteeD37Link = page.locator("//button[contains(text(),'Committee D37 on Cannabis')]");
public CommitteeD20Link = page.locator("//button[contains(text(),'Committee D20 on Plastics')]");
public D37HempFLowLink = page.locator("//li[1]/a[contains(text(),'D37 Hemp Flow')]");
public D37HempFLow_FullListLink = page.locator("//li[2]/a[contains(text(),'D37 Hemp Flow')]");
public cementConcrete = page.locator("(//a[contains(text(),'Cement and Concrete')])[1]");
public committeeD13onTextiles = page.locator("//button[contains(text(),'Committee D13 on Textiles')]");
public ptpProgramsText = page.locator("//*[@id='committee-2']/div/p/strong");
public ptpProgramsText1 = page.locator("//strong[contains(text(),'PTP Programs')]");
public cementCommiteeHeading = page.locator("//h1[contains(text(),'Cement and Concrete Reference Laboratory')]");
public D37HempFLowHeading = page.locator("//span[contains(text(),'D37 Hemp Flower')]");
public BaseOilLink = page.locator("(//*[contains(text(),' Base Oil')])[1]");
public D37HempFlowerUSParticipantsLink = page.locator("//span[contains(text(),'D37 Hemp Flower')]");
public CommitteeD02PetroleumLink = page.locator("//button[contains(text(),'Committee D02 on Petroleum Products, Liquid Fuels,')]");
private PublicPage_SearchInputTextBox = page.locator("//input[@id='search']");
private PublicPage_SearchButton = page.locator("//input[@id='search']//following-sibling::div/button");
public publicPageSearchButtonNew = page.locator("(//i[@class='fa fa-search'])[3]");
public publicPageSearchButtonXpath = page.locator("//div[@class='input-group astm-search']//button");
public PublicPageSearchInputTextBoxNew = page.locator("(//input[@class='input-text form-control pr-1'])[2]");
public publicPageSearchInputBox = page.locator("//form[@id='search_mini_form']//input[@id='search']");
public LaboratoryServices = page.locator("(//div[@class='dropdown-submenu-content'])[4]/a");
public PTPRegisterforProgramBtn = page.locator("//div[contains(@class,'d-flex mb')]/a");
public PTPTableFirstElement = page.locator("//div[@class='multiple-order-container']/descendant::tbody/tr[1]/td[1]/a");
public dropdowncheck = page.locator("//span[contains(text(),'Choose a Program')]");
public ReadingPopUp = page.locator("(//button[@type='button'])[12]");
      
  }

 



}