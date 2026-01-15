import { test, expect } from '@playwright/test'; // import signupLocators from '../../fixture/locators/signup-locators.json' assert { type: "json" };
import data from '../../fixtures/data/user1-obiwaiter.json'; //import the data for feild fill up
import { signupPage } from '../../object-page/index'; // import { waitForDebugger } from 'node:inspector';

// ============================  Fixtures data ============================
const loginData = data.login;
const signupData = data.signup;
test('Sign up', async ({ page }) => {

    const signupPageClass = new signupPage(page)

    //step 1: go to the URL 
    await signupPageClass.goto();

    // step 2: Sign in button click to signin button on the top
    await signupPageClass.clicksignin();

    //step 3:  click on the create new account sign in button
    await page.click(signupPageClass.signupbutton);

    //step 4: enter first name in the signup form
    await page.locator(signupPageClass.firstname).click();
    await page.locator(signupPageClass.firstname).fill(signupData.firstname); // fillup first name
    await expect(page.locator(signupPageClass.firstname)).toHaveValue(signupData.firstname); // assertion to verify the field has text


    //step 5: enter last name in the signup form
    await page.locator(signupPageClass.lastname).click();
    await page.locator(signupPageClass.lastname).fill(signupData.lastname); //fill up last name
    await expect(page.locator(signupPageClass.lastname)).toHaveValue(signupData.lastname); // assertion to verify the field has text


    //step 6: Enter Email 
    await signupPageClass.enterEmail(loginData.email);
    
    // step 7: enter company name in signup form
    await page.locator(signupPageClass.companyname).click(); //click on the company feild 
    await page.locator(signupPageClass.companyname).fill(signupData.company); // fill up the company name
    await expect(page.locator(signupPageClass.companyname)).toHaveValue(signupData.company); // assertion to verify the field has text

    //step 8: enter password
    await signupPageClass.enterpassword(loginData.password);

    //step 9: confirm password feild
    await page.locator(signupPageClass.confirmpassword).click(); //click on the confirm password feild
    await page.locator(signupPageClass.confirmpassword).fill(signupData['confirm-password']); // enter confirm answer
    await expect(page.locator(signupPageClass.confirmpassword)).toHaveValue(signupData['confirm-password']); // assertion to verify confirm password field
    await page.locator(signupPageClass.visibltyicon).nth(1).click(); //click to show the passwrod
    await page.locator(signupPageClass.visibltyicon).nth(1).click(); //click again to hide password again

    //step 10: submit the sign up form 
    await signupPageClass.submitform();
    // await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/login'); // Assert user is redirected to the login page URL when we sign up with new email and new company name
    await expect(page).toHaveURL('https://develop.d20aue3nu6xt33.amplifyapp.com/signup'); //assertion for that condition if the company already exist then user is stayed to the signup page
    // Assert the 'Company already Exisit' toast appears

    // await expect(page.getByText("company.COMPANY_ALREADY_EXIST")).toBeVisible(); // toast assertion that verify company already created when we sign in again with the same email and company name

});