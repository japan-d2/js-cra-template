import * as helpers from './helpers'

beforeEach(async () => {
  await page.goto(helpers.url('/'))
})

test('renders "Home"', async () => {
  await expect(page).toMatch('Home')
})

test('sign in successfully', async () => {
  const [button] = await page.$x('//button[contains(text(), "Sign Out")]')

  if (button) {
    await button.click()
  }

  await page.type('.sign-in-form input[name="name"]', 'My Name')
  await page.type('.sign-in-form input[name="password"]', 'My Password')
  await page.click('.sign-in-form input[type="submit"]')

  await page.waitForNavigation({ timeout: 5 * 1000 })

  expect(page.url()).toEqual(helpers.url('/'))
})
