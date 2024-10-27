import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
	readonly page: Page;
	readonly usernameInput: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;
	readonly productsTitle: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameInput = page.locator('#user-name');
		this.passwordInput = page.locator('#password');
		this.loginButton = page.locator('#login-button');
		this.productsTitle = page.locator('[data-test="title"]');
	}

	async goto() {
		await this.page.goto('https://www.saucedemo.com');
	}

	async login(username: string, password: string) {
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.loginButton.click();
	}

	async getProductsTitleText(): Promise<string | null> {
		return await this.productsTitle.textContent();
	}
	
}