# Copilot Instructions for ASTM Playwright Automation Framework

## Project Overview
- This is a Playwright + TypeScript automation framework for end-to-end testing of web applications.
- The framework uses the Page Object Model (POM) pattern. Each page (e.g., `LoginPage.ts`, `ConduiteLoginPage.ts`) encapsulates locators and actions for a specific UI page.
- Tests are organized under `tests/` (with subfolders like `e2e/`), and reusable utilities are in `utils/`.
- Allure reporting is integrated for test result visualization.

## Key Files & Structure
- `pages/`: Page Object classes (e.g., `LoginPage.ts`) with Playwright locators and methods.
- `tests/`: Test specs using Playwright's `test` and `expect` APIs. Example: `tests/e2e/login_INT-123.spec.ts`.
- `utils/`: Helpers like `testDataLoader.ts` for loading test data.
- `playwright.config.ts`: Central Playwright configuration (baseURL, reporters, retries, etc).
- `package.json`: Scripts for running tests and generating reports.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Run all tests:** `npm test` or `npx playwright test`
- **Run tests with Allure reporting:** `npm run test:with-allure`
- **Generate Allure report:** `npm run report:generate`
- **Open Allure report:** `npm run report:open`
- **Debug a test:** Use Playwright's `--debug` or VS Code's debugging tools.

## Patterns & Conventions
- **Page Objects:**
  - Each page class takes a `Page` instance in the constructor.
  - Locators are defined as private fields using Playwright's `locator()`.
  - Actions are exposed as async methods (e.g., `login()`, `clickSignInButton()`).
- **Test Data:**
  - Test data is loaded per test file using `loadTestData(__filename)`.
  - Test data files are in `test-data/` and named to match the test (e.g., `INT-123.dev.json`).
- **Test Naming:**
  - Test files use lowercase and `.spec.ts` (e.g., `login.spec.ts`).
  - Test names are descriptive and use Playwright's `test()` API.
- **Reporting:**
  - Allure is configured as a reporter in `playwright.config.ts` and scripts in `package.json`.

## Examples
- See `pages/LoginPage.ts` for a typical POM class.
- See `tests/e2e/login_INT-123.spec.ts` for a test using a page object and test data loader.

## External Integrations
- Allure for reporting (`allure-playwright` dependency).
- Playwright for browser automation.

## Special Notes
- Use environment variables or `playwright.config.ts` for base URLs.
- Use Playwright's built-in fixtures and expect assertions for reliability.
- Follow the POM pattern for all new page classes.

---

For more details, see `Playwright_Framework_DevGuide_and_Summary.md`.
