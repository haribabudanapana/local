import { Page, Locator } from '@playwright/test';

export class CreatePasswordPage_PublicAdmin {
	page: Page;
  emailSearchBoxOnHomePage: Locator;
  activateMemberAccount: Locator;
  activateuserProfileLink: Locator;
  AstmAdmin: Locator;
  doNotReplyMsg: Locator;
  todayLabel: Locator;
  doNotreplyMsg_Body: Locator;
  ASTMInternational: Locator;
  ASTMAdminMail: Locator;
  ASTMManualOrderWelcomeMail: Locator;
  ASTMadminMsg: Locator;
  stuResourcesLabel: Locator;
  ASTMInternationalOrderNumber: Locator;
  ProductLineItems: Locator;
  password: Locator;
  acceptAllCookieButton: Locator;
  passwordConfirmation: Locator;
  CreatePasswordButton: Locator;
  heading: Locator;
  membershipHeading: Locator;
  enter: Locator;
  orderConfirmationMessage: Locator;
  findASTMAdminemial: Locator;
  ASTMOrderemail: Locator;
  cookieRejectBtn: Locator;
  MyASTMLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailSearchBoxOnHomePage = page.locator("//div[@class='tooltip click']/input");
this.activateMemberAccount = page.locator("//*[contains(text(),'Activate')]");
this.activateuserProfileLink = page.locator("//*[text()='Activate Member Account']");
this.AstmAdmin = page.locator("//span[text()='ASTM Admin']");
this.doNotReplyMsg = page.locator("//button//div[text()='Welcome to ASTM']");
this.todayLabel = page.locator("//div[@class='mday']");
this.doNotreplyMsg_Body = page.locator("//body[contains(@class,'bodymail')]//div[text()='Welcome to ASTM International']");
this.ASTMInternational = page.locator("//span[text()='ASTM International']/parent::div");
this.ASTMAdminMail = page.locator("//span[text()='ASTM Admin']/parent::div");
this.ASTMManualOrderWelcomeMail = page.locator("//span[text()='do-not-reply@stage.astm.org']/parent::div[@class='lmfd']");
this.ASTMadminMsg = page.locator("//td[contains(text(),'Thank you for joining ASTM')]");
this.stuResourcesLabel = page.locator("//b[text()='STUDENT MEMBER RESOURCES:']");
this.ASTMInternationalOrderNumber = page.locator("//h1/span");
this.ProductLineItems = page.locator("//table[2]/tbody/tr");
this.password = page.locator("//fieldset/div[@class='field password required']/div/input");
this.acceptAllCookieButton = page.locator("#onetrust-accept-btn-handler");
this.passwordConfirmation = page.locator("//div[@class='field confirmation required']/div/input");
this.CreatePasswordButton = page.locator("//button/span[text()='Create Password']");
this.heading = page.locator("//h1[text()='Membership']");
this.membershipHeading = page.locator("//h2[text()='Membership']");
this.enter = page.locator("//i[@class='material-icons-outlined f36']");
this.orderConfirmationMessage = page.locator("//div[text()='Your Astm.org order confirmation']");
this.findASTMAdminemial = page.locator("//div[@class='lmfd']/span[text()='ASTM Admin']");
this.ASTMOrderemail = page.locator("//div[@class='lmfd']/span[text()='ASTM International']");
this.cookieRejectBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
this.MyASTMLink = page.locator("//a[contains(text(),'MyASTM')]");

      
  }

 



}