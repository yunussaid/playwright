import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: ' Login' });
    
    // Adding alert locators to handle validation checks
    this.errorMessage = page.locator('#flash.error');
    this.successMessage = page.locator('#flash.success');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async logout() {
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
}