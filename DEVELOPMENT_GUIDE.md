# 📘 Framework Development Guide

## Step 1: Initialize Project
- `npm init -y`
- `npm i -D playwright typescript ts-node @types/node`
- Set up `tsconfig.json`

## Step 2: Folder Structure
- Create folders: `pages/`, `tests/e2e/`, `test-data/`, `utils/`

## Step 2B: Environment Management
- Create `.env.qa`, `.env.dev`
- Add variables like `BASE_URL`, `ENV`, etc.
- Install `cross-env`

## Step 3: Playwright Config
- Create `playwright.config.ts`
- Set `retries`, `timeout`, `reporter`, `testDir`, `workers`
- Use `dotenv` to load `.env` files dynamically

## Step 3A: testDataLoader Utility
- Extract JIRA ID from test file
- Based on `ENV`, load appropriate JSON data file

## Step 3B: Page Object Model (POM)
- `LoginPage.ts` with `login` method
- Use CSS selectors or test ids (avoid hardcoded XPath)

## Step 3C: Create Spec File
- Name: `login_INT-123.spec.ts`
- Load test data using utility
- Use Playwright's `test` and `expect`

## Step 4: Allure Report Setup
- Install: `npm i -D allure-playwright`
- Add reporter in config: `[ ['allure-playwright'] ]`
- Run with cleanup, generate, and open

## Step 5: Parallel & Retry
- Use `--workers`, `--retries`, or configure in `playwright.config.ts`

## 🚀 Features and Coding Standards

### Framework Features

- **Page Object Model (POM):** For clean, reusable, and maintainable code.
- **Data-Driven Testing:** Test data is separated from test logic using JSON files.
- **Environment-Based Configuration:** Easily switch between `dev` and `qa` environments.
- **Allure Reporting:** Rich, interactive test reports with detailed steps and screenshots.
- **Parallel Execution:** Tests run in parallel by default for faster execution.
- **Retry Mechanism:** Automatically retries failed tests to reduce flakiness.

### Coding Standards

- **File Naming:**
    - Test Files: `<feature>_<JIRA_ID>.spec.ts` (e.g., `login_INT-123.spec.ts`)
    - Page Objects: `<PageName>Page.ts` (e.g., `LoginPage.ts`)
    - Test Data: `<JIRA_ID>.<env>.json` (e.g., `INT-123.qa.json`)
- **Indentation:** Use 2 spaces for indentation.
- **Selectors:** Prefer CSS selectors or `data-testid` attributes over XPath for better performance and readability.
- **Assertions:** Use Playwright's `expect` for assertions.

## 📘 Line-by-Line Explanation of Key Files

### 🔹 playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test'; // ✅ Import Playwright's defineConfig for type-safety
import * as dotenv from 'dotenv'; // ✅ Import dotenv to load environment variables

dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` }); // ✅ Load environment-specific .env file

export default defineConfig({
  testDir: './tests', // ✅ Directory where tests are located
  timeout: 30000, // ✅ Timeout for each test in milliseconds
  retries: 1, // ✅ Number of retries for failed tests
  use: {
    baseURL: process.env.BASE_URL, // ✅ Base URL for navigation
    browserName: 'chromium', // ✅ Browser to run tests in
    headless: false, // ✅ Run tests in non-headless mode
    trace: 'on', // ✅ Record a trace for each test
    screenshot: 'only-on-failure', // ✅ Capture screenshot only on failure
    video: 'retain-on-failure', // ✅ Record video and retain on failure
  },
  reporter: [ // ✅ Configure reporters
    ['list'], // ✅ Simple list reporter
    ['html'], // ✅ Playwright's HTML reporter
    ['allure-playwright'] // ✅ Allure reporter
  ],
});
```

