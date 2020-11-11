@selenium
Feature: selelium test

  Scenario: As a search engine I want to enter a search term
    Given I use search engine url "http://www.duckduckgo.com"
    And I enter the search term "hello world"
    When I select the search button
	Then a search result will be returned
 
	