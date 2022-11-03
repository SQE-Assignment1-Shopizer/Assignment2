const { I } = inject();
// Add in your custom step files

Given('I am on products page', () => {
  // TODO: replace with your own step
I.amOnPage('https://demo.reactstorefront.io/s/1');
I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]/*[1]");
I.click("//span[contains(text(),'LG')]");
I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/span[1]/input[1]");


});

When('I click on clear all button', () => {
  // TODO: replace with your own step
  I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]");
});

Then('I dont see clear all button', () => {
  // TODO: replace with your own step
  I.dontSee("//button[contains(text(),'clear all')]");
});
