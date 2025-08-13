
import { Page, Locator, expect } from '@playwright/test';

export class TrackerUIPage {
    readonly page: Page;
    readonly trackedStandardsPaginationNextBtn: Locator;
    readonly trackByIndustryHeader: Locator;
    readonly userNameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly newSignInButton2: Locator;
    readonly CompassLinkinTUI: Locator;
    readonly ASTMLinkinTUI: Locator;
    readonly cookieRejectBtn: Locator;
    readonly trackUntrackToggle1: Locator;
    readonly trackUntrackToggleOne: Locator;
    readonly trackUntrackToggleTen: Locator;
    readonly deleteTrackerIconOne: Locator;
    readonly TrackerDocumentTitleOne: Locator;
    readonly TrackByCommitteeAndSubcommittees: Locator;
    readonly trackByCommitteeHeader: Locator;
    readonly PleaseSelectCommitteeToTrack: Locator;
    readonly Track: Locator;
    readonly track1: Locator;
    readonly Home: Locator;
    readonly TrackedStandardsHeader: Locator;
    readonly CommitteeSubcommitteeHdr: Locator;
    readonly committeeHdrUnderTrackerSection: Locator;
    readonly dynamicPageNo: Locator;
    readonly targetPageInput: Locator;
    readonly StandardsCount: Locator;
    readonly trackedStdCountDD: Locator;
    readonly pagesLabel: Locator;
    readonly NextButton: Locator;
    readonly PreviousButton: Locator;
    readonly NextButtonStatus: Locator;
    readonly PreviousButtonStatus: Locator;
    readonly PublicSigninbtn1: Locator;
    readonly signInDropDownText: Locator;
    readonly Tracker: Locator;
    readonly astmstandardsList: Locator;
    readonly astmTrackerNextBtn: Locator;
    readonly nextPageDiv: Locator;
    readonly profileDrp: Locator;
    readonly signOutBtn: Locator;
    readonly ASTMCompassLink: Locator;
    readonly yesBtn: Locator;
    readonly footerSection: Locator;
    readonly trackByPublisherHdr: Locator;
    readonly maskCover: Locator;

    constructor(page: Page) {
        this.page = page;
        this.trackedStandardsPaginationNextBtn = page.locator("//ul[@class='pagination']/li[2]");
        this.trackByIndustryHeader = page.locator("//h4[text()='Track ASTM Standards by Industry']");
        this.userNameTxt = page.locator("#userName");
        this.passwordTxt = page.locator("#encPass");
        this.newSignInButton2 = page.locator("//button[text()='Sign In']");
        this.CompassLinkinTUI = page.locator("//a[text()='Compass ']");
        this.ASTMLinkinTUI = page.locator("//a[text()='astm.org']");
        this.cookieRejectBtn = page.locator("//button[@id='onetrust-accept-btn-handler']");
        this.trackUntrackToggle1 = page.locator("//input[@class='form-check-input']");
        this.trackUntrackToggleOne = page.locator("(//input[@class='form-check-input'])[1]");
        this.trackUntrackToggleTen = page.locator("(//input[@class='form-check-input'])[10]");
        this.deleteTrackerIconOne = page.locator("(//i[contains(@class,'far fa-trash')])[1]");
        this.TrackerDocumentTitleOne = page.locator("//table[@id='tracked-standards-list']/tbody/tr[1]/td[1]");
        this.TrackByCommitteeAndSubcommittees = page.locator("//*[text()='Track By Committee and Subcommittees']");
        this.trackByCommitteeHeader = page.locator("//*[text()='Track ASTM Standards by Committee']");
        this.PleaseSelectCommitteeToTrack = page.locator("#committee-select");
        this.Track = page.locator("//button[text()='Track']");
        this.track1 = page.locator("(//button[text()='Track'])[1]");
        this.Home = page.locator("//a[text()='Home']");
        this.TrackedStandardsHeader = page.locator("//*[text()='Tracked Individual Standards']");
        this.CommitteeSubcommitteeHdr = page.locator("//*[text()='Committee & Subcommittee']");
        this.committeeHdrUnderTrackerSection = page.locator("//th[text()='Committee']");
        this.dynamicPageNo = page.locator("//div[text()='Page']/following-sibling::strong");
        this.targetPageInput = page.locator("#go-to-page");
        this.StandardsCount = page.locator("//table[@id='tracked-standards-list']/tbody/tr");
        this.trackedStdCountDD = page.locator("#page-size-select");
        this.pagesLabel = page.locator("//div[text()='Page']/parent::div");
        this.NextButton = page.locator("//span[text()='Next']/parent::button");
        this.PreviousButton = page.locator("//span[text()='Previous']/parent::button");
        this.NextButtonStatus = page.locator("//span[text()='Next']/ancestor::li");
        this.PreviousButtonStatus = page.locator("//span[text()='Previous']/ancestor::li");
        this.PublicSigninbtn1 = page.locator("//button[contains(@class,'sign-in-btn')]/span");
        this.signInDropDownText = page.locator("//*[contains(@class,'headerSign')]/button");
        this.Tracker = page.locator("//a[contains(@class,'dropdown-item') and text()='Tracker']");
        this.astmstandardsList = page.locator("#tracked-standards-list a");
        this.astmTrackerNextBtn = page.locator("//span[text()='Next']/..");
        this.nextPageDiv = page.locator("(//a[text()='Next']/parent::li)[1]");
        this.profileDrp = page.locator("(//div[@class='dropdown']//button[@type='button'])[1]");
        this.signOutBtn = page.locator("//*[contains(text(),'Sign Out')]|//button[@class='dropdown-item']");
        this.ASTMCompassLink = page.locator("//a[normalize-space(text())='ASTM Compass']");
        this.yesBtn = page.locator("//button[text()='Yes']");
        this.footerSection = page.locator("//div[contains(@class,'footer ')]");
        this.trackByPublisherHdr = page.locator("//h4[contains(text(),'Publisher')]");
        this.maskCover = page.locator(".mask-cover");
    }

