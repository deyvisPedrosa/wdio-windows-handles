import { expect, browser, $ } from '@wdio/globals'

describe('Windows handles', () => {
    it('should handle multiple windows', async () => {
        
        await browser.url('https://webdriver.io/')
        console.log(await browser.getTitle())

        const btnGithubLnk = await $('a[href="https://github.com/webdriverio/webdriverio"][class*=navbar]')
        await btnGithubLnk.waitForDisplayed()
        await btnGithubLnk.click()

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())

        const inputGotofile = await $('[aria-label="Go to file"]')
        await inputGotofile.waitForDisplayed()
        
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())

    })
})

