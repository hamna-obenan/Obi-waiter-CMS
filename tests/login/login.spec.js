import { test, expect } from '@playwright/test';
// import signupLocators from '../../fixture/locators/signup-locators.json' assert { type: "json" };
import { signupPage } from '../../object-page/index';
import data from '../../fixtures/data/user1-obiwaiter.json';
// import { waitForDebugger } from 'node:inspector';

// ============================  Fixtures data ============================
const loginData = data.login;

test('Login with correct email and password happy flow', async ({ page }) => {
const signupPageClass = new signupPage(page);

//step 1: go to the url 
await signupPageClass.goto();

//step 2: click on the signin button
await signupPageClass.clicksignin();

//step 3 click on the email feild 
await signupPageClass.enterEmail(loginData.email)

//step 4: click on the password feild
await signupPageClass.enterpassword(loginData.password);

//step 5: click on the signup
await signupPageClass.submitform();
})