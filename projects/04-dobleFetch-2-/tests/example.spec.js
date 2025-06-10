// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST = 'http://localhost:5173'
const CAT_PREFIX = 'https://cataas.com'

// test('TITULO', async ({ page }) => {
//   await page.goto(LOCALHOST)

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/)
// })

test('Random facts', async ({ page }) => {
  await page.goto(LOCALHOST)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img').first()

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX)).toBeTruthy()
})
