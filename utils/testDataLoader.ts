import path from 'path';
import fs from 'fs';

export function loadTestData(testFilePath: string): any {
  console.log('📌 ENV from process.env.ENV:', process.env.ENV);
  const env = process.env.ENV || 'qa';
  console.log('Running tests with ENV:', env);
  
  // Extract JIRA ID from file name, e.g., login_INT-123.spec.ts -> INT-123
  const match = testFilePath.match(/_(\w+-\d+)\.spec\.ts$/i);
  if (!match) throw new Error(`Could not extract JIRA ID from file: ${testFilePath}`);

  const jiraId = match[1];
  const filePath = path.join(__dirname, `../test-data/${jiraId}.${env}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

// Utility to get a value from a JSON file by section and key
export function getJsonString(jsonPath: string, section: string, key: string): string {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  if (data[section] && data[section][key] !== undefined) {
    return data[section][key];
  }
  throw new Error(`Key '${key}' not found in section '${section}' of ${jsonPath}`);
}
