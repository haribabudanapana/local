import { Page, Locator } from '@playwright/test';

export class B2BandB2CDetailsPage_Public {
	page: Page;
  CreateAccountHeader: Locator;
  OrgFieldErrorMsg: Locator;
  FirstNameField: Locator;
  FirstNameField1: Locator;
  LastNameField1: Locator;
  LastNameField: Locator;
  OrganizationName: Locator;
  EmailField: Locator;
  PasswordField: Locator;
  ConfirmPasswordField: Locator;
  CreateAccountBtn: Locator;
  requiredField_Msg: Locator;
  invalidPassword: Locator;
  passwordMismatchError: Locator;
  captcha: Locator;
  signIn: Locator;
  WelcomeHeader: Locator;
  verifyUsername: Locator;
  verifyEmail: Locator;
  verifyOrg: Locator;
  SignOut: Locator;
  SignOutBtn: Locator;
  SignInDropdown: Locator;
  SignInsso: Locator;
  userNameTxt: Locator;
  passwordTxt: Locator;
  SignInButton: Locator;
  CustomerLoginCreateAct: Locator;
  captchaImg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.CreateAccountHeader = page.locator("//h1/span[text()='Create an Account']");
    this.OrgFieldErrorMsg = page.locator("#additional_organization-error");
    this.FirstNameField = page.locator("#firstname");
    this.FirstNameField1 = page.locator("//div[contains(@class,'field')]/following::*[contains(text(), 'First Name')]");
    this.LastNameField1 = page.locator("//div[contains(@class,'field')]/following::*[contains(text(), 'Last Name')]");
    this.LastNameField = page.locator("#lastname");
    this.OrganizationName = page.locator("#additional_organization");
    this.EmailField = page.locator("#email_address");
    this.PasswordField = page.locator("#password");
    this.ConfirmPasswordField = page.locator("#password-confirmation");
    this.CreateAccountBtn = page.locator("//button[@title='Create Account']");
    this.requiredField_Msg = page.locator("//div[text()='This is a required field.']");
    this.invalidPassword = page.locator("(//div[@class='control']/div)[1]");
    this.passwordMismatchError = page.locator("(//div[@class='control']/div)[3]");
    this.captcha = page.locator("//div[@class='rc-imageselect-payload']");
    this.signIn = page.locator("//a[text()='Sign In']");
    this.WelcomeHeader = page.locator("//h3[text()='My Account']/../p");
    this.verifyUsername = page.locator("//div[@class='border-top mt-4 pt-4']/p[contains(text(),'Account#:')]/parent::div/p[2]");
    this.verifyEmail = page.locator("//div[@class='border-top mt-4 pt-4']/p[contains(text(),'Account#:')]/parent::div/p[3]");
    this.verifyOrg = page.locator("//div[@class='border-top mt-4 pt-4']/p[contains(text(),'Account#:')]/parent::div/p[4]");
    this.SignOut = page.locator("//a[contains(@href,'logout')]");
    this.SignOutBtn = page.locator("(//a[contains(@href,'logout')])[2]");
    this.SignInDropdown = page.locator("//button[contains(@class,'sign-in-btn')]"); // original CSS was commented
    this.SignInsso = page.locator("//div[contains(@class,'websso')]/a[text()='Sign In']");
    this.userNameTxt = page.locator("#userName");
    this.passwordTxt = page.locator("#encPass");
    this.SignInButton = page.locator("//button[text()='Sign In']");
    this.CustomerLoginCreateAct = page.locator("//a[@class='btn astm-btn btn-secondary w-100']//span[text()='Create an Account']");
    this.captchaImg = page.locator("//div[contains(@class,'rc-anchor-logo-img rc-anchor-logo-img-large')]");

      
  }

 



}