const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  
  await page.goto('https://login.microsoftonline.com/common/oauth2/authorize?client_id=c9a559d2-7aab-4f13-a6ed-e7e9c52aec87&resource=c9a559d2-7aab-4f13-a6ed-e7e9c52aec87&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DeyJ2ZXJzaW9uIjoxLCJkYXRhIjp7IklkZW50aXR5UHJvdmlkZXIiOiJBWjlIZFZLaERSNjBrY1I5XzZ1Q2dxVDNBbnlwaDVmWnF0ZnU5d2Y4NVVuNmJMRnFlRkVKYnJTQVp0VUVrMm1KNWVvYUpVdUZ0SkxsUlFrMGVzaXh6VXMiLCIucmVkaXJlY3QiOiJodHRwczovL2Zvcm1zLm9mZmljZS5jb20vUGFnZXMvUmVzcG9uc2VQYWdlLmFzcHg_aWQ9VXVBUXZCeXdTVWlaWi01LXgwX0oySlhvRXN1eDE1eEpoMHhEUDFDMEN1eFVRa1l6VkZsRFdGTlFORWt4TURKYVVsaGFOalF3V0ZKTldTNHUmc2lkPWZlMjQ2MTA2LWQyODQtNGNmMy05YjRmLThlMDM5OWJiOGE3OCJ9fQ&response_mode=form_post&nonce=637819415350014277.OWFjMjFkMTItZTI4OC00Y2MwLTg5OTUtOTMyZjk5ODc0YmEwMDlkM2RmOTItMjg3Ny00MGFmLWEzYWItNGNiZmE0Y2NiNDA2&redirect_uri=https%3A%2F%2Fforms.office.com%2Flanding&msafed=0&x-client-SKU=ID_NET472&x-client-ver=6.14.1.0');

  const USERNAME_SELECTOR = '#i0116';
  const PASSWORD_SELECTOR = '#i0118';
  const BUTTON_SELECTOR = '#idSIButton9';
  const SUBMIT_BUTTON = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-navigation-container > div.office-form-button-container > button > div';
  const CIRCLE_SELECTOR1 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(1) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > input[type=radio]';
  const CIRCLE_SELECTOR2 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(2) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > input[type=radio]';
  const CIRCLE_SELECTOR3 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > input[type=radio]';
  const CIRCLE_SELECTOR4 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(4) > div > div.office-form-question-element > div > div:nth-child(3) > div > label > input[type=radio]';
  const CIRCLE_SELECTOR5 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(5) > div > div.office-form-question-element > div > div:nth-child(4) > div > label > input[type=radio]';
  const CIRCLE_SELECTOR6 = '#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div:nth-child(2) > div > label > input[type=radio]';
  
  
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
	
  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation({ waitUntil: 'networkidle0' });  

  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  await page.click(CIRCLE_SELECTOR1);
  await page.click(CIRCLE_SELECTOR2);
  await page.click(CIRCLE_SELECTOR3);
  await page.click(CIRCLE_SELECTOR4);
  await page.click(CIRCLE_SELECTOR5);
  await page.click(CIRCLE_SELECTOR6);
  
  await page.click(SUBMIT_BUTTON);
  
  
  browser.close();
}

run();