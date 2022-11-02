Feature: Add to Cart
  In order to add product to cart
  if clicked the product is added to cart

@TableParameterization
Scenario Outline: Add to Cart
  

    Given I am on "<product>" details page
    Given I select "<color>"  
    Given I select "<size>"
    Given I select "<quantity>"
    When I click on Add to Cart Button
    Then a message should be displayed

    Examples:
      | product | color | size | quantity |
      | https://demo.reactstorefront.io/p/1 | //body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]/div[1] | //body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[2]/button[1] | |
      | https://demo.reactstorefront.io/p/2 | //body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/button[1] | //body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1] | //body[1]/div[1]/main[1]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/button[2] |
      | https://demo.reactstorefront.io/p/2 | | | |
    
