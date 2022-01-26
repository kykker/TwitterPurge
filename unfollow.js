const puppeteer = require('puppeteer');
require('dotenv').config();

const loginUrl = 'https://twitter.com/i/flow/login';


const user = process.env.USER;
const psswd = process.env.PASSWORD;

async function massUnfollow(){

    const browser = await puppeteer.launch(
        {
            headless: false,
            defaultViewport: {
                width: 1400,
                height: 900,
                deviceScaleFactor: 1
            },
            slowMo: 15
        }
    );

    const page = await browser.newPage();
    await page.goto(loginUrl);

    // Enter Username
    const selectorNameField = 'input[name="text"]';
        
    await page.waitForSelector(selectorNameField);
    await page.waitForTimeout(350);

    await page.type(selectorNameField, user);

    const selectorNextButton =  '#layers > div > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1pi2tsx.r-1777fci.r-1xcajam.r-ipm5af.r-g6jmlv > div.css-1dbjc4n.r-1867qdf.r-1wbh5a2.r-kwpbio.r-rsyp9y.r-1pjcn9w.r-1279nm1.r-htvplk.r-1udh08x > div > div > div.css-1dbjc4n.r-kemksi.r-6koalj.r-16y2uox.r-1wbh5a2 > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1dqxon3 > div > div:nth-child(6) > div > span > span';
    await page.waitForSelector(selectorNextButton);
    await page.waitForTimeout(255);
    await page.click(selectorNextButton);
    await page.waitForTimeout(2000)
    
    // At this step, use this break to enter manually your Password on the UI
    debugger
    await page.goto('https://twitter.com/EnriqueGzs/following');
    await page.waitForTimeout(1000);
    
    const usersPerScreen = 6;
    const numberOfScrolldowns = 10
    
    
    for ( let r = 0; r < numberOfScrolldowns+1; r++ ){
        
        for ( let i = 1; i < usersPerScreen+1; i++ ){
            
            const selectorFollow = `#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > section > div > div > div:nth-child(${ i }) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div`
            await page.waitForSelector(selectorFollow);
            await page.click(selectorFollow);
            await page.waitForTimeout(300);
            
            const selectorConfirmUnfollow = 'div[data-testid="confirmationSheetConfirm"]';
            await page.waitForSelector(selectorConfirmUnfollow);
            await page.waitForTimeout(500);
            await page.click(selectorConfirmUnfollow);
            await page.waitForTimeout(300);
            
        }
        
        await page.goto('https://twitter.com/EnriqueGzs/following');
        await page.waitForTimeout(3000)

    }
    debugger




    await browser.close();






}

massUnfollow();