    committeNameUnderCommitteeSection(committee: string): Locator {
        return this.page.locator(`//th[text()='Committee']/ancestor::thead/following-sibling::tbody//td[contains(text(),'${committee}')]`);
    }

    async getStandardsCount(): Promise<number> {
        return await this.page.locator("//table[@id='tracked-standards-list']/tbody/tr").count();
    }

    trackUntrackToggle(DocName: string): Locator {
        return this.page.locator(`//*[text()='${DocName}']/ancestor::tr//input`);
    }

    async getAllStandards(): Promise<Locator[]> {
        return await this.page.locator("//table[@id='tracked-standards-list']/tbody/tr//div").all();
    }

    async TrackerUILogin(userEmail: any, password: any) {
        await this.newSignInButton2.waitFor();
        await this.userNameTxt.fill(userEmail);
        await this.passwordTxt.fill(password);
        await this.newSignInButton2.click();
    }

    async handleOneTrustCookie() {
        if (await this.cookieRejectBtn.isVisible()) {
            await this.cookieRejectBtn.click();
        }
    }

    async getListofTrackerDocuments(): Promise<Locator[]> {
        return await this.page.locator("//table[@id='tracked-standards-list']/tbody/tr/td[1]").all();
    }

    async getListOfCommitteeSubcommittee(): Promise<Locator[]> {
        return await this.page.locator("//th[text()='Committee']/ancestor::thead/following-sibling::tbody//td").all();
    }

    async deleteSelectedCommitteeAndSubcommittee(committee: string) {
        await this.page.locator(`//td[contains(text(),'${committee}')]/following-sibling::td//i[contains(@class,'cursor-pointer')]`).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator("//div[@class='modal-content']/div[@class='modal-footer']/button[text()='Yes']").click();
        await this.page.waitForTimeout(2000);
    }

    async selectCommitteeAndSubcommitteeFromdropDown(committee: string) {
        await this.page.locator(`//option[@value='${committee}']`).click();
    }

    getCommitteeAndSubcommittee(committee: string): Locator {
        return this.page.locator(`//*[text()='Committee & Subcommittee']/../following::td[text()='${committee}']`);
    }

    async LoginTrackerUI(email: any, password: any) {
        await this.page.goto("https://stage-tracker.astm.org/");
        await this.CompassLinkinTUI.waitFor();
        await this.handleOneTrustCookie();
        await this.TrackerUILogin(email, password);
        await this.page.waitForURL("https://stage-tracker.astm.org/");
        await expect(this.page).toHaveURL("https://stage-tracker.astm.org/");
    }

    async validateTrackandUntrackContent() {
        await this.trackUntrackToggleOne.scrollIntoViewIfNeeded();
        const Tracktoggles = await this.trackUntrackToggle1.all();
        for (const Toggle of Tracktoggles) {
            await Toggle.waitFor();
            await Toggle.click();
            await this.page.waitForTimeout(2000);
            await Toggle.waitFor();
            await Toggle.click();
            await this.page.waitForTimeout(2000);
        }
        await this.page.waitForTimeout(2000);
        await this.trackUntrackToggleOne.scrollIntoViewIfNeeded();
        const str1 = await this.TrackerDocumentTitleOne.textContent();
        await this.trackUntrackToggleOne.waitFor();
        await this.trackUntrackToggleOne.click();
        const newPage = await this.page.context().newPage();
        await newPage.goto('https://www.astm.org/products-services/standards-and-publications.html');
        await this.ValidateTrackDocumentSttausUpdated(str1 as string, newPage);
        await newPage.close();
        await this.trackUntrackToggleOne.scrollIntoViewIfNeeded();
        await this.trackUntrackToggleOne.waitFor();
        await this.trackUntrackToggleOne.click();
    }

