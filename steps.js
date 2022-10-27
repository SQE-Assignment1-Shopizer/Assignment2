//ClearAllFilterSteps
const { I } = inject();

Given('I am on {string} category page',(product)  => {
 
I.amOnPage(product);

});

Given('I select {string} filter',(color)  => {
  
I.click(color);
});

When('I click clear all button', () => {
  
  I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]");
});

Then('I dont see clear all button on the filters', () => {
  
  I.dontSee("//button[contains(text(),'clear all')]");
});
