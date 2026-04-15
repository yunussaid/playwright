import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { generateAITestData } from '../utils/aiDataGen';

test('Successful login and logout', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  // Test Case: Successful login (Happy Path)
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(loginPage.successMessage).toContainText('You logged into a secure area!');

  // Test Case: Logout
  await loginPage.logout();
  await expect(page).toHaveURL(/.*login/);
});

test('Failed login Wrong Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  // Test Case: Failed login (Edge Case w wrong password)
  await loginPage.login('tomsmith', 'WrongPassword!');
  await expect(loginPage.errorMessage).toBeVisible();
});

test('Failed login with AI Generated Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

 // Test Case: Failed login (Edge Case w AI generated password)
  const aigeneratedPassword = await generateAITestData("Generate a random password for testing login failures");
  console.log(`AI Generated Password: ${aigeneratedPassword}`);
  await loginPage.login('tomsmith', aigeneratedPassword);
  await expect(loginPage.errorMessage).toBeVisible();
});