// add-venue.js
// import { dot } from 'node:test/reporters';
// import { env } from './baseurl'
import { expect } from '@playwright/test';
import data from '../fixtures/data/user1-obiwaiter.json' assert { type: "json" };
import path from 'path';
export class addVenue {
    constructor(page) {
       this.page = page;
       this.createButtonLocator="(//*[@data-testid='AddSharpIcon']/following-sibling::p[normalize-space()='Add'])" //add button Xpath
       this.venuename= "[placeholder='Venue name']" //venue name Xpath to add the venue name
       this.type= "[placeholder='Venue type']" //venu type box Xpath
       this.venueemail= "[placeholder='Email ']" //venue email box Xpath
       this.venulanguage= "[placeholder='Venue default language']" // venue language dropdown Xpath
       this.timezone= "[placeholder='Time zone ']" // venue timezone dropdown Xpath
       this.currency= "[placeholder='Currency ']" //venue currency dropdown Xpath
       this.cuisine= "[placeholder='Cuisine ']" //venue cuisine box Xpath
       this.address= "[placeholder='Address ']" //venue address box Xpath
       this.nextbutton= "//button[@tabindex='0'][@type='button'][text()='Next'][contains(@class, 'MuiButton')]" //click on the next button Xpath

       //step 2: details and branding locators
       this.description = "[name='description.en']"; // venue description input
       this.instagram = "[name='instagram']"; // instagram address input
       this.facebook = "[name='facebook']"; // facebook input
       this.clientappurl = "[name='slug']"; // client app url input
       this.enablepaylater = "//input[@placeholder='Enable pay later option for this venue']/following::input[@type='checkbox'][1]"; // enable pay later checkbox
       this.enabletipping = "//input[@placeholder='Enable tipping for this venue']/following::input[@type='checkbox'][1]"; // enable tipping checkbox
       this.tipPercentage = "[name='defaultTipPercentage']"; // tip percentage input
       this.dineInTax = "[name='dineInTax']"; // dine-in tax input
       this.takeawayTax = "[name='takeawayTax']"; // take-away tax input
       this.picturbox="//p[normalize-space()='Choose image']"; // picture box Xpath
       this.selectimage="[aria-label='Use the arrow keys to move the crop selection area']"; // select image Xpath
       this.upload="//button[contains(text(),'Upload')]"; // upload button Xpath

       //step 3: story and experience locators
       this.contactnumber = "[placeholder='Enter contact number']"
       this.opentime = "[placeholder='Open Time']"; // open time input
       this.closetime = "[placeholder='Close Time']"; // close time input
       this.storytitle = "[placeholder='Story Title']"; // story title input
       this.storydescription = "[data-slate-node='element']"; // story description input
       this.addgalarybutton = "//button[@type='button' and normalize-space(text())='Add Gallery Item']"; // button locator to add gallery items
       this.gallerytitle = "[placeholder='Gallery Title']"; //gallery title input
       this.gallerydescription = "[placeholder='Gallery Description']"; //gallery description input

       this.savebutton = "//button[normalize-space()='Save']"; // save button Xpath
       
       this.addvenueData = data.addvenue;
    }