    async validateDeleteTrackerContent() {
        const FirstDocTitle = await this.TrackerDocumentTitleOne.textContent();
        await this.deleteTrackerIconOne.scrollIntoViewIfNeeded();
        await this.deleteTrackerIconOne.waitFor();
        await this.deleteTrackerIconOne.click();
        await this.yesBtn.click();
        await this.page.waitForTimeout(8000);
        const trackerDocuments = await this.getListofTrackerDocuments();
        for (const Title of trackerDocuments) {
            if (await Title.textContent() === FirstDocTitle) {
                throw new Error("Document Deletion Unsuccessful");
            }
        }
    }

    async validatePaginationAccordingtoContent() {
        // This method is empty in the original Java code.
    }

    async validatePreviousAndNextButtons() {
        await this.pagesLabel.scrollIntoViewIfNeeded();
        const paginationValue = await this.pagesLabel.textContent();
        const LastPage = paginationValue?.split(" ")[2] ?? "";

        await expect(this.pagesLabel).toHaveText(`Page 1 of ${LastPage}`);
        while (!(await this.NextButtonStatus.getAttribute("class"))?.includes("disabled")) {
            await this.NextButton.scrollIntoViewIfNeeded();
            await this.NextButton.click();
            await this.page.waitForTimeout(10000);
            const currentPage = (await this.pagesLabel.textContent())?.split(" ")[1];
            await expect(this.pagesLabel).toHaveText(`Page ${currentPage} of ${LastPage}`);
        }
        await expect(this.pagesLabel).toHaveText(`Page ${LastPage} of ${LastPage}`);
        while (!(await this.PreviousButtonStatus.getAttribute("class"))?.includes("disabled")) {
            await this.PreviousButton.waitFor();
            await this.PreviousButton.click({ force: true });
            await this.page.waitForTimeout(10000);
            const currentPage = (await this.pagesLabel.textContent())?.split(" ")[1];
            await expect(this.pagesLabel).toHaveText(`Page ${currentPage} of ${LastPage}`);
        }
    }

    async validateCurrentAndTotalPagesLabel() {
        await this.pagesLabel.scrollIntoViewIfNeeded();
        const paginationValue = await this.pagesLabel.textContent();
        const LastPage = paginationValue?.split(" ")[2]??"";
        await expect(this.pagesLabel).toHaveText(`Page 1 of ${LastPage}`);
        while (!(await this.NextButtonStatus.getAttribute("class"))?.includes("disabled")) {
            await this.NextButton.click();
            await this.page.waitForTimeout(10000);
            const currentPage = (await this.pagesLabel.textContent())?.split(" ")[1];
            await expect(this.pagesLabel).toHaveText(`Page ${currentPage} of ${LastPage}`);
        }
    }

    async validateTargetPageNavigationOption() {
        if (!(await this.NextButtonStatus.getAttribute("class"))?.includes("disabled")) {
            await this.targetPageInput.scrollIntoViewIfNeeded();
            await this.targetPageInput.click();
            await this.page.evaluate(() => {
                const input = document.querySelector('#go-to-page') as HTMLInputElement;
                input.stepUp();
                input.dispatchEvent(new Event('change', { bubbles: true }));
            });
            await this.page.waitForTimeout(3000);
            const paginationValue = await this.pagesLabel.textContent();
            const LastPage = paginationValue?.split(" ")[2];
            await expect(this.pagesLabel).toHaveText(`Page 2 of ${LastPage}`);
            await this.targetPageInput.click();
            await this.page.evaluate(() => {
                const input = document.querySelector('#go-to-page') as HTMLInputElement;
                input.stepDown();
                input.dispatchEvent(new Event('change', { bubbles: true }));
            });
            await this.page.waitForTimeout(3000);
            await expect(this.pagesLabel).toHaveText(`Page 1 of ${LastPage}`);
        }
    }

    async validateCountperPageDropdown() {
        const showDDList = [10, 20, 30];
        for (let i = 0; i < showDDList.length; i++) {
            await this.trackedStdCountDD.scrollIntoViewIfNeeded();
            await this.trackedStdCountDD.selectOption({ index: i });
            await this.page.evaluate(() => window.scrollBy(0, 400));
        }
    }

