// src/pages/ui/basePage.ts

import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async getPageHeader(locator: string): Promise<string> {
    return this.page.locator(locator).innerText();
  }

  async getElement(locator: string): Promise<Locator> {
    try {
      await this.waitForElementPresent(locator);
      return this.page.locator(locator);
    } catch (e) {
      console.error(`Error occurred while creating element: ${locator}`, e);
      throw e;
    }
  }

  async clickOnWebElement(locator: string, assertionMessage: string): Promise<boolean> {
    try {
      const element = this.page.locator(locator);
      await expect(element).toBeVisible({ timeout: 10000 });
      await element.click();
      return true;
    } catch (e) {
      console.error(assertionMessage, e);
      throw e;
    }
  }

  async waitForElementPresent(locator: string, timeout: number = 20000): Promise<void> {
    try {
      await this.page.locator(locator).waitFor({ state: 'visible', timeout });
    } catch (e) {
      console.error(`Exception while waiting for element: ${locator}`, e);
      throw e;
    }
  }

  async checkElementPresent(locator: string): Promise<boolean> {
    try {
      return await this.page.locator(locator).count() > 0;
    } catch (e) {
      console.error(`Exception while checking element: ${locator}`, e);
      return false;
    }
  }

  async waitForPageTitle(title: string, timeout: number = 20000): Promise<void> {
    try {
      await expect(this.page).toHaveTitle(new RegExp(title), { timeout });
    } catch (e) {
      console.error(`Exception while waiting for title: ${title}`, e);
      throw e;
    }
  }

  async getElements(locator: string): Promise<Locator[]> {
    try {
      await this.waitForElementPresent(locator);
      const elements = this.page.locator(locator);
      const count = await elements.count();
      const locators: Locator[] = [];
      for (let i = 0; i < count; i++) {
        locators.push(elements.nth(i));
      }
      return locators;
    } catch (e) {
      console.error(`Error getting list of elements: ${locator}`, e);
      return [];
    }
  }

  async getElementNew(locator: string): Promise<Locator> {
    await this.page.locator(locator).waitFor({ state: 'visible', timeout: 30000 });
    return this.page.locator(locator);
  }

  async getElementsNew(locator: string): Promise<Locator[]> {
    await this.page.locator(locator).waitFor({ state: 'visible', timeout: 30000 });
    const elements = this.page.locator(locator);
    const count = await elements.count();
    const locators: Locator[] = [];
    for (let i = 0; i < count; i++) {
      locators.push(elements.nth(i));
    }
    return locators;
  }

  getElementWithoutWait(locator: string): Locator {
    return this.page.locator(locator);
  }

  async clickOnMethod(message: string, element: Locator): Promise<void> {
    try {
      await element.scrollIntoViewIfNeeded();
      await element.click();
    } catch (e) {
      console.error(`Failed to click on element: ${message}`, e);
    }
  }

  async clickOnMethodByLocator(elementName: string, locator: string, assertionMessage: string): Promise<void> {
    try {
      const clicked = await this.clickOnWebElement(locator, assertionMessage);
      expect(clicked, assertionMessage).toBeTruthy();
    } catch (e) {
      console.error(`Failed to click on ${elementName}`, e);
      throw e;
    }
  }

  async verifyVisibility(elementName: string, locator: string, assertionMessage: string): Promise<void> {
    try {
      const element = this.page.locator(locator);
      await expect(element, assertionMessage).toBeVisible();
    } catch (e) {
      console.error(`Failed to verify visibility of ${elementName}`, e);
      throw e;
    }
  }

  async enterCreditCardDetailsAndSubmit(): Promise<void> {
    // TODO: Implement credit card entry logic if required
  }
}
