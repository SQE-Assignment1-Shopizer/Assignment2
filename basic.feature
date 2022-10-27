Feature: Clear all filters
  In order to remove filters
  if applied then click on clear button

@TableParameterization
Scenario Outline: Clear all Applied Filters
  
    Given I am on "<product>" category page
    Given I select "<color>" filter
    When I click clear all button
    Then I dont see clear all button on the filters

    Examples:
      | product | color | 
      | https://demo.reactstorefront.io/s/1 | //body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]   |
      | https://demo.reactstorefront.io/s/2 | //body/div[@id='__next']/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]/div[1]/*[1]|
