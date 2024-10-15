import { expect, browser, $ } from '@wdio/globals'

describe('Windows handles', () => {
    it('should handle multiple windows', async () => {

        await browser.url('https://webdriver.io/')

        console.log(await browser.getTitle()) // WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO

        const btnGithubLnk = await $('a[href="https://github.com/webdriverio/webdriverio"][class*=navbar]')
        await btnGithubLnk.waitForDisplayed()
        await btnGithubLnk.click()

        const handles = await browser.getWindowHandles()
        /**
         * INFO webdriver: COMMAND getWindowHandles()
         * INFO webdriver: [GET] http://localhost:57027/session/ae5abdeafe0245fa9a7eed151de0391b/window/handles
         * INFO webdriver: RESULT [
                'EBBFCC98D57BD36E2BB528DB3D6D2E67',
                '2343309B34378B88439E30F2BD4AC0D3'
            ]
         */
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle()) // GitHub - webdriverio/webdriverio: Next-gen browser and mobile automation test framework for Node.js

        const inputGotofile = await $('[aria-label="Go to file"]')
        await inputGotofile.waitForDisplayed()
        
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())

    })
})

