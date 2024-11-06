import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await expect(page.getByRole('navigation')).toBeVisible();
  await page.getByRole('heading', { name: 'Stuff' }).click();
  await expect(page.getByRole('cell', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Quantity' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Condition' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Actions' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Basket' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Bicycle' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Add Stuff' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'List Stuff' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();
});
