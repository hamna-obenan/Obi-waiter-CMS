import { test, expect } from '@playwright/test';
// import signupLocators from '../../fixture/locators/signup-locators.json' assert { type: "json" };
import { signupPage } from '../../object-page/object-page';
// import { waitForDebugger } from 'node:inspector';




test('Sign up', async ({ page }) => {

    const signupPageClass = new signupPage(page)

    //step 1: go to the URL 
    await signupPageClass.goto('https://develop.d20aue3nu6xt33.amplifyapp.com/venue');
    await page.waitForTimeout(2000);
    // step 2: Sign in button click to signin button on the top
    await signupPageClass.clicksignin();

    //step 3:  click on the create new account sign in button
    await page.click(signupPageClass.signupbutton);

    //step 4: enter first name in the signup form
    await page.locator(signupPageClass.firstname).click();
    await page.locator(signupPageClass.firstname).fill('Hamna'); // fillup first name
    await expect(page.locator(signupPageClass.firstname)).toHaveValue('Hamna'); // assertion to verify the field has text
    await page.waitForSelector(`[value="Hamna"]`); ///wait for the verify the name filed filled up


    //step 5: enter last name in the signup form
    await page.locator(signupPageClass.lastname).click();
    await page.locator(signupPageClass.lastname).fill('Noor'); //fill up last name
    await expect(page.locator(signupPageClass.lastname)).toHaveValue('Noor'); // assertion to verify the field has text
    await page.waitForSelector(`[value="Noor"]`); //wait for the last name filed filled up


    //step 6: Enter Email 
    await signupPageClass.enterEmail();
    
    // step 7: enter company name in signup form
    await page.locator(signupPageClass.companyname).click(); //click on the company feild 
    await page.locator(signupPageClass.companyname).fill('Ember'); // fill up the company name
    await expect(page.locator(signupPageClass.companyname)).toHaveValue('Ember'); // assertion to verify the field has text
    await page.waitForSelector(`[value= "Ember"]`); //wait for the company name filled up

    //step 8: enter password
    await signupPageClass.enterpassword();

    //step 9: confirm password feild
    await page.locator(signupPageClass.confirmpassword).click(); //click on the confirm password feild
    await page.locator(signupPageClass.confirmpassword).fill('123456'); // enter confirm answer
    await page.waitForSelector(`[value="123456"]`); //wait to the confirm password value entered
    await expect(page.locator(signupPageClass.confirmpassword)).toHaveValue('123456'); // assertion to verify confirm password field
    await page.locator(signupPageClass.visibltyicon).nth(1).click(); //click to show the passwrod
    await page.waitForSelector('[name="confPassword"][type="text"]'); // assertion for the confirm password visibility (eye icon) 
    await page.locator(signupPageClass.visibltyicon).nth(1).click(); //click again to hide password again

    //step 10: submit the sign up form 
    await signupPageClass.submitform();
    // await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/login'); // Assert user is redirected to the login page URL when we sign up with new email and new company name
    // Assert the 'Company already Exisit' toast appears
    await expect(page.getByText("company.COMPANY_ALREADY_EXIST")).toBeVisible(); // toast assertion that verify company already created when we sign in again with the same email and company name

});