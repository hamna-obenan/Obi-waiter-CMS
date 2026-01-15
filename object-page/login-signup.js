// loginPage.ts
import { expect, Page } from '@playwright/test';
// import { dot } from 'node:test/reporters';
// import { env } from './baseurl';
import data from '../fixtures/data/user1-obiwaiter.json';
export class signupPage {

    constructor(page) {
        //signup form locators

        this.page = page;
        this.firstname= "[placeholder='First name']" //signin page first name locator
        this.lastname= "[name='lastName']" //signin page last name XPath
        this.emailField = "[placeholder='Email']"; // XPath locator
        this.companyname = "[name='company']" // comapny name Xpath
        this.password= "[placeholder='Password']" //xpath password feild 
        this.confirmpassword= "[name='confPassword']"// Xpath of confirm password
        this.visibltyicon="(//button[@type='button'])" // Xpath of visibilty the password Eye icon
        this.signinbuttonfirst=  "//div//button[normalize-space()='Sign in']"; //signin Xpath locator
        this.signupbutton= "//a[@href='/signup']//p[normalize-space()='Signup']" //signup button XPath 
        this.signinbutton= "[type='submit']" //submit signup form or login form Xpath

    //    ============================  Fixtures data ============================
    this.loginData = data.login;
    this.signupData = data.signup;
    this.addvenueData = data.addvenue;
    this.addmenuData = data.addmenu;
    }


   // cms url

    async goto(){
        await this.page.goto('https://develop.d20aue3nu6xt33.amplifyapp.com/venue');  // assuming env has a property 'url'
        await this.page.waitForTimeout(2000);

    }

    //function to click signin button

    async clicksignin() {
        await this.page.locator(this.signinbuttonfirst).click({force:true});
    }

    // Function to type email
    async enterEmail(email) {
        await this.page.locator(this.emailField).click(); //click on the email feild
        await this.page.locator(this.emailField).fill(email); //fill up email feild 
        await expect(this.page.locator(this.emailField)).toHaveValue(email); // simple assertion to verify the text   
    }

    //enter password function 
    async enterpassword(password){
        await this.page.locator(this.password).click(); //click on the passwrod feild
        await this.page.locator(this.password).fill(password); //fillup the passworf feild
        await expect(this.page.locator(this.password)).toHaveValue(password); //assertion
        await this.page.locator(this.visibltyicon).nth(0).click(); //click to show the passwrod
        await this.page.locator(this.visibltyicon).nth(0).click(); //click again to hide password again
    }
    async submitform(){
        await expect(this.page.locator(this.signinbutton)).toBeEnabled(); //assertion to verify that the sigin bitton is enable or disable
        await this.page.locator(this.signinbutton).click(); //click on the signin button to submit the sing up form
        await this.page.waitForTimeout(3000); //wait for the signin button to be clicked
        await expect(this.page).toHaveURL(/https:\/\/develop\.d20aue3nu6xt33\.amplifyapp\.com\/(signup|venue)/); // Assert user is redirected to either the signup or venue page

    }

    //login function to the dash board
    async login(){
        await this.page.locator(this.signinbuttonfirst).click({force:true});
        await this.page.locator(this.emailField).fill('hamna@test.com');
        await this.page.locator(this.password).fill('123456');
        await this.page.locator(this.signinbutton).click();
        await this.page.waitForTimeout(5000);
        await expect(this.page).toHaveURL(/https:\/\/develop\.d20aue3nu6xt33\.amplifyapp\.com\/(signup|venue)/);
        await this.page.waitForTimeout(5000);
    }
}

