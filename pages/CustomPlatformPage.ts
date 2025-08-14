import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/BasePage'

export class CustomPlatformPage{
  readonly ASTM_header: Locator;
  readonly customPlatformHeading: Locator;
  readonly whyASTM_button: Locator;
  readonly contactAstmTodayButton: Locator;
  readonly contactASTMHeading: Locator;
  readonly contactASTMTodayHeading: Locator;
  readonly yourContentOurPlatformHeading: Locator;
  readonly customComopassSubscriptionHeading: Locator;
  readonly companyWebstoreHeading: Locator;
  readonly emailSalesBtn: Locator;
  readonly apiCaseStudyHeading: Locator;
  readonly apiCaseStudyButton: Locator;

  constructor(page: Page) {

    this.ASTM_header = page.locator("//div[@class='header container-xl']//a");
    this.customPlatformHeading = page.locator("//h1[text()='Custom Platforms']/parent::div/h1");
    this.whyASTM_button = page.locator("//a[text()='Why ASTM?']");
    this.contactAstmTodayButton = page.locator("//a[text()='Contact ASTM Today']");
    this.contactASTMHeading = page.locator("//h1[text()='Contact ASTM']");
    this.contactASTMTodayHeading = page.locator("//div[@class='container']/h3");
    this.yourContentOurPlatformHeading = page.locator("//h3[text()='Your Content. Our Platform.']");
    this.customComopassSubscriptionHeading = page.locator("//h3[contains(text(),'Custom Compass')]");
    this.companyWebstoreHeading = page.locator("//h3[contains(text(),'Company Webstore')]");
    this.emailSalesBtn = page.locator("//a[starts-with(text(),'EMAIL')]");
    this.apiCaseStudyHeading = page.locator("//h3[text()='Case Studies']");
    this.apiCaseStudyButton = page.locator("//a[text()='API Case Study']");
  }
}