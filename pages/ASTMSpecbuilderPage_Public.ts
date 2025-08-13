import { Page, Locator } from '@playwright/test';
//import { BasePage } from './basePage'; // Assuming you have a BasePage implemented

export class ASTMSpecbuilderPagePublic{
  readonly header: Locator;

  // Header section
  readonly subHeading: Locator;
  readonly requestDemoButton: Locator;
  readonly headerVideo: Locator;

  // Goodbye Spreadsheets section
  readonly goodbyeSpreadsheetHeader: Locator;
  readonly goodbyeSpreadsheetDescription: Locator;
  readonly goodbyeSpreadsheetButtons: Locator;
  readonly eBookASTMSpecBuilderButton: Locator;
  readonly verifyText: Locator;

  // Testimonial section
  readonly testimonialHeader: Locator;
  readonly testimonialImage: Locator;
  readonly testimonialDescription: Locator;
  readonly testimonialVideo: Locator;

  // Collaboration section
  readonly collaborationHeader: Locator;
  readonly collaborationImages: Locator;
  readonly collaborationHeaders: Locator;
  readonly collaborationDescriptions: Locator;

  readonly getStartedButton: Locator;
  readonly startCollaboratingHeader: Locator;

  constructor(page: Page) {

    this.header = page.locator("xpath=//*[text()='ASTM SpecBuilder']");

    // Header section
    this.subHeading = page.locator("xpath=//*[text()='Streamline collaboration and document development']");
    this.requestDemoButton = page.locator("text=Request Demo");
    this.headerVideo = page.locator("xpath=//*[text()='ASTM SpecBuilder']/ancestor::div[contains(@class,'lght-gry-box')]//video");

    // Goodbye Spreadsheets section
    this.goodbyeSpreadsheetHeader = page.locator("xpath=//*[text()='Goodbye Spreadsheets, Missed Comments, Late Votes']");
    this.goodbyeSpreadsheetDescription = page.locator("*[class='row justify-content-md-center'] p");
    this.goodbyeSpreadsheetButtons = page.locator("*[class*='container justify-content-md-center'] a");
    this.eBookASTMSpecBuilderButton = page.locator("partial=E-Book: ASTM");
    this.verifyText = page.locator("xpath=//p[contains(text(),'Imagine your staff')]");

    // Testimonial section
    this.testimonialHeader = page.locator("xpath=//*[contains(text(),'Debora Bechtloff, Plastics Pipe Institute')]");
    this.testimonialImage = page.locator("xpath=//img[contains(@src,'images/specbuilder/bechtlogg-deb.png')]");
    this.testimonialDescription = page.locator("xpath=//*[contains(text(),'Debora Bechtloff, Plastics Pipe Institute')]/../p");
    this.testimonialVideo = page.locator("xpath=//*[contains(text(),'Debora Bechtloff, Plastics Pipe Institute')]/ancestor::div[contains(@class,'lght-gry-box')]//video");

    // Collaboration section
    this.collaborationHeader = page.locator("xpath=//*[text()='Collaboration is Better on SpecBuilder']");
    this.collaborationImages = page.locator("xpath=//*[text()='Collaboration is Better on SpecBuilder']/../following-sibling::div//img");
    this.collaborationHeaders = page.locator("xpath=//*[text()='Collaboration is Better on SpecBuilder']/../following-sibling::div//h1");
    this.collaborationDescriptions = page.locator("xpath=//*[text()='Collaboration is Better on SpecBuilder']/../following-sibling::div//p");

    this.getStartedButton = page.locator("text=Get Started");
    this.startCollaboratingHeader = page.locator("xpath=//*[text()='Start collaborating with ASTM SpecBuilder today!']");
  }

  async getHeader() {
    return this.header;
  }

  async getSubHeading() {
    return this.subHeading;
  }

  async getGoodbyeSpreadsheetDescription() {
    return this.goodbyeSpreadsheetDescription;
  }

  async getTestimonialDescription() {
    return this.testimonialDescription;
  }

  async getGoodbyeSpreadsheetButtons() {
    return this.goodbyeSpreadsheetButtons.all();
  }

  async getCollaborationImages() {
    return this.collaborationImages.all();
  }

  async getCollaborationHeadersElements() {
    return this.collaborationHeaders.all();
  }

  async getCollaborationDescriptionsElements() {
    return this.collaborationDescriptions.all();
  }
}