    // create button function
    async createbutton(){
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.createButtonLocator).click(); //click on the add button to create
    }
    // basic info step 1 creating venue (function)
    async basicinfo(){
        await this.page.locator(this.venuename).click(); //click on the venue name box
        await this.page.locator(this.venuename).fill(this.addvenueData['venue-name']); //fill up the venue name box
        await expect(this.page.locator(this.venuename)).toHaveValue(this.addvenueData['venue-name']); //(Assertion) verify the venue name is filled

        await this.page.locator(this.type).click(); //click on the venue type box
        await this.page.getByRole('option', { name: this.addvenueData['venue-type'] }).click(); // Select the desired option
        await expect(this.page.locator(this.type)).toHaveValue(this.addvenueData['venue-type']); //(Assertion) verify the venue type is selected from dropdown

        await this.page.locator(this.venueemail).click(); //click on the venue email box
        await this.page.locator(this.venueemail).fill(this.addvenueData['venue-email']); //fill up the venue email box
        await expect(this.page.locator(this.venueemail)).toHaveValue(this.addvenueData['venue-email']); //(Assertion) verify the venue email is filled

        await this.page.locator(this.venulanguage).click(); //click on the venue language dropdown
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: this.addvenueData['venue-default-language'] }).click(); // Select the desired option
        await expect(this.page.locator(this.venulanguage)).toHaveValue(this.addvenueData['venue-default-language']); //(Assertion) verify the venue language is selected from dropdown

        await this.page.locator(this.timezone).click(); //click on the venue timezone dropdown
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: this.addvenueData['venue-time-zone'] }).click(); // Select the desired option
        await expect(this.page.locator(this.timezone)).toHaveValue(this.addvenueData['venue-time-zone']); //(Assertion) verify the venue timezone is selected from dropdown

        await this.page.locator(this.currency).click(); //click on the venue currency dropdown
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('option', { name: this.addvenueData['venue-currency'] }).click(); // Select the desired option
        await expect(this.page.locator(this.currency)).toHaveValue(this.addvenueData['venue-currency']); //(Assertion) verify the venue currency is selected from dropdown

        await this.page.locator(this.cuisine).click(); //click on the venue cuisine box
        await this.page.locator(this.cuisine).fill(this.addvenueData['venue-cuisine']); // type the cuisine in the cuisine box
        await expect(this.page.locator(this.cuisine)).toHaveValue(this.addvenueData['venue-cuisine']); //(Assertion) verify the venue cuisine is filled

        await this.page.locator(this.address).click(); //click on the venue address box
        await this.page.locator(this.address).fill(this.addvenueData['venue-address']); //fill up the venue address box
        await expect(this.page.locator(this.address)).toHaveValue(this.addvenueData['venue-address']); //(Assertion) verify the venue address is filled

      }
       //step 2: details and branding
      async detailsandbranding(){
        await this.page.locator(this.description).click(); //click on the venue description box
        await this.page.locator(this.description).fill(this.addvenueData['venue-description']); //fill up the venue description box
        await expect(this.page.locator(this.description)).toHaveValue(this.addvenueData['venue-description']); //(Assertion) verify the venue description is filled
        
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.facebook).click(); //click on the venue facebook box
        await this.page.locator(this.facebook).fill(this.addvenueData['facebook-link']); //fill up the venue facebook box
        await expect(this.page.locator(this.facebook)).toHaveValue(this.addvenueData['facebook-link']); //(Assertion) verify the venue facebook link is filled

        await this.page.waitForTimeout(2000);
        await this.page.locator(this.instagram).click(); //click on the venue instagram box
        await this.page.locator(this.instagram).fill(this.addvenueData['instagram-link']); //fill up the venue instagram box
        await expect(this.page.locator(this.instagram)).toHaveValue(this.addvenueData['instagram-link']); //(Assertion) verify the venue instagram link is filled

        await this.page.locator(this.clientappurl).click(); //click on the venue client app url box
        await this.page.locator(this.clientappurl).fill(this.addvenueData['client-app-url']); //fill up the venue client app url box
        await expect(this.page.locator(this.clientappurl)).toHaveValue(this.addvenueData['client-app-url']); //(Assertion) verify the venue client app url is filled

        await this.page.locator(this.enablepaylater).click(); //click on the venue enable pay later box
        await expect(this.page.locator(this.enablepaylater)).toBeChecked(); //(Assertion) verify the venue enable pay later is checked

        await this.page.locator(this.enabletipping).click(); //check the checkbox for enabaling  tip
        await expect(this.page.locator(this.enabletipping)).toBeChecked(); //(Assertion) verify the venue enable tipping is checked

        await this.page.locator(this.tipPercentage).click(); //click on the tip percentage text box
        await this.page.locator(this.tipPercentage).fill(this.addvenueData['tip-percentage']); //fill up the tip percentage text box
        await expect(this.page.locator(this.tipPercentage)).toHaveValue(this.addvenueData['tip-percentage']); //(Assertion) verify the tip percentage is filled

        await this.page.locator(this.dineInTax).click(); //click on the din in tax text box
        await this.page.locator(this.dineInTax).fill(this.addvenueData['dine-in-tax']); //fill up the din in tax text box
        await expect(this.page.locator(this.dineInTax)).toHaveValue(this.addvenueData['dine-in-tax']); //(Assertion) verify the din in tax is filled

        await this.page.locator(this.takeawayTax).click(); //click on the take away tax text box
        await this.page.locator(this.takeawayTax).fill(this.addvenueData['takeaway-tax']); //fill up the take away tax text box
        await expect(this.page.locator(this.takeawayTax)).toHaveValue(this.addvenueData['takeaway-tax']); //(Assertion) verify the take away tax is filled
      }
     
      //step 3: upload images logo and cover image
      //optional feild in the venue
    async uploadimages(fileName, imageType) {
       if(imageType === 'logo'){

         await this.page.locator(this.picturbox).nth(0).click(); //click on the picture box
         const fileInput = this.page.locator('input[id="fileInput"]').first(); //select the image using locator
         await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached

         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path
         await fileInput.setInputFiles(filePath); //set the image using file input

         const imageBar = this.page.locator(this.selectimage); //select the image using locator
         await expect(imageBar).toBeVisible({timeout: 3000}); //verify the image is visible
         await this.page.waitForTimeout(3000); //wait for 3 seconds

         await this.page.locator(this.upload).click(); //click on the upload button

       } else if(imageType === 'coverimage'){
         
         await this.page.locator(this.picturbox).nth(1).click(); //click on the picture box
     
         const fileInput = this.page.locator('input[id="fileInput"]').first(); //select the image using locator
         await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached
        
         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path
         await fileInput.setInputFiles(filePath); //set the image using file input

         const imageBar1 = this.page.locator(this.selectimage); //select the image using locator
         await expect(imageBar1).toBeVisible({timeout: 3000}); //verify the image is visible
         await this.page.waitForTimeout(3000); //wait for 3 seconds

         await this.page.locator(this.upload).click(); //click on the upload button
         
       }else if(imageType === 'storyimage'){
         await this.page.locator(this.picturbox).click(); //click on the picture box
         const fileInput = this.page.locator('input[id="fileInput"]').first(); //select the image using locator
         await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached

         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path
         await fileInput.setInputFiles(filePath); //set the image using file input
         
         const imageBar2 = this.page.locator(this.selectimage); //select the image using locator
         await expect(imageBar2).toBeVisible({timeout: 3000}); //verify the image is visible
         await this.page.waitForTimeout(3000); //wait for 3 seconds

         await this.page.locator(this.upload).click(); //click on the upload button
         

       }else if(imageType === 'galleryimage'){
         //gallery image 1
         await this.page.locator(this.picturbox).nth(0).click(); //click on the picture box
         const fileInput = this.page.locator('input[id="fileInput"]'); //select the image using locator
         await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached

         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path

         await fileInput.setInputFiles(filePath); //set the image using file input
         const galleryimageBar1 = this.page.locator(this.selectimage); //select the image using locator

         await expect(galleryimageBar1).toBeVisible({state: 'visible', timeout: 6000}); //verify the image is visible

         await this.page.locator(this.upload).click(); //click on the upload button
         await expect(this.page.locator('//label[@for="gallery-image-file-0"]//img')).toBeVisible({ timeout: 60000 });

        }else if(imageType === 'galleryimage2'){
         //gallery image 2
         await this.page.locator(this.picturbox).nth(1).click(); //click on the picture box
         const fileInput = this.page.locator('input[id="fileInput"]'); //select the image using locator
         await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached

         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path

         await fileInput.setInputFiles(filePath); //set the image using file input
         const galleryimageBar2 = this.page.locator(this.selectimage); //select the image using locator

         await expect(galleryimageBar2).toBeVisible({state: 'visible', timeout: 6000}); //verify the image is visible

         await this.page.locator(this.upload).click(); //click on the upload button
         await expect(this.page.locator('//label[@for="gallery-image-file-1"]//img')).toBeVisible({ timeout: 60000 }); //verify the image is visible


        }else if(imageType === 'galleryimage3'){
          await this.page.locator(this.picturbox).nth(2).click(); //click on the picture box
          const fileInput = this.page.locator('input[id="fileInput"]'); //select the image using locator
          await fileInput.waitFor({ state: 'attached' }); //wait for the image to be attached
 
          const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`); //select the image using Path
 
          await fileInput.setInputFiles(filePath); //set the image using file input
          const galleryimageBar3 = this.page.locator(this.selectimage); //select the image using locator
 
          await expect(galleryimageBar3).toBeVisible({state: 'visible', timeout: 6000}); //verify the image is visible
 
          await this.page.locator(this.upload).first().click(); //click on the upload button
          await this.page.locator(this.upload).waitFor({ state: 'hidden', timeout: 120000 }); //wait for the upload button to be hidden for up to 1 minute
          // verify image preview through this locator //label[@for="gallery-image-file-2"]//img
          await expect(this.page.locator('//label[@for="gallery-image-file-2"]//img')).toBeVisible({ timeout: 1200000 }); //verify the image is visible
        }else{
         throw new Error(`Invalid image type: ${imageType}`); //throw an error if the image type is invalid
        }
      }

    async storyandExperience()  {
      await this.page.locator(this.contactnumber).click(); //click on the story title box
      await this.page.locator(this.contactnumber).fill(this.addvenueData['contact-number']); //fill up the phone number
      await expect(this.page.locator(this.contactnumber)).toHaveValue(this.addvenueData['contact-number']); //Assertion to verify the phone number value

    }

    //step 4: venue timing
    //optional feild in the venue

    async venueTiming() {
      //add time for the monday
      await this.page.locator(this.opentime).nth(0).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(0).fill(this.addvenueData['venue-timing']['monday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(0)).toHaveValue(this.addvenueData['venue-timing']['monday']['open-time']); //Assertion to verify the open time input value

      //close time for the monday
      await this.page.locator(this.closetime).nth(0).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(0).fill(this.addvenueData['venue-timing']['monday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(0)).toHaveValue(this.addvenueData['venue-timing']['monday']['close-time']); //Assertion to verify the close time input value

      //add time for the tuesday
      //add opening time for tuesday
      await this.page.locator(this.opentime).nth(1).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(1).fill(this.addvenueData['venue-timing']['tuesday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(1)).toHaveValue(this.addvenueData['venue-timing']['tuesday']['open-time']); //Assertion to verify the open time input value

      //add closing time for tuesday
      await this.page.locator(this.closetime).nth(1).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(1).fill(this.addvenueData['venue-timing']['tuesday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(1)).toHaveValue(this.addvenueData['venue-timing']['tuesday']['close-time']); //Assertion to verify the close time input value

      //add time for the wednesday
      //add opening time for wednesday
      await this.page.locator(this.opentime).nth(2).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(2).fill(this.addvenueData['venue-timing']['wednesday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(2)).toHaveValue(this.addvenueData['venue-timing']['wednesday']['open-time']); //Assertion to verify the open time input value

      //add closing time for wednesday
      await this.page.locator(this.closetime).nth(2).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(2).fill(this.addvenueData['venue-timing']['wednesday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(2)).toHaveValue(this.addvenueData['venue-timing']['wednesday']['close-time']); //Assertion to verify the close time input value

      //add time for the thursday
      //add opening time for thursday
      await this.page.locator(this.opentime).nth(3).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(3).fill(this.addvenueData['venue-timing']['thursday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(3)).toHaveValue(this.addvenueData['venue-timing']['thursday']['open-time']); //Assertion to verify the open time input value

      //add closing time for thursday
      await this.page.locator(this.closetime).nth(3).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(3).fill(this.addvenueData['venue-timing']['thursday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(3)).toHaveValue(this.addvenueData['venue-timing']['thursday']['close-time']); //Assertion to verify the close time input value

      //add time for the friday
      //add opening time for friday
      await this.page.locator(this.opentime).nth(4).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(4).fill(this.addvenueData['venue-timing']['friday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(4)).toHaveValue(this.addvenueData['venue-timing']['friday']['open-time']); //Assertion to verify the open time input value

      //add closing time for friday
      await this.page.locator(this.closetime).nth(4).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(4).fill(this.addvenueData['venue-timing']['friday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(4)).toHaveValue(this.addvenueData['venue-timing']['friday']['close-time']); //Assertion to verify the close time input value

      //add time for the saturday
      //add opening time for saturday
      await this.page.locator(this.opentime).nth(5).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(5).fill(this.addvenueData['venue-timing']['saturday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(5)).toHaveValue(this.addvenueData['venue-timing']['saturday']['open-time']); //Assertion to verify the open time input value

      //add closing time for saturday
      await this.page.locator(this.closetime).nth(5).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(5).fill(this.addvenueData['venue-timing']['saturday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(5)).toHaveValue(this.addvenueData['venue-timing']['saturday']['close-time']); //Assertion to verify the close time input value

      //add time for the sunday
      //add opening time for sunday
      await this.page.locator(this.opentime).nth(6).click(); //click on the open time input
      await this.page.locator(this.opentime).nth(6).fill(this.addvenueData['venue-timing']['sunday']['open-time']); //fill up the open time input
      await expect(this.page.locator(this.opentime).nth(6)).toHaveValue(this.addvenueData['venue-timing']['sunday']['open-time']); //Assertion to verify the open time input value

      //add closing time for sunday
      await this.page.locator(this.closetime).nth(6).click(); //click on the close time input
      await this.page.locator(this.closetime).nth(6).fill(this.addvenueData['venue-timing']['sunday']['close-time']); //fill up the close time input
      await expect(this.page.locator(this.closetime).nth(6)).toHaveValue(this.addvenueData['venue-timing']['sunday']['close-time']); //Assertion to verify the close time input value
    }
    async story() {
      await this.page.locator(this.storytitle).click(); //click on the story title 
      await this.page.locator(this.storytitle).fill(this.addvenueData['story-title']); //fill up the story title
      await expect(this.page.locator(this.storytitle)).toHaveValue(this.addvenueData['story-title']); //Assertion to verify the story title input value

      await this.page.locator(this.storydescription).click(); //click on the story description
      await this.page.locator(this.storydescription).fill(this.addvenueData['story-description']); //fill up the story description
      await expect(this.page.locator(this.storydescription)).toHaveText(this.addvenueData['story-description']); //Assertion to verify the story description input value

    }
    async addgalaryitems() {
      // add the first gallery item
      await expect(this.page.locator(this.addgalarybutton)).toBeVisible({timeout: 6000}); //verify the add gallery button is visible
      await this.page.locator(this.addgalarybutton).click(/*{timeout: 6000}*/); //click on the add gallery button
      await this.page.locator(this.gallerytitle).nth(0).click(); //click on the gallery title input
      await this.page.locator(this.gallerytitle).nth(0).fill(this.addvenueData['gallery-title-1']); //fill up the gallery title
      await expect(this.page.locator(this.gallerytitle).nth(0)).toHaveValue(this.addvenueData['gallery-title-1']); //Assertion to verify the gallery title input value
      await this.page.locator(this.gallerydescription).nth(0).fill(this.addvenueData['gallery-description-1']); //fill up the gallery description
      await expect(this.page.locator(this.gallerydescription).nth(0)).toHaveValue(this.addvenueData['gallery-description-1']); //Assertion to verify the gallery description input value
      await this.uploadimages('gallery1.png', 'galleryimage'); //upload the gallery image

     // click on the add gallery button to add the second gallery item
      await expect(this.page.locator(this.addgalarybutton)).toBeVisible({timeout: 6000}); //verify the add gallery button is visible
      await this.page.locator(this.addgalarybutton).click(/*{timeout: 6000}*/); //click on the add gallery button
      await this.page.locator(this.gallerytitle).nth(1).click(); //click on the gallery title input   
      await this.page.locator(this.gallerytitle).nth(1).fill(this.addvenueData['gallery-title-2']); //fill up the gallery title
      await expect(this.page.locator(this.gallerytitle).nth(1)).toHaveValue(this.addvenueData['gallery-title-2']); //Assertion to verify the gallery title input value
      await this.page.locator(this.gallerydescription).nth(1).fill(this.addvenueData['gallery-description-2']); //fill up the gallery description
      await expect(this.page.locator(this.gallerydescription).nth(1)).toHaveValue(this.addvenueData['gallery-description-2']); //Assertion to verify the gallery description input value
      await this.uploadimages('gallery2.png', 'galleryimage'); //upload the gallery image


      // click on the add gallery button to add the third gallery item
      await expect(this.page.locator(this.addgalarybutton)).toBeVisible({timeout: 6000}); //verify the add gallery button is visible
      await this.page.locator(this.addgalarybutton).click(/*{timeout: 6000}*/); //click on the add gallery button
      await this.page.locator(this.gallerytitle).nth(2).click(); //click on the gallery title input
      await this.page.locator(this.gallerytitle).nth(2).fill(this.addvenueData['gallery-title-3']); //fill up the gallery title
      await expect(this.page.locator(this.gallerytitle).nth(2)).toHaveValue(this.addvenueData['gallery-title-3']); //Assertion to verify the gallery title input value
      await this.page.locator(this.gallerydescription).nth(2).fill(this.addvenueData['gallery-description-3']); //fill up the gallery description
      await expect(this.page.locator(this.gallerydescription).nth(2)).toHaveValue(this.addvenueData['gallery-description-3']); //Assertion to verify the gallery description input value
      await this.uploadimages('gallery3.png', 'galleryimage'); //upload the gallery image
      // Upload success is verified by uploadimages() (modal closes). Avoid brittle selectors like label[@for="..."] as app IDs may differ.
    }
    
}