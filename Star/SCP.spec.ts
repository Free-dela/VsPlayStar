import { test, expect } from '@playwright/test';
import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const askQuestion = (question) => {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer); // Resolve with the user's input
//     });
//   });
// };
test('SCP', async ({ page }) => {
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  await page.locator('#mat-input-10').type('25');
  await page.locator('#mat-input-11').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).fill('600011');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#mat-select-value-5').getByText('(+5 others)').click();
  await page.getByText('Star Health', { exact: true }).click();
  await page.getByRole('button', { name: '₹ 13280/Yr' }).first().click();
  await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name' }).type('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).type('AA');
  await page.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
  await page.getByText('PROFESSIONAL-ENGINEER').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Email ID' }).fill('freedela0912@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).type('8531913069');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');

  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
  await page.waitForTimeout(5000);
  await page.locator('#mat-select-value-33').click();
  await page.waitForSelector('mat-option:has-text("Chennai")'); 
  await page.getByText('Chennai').click();
  await page.waitForTimeout(3000);
  await page.locator('#mat-select-value-35').click();
  await page.waitForTimeout(3000);
  await page.getByText('K Block Pattalam').click();
 
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();

  await page.locator('#mat-radio-100 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByRole('textbox', { name: 'PAN Number' }).type('gjkpm0846p');
  await page.getByRole('button', { name: 'Submit' }).click();
 
  const fileInput = await page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('C:/Users/Tecdata/Desktop/IntegrationScripts/Arunkumar.jpg');

  const fileInput1 = await page.locator('input[type="file"]').nth(1);
  await fileInput1.setInputFiles('C:/Users/Tecdata/Desktop/IntegrationScripts/Arunkumar.jpg');

  const fileInput2 = await page.locator('input[type="file"]').nth(2);
  await fileInput2.setInputFiles('C:/Users/Tecdata/Desktop/IntegrationScripts/Arunkumar.jpg');

  await page.locator('span.mat-button-wrapper:has-text("Submit")').click();


  await page.locator('#mat-checkbox-12 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
  await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');

  await page.locator('#mat-radio-30 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByRole('button', { name: '1.INSURED DETAILS' }).click();
  await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();

  await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test aa');
  await page.getByLabel('2.INSURED DETAILS').locator('div').filter({ hasText: /^DOB \(DD\/MM\/YYYY\) \*$/ }).nth(3).click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09/12/1999');
  await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
  await page.getByText(' Female ', { exact: true }).click();
  
  await page.getByRole('textbox', { name: 'Height(cms)' }).fill('160');
  await page.getByRole('textbox', { name: 'Weight(kgs)' }).fill('60');

  await page.locator('#mat-select-value-57').click();  
  await page.waitForSelector('mat-option:has-text("HOUSEWIVES")');
  await page.getByText('HOUSEWIVES').click();
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('SPOUSE', { exact: true }).click();
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(1).click();

  await page.locator('#mat-input-64').type('Nominee');
  await page.locator('#mat-input-65').type('25');
  await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
  await page.getByText('Brother', { exact: true }).click();
  await page.locator('#mat-input-66').fill('100');
  await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000);
  
  await expect(page.getByRole('heading', { name: 'PROPOSER DETAILS' })).toBeVisible({ timeout: 30000 });
  await expect(page.getByLabel('4SUMMARY').locator('label')).toContainText('I hereby declare all the details provided above are correct');
  await page.locator('#mat-checkbox-15 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  
});