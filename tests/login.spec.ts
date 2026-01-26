import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import testData from '../data/testData.json';

let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.visitarPaginaLogin();
});

