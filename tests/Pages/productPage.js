import { expect } from '@playwright/test';

class ProductPage {
  constructor(page) {
    this.page = page;
    this.seeAllLink = page.locator('text=See all').first();
  }

  async openSimilarItemsPage() {
  await this.seeAllLink.waitFor({ state: 'visible', timeout: 30000 });
  await this.seeAllLink.scrollIntoViewIfNeeded();

  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),//waits for a new tab to open
    this.seeAllLink.click()
  ]);
  return popup;
}
  
}

export default ProductPage;