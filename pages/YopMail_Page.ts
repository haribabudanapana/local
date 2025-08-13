import { Page, Locator, expect } from '@playwright/test';

export class YopMail_Page {
    readonly page: Page;
    readonly showPicturesLink: Locator;
    readonly astmLogo: Locator;
    readonly astmLogo1: Locator;
    readonly apiLogo: Locator;
    readonly enterEmailTextField: Locator;
    readonly checkInboxButton: Locator;
    readonly emailSubjectLeft: Locator;
    readonly frameId: string;
    readonly emailSubjectRight: Locator;
    readonly GroupCreationEmail_Message: Locator;
    readonly GroupCreationEmail_CompassLink: Locator;
    readonly GroupEmail_APICompassEmailLink: Locator;
    readonly GroupEmail_ASTMCompassEmailLink: Locator;
    readonly GroupEmail_AENORCompassEmailLink: Locator;
    readonly GroupEmail_IESCompassEmailLink: Locator;
    readonly GroupEmail_CGACompassEmailLink: Locator;
    readonly arrowIcon: Locator;
    readonly GroupEmail_AWWACompassEmailLink: Locator;
    readonly aenorLogo: Locator;
    readonly iesLogo: Locator;
    readonly awwaLogo: Locator;
    readonly DocumentPage_GroupEmailSignature: Locator;
    readonly ASTMAdminMail: Locator;
    readonly firstMail: Locator;
    readonly todayLabel: Locator;
    readonly Rationale: Locator;
    readonly threedots: Locator;
    readonly emptyInboxBtn: Locator;
    readonly emptyInbox_Message: Locator;
    readonly downloadFile: Locator;
    readonly yopmailZip: Locator;
    readonly yopmailContent: Locator;

    constructor(page: Page) {
        this.page = page;
        this.showPicturesLink = page.locator("//span[contains(text(),'Show pictures')]/parent::button");
        this.astmLogo = page.locator("//img[contains(@src,'email_log.png')]");
        this.astmLogo1 = page.locator("//img[@alt='ASTM Logo']");
        this.apiLogo = page.locator("//img[contains(@src,'250x85.png')]");
        this.enterEmailTextField = page.locator("input#login");
        this.checkInboxButton = page.locator("input.sbut");
        this.emailSubjectLeft = page.locator("span.lms");
        this.frameId = "ifinbox";
        this.emailSubjectRight = page.locator("div[class=fl] div:nth-of-type(1)");
        this.GroupCreationEmail_Message = page.locator("//p[contains(text(),'has created the following group')]");
        this.GroupCreationEmail_CompassLink = page.locator("//p[contains(text(),'has created the following group')]/a");
        this.GroupEmail_APICompassEmailLink = page.locator("//a[text()='apicompass.support@astm.org']");
        this.GroupEmail_ASTMCompassEmailLink = page.locator("//a[text()='https://www.astm.org/help/contact']");
        this.GroupEmail_AENORCompassEmailLink = page.locator("//a[text()='aenormas@aenor.com']");
        this.GroupEmail_IESCompassEmailLink = page.locator("//a[text()='lightinglibrary@ies.org']");
        this.GroupEmail_CGACompassEmailLink = page.locator("//a[text()='cga@cganet.com']");
        this.arrowIcon = page.locator("//i[@class='material-icons-outlined f36']");
        this.GroupEmail_AWWACompassEmailLink = page.locator("//a[text()='envoi@awwa.org']");
        this.aenorLogo = page.locator("//img[contains(@src,'400x90.png')]");
        this.iesLogo = page.locator("//img[contains(@src,'320x94.png')]");
        this.awwaLogo = page.locator("//img[contains(@src,'506x254.png')]");
        this.DocumentPage_GroupEmailSignature = page.locator("//p[contains(text(),'Thank you')]//following-sibling::footer");
        this.ASTMAdminMail = page.locator("//span[text()='ASTM Admin']/parent::div");
        this.firstMail = page.locator("(//button[@class='lm']/div)[1]");
        this.todayLabel = page.locator("//div[@class='mday']");
        this.Rationale = page.locator("//b[text()='Rationale:']/..");
        this.threedots = page.locator("(//i[@class = 'material-icons-outlined'])[4]");
        this.emptyInboxBtn = page.locator("//span[text() = 'Empty Inbox']");
        this.emptyInbox_Message = page.locator("//div[text() = 'This inbox is empty']");
        this.downloadFile = page.locator("//a[contains(text(),'docx')]");
        this.yopmailZip = page.locator("//a[text()='2450585_735.zip']");
        this.yopmailContent = page.locator("//a[text()='Contents.pdf']");
    }

    getFrameId(): string {
        return this.frameId;
    }

    getEnterEmailTextField(): Locator {
        return this.enterEmailTextField;
    }

    getCheckInboxButton(): Locator {
        return this.checkInboxButton;
    }

    getEmailSubjectLeft(): Locator {
        return this.emailSubjectLeft;
    }

    getEmailSubjectRight(): Locator {
        return this.emailSubjectRight;
    }

    getEmail(Subject: string): Locator {
        return this.page.locator(`(//div[@class='lms' and contains(text(),'${Subject}')])[1]`);
    }

    getGroupEmail_Message(EmailSender: string): Locator {
        return this.page.locator(`//p[contains(text(),'You received below message from ${EmailSender}')]//following-sibling::p`);
    }

    getDocumentPage_GroupEmail_DocumentTitle(Sender: string, tenant: string): Locator {
        return this.page.locator(`//p[contains(text(),'${Sender} has shared a document with you via ${tenant}')]/following-sibling::p[1]/a`);
    }

    getDocumentPage_IndividualEmail_LinkTitle(Sender: string, tenant: string): Locator {
        return this.page.locator(`//p[contains(text(),'${Sender} has shared a link with you via ${tenant}')]/following-sibling::p[1]/a`);
    }

    getEmailLogo(Tenant: string): Locator {
        return this.page.locator(`//img[@alt='${Tenant} Logo']`);
    }

    async emptyInbox(EmailAddress: string) {
        try {
            await this.page.goto("https://www.yopmail.com/");
            await this.page.waitForLoadState();
            await this.enterEmailTextField.waitFor({ state: 'visible', timeout: 10000 });
            await this.enterEmailTextField.clear();
            await this.typeWithDelay(this.enterEmailTextField, EmailAddress);
            await this.threedots.waitFor({ state: 'visible', timeout: 120000 });
            await this.threedots.click();
            await this.page.waitForTimeout(2000);

            const isMessageVisible = await this.emptyInbox_Message.isVisible();
            if (!isMessageVisible) {
                this.page.on('dialog', dialog => dialog.accept());
                await this.emptyInboxBtn.click();
            }
            await this.page.waitForTimeout(2000);
        } catch (e) {
            console.error("Failed to empty inbox in yopmail ", e);
            throw e;
        }
    }

    async typeWithDelay(element: Locator, text: string) {
        await element.pressSequentially(text, { delay: 500 });
        await this.arrowIcon.click();
        await expect(this.threedots).toBeVisible({ timeout: 5000 });
    }
}