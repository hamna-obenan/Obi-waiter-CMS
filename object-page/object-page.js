// loginPage.ts
import { expect, Page } from '@playwright/test';
import { env } from 'node:process';
// import { dot } from 'node:test/reporters';
// import { env } from './baseurl';

export class signupPage {

    constructor(page) {
        //signup form locators

        this.page = page;
        this.firstname= "[placeholder='First name']" //signin page first name locator
        this.lastname= "[name='lastName']" //signin page last name XPath
        this.emailField = '[name="email"]'; // XPath locator
        this.companyname = "[name='company']" // comapny name Xpath
        this.password= "[name='password']" //xpath password feild 
        this.confirmpassword= "[name='confPassword']"// Xpath of confirm password
        this.visibltyicon="(//button[@type='button'])" // Xpath of visibilty the password Eye icon
        this.signinbuttonfirst=  "//div//button[normalize-space()='Sign in']"; //signin Xpath locator
        this.signupbutton= "//a[@href='/signup']//p[normalize-space()='Signup']" //signup button XPath 
        this.signinbutton= "[type='submit']" //submit signup form or login form Xpath
    }


   // cms url

    async goto(url){
        await this.page.goto(url);  // assuming env has a property 'url'
    }

    //function to click signin button

    async clicksignin() {
        await this.page.locator(this.signinbuttonfirst).click({force:true});
    }

    // Function to type email
    async enterEmail(email) {
        await this.page.click(this.emailField, email); //click on the email feild
        await this.page.locator(this.emailField, email).fill('hamna@test.com'); //fill up email feild 
        await expect(this.page.locator(this.emailField)).toHaveValue(/hamna@test.com/); // simple assertion to verify the text   
    }

    //enter password function 
    async enterpassword(password){
        await this.page.locator(this.password, password).click(); //click on the passwrod feild
        await this.page.locator(this.password, password).fill('123456'); //fillup the passworf feild
        await this.page.waitForSelector(`[value="123456"]`); //wait for the password value
        await expect(this.page.locator(this.password, password)).toHaveValue('123456'); //assertion
        await this.page.locator(this.visibltyicon,password).nth(0).click(); //click to show the passwrod
        await this.page.waitForSelector('[name="password"][type="text"]'); //waiting for the visability password
        await this.page.locator(this.visibltyicon,password).nth(0).click(); //click again to hide password again
    }
    async submitform(){
        await expect(this.page.locator(this.signinbutton)).toBeEnabled(); //assertion to verify that the sigin bitton is enable or disable
        await this.page.locator(this.signinbutton).click(); //click on the signin button to submit the sing up form

    }

    async titleCheck(title){
        await this.page.locator(`[title='${title}']`).toBeVisible()
    }
}

