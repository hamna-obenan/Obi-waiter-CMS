import { test, expect} from '@playwright/test';
// import signupLocators from '../../fixture/locators/signup-locators.json' assert { type: "json" };
import data from '../../fixtures/data/user1-obiwaiter.json';
// import { waitForDebugger } from 'node:inspector';
import { addVenue, signupPage } from '../../object-page/index';
//============================================== Fixtures data ==============================================

test('create the venue at the company level', async ({ page }) => {
    const addVenueClass = new addVenue(page);
    const signupPageClass = new signupPage(page);
    const logoImageName = 'logo.jpeg'; //image name for logo section
    const imageType = 'logo'; //image type for logo section
    const coverimageName = 'cover.png'; //image name for cover image section
    const coverimageType = 'coverimage'; //image type for cover image section
    const storyimageName = 'cover.png'; //in story section add the same image in cover image section
    const storyimagetype = 'storyimage'; //image type for story section
    const galleryimageName = 'gallery1.png'; //image name for gallery section
    const galleryimageType = 'galleryimage'; //image type for gallery section

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

    await addVenueClass.uploadimages(logoImageName,imageType); //upload images logo and cover images 

    await addVenueClass.uploadimages(coverimageName,coverimageType); //upload images logo and cover images 

    await page.locator(addVenueClass.nextbutton).click(); // click on the next button to go to the next step
    
    await addVenueClass.storyandExperience(); // fill up the story and experience of the venue

    await addVenueClass.venueTiming(); // fill up the venue timing of the venue

    await addVenueClass.story(); // fill up the story of the venue

    await addVenueClass.uploadimages(storyimageName,storyimagetype); //upload images story and experience of the venue
    await page.pause();

    await addVenueClass.addgalaryitems(); // add the gallery items of the venue
    
});
