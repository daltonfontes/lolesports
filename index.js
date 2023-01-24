import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({

    });
    const page = await browser.newPage();

    // emulate Iphone 14
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });

    //goto to page
    await page.goto('https://lolesports.com/');

    //Handle cookies
    const getCookies = await page.cookies()
    if (getCookies.length === 0) {
        console.log('No cookies found')
    } else {
        console.log(getCookies)
    }
    //get element
    //close browser
    await browser.close();
})();