### 🔹 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext", // ✅ Compile to modern JavaScript version
    "module": "CommonJS", // ✅ Use CommonJS module system
    "moduleResolution": "node", // ✅ How modules get resolved
    "esModuleInterop": true, // ✅ Enables interoperability between CommonJS and ES Modules
    "strict": true, // ✅ Enable all strict type-checking options
    "outDir": "dist", // ✅ Output directory for compiled files
    "types": ["@playwright/test"] // ✅ Include Playwright's types
  },
  "include": ["tests", "pages", "utils"] // ✅ Directories to include in compilation
}
```

### 🔹 package.json

```json
{
  "name": "astmautomationframework",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "npx playwright test", // ✅ Run all tests
    "report:generate": "allure generate ./allure-results --clean -o ./allure-report", // ✅ Generate Allure report
    "report:open": "allure open ./allure-report", // ✅ Open Allure report
    "test:with-allure": "npm run test && timeout 2 && npm run report:generate && npm run report:open" // ✅ Run tests and generate/open Allure report
  },
  "devDependencies": { // ✅ Dependencies for development and testing
    "@playwright/test": "^1.54.1",
    "allure-js-commons": "^3.3.1",
    "allure-playwright": "^3.3.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  },
  "dependencies": { // ✅ Dependencies required for the application
    "dotenv": "^17.2.0"
  }
}
```

### 🔹 login_INT-123.spec.ts

```typescript
import { test, expect } from '@playwright/test'; // ✅ Playwright test functions
import { LoginPage } from '../../pages/LoginPage'; // ✅ Page Object for login
import { loadTestData } from '../../utils/testDataLoader'; // ✅ Utility to load test data

const testData = loadTestData(__filename); // ✅ Loads data based on JIRA ID in filename

test('INT-123 | Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page); // ✅ Create page object
  await loginPage.login(testData.username, testData.password); // ✅ Use test data for login
  await expect(page).toHaveURL(/inventory/); // ✅ Validate successful login
});
```

### 🔹 testDataLoader.ts

```typescript
import path from 'path'; // ✅ Used to construct cross-platform paths
import fs from 'fs'; // ✅ Used to read file contents

export function loadTestData(testFilePath: string) {
  const match = testFilePath.match(/_(\w+-\d+)\.spec\.ts$/); // ✅ Extract JIRA ID from filename
  if (!match) throw new Error(`Could not extract JIRA ID from file: ${testFilePath}`);

  const jiraId = match[1];
  const env = process.env.ENV || 'qa'; // ✅ Default to 'qa' if ENV is not set
  const filePath = path.join(__dirname, `../test-data/${jiraId}.${env}.json`); // ✅ Full file path

  if (!fs.existsSync(filePath)) throw new Error(`Test data file not found: ${filePath}`);

  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data); // ✅ Return parsed JSON object
}
```

### 🔹 INT-123.qa.json

```json
{
  "username": "standard_user", // ✅ Username for test
  "password": "secret_sauce"   // ✅ Password for test
}
```

### 🔹 LoginPage.ts

```typescript
import { Page } from '@playwright/test'; // ✅ Playwright Page type

export class LoginPage {
  constructor(private page: Page) {} // ✅ Dependency injection of Playwright Page

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username); // ✅ Fill username field
    await this.page.fill('#password', password); // ✅ Fill password field
    await this.page.click('#login-button'); // ✅ Click login
  }
}
LoginPage.ts

✅ Purpose of the File

This file represents the Page Object Model (POM) for the Login page. It encapsulates all actions and elements related to the login functionality of the application.

🧩 Standards / Design Patterns Used

Page Object Model (POM)

Command Design Pattern for modular action methods

Clear separation of UI locators and user interactions

📘 Updated LoginPage.ts with Best Practices
import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username'); // Username input field
    this.passwordInput = page.locator('#password'); // Password input field
    this.loginButton = page.locator('#login-button'); // Login button
  }

  // 💡 Enters the username in the username field
  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  // 💡 Enters the password in the password field
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  // 💡 Clicks the login button
  async clickLogin() {
    await this.loginButton.click();
  }

  // 💡 High-level method that wraps the above actions for full login flow
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
```
