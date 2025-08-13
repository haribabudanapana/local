
import { Page, Locator } from '@playwright/test';

export class AtlassianPage {

readonly accountPrefBtnForAttlassian: Locator;
readonly logOutLinkForAttlassian: Locator;
readonly AtlassianUsername: Locator;
readonly oktaUsername: Locator;
readonly AtlassianPassword: Locator;
readonly ContinueBtn: Locator;
readonly LoginAtlassian: Locator;
readonly Loginokta: Locator;
readonly verifyButton: Locator;
readonly verifywithEmail: Locator;
readonly changeAuthLink: Locator;
readonly selectOktaOption: Locator;
readonly sendPush: Locator;
readonly otpCodeInput: Locator;
readonly oktaotpInput: Locator;
readonly logoutAtlassian: Locator;
readonly INTPageHeader: Locator;
readonly INTAppletAuthLink: Locator;
readonly ActualAppletLink: Locator;
readonly ActualAppletLink1: Locator;
readonly EditIcon: Locator;
readonly Header: Locator;
readonly Publish: Locator;
readonly Update: Locator;
readonly skipTFA: Locator;




    constructor(page: Page) {
    this.accountPrefBtnForAttlassian = page.locator("//button[@aria-label='Your profile and preferences']");
    this.logOutLinkForAttlassian = page.locator("//span[text()='Log Out']");
    this.AtlassianUsername = page.locator("//input[@name='username']");
    this.oktaUsername = page.locator("#okta-signin-username");
    this.AtlassianPassword = page.locator("#okta-signin-password");
    this.ContinueBtn = page.locator("//button[@id='login-submit']");
    this.LoginAtlassian = page.locator("//button[@id='login-submit']/span");
    this.Loginokta = page.locator("#okta-signin-submit");
    this.verifyButton = page.locator("//input[@data-type='save']");
    this.verifywithEmail = page.locator("//h2[text()='Verify with Email Authentication']");
    this.changeAuthLink = page.locator("//a[contains(@class,'link-button')]");
    this.selectOktaOption = page.locator("//a[contains(text(),'Okta Verify')]");
    this.sendPush = page.locator("//input[@value='Send Push']");
    this.otpCodeInput = page.locator("//input[@aria-describedby='otpCode-uid2-helper']");
    this.oktaotpInput = page.locator("//input[@name='answer']");
    this.logoutAtlassian = page.locator("//button[@id='logout-submit']/span[text()='Log out']");
    this.INTPageHeader = page.locator("//h1[@id='title-text']");
    this.INTAppletAuthLink = page.locator("(//tr/td/p[contains(.,'INT-785')]/parent::td//following-sibling::td/p)[2]/span/span/span/a");
    this.ActualAppletLink = page.locator("//div[@data-smart-link-container='true' and @data-testid='smart-links-container']//a[contains(@href,'secure.astm.org')]");
    this.ActualAppletLink1 = page.locator("//span[text()='ASTM Login']");
    this.EditIcon = page.locator("#editPageLink");
    this.Header = page.locator("//textarea[contains(text(),'Integration')]");
    this.Publish = page.locator("//span[text()='Publish']");
    this.Update = page.locator("//span[text()='Update']");
    this.skipTFA = page.locator("//span[text()='Continue without two-step verification']");
    }
}