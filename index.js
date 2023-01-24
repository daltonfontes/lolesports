import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({

    });
    const page = await browser.newPage();

    // emulate galaxy 8
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1');
    await page.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 });

    //goto to page
    await page.goto('https://lolesports.com/');

    //Handle cookies
    const cookies = await page.cookies()
    if (cookies.length === 0) {
        console.log('No cookies found')
    } else {
        console.log(cookies)
    }

    console.log(cookies[0].name);
    //get element
    //close browser
    await browser.close();
})();