
Feature('RemovefromCart');

Feature('RemoveFilter');

Scenario('test something', ({ I }) => {
I.amOnPage('https://demo.reactstorefront.io/s/1');
I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]/*[1]");
I.click("//span[contains(text(),'LG')]");
I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/span[1]/input[1]");
I.click("//body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]");

});

