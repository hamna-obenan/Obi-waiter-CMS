// add-venue.js
// import { dot } from 'node:test/reporters';
// import { env } from './baseurl'
import { expect } from '@playwright/test';
import data from '../fixtures/data/user1-obiwaiter.json' assert { type: "json" };
import path from 'path';
import { existsSync } from 'fs';
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

        await this.page.locator(this.facebook).click(); //click on the venue facebook box
        await this.page.locator(this.facebook).fill(this.addvenueData['facebook-link']); //fill up the venue facebook box
        await expect(this.page.locator(this.facebook)).toHaveValue(this.addvenueData['facebook-link']); //(Assertion) verify the venue facebook link is filled

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
      //   await this.page.pause();
     }
     
   //step 3: upload images logo and cover image
   async uploadimages(fileName, imageType) {
      if(imageType === 'logo'){

         await this.page.locator(this.picturbox).nth(0).click();
         const fileInput = this.page.locator('input[id="fileInput"]').first();
         await fileInput.waitFor({ state: 'attached' });
        
         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`);
         
         await fileInput.setInputFiles(filePath);
         const imageBar = this.page.locator(this.selectimage);
         await expect(imageBar).toBeVisible({timeout: 3000});
         await this.page.waitForTimeout(3000);
         await this.page.locator(this.upload).click();

      } else if(imageType === 'coverimage'){
         
         await this.page.locator(this.picturbox).nth(1).click();
     
         const fileInput = this.page.locator('input[id="fileInput"]').first();
         await fileInput.waitFor({ state: 'attached' });
        
         const filePath = path.resolve(__dirname, `../fixtures/pictures/${fileName}`);
         await fileInput.setInputFiles(filePath);
         await this.page.locator(this.upload).click();
         await this.page.locator(this.upload).waitFor({ state: 'hidden', timeout: 60000});
         // await expect(this.page.locator(this.upload)).toBeVisible();
         
      }else{
         throw new Error(`Invalid image type: ${imageType}`);
      }
    }

    async storyandExperience()  {
      await this.page.locator(this.contactnumber).click(); //click on the story title box
      await this.page.locator(this.contactnumber).fill(this.addvenueData['contact-number']); //fill up the phone number
      await expect(this.page.locator(this.contactnumber)).toHaveValue(this.addvenueData['contact-number']); //Assertion to verify the phone number value

    }
   

    
}