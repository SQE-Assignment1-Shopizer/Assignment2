const { I } = inject();
// Add in your custom step files

Given('I am on {string} page', (page) => {
  // TODO: replace with your own step
  I.amOnPage(page);
});

When('I click {string} button', (category) => {
  I.click(category);
});

Then('I see its {string} category', (subcategory) => {
  
  I.see(subcategory);
});
