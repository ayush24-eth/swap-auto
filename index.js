import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({ width: 1440, height: 900 });

    await page.goto("https://swap.defillama.com");

    const chainID  = "Arbitrum One";
    const sellAmt = "12";
    
    //set the chain from default(Optimism) to the given chainID(Arbitrum One) by the user
    await page.type(
        "#react-select-2-input", 
        chainID, 
        {delay: 250}
    );
    await page.keyboard.press("Enter");

    //set the no. of token user wants to sell
    await page.$eval(
        '.css-lv0ed5', 
        el => el.value=""
    );
    await page.type(
        ".css-lv0ed5", 
        sellAmt, 
        {delay: 100}
    );
    await page.keyboard.press("Enter");

    //choose the token name user wants to swap from 
    const WBTC = await page.$x(
        "/html/body/div[1]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/button"
    );
    await WBTC[0].click();
    await page.waitForSelector(".css-bls73e");
    await page.type(
        ".css-qjhap", 
        "WBTC", 
        {delay: 250}
    );
    const wbtc = await page.waitForXPath(
        '//span[contains(text(), "Wrapped BTC (WBTC)")]'
    );
    await wbtc.click();
    
    //choose the token name user wants to swap to 
    const USDC = await page.$x(
        "/html/body/div[1]/div/div/div[2]/main/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/button"
    );
    await USDC[0].click();
    await page.waitForSelector(".css-bls73e"); //wait till the dialogue box appears
    await page.type(
        ".css-s1d1f4", 
        "USDC", 
        {delay: 250}
    );
    const usdc = await page.waitForXPath(
        '//span[contains(text(), "USD Coin (USDC)")]'
    );
    await usdc.click();

    //wait till the routes to perform swap appears
    await page.waitForSelector(".sc-18d0abec-0.knYyMy.RouteWrapper"); 

    //wait till all the routes appears to select the 2nd best option
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    }); 
    const route = await page.$x(
        '(//div[starts-with(@class, "sc-18d0abec-1 itSiES")])[3]'
    );
    await route[0].click();
})();
