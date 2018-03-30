import open from 'open'
import jetpack from 'fs-jetpack'
import puppeteer from 'puppeteer'

// Launch Puppeteer
async function launch (exec) {
  return puppeteer.launch({
    headless: false,
    timeout: 0,
    args: [
      '--disable-gpu',
      '--user-data-dir=/Users/camwhite/Library/Application Support/Google/Chrome/'
    ]
  })
}

export default async function ({ exec }) {
  const browser = await launch(exec)
  // @TODO Need to store browser PID to kill on quit

  const page = await browser.newPage()
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 2
  })
  await page.goto('https://messenger.com', {waitUntil: 'domcontentloaded'})
  //await page.screenshot({path: 'example.png'})
  //open('example.png')
}
