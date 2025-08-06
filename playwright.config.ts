import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` });

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL,
    browserName: 'chromium',
    headless: false,
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'on',
  },
  reporter: [
  ['list'], 
  ['html'],
  ['allure-playwright']
],
});
