import { test, expect} from '@playwright/test';
// import signupLocators from '../../fixture/locators/signup-locators.json' assert { type: "json" };
import data from '../../fixtures/data/user1-obiwaiter.json';
// import { waitForDebugger } from 'node:inspector';
import { addVenue, signupPage } from '../../object-page/index';
//============================================== Fixtures data ==============================================

test('create the venue at the company level', async ({ page }) => {
    const addVenueClass = new addVenue(page);
    const signupPageClass = new signupPage(page);
    const coverimageName = 'cover.png';
    const imageType = 'coverimage';
    

    await signupPageClass.goto(); // go to the URL
    await signupPageClass.login(); //login through successful email and password
    //create a new venue
    await addVenueClass.createbutton(); // click on the create button to create a new venue
    // fill up the step 1: basic info of the venue
    await addVenueClass.basicinfo(data.addvenue['venue-name'],data.addvenue['venue-type'],data.addvenue['venue-email'],data.addvenue['venue-default-language'],data.addvenue['venue-time-zone'],data.addvenue['venue-currency'],data.addvenue['venue-cuisine'],`${data.addvenue['venue-address']}`); // fill up the basic info of the venue
    await page.locator(addVenueClass.nextbutton).click(); // click on the next button to go to the next step
    await page.waitForTimeout(1000); // wait for 1 second
    //fill up the second setp detailing and branding of the venue 
    await addVenueClass.detailsandbranding(); // fill up the details and branding of the venue
    await page.pause(); // pause the test to see the result
    await addVenueClass.uploadimages(coverimageName,imageType); //upload images logo and cover images 

    // await page.pause(); // pause the test to see the result
});
