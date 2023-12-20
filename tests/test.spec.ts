import { test, expect } from '@playwright/test';

test('rss link', async ({ page }) => {
  await page.goto('localhost:3000');

  await expect(page.getByRole('link', { name: 'RSS' })).toBeVisible();
});



// Special articles

test('Calculate the sum of everything up to a given number', async ({ page }) => {
  await page.goto('localhost:3000/articles/calculate-the-sum-of-everything-up-to-a-given-number');

  await page.getByLabel('Number').fill('10');
  await page.getByRole('button', { name: 'Calculate' }).click();

  await expect(page.getByText('55')).toBeVisible();
});

test('Standard character width in CSS', async ({ page }) => {
  await page.goto('http://localhost:3000/articles/standardize-character-width-with-css');

  await page.getByRole("button", {name:'Start timer'}).click();

  await page.waitForTimeout(2000);

  expect(page.getByLabel('Default')).toHaveText("20");

  await page.getByRole("button", {name:'Stop timer'}).click();

  await page.waitForTimeout(2000);

  expect(page.getByLabel('Default')).toHaveText("20");
});