    async selectCommitteeAndSubcommittees(committee: string) {
        await this.trackByIndustryHeader.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await this.PleaseSelectCommitteeToTrack.click();
        if (await this.committeNameUnderCommitteeSection(committee).isVisible()) {
            await this.deleteSelectedCommitteeAndSubcommittee(committee);
        }
        await this.page.waitForTimeout(5000);
        await this.selectCommitteeAndSubcommitteeFromdropDown(committee);
        await this.track1.waitFor();
        await this.track1.click();
    }

    async validateTrackedCommitteeUnderCommitteeSection(committee: string) {
        let flag = false;
        await this.committeeHdrUnderTrackerSection.scrollIntoViewIfNeeded();
        await this.committeeHdrUnderTrackerSection.waitFor();
        const ListOfCommittee = await this.getListOfCommitteeSubcommittee();
        for (const Committee of ListOfCommittee) {
            if ((await Committee.textContent())?.includes(committee)) {
                await Committee.scrollIntoViewIfNeeded();
                console.log("Tracked Committee displayed Under Committee Section");
                flag = true;
            }
        }
        expect(flag, "Tracked Committee not displayed Under Committee Section").toBe(true);
    }

    async validateTrackedCommitteeDeleteOption(committee: string) {
        let flag = false;
        await this.page.waitForTimeout(5000);
        await this.Home.scrollIntoViewIfNeeded();
        await this.trackByIndustryHeader.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await this.deleteSelectedCommitteeAndSubcommittee(committee);
        await this.page.waitForTimeout(5000);
        await this.CommitteeSubcommitteeHdr.waitFor();
        await this.page.waitForTimeout(5000);
        const ListOfCommittee = await this.getListOfCommitteeSubcommittee();
        for (const Committee of ListOfCommittee) {
            if (await Committee.textContent() === committee) {
                flag = true;
            }
        }
        expect(flag, "Tracked Committee displayed Under Committee Section").toBe(false);
        await this.Home.scrollIntoViewIfNeeded();
    }

    async navigateToTrackerPage() {
        await this.page.waitForTimeout(20000);
        await this.signInDropDownText.waitFor();
        await this.signInDropDownText.click({ force: true });
        await this.Tracker.waitFor();
        await this.Tracker.click();
    }

    async ValidateTrackDocumentSttausUpdated(DocName: string, newPage: Page) {
        let flag = 0;
        await this.navigateToTrackerPage();
        while (true) {
            await this.astmstandardsList.waitFor();
            const allStandards = await this.getAllStandards();
            for (const DocLink of allStandards) {
                const text = await DocLink.textContent();
                if (text && text.includes(DocName)) {
                    flag = 1;
                    break;
                }
            }
            await this.page.waitForTimeout(5000);
            if (flag == 0) {
                await this.astmTrackerNextBtn.scrollIntoViewIfNeeded();
                await this.astmTrackerNextBtn.waitFor();
                const classAttr = await this.trackedStandardsPaginationNextBtn.getAttribute("class");
                if (classAttr && !classAttr.includes("disabled")) {
                    await this.astmTrackerNextBtn.click();
                } else {
                    break;
                }
                await this.page.waitForTimeout(10000);
            } else {
                break;
            }
        }
    }

    async observeThatUsernameDisplayedTheTopRight() {
        await this.profileDrp.waitFor();
        await expect(this.profileDrp).toBeVisible();
        await this.profileDrp.click();
        await expect(this.signOutBtn).toBeVisible();
    }

    async observeASTMCompassLink() {
        await this.ASTMCompassLink.waitFor();
        await expect(this.ASTMCompassLink).toBeVisible();
        const tagName = await this.ASTMCompassLink.evaluate(element => element.tagName);
        expect(tagName).toContain("A");
    }

    async observeASTMOrgLink() {
        await this.ASTMLinkinTUI.waitFor();
        await expect(this.ASTMLinkinTUI).toBeVisible();
        const tagName = await this.ASTMLinkinTUI.evaluate(element => element.tagName);
        expect(tagName).toContain("A");
    }

    async clickTitleAndVerifyCompassPage() {
        await this.TrackerDocumentTitleOne.scrollIntoViewIfNeeded();
        await this.TrackerDocumentTitleOne.click();
        await expect(this.maskCover).toBeHidden();
        const newPage = await this.page.context().waitForEvent('page');
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*compass/);
        await newPage.close();
    }

    async signOutFromTracker() {
        await this.page.reload();
        await this.page.waitForTimeout(10000);
        await this.profileDrp.waitFor();
        await this.profileDrp.click({ force: true });
        await expect(this.signOutBtn).toBeVisible();
        await this.page.waitForTimeout(5000);
        await this.signOutBtn.click({ force: true });
        await this.page.waitForTimeout(8000);
    }
}
