//Add to Cart
const { I } = inject();

Given('I am on {string} details page',(product)  => {
 
I.amOnPage(product);


});

Given('I select {string}',(color)  => {
  
  if(color != '')
    {
      I.click(color);
    }


});

Given('I select {string}',(size)  => {
  
  if(size != '')
    {
      I.click(size);
    }
 
  
  });

  Given('I select {string}',(quantity)  => {

    if(quantity != '')
    {
      I.click(quantity);
    }
    
    
    });
  
When('I click on Add to Cart Button', () => {
  
  I.click("//body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[4]/button[1]"); 
});

Then('a message should be displayed', () => {
  I.wait(5);
  I.see('Item added to cart');
});