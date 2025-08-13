import { Page, Locator, expect } from '@playwright/test';

export class SpecBuilderPage {
  private page: Page;

  private userName: Locator;
  private password: Locator;
  private additionalMemberTextBox: Locator;
  private committeeGroupRadioBtn: Locator;
  private selectCommittee: Locator;
  private uploadDrafts_Yes: Locator;
  private uploadDrafts_No: Locator;
  private uploadDrafts_True: Locator;
  private uploadSupport_No: Locator;
  private uploadSupport_Yes: Locator;
  private uploadSupport_True: Locator;
  private newCollaborationArea: Locator;
  private collaborationAreaTitle: Locator;
  private collaborationAdministrator: Locator;
  private collaborationAreaNo: Locator;
  private initialDraft: Locator;
  private initialDraft_True: Locator;
  private createCollaborationArea: Locator;
  private created: Locator;
  private currentCollabArea: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userName = page.locator('#userName');
    this.password = page.locator('#encPass');
    this.additionalMemberTextBox = page.locator("//textarea[@name='additionalMembers']");
    this.committeeGroupRadioBtn = page.locator("//input[@value='Committee Group']");
    this.selectCommittee = page.locator("//div[@class='form-group']//select[@class='form-control']");
    this.uploadDrafts_Yes = page.locator("//input[@name='uploadAllCan' and @value='Yes']");
    this.uploadDrafts_No = page.locator("//input[@name='uploadAllCan' and @value='No']");
    this.uploadDrafts_True = page.locator("//input[@name='UploadDrafts' and @value='true']");
    this.uploadSupport_No = page.locator("//input[@name='uploadAllSupportCan' and @value='No']");
    this.uploadSupport_Yes = page.locator("//input[@name='uploadAllSupportCan' and @value='Yes']");
    this.uploadSupport_True = page.locator("//input[@name='UploadSupport' and @value='true']");
    this.newCollaborationArea = page.locator("//button[text()='Create New Collaboration Area']");
    this.collaborationAreaTitle = page.locator("//input[@name='groupName']");
    this.collaborationAdministrator = page.locator("//select[@title='Select Collaboration Area Administrator']");
    this.collaborationAreaNo = page.locator("//div[@class='group-switcher-wrapper']//following-sibling::div[contains(@class,'title')]");
    this.initialDraft = page.locator("//input[@name='isUploadNow' and @value='Yes']");
    this.initialDraft_True = page.locator("//input[@name='UploadinitialDraft' and @value='true']");
    this.createCollaborationArea = page.locator("//button[text()='Collaboration Area']");
    this.created = page.locator("//p[text()='Created:']");
    this.currentCollabArea = page.locator("//select[@aria-label='Switch Group']");
  }

  async clickOnNewCollaborationArea() {
    await this.newCollaborationArea.click();
  }

  async additionalMemberField_EnterData(email: string) {
    await this.additionalMemberTextBox.fill(email);
  }

  async selectUploadOptions_No() {
    await this.initialDraft.scrollIntoViewIfNeeded();
    await this.uploadDrafts_No.click();
    await this.uploadSupport_No.click();
  }

  async clickOnCreateCollaborationArea() {
    await this.createCollaborationArea.click();
    await expect(this.created).toBeVisible({ timeout: 10000 });
  }

  async createNewCollaborationArea_AdditionalMember(email: string): Promise<string> {
    await this.clickOnNewCollaborationArea();
    await this.committeeGroupRadioBtn.click();

    // Selecting first option (index 1) in dropdown using selectOption
    const committeeOptions = await this.selectCommittee.locator('option').all();
    if (committeeOptions.length > 1) {
      const value = await committeeOptions[1].getAttribute('value');
      await this.selectCommittee.selectOption(value ?? '');
    }

    await this.collaborationAreaTitle.fill('TextAutomation');

    const adminOptions = await this.collaborationAdministrator.locator('option').all();
    if (adminOptions.length > 1) {
      const value = await adminOptions[1].getAttribute('value');
      await this.collaborationAdministrator.selectOption(value ?? '');
    }

    await this.additionalMemberField_EnterData(email);
    await this.selectUploadOptions_No();
    await this.clickOnCreateCollaborationArea();

    const selectedOption = this.currentCollabArea.locator('option:checked');
    const fullText = await selectedOption.textContent();
    const collaborationId = (fullText?.split('-')[0] ?? '').trim();

    return collaborationId;
  }
}