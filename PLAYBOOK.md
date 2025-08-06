# Playwright + TypeScript Test Automation Framework - User Playbook

## 📘 Introduction
This Playbook serves as a **reference guide for QA engineers** using the Playwright + TypeScript automation framework. It includes instructions on project setup, running tests, organizing test data, understanding naming conventions, and reading reports.

-----
## 📂 Project Folder Structure
ASTMAutomationFramework/
│
├── tests/                     # All spec/test files (e.g., login_INT-123.spec.ts)
│   └── e2e/                   # End-to-end test scripts
│
├── pages/                    # Page Object Model (POM) classes (e.g., LoginPage.ts)
│
├── test-data/                # JSON test data files per environment & JIRA ID
│
├── utils/                    # Utility classes (e.g., testDataLoader.ts, allureHelper.ts)
│
├── .env.qa                   # Environment-specific configs (QA)
├── .env.dev                  # Environment-specific configs (Dev)
├── playwright.config.ts      # Playwright configuration file
├── package.json              # Project dependencies and scripts
└── tsconfig.json             # TypeScript compiler configuration

-----
## ⚙️ Running Tests
### ▶️ Run All Tests in tests/e2e Folder for QA
```bash
npx cross-env ENV=qa npx playwright test tests/e2e --retries=1
```
### ▶️ Run All Tests in tests/e2e Folder for DEV
```bash
npx cross-env ENV=dev npx playwright test tests/e2e --retries=1
```
### 🧪 Run Single Test File (QA)
```bash
npx cross-env ENV=qa npx playwright test tests/e2e/login_INT-123.spec.ts
```

-----
## 📈 Allure Report Commands
### 1️⃣ Clean Old Results & Run Tests
```bash
rd /s /q allure-results && npx cross-env ENV=qa npx playwright test tests/e2e --retries=1
```
### 2️⃣ Generate Allure Report
```bash
npx allure generate ./allure-results --clean -o ./allure-report
```
### 3️⃣ Open Allure Report
```bash
npx allure open ./allure-report
```

-----
## 🚀 Parallel Execution (Playwright Default)
Playwright runs tests in parallel by default using workers. You can control this in playwright.config.ts:
```typescript
workers: 4 // Customize based on CPU
```
Or override via CLI:
```bash
npx cross-env ENV=qa npx playwright test tests/e2e --workers=2
```

-----
## 🔁 Retry Mechanism
Set in playwright.config.ts:
```typescript
retries: 1 // Will retry failed tests once
```
Or override via CLI:
```bash
npx cross-env ENV=qa npx playwright test tests/e2e --retries=2
```

-----
## 🧹 Allure Results Cleanup
To avoid clutter from retries in reports, run:
```bash
rd /s /q allure-results && npx cross-env ENV=qa npx playwright test tests/e2e --retries=1
```
This deletes old results before each test run.

-----
## 🔍 Naming Conventions

|Item|Convention|Example|
| :- | :- | :- |
|Test file|feature_JIRAID.spec.ts|login_INT-123.spec.ts|
|Test data (QA)|JIRAID.qa.json|INT-123.qa.json|
|Test data (Dev)|JIRAID.dev.json|INT-123.dev.json|
|Environment variables|.env.<env>|.env.qa, .env.dev|

-----
## 📄 Test Data Mapping Logic
Located in `testDataLoader.ts`:

- Extracts JIRA ID from test file name using regex.
- Loads environment-specific data from `/test-data/JIRAID.env.json`

Example:
```typescript
// From login_INT-123.spec.ts
// Loads INT-123.qa.json when ENV=qa
```

-----
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
Add to Framework Development Guide & User Playbook

🔹 New Section: Best Practice for Page Object Model (LoginPage.ts)

✅ Why Split Methods are Better Than a Single login() Method

Reason

Explanation

Reusability

Separate methods allow reuse in negative or partial test cases

Maintainability

Easier to update locators or actions in one place

Debugging

Errors are easier to pinpoint (e.g., entering username vs clicking login)

Readability

Clearer test step intention when methods are descriptive

Scalability

Easily extend or override methods in subclasses or different flows

🔄 When to Use login()

Use the login() method only when the complete login flow is repeated often with no variation (i.e., positive login). For any other case (e.g., invalid credentials, field-level validation), call the individual methods.
