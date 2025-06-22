import { expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();


class HomePage {
  constructor(page, baseUrl, keyword) {
    this.page = page;
    this.baseUrl = baseUrl;
    this.keyword = keyword;
    this.searchBox = page.getByRole('combobox', { name: 'Search for anything' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.wallet = page.getByRole('link', { name: 'Mens RFID Blocking Genuine' }).nth(1);
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }

  async searchForProduct() {
    await this.searchBox.fill(this.keyword);
    await this.searchButton.click();
  }

  async clickWallet() {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'), //waits for a new tab to open
      this.wallet.click(), //click on selected product
    ]);
    await popup.waitForLoadState(); //new popup page to fully load
    return popup;
  }
}

export default HomePage;