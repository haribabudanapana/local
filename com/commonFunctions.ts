import { expect, Locator, Page } from '@playwright/test';
import * as readline from 'readline';
import * as fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse';

export class CommonFunctions {
  static verifyElementTextOnPage(validationOnPage: string, actualText: string, expectedText: string): boolean {
    return actualText === expectedText;
  }

  static verifyContentOnPage(validationOnPage: string, actual: string, expected: string): boolean {
    return actual.includes(expected);
  }

  static verifyContentOnPageRegExp(validationOnPage: string, actual: string, expected: string): boolean {
    return new RegExp(expected).test(actual);
  }

  static async verifyElementIsVisible(locator: Locator): Promise<boolean> {
    try {
      await locator.waitFor({ state: 'visible', timeout: 5000 });
      return await locator.isVisible();
    } catch {
      return false;
    }
  }

  static async deselectValueDropDownByVisibleText(element: Locator, value: string): Promise<boolean> {
    try {
      await element.selectOption([]);
      return true;
    } catch {
      return false;
    }
  }

  static async exceptionHandlingBlock(e: unknown, message: string): Promise<void> {
    try {
      console.error('Exception:', e);
      console.info('Message:', message);
      throw new Error(`${message} | ${e instanceof Error ? e.stack : e}`);
    } catch (innerError) {
      console.error('Exception during error handling:', innerError);
    }
  }

  static decimalFormat(number: number): number {
    const formatted = parseFloat(number.toFixed(3));
    return Math.round(formatted * 100) / 100;
  }

  static calculateTax(totalPrice: number, taxRate: number): number {
    try {
      return CommonFunctions.decimalFormat((totalPrice * taxRate) / 100);
    } catch {
      return 0;
    }
  }

  static async selectValueInDropdown(element: Locator, value: string): Promise<void> {
    try {
      await element.selectOption({ label: value });
      await element.click();
    } catch (e) {
      console.error('Dropdown selection failed:', e);
    }
  }

  static async getAllSelectedValuesInDropdown(element: Locator): Promise<string[] | null> {
    try {
      const selectedOptions = await element.locator('option:checked').allTextContents();
      return selectedOptions.map(opt => opt.trim());
    } catch (e) {
      console.error('Failed to get selected options:', e);
      return null;
    }
  }

  static async getFirstSelectedValueInDropdown(element: Locator): Promise<string | null> {
    try {
      const firstSelected = await element.locator('option:checked').first().textContent();
      return firstSelected?.trim() ?? null;
    } catch (e) {
      console.error('Failed to get first selected option:', e);
      return null;
    }
  }

  static async clearTextFieldAndSendKeys(element: Locator, keys: string): Promise<boolean> {
    try {
      await element.fill('');
      await element.type(keys);
      return true;
    } catch (e) {
      console.error('Error in clearTextAndSendKeys:', e);
      return false;
    }
  }

  static async waitForElementAttributeToBe(
    element: Locator,
    attribute: string,
    expectedValue: string,
    timeout: number = 5000
  ): Promise<boolean> {
    try {
      await expect(element).toHaveAttribute(attribute, expectedValue, { timeout });
      return true;
    } catch (e) {
      console.error(`Attribute '${attribute}' did not match expected value '${expectedValue}' within ${timeout}ms`);
      return false;
    }
  }

  static async selectDropdownByIndex(element: Locator, index: number): Promise<boolean> {
    try {
      const option = element.locator('option').nth(index);
      const optionValue = await option.getAttribute('value');
      if (!optionValue) throw new Error(`No option found at index ${index}`);
      await element.selectOption(optionValue);
      return true;
    } catch (e) {
      console.error(`Dropdown selection by index failed:`, e);
      return false;
    }
  }

  static async compareFilesContentByLine(filePath1: string, filePath2: string): Promise<void> {
    const reader1 = readline.createInterface({
      input: fs.createReadStream(filePath1),
      crlfDelay: Infinity
    });

    const reader2 = readline.createInterface({
      input: fs.createReadStream(filePath2),
      crlfDelay: Infinity
    });

    const lines1: string[] = [];
    const lines2: string[] = [];

    for await (const line of reader1) {
      lines1.push(line);
    }

    for await (const line of reader2) {
      lines2.push(line);
    }

    let identicalFiles = true;
    const maxLines = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i];
      const line2 = lines2[i];
      const lineNumber = i + 1;

      if (line1 !== line2) {
        console.log(`Files differ at line ${lineNumber}:`);
        console.log(`File 1: ${line1 ?? 'null'}`);
        console.log(`File 2: ${line2 ?? 'null'}`);
        console.log();
        identicalFiles = false;
      }
    }

    console.info(`Comparison complete. Files are ${identicalFiles ? 'identical' : 'different'}.`);
    expect(identicalFiles).toBe(true);
  }

  static async readFileContentLineByLine(filePath: string): Promise<string[]> {
    const lines: string[] = [];
    try {
      const fileStream = fs.createReadStream(filePath);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      for await (const line of rl) {
        console.log(`line: ${line}`);
        lines.push(line);
      }
    } catch (error) {
      console.error('Error reading file:', error);
    }
    return lines;
  }

  static async getPdfContent(pdfFileName: string): Promise<string> {
    let result = '';
    try {
      const projectPath = process.cwd();
      const downloadPath = 'downloads';
      const fullPath = path.join(projectPath, downloadPath, pdfFileName);

      const dataBuffer = fs.readFileSync(fullPath);
      const pdfData = await pdfParse(dataBuffer);

      result = pdfData.text;
    } catch (error) {
      console.error('Error reading PDF:', error);
    }
    return result;
  }

  static async isElementVisible(page: Page, selector: string): Promise<boolean> {
    try {
      const element = page.locator(selector);
      await element.waitFor({ state: 'visible', timeout: 10000 });
      return await element.isVisible();
    } catch {
      console.warn(`Element not visible within timeout: ${selector}`);
      return false;
    }
  }

  static async isWebElementDisplayed(page: Page, selector: string, timeout: number = 10000): Promise<boolean> {
    try {
      const element = page.locator(selector);
      await element.waitFor({ state: 'visible', timeout });
      return await element.isVisible();
    } catch {
      return false;
    }
  }

  static async isWebElementInvisible(page: Page, selector: string): Promise<boolean> {
    try {
      await page.waitForSelector(selector, { state: 'hidden', timeout: 10000 });
      return true;
    } catch {
      return false;
    }
  }

  static async clickOnElement(page: Page, selector: string): Promise<boolean> {
    try {
      const element = page.locator(selector);
      await element.waitFor({ state: 'visible', timeout: 10000 });
      const isEnabled = await element.isEnabled();
      const isVisible = await element.isVisible();

      if (isEnabled && isVisible) {
        await element.click();
        return true;
      } else {
        console.warn(`Element not clickable: ${selector}`);
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async getSelectedValueFromDropdown(dropdown: Locator): Promise<string | null> {
    try {
      const selectedOption = await dropdown.locator('option[selected]').first();
      const text = await selectedOption.textContent();
      console.log(`Selected option: ${text}`);
      return text?.trim() ?? null;
    } catch (e) {
      console.error(`Failed to get selected value from dropdown`, e);
      return null;
    }
  }

  static async getElementText(locator: Locator): Promise<string | null> {
    try {
      return await locator.textContent();
    } catch (e) {
      console.error('Error in getElementText:', e);
      return null;
    }
  }

  static async getElementTextByAttribute(ele: Locator, attribute: string): Promise<string> {
    return await ele.getAttribute(attribute) ?? '';
  }

  static async getElementAttribute(locator: Locator, attribute: string): Promise<string | null> {
    try {
      return await locator.getAttribute(attribute);
    } catch (e) {
      console.error(`Error fetching attribute '${attribute}':`, e);
      return null;
    }
  }

  static async selectValueInDropdownByVisibleText(locator: Locator, value: string): Promise<void> {
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      await locator.selectOption({ label: value });
    } catch (e) {
      console.error(`Error selecting value "${value}" by visible text:`, e);
    }
  }

  static async selectValueInDropdownByIndex(locator: Locator, index: number): Promise<void> {
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      const optionValue = await locator.locator('option').nth(index).getAttribute('value');
      if (optionValue) {
        await locator.selectOption(optionValue);
      } else {
        throw new Error(`Option at index ${index} not found`);
      }
    } catch (e) {
      console.error(`Error selecting dropdown by index ${index}:`, e);
    }
  }

  static async waitForElementToDisappear(locator: Locator): Promise<void> {
    try {
      await locator.waitFor({ state: 'hidden', timeout: 20000 });
    } catch (e) {
      console.error('Element did not disappear in time:', e);
    }
  }

  static async waitForSec(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async getTextOfWebElements(locator: Locator): Promise<string[]> {
    try {
      await locator.first().waitFor({ state: 'visible', timeout: 10000 });
      const count = await locator.count();
      const texts: string[] = [];
      for (let i = 0; i < count; i++) {
        texts.push(await locator.nth(i).innerText());
      }
      console.log('Text of elements:', texts);
      return texts;
    } catch (e) {
      console.error('Error getting texts of web elements:', e);
      return [];
    }
  }

  static async getAllDropDownValues(locator: Locator): Promise<string[]> {
    try {
      await locator.waitFor({ state: 'visible', timeout: 10000 });
      const options = await locator.locator('option').allTextContents();
      return options.map(opt => opt.trim());
    } catch (e) {
      console.error('Error getting dropdown values:', e);
      return [];
    }
  }

  static async waitForElementToAppearAndThenDisappear(page: Page, selector: string): Promise<boolean> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      await locator.waitFor({ state: 'hidden', timeout: 20000 });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async clickAndWaitForOtherElementToAppearRecursion(
    page: Page,
    clickSelector: string,
    appearSelector: string
  ): Promise<boolean> {
    const clickLocator = page.locator(clickSelector);
    const appearLocator = page.locator(appearSelector);

    for (let i = 0; i <= 10; i++) {
      await clickLocator.waitFor({ state: 'visible', timeout: 10000 });
      await clickLocator.click();
      try {
        await appearLocator.waitFor({ state: 'visible', timeout: 3000 });
        return true;
      } catch {
        console.log(`Attempt ${i + 1}: Element not visible yet`);
      }
    }
    return false;
  }

  static async clickWebElement(page: Page, selector: string): Promise<boolean> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      await locator.click();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async clickWebElementWithoutWait(page: Page, selector: string): Promise<boolean> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      await locator.click();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async clickWebElementWithoutAnyWait(page: Page, selector: string): Promise<boolean> {
    try {
      await page.click(selector);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async clickElementByJavaScript(page: Page, selector: string): Promise<boolean> {
    try {
      await page.evaluate((sel) => {
        const element = document.querySelector(sel) as HTMLElement;
        element?.click();
      }, selector);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async enterTextInTextField(page: Page, selector: string, value: string, clear: boolean = true): Promise<boolean> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      if (clear) {
        await locator.fill('');
      }
      await locator.type(value);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async clearTextField(page: Page, selector: string): Promise<boolean> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      await locator.fill('');
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async getTextOfElement(page: Page, selector: string): Promise<string> {
    try {
      const element = page.locator(selector);
      await element.waitFor({ state: 'visible', timeout: 20000 });
      return (await element.textContent()) ?? '';
    } catch (e) {
      console.error(e);
      return '';
    }
  }

  static async selectCheckbox(page: Page, selector: string): Promise<void> {
    try {
      const locator = page.locator(selector);
      await locator.waitFor({ state: 'visible', timeout: 20000 });
      await locator.check();
    } catch (e) {
      console.error(e);
    }
  }

  static async getAttributeValue(page: Page, selector: string): Promise<string> {
    try {
      const value = await page.locator(selector).getAttribute('value');
      return value ?? '';
    } catch (e) {
      console.error(e);
      return '';
    }
  }

  static async ctrlClick(page: Page, selector: string): Promise<void> {
    try {
      await page.locator(selector).click({ modifiers: ['Control'] });
    } catch (e) {
      console.error(e);
    }
  }

  static async isVisibleInViewport(page: Page, selector: string): Promise<boolean> {
    try {
      return await page.evaluate((sel) => {
        const elem = document.querySelector(sel) as HTMLElement;
        if (!elem) return false;
        const box = elem.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + box.height / 2;
        let e = document.elementFromPoint(cx, cy);
        for (; e; e = e.parentElement) {
          if (e === elem) return true;
        }
        return false;
      }, selector);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async switchToIframe(page: Page, id: string): Promise<boolean> {
    try {
      await page.frameLocator(`#${id}`).first().locator('body').waitFor({ state: 'visible', timeout: 10000 });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async openNewTabAndSwitch(page: Page): Promise<boolean> {
    try {
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.evaluate(() => window.open())
      ]);
      await newPage.waitForLoadState();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async openNewTabAndSwitchToReqTab(page: Page, tab: number): Promise<boolean> {
    try {
      const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.evaluate(() => window.open())
      ]);
      const pages = page.context().pages();
      await pages[tab].bringToFront();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async closeNewTabAndSwitchToOriginalTab(page: Page): Promise<boolean> {
    try {
      const pages = page.context().pages();
      await page.close();
      await pages[0].bringToFront();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async openUrl(page: Page, url: string): Promise<boolean> {
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static async waitForNumberOfElementsToBe(page: Page, selector: string, numberOfElementsExpected: number, timeout: number): Promise<boolean> {
    try {
      await page.waitForFunction(
        (args: { sel: string; num: number }) => document.querySelectorAll(args.sel).length === args.num,
        { sel: selector, num: numberOfElementsExpected },
        { timeout, polling: 2000 }
      );
      return true;
    } catch {
      return false;
    }
  }

  static splitStringAndConvertIntoList(str: string): string[] {
    return str.split('~~');
  }

  static addValuesToList(valueList: string[], values: string[]): string[] {
    try {
      valueList.length = 0;
      valueList.push(...values);
      console.log('Current Value List ::', valueList);
      return valueList;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  static getTimestamp(dateFormat: string): string {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: dateFormat.includes('yyyy') ? 'numeric' : undefined,
      month: dateFormat.includes('MM') ? '2-digit' : undefined,
      day: dateFormat.includes('dd') ? '2-digit' : undefined,
      hour: dateFormat.includes('HH') ? '2-digit' : undefined,
      minute: dateFormat.includes('mm') ? '2-digit' : undefined,
      second: dateFormat.includes('ss') ? '2-digit' : undefined,
      hour12: false
    });
    const parts = formatter.formatToParts(date);
    let result = dateFormat;
    parts.forEach(part => {
      if (part.type !== 'literal') {
        result = result.replace(part.type === 'year' ? 'yyyy' : part.type === 'month' ? 'MM' : part.type === 'day' ? 'dd' : part.type === 'hour' ? 'HH' : part.type === 'minute' ? 'mm' : 'ss', part.value);
      }
    });
    return result;
  }

  static addDays(days: number, dateFormat: string): string {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: dateFormat.includes('yyyy') ? 'numeric' : undefined,
      month: dateFormat.includes('MM') ? '2-digit' : undefined,
      day: dateFormat.includes('dd') ? '2-digit' : undefined,
      hour: dateFormat.includes('HH') ? '2-digit' : undefined,
      minute: dateFormat.includes('mm') ? '2-digit' : undefined,
      second: dateFormat.includes('ss') ? '2-digit' : undefined,
      hour12: false
    });
    const parts = formatter.formatToParts(date);
    let result = dateFormat;
    parts.forEach(part => {
      if (part.type !== 'literal') {
        result = result.replace(part.type === 'year' ? 'yyyy' : part.type === 'month' ? 'MM' : part.type === 'day' ? 'dd' : part.type === 'hour' ? 'HH' : part.type === 'minute' ? 'mm' : 'ss', part.value);
      }
    });
    return result;
  }

  static async compareTitle(page: Page, expectedTitle: string): Promise<boolean> {
    try {
      await page.waitForFunction(`document.title.includes("${expectedTitle}")`, null, { timeout: 10000 });
      return (await page.title()).includes(expectedTitle);
    } catch {
      return false;
    }
  }

  static async compareUrl(page: Page, expectedUrl: string): Promise<boolean> {
    try {
      await page.waitForURL(`**/${expectedUrl}**`, { timeout: 10000 });
      return page.url().includes(expectedUrl);
    } catch {
      return false;
    }
  }
}

export async function clearAndType(page: Page, selector: string, text: string): Promise<boolean> {
  try {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible', timeout: 5000 });
    await element.fill('');
    await element.type(text);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function getElementText(page: Page, selector: string): Promise<string | null> {
  try {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible' });
    return await element.textContent();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function selectDropdownValue(page: Page, selector: string, value: string): Promise<void> {
  await page.selectOption(selector, { label: value });
}

export async function clickElement(page: Page, selector: string): Promise<boolean> {
  try {
    await page.locator(selector).click({ timeout: 5000 });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function waitAppearDisappear(page: Page, selector: string): Promise<boolean> {
  try {
    const element = page.locator(selector);
    await element.waitFor({ state: 'visible', timeout: 10000 });
    await element.waitFor({ state: 'hidden', timeout: 10000 });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function getAllDropdownOptions(page: Page, selector: string): Promise<string[]> {
  const options = await page.locator(selector + ' option').allTextContents();
  return options.map(opt => opt.trim());
}

export async function getAttributeValues(page: Page, selector: string, attribute: string): Promise<string[]> {
  const elements = page.locator(selector);
  const count = await elements.count();
  const values: string[] = [];
  for (let i = 0; i < count; i++) {
    const attr = await elements.nth(i).getAttribute(attribute);
    if (attr !== null) values.push(attr);
  }
  return values;
}

export async function selectDropdownByVisibleText(locator: Locator, value: string) {
  await locator.selectOption({ label: value });
}

export async function getDropdownValues(locator: Locator): Promise<string[]> {
  const options = await locator.locator('option').allTextContents();
  return options.map(opt => opt.trim());
}

export async function waitForElementToDisappear(locator: Locator) {
  await locator.waitFor({ state: 'hidden', timeout: 20000 });
}

export async function clickAndWaitForElement(
  page: Page,
  clickSelector: string,
  appearSelector: string,
  maxRetries = 10
): Promise<boolean> {
  for (let i = 0; i < maxRetries; i++) {
    await page.click(clickSelector);
    try {
      await page.waitForSelector(appearSelector, { timeout: 3000 });
      return true;
    } catch {
      console.log(`Attempt ${i + 1}: Element not visible yet`);
    }
  }
  return false;
}

export function trimStringArray(list: string[]): string[] {
  return list.map(item => item.trim());
}