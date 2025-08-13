import { Page, Locator, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class AdhocPageLinks {
  private page: Page;

  // Locators
  readonly e08Header: Locator;
  readonly e1820SubHeader: Locator;
  readonly e3076SubHeader: Locator;
  readonly e1820DataSets: Locator;
  readonly e3076DataSets: Locator;

  readonly e60Header: Locator;
  readonly textUnderHeader: Locator;
  readonly e60SampleXSD: Locator;
  readonly e60SampleXML: Locator;

  readonly e55Header: Locator;
  readonly sampleWithSignature: Locator;
  readonly sampleWithoutSignature: Locator;
  readonly xsdWithSignature: Locator;
  readonly xmlWithSignature: Locator;
  readonly xsdWithDigiSignature: Locator;
  readonly xsdWithoutSignature: Locator;
  readonly xmlWithoutSignature: Locator;

  constructor(page: Page) {
    this.page = page;

    // Initialize locators
    this.e08Header = page.locator("//h2[text()='E08 Data Exchange']");
    this.e1820SubHeader = page.locator("//h4[text()='E1820']");
    this.e3076SubHeader = page.locator("//h4[text()='E3076']");
    this.e1820DataSets = page.locator("//a[text()='E1820 Data Sets (DS1-DS9)']");
    this.e3076DataSets = page.locator("//a[text()='E3076 DS1 (2018)']");

    this.e60Header = page.locator("//h2[text()='E60 Data Exchange']");
    this.textUnderHeader = page.locator("//p[text()='Sample computer-readable structure for E3012 information model']");
    this.e60SampleXSD = page.locator("//a[text()='Sample XSD']");
    this.e60SampleXML = page.locator("//a[contains(text(),'Sample XML representing ')]");

    this.e55Header = page.locator("//h2[text()='E55 Data Exchange']");
    this.sampleWithSignature = page.locator("//h4[text()='Sample with Signature']");
    this.sampleWithoutSignature = page.locator("//h4[text()='Sample without Signature']");
    this.xsdWithSignature = page.locator("//a[text()='Sample XSD with signature']");
    this.xmlWithSignature = page.locator("//a[text()='Sample XML with signature']");
    this.xsdWithDigiSignature = page.locator("//a[text()='XSD digital signature core schema']");
    this.xsdWithoutSignature = page.locator("//a[contains(text(),'Sample XSD without')]");
    this.xmlWithoutSignature = page.locator("//a[contains(text(),'Sample XML without')]");
  }

  // Checks if element has given attribute
  async hasAttribute(locator: Locator, attribute: string): Promise<boolean> {
    const value = await locator.getAttribute(attribute);
    return value !== null;
  }

  // Get text color in hex format
  async getTextColor(locator: Locator): Promise<string> {
    const color = await locator.evaluate((el) => window.getComputedStyle(el).color);
    const rgb = color.match(/\d+/g)?.map(Number) || [0, 0, 0];
    return (
      '#' +
      rgb
        .map((x) => x.toString(16).padStart(2, '0'))
        .join('')
    );
  }

  // Get file names from href attributes
  async getFileNames(locator: Locator): Promise<string[]> {
    const elements = await locator.elementHandles();
    const fileNames: string[] = [];
    for (const el of elements) {
      const href = await el.getAttribute('href');
      if (href) {
        const parts = href.split('/');
        fileNames.push(parts[parts.length - 1]);
      }
    }
    return fileNames;
  }

  // Returns elements matching locator
  async getFileNameElements(locator: Locator) {
    return locator.elementHandles();
  }

  // Check if file exists after click
  async ifFileExists(fileName: string, locator?: Locator, waitSecs: number = 360): Promise<boolean> {
    const downloadFolderPath = path.join(process.env.HOME || process.env.USERPROFILE || '', 'Downloads');
    const expectedFileName = fileName.includes('%20') ? fileName.replace(/%20/g, ' ') : fileName;
    const filePath = path.join(downloadFolderPath, expectedFileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    if (locator) {
      await locator.scrollIntoViewIfNeeded();
      await locator.click();
    }

    let exists = false;
    const startTime = Date.now();

    while (Date.now() - startTime < waitSecs * 1000) {
      if (fs.existsSync(filePath)) {
        exists = true;
        break;
      }
      await this.page.waitForTimeout(500);
    }

    if (exists) {
      await this.page.waitForTimeout(3000);
      fs.unlinkSync(filePath);
    }

    return exists;
  }
}