# QA_Skills_Assessment
Shehani Wijebandara_Automation Testing

This project is an automated test suite built using **Playwright** and the **Page Object Model (POM)**. 

# Pre-Conditions
1. Install node v20.16.0
2. Install Visual Studio Code
3. Install Playwright playwright@1.53.1
4. Install Dotenv

# Test Workflow
1. Go to the eBay homepage.(https://www.ebay.com/)
2. Search for a product using the keyword from .env.('wallet')
3. Click on a selected product.
4. Open the "Similar items" section by clicking the "See All" link.
5. Validate the "Similar items" header.
6. Log the total number of similar products.

# 📂 Project Structure

├── Pages/
│ ├── homePage.js
│ ├── productPage.js
│ └── similarProdPage.js
│
├── Tests/
│ └── similarProdTest.spec.js # Main test script
│
├── .env # Stores environment variables (BASE_URL, etc.)
├── package.json # Project dependencies
└── playwright.config.js # Playwright configuration file


# Test Execution Example
To run the test on Firefox browser in headed mode: 
    npx playwright test similarProdTest.spec.js --project=firefox --headed
Sample Output:
    Similar Items Header Text: Similar items
    Total Similar Products: 25
      1 passed (29.8s)
