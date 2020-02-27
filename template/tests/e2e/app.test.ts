import * as helpers from './helpers'

beforeEach(async () => {
  await page.goto(helpers.url('/'))
})

test('redirects to /sign-in', async () => {
  expect(page.url()).toEqual(helpers.url('/sign-in'))
})

test('renders "Sign In"', async () => {
  await expect(page).toMatch('Sign In')
})

test('sign in successfully', async () => {
  await page.type('.sign-in-form input[name="name"]', 'My Name')
  await page.type('.sign-in-form input[name="password"]', 'My Password')
  await page.click('.sign-in-form input[type="submit"]')

  await page.waitForNavigation({ timeout: 5 * 1000 })

  expect(page.url()).toEqual(helpers.url('/'))
  await expect(page).toMatch('My Name')
})
