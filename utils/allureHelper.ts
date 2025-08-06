import { allure } from 'allure-playwright';

export const logToAllure = (stepDescription: string) => {
  allure.step(stepDescription, async () => {
    // Empty block just to log the step
  });
};
