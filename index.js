import puppeteer from 'puppeteer';

const run = async () => {

    // Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Emulate Iphone 14
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });

    // Goto to page
    await page.goto('https://lolesports.com/vods/cblol-brazil/cblol_2023_split_1');

    // Handle cookies
    const cookies = await page.cookies()
    if (cookies.length === 0) {
        console.log('No cookies found')
    }

    // Get Vods events
    const text = await page.$eval('.list', el => el.outerHTML);

    // Get game list
    const games = text.split('<div class="VodsMatch match">');

    // Get game links
    const links = games.map(game => game.split('<a class="wrapper "href=">'));

    // Close browser
    await browser.close();
};
run();