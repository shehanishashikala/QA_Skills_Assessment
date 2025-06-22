import { expect } from '@playwright/test';

class ProductPage {
  constructor(page) {
    this.page = page;
    // "See all" link inside the slot with test id 'x-rx-slot-101875'
    this.seeAllLink = page.locator('text=See all').first();
  }

  async openSimilarItemsPage() {
  await this.seeAllLink.waitFor({ state: 'visible', timeout: 30000 });
  await this.seeAllLink.scrollIntoViewIfNeeded();

  const [popup] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.seeAllLink.click()
  ]);
  return popup;
}
  
}

export default ProductPage;