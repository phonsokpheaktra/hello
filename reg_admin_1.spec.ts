import { test, expect } from '@playwright/test';

test('Login to Admin Page with a valid Username & Password', async ({ page }) => {
  await page.goto('https://stg-admin.irodoki.com/login')

  await page.getByPlaceholder('施設または先生のアカウントID').fill('account')
  await page.getByPlaceholder('パスワード（最低8文字）').fill('password')
  await page.click("//button[text()= 'ログイン']")

  await expect(page).toHaveURL(new RegExp('https://exaple.com/'))

  page.close()

})