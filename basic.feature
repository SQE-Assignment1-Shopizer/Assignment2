Feature: Show subcategories
  In order to show subcategories
  If I click on a category

@TableParameterization
Scenario Outline: Show subtageories
  
    Given I am on "<page>" page
    When I click "<category>" button
    Then I see its "<subcategory>" category

    Examples:
      | page | category | subcategory |
      | https://demo.reactstorefront.io/ | //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[1]|Subcategory 1|
      | https://demo.reactstorefront.io/ | //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[2]|Subcategory 2|
      | https://demo.reactstorefront.io/ | //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[3]|Subcategory 3|
      | https://demo.reactstorefront.io/s/1 | //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[2]/span[1]|Subcategory 2|
      | https://demo.reactstorefront.io/cart | //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[1]/span[1]|Subcategory 1|
      | https://demo.reactstorefront.io/p/1| //body/div[@id='__next']/div[3]/div[1]/div[1]/div[3]/div[1]/a[1]/span[1]|Subcategory 1|

    

    
