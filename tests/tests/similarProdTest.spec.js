import { test } from '@playwright/test';
import HomePage from '../Pages/homePage.js';
import ProductPage from '../Pages/productPage.js';
import SimilarProdPage from '../Pages/similarProdPage.js';
import dotenv from 'dotenv';
dotenv.config();  

test('Verify navigation to similar items', async ({ page }) => {
  const baseUrl = process.env.BASE_URL;
  const searchKeyword = process.env.SEARCH_KEYWORD;

  const homePage = new HomePage(page, baseUrl, searchKeyword);
  await homePage.goto(baseUrl);
  await homePage.searchForProduct(searchKeyword);
  
  const productPopup = await homePage.clickWallet();
  const productPage = new ProductPage(productPopup); //new tab

  const similarItemsPopup = await productPage.openSimilarItemsPage();
  const similarProdPage = new SimilarProdPage(similarItemsPopup); //newtab
  await similarProdPage.verifySimilarItemsHeader();
  await similarProdPage.getSimilarItemsCount();
  
});
