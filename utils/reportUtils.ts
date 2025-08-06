import { Page, test } from '@playwright/test';

export async function attachScreenshot(page: Page, label: string = 'Screenshot') {
  const screenshot = await page.screenshot({ fullPage: true });
  test.info().attach(label, {
    body: screenshot,
    contentType: 'image/png'
  });
}
