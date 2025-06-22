import { expect } from '@playwright/test';

class SimilarProdPage {
  constructor(page) {
    this.page = page;
    this.similarItemsHeader = page.getByRole('heading', { name: 'Similar items' });
    this.similarItemCards = page.locator('(//div[@role="group"])[1]//div[@class="recs-item-content"]');
  }

  async verifySimilarItemsHeader() {
    const headerText = await this.similarItemsHeader.textContent();
    console.log('Similar Items Header Text:', headerText);
  }

async getSimilarItemsCount() {
    await this.similarItemsHeader.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.waitForTimeout(1000); // optional wait for full render

    const count = await this.similarItemCards.count();
    await this.page.waitForTimeout(1000); // optional wait for full render
    console.log(`Total Similar Products:`,count);
  }

}

export default SimilarProdPage;