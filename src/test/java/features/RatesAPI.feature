Feature: Feature to test the Rates API's 

#Sceanrio No. 3
 @ValidateResponse_incorrecturl
 Scenario Outline: User give an incorrect or incomplete url and validate the correct expected response

Given User hit the GET Request with parameters "<param>"
When API is available
Then User validate the response

Examples:
 |param|
 |/api/|
 
 #Sceanrio No. 4
  @SpecificDateStatusValidation
 Scenario Outline: To validate the success status code when user hit the Rates API for Specific date Foreign Exchange rates 

Given User hit the GET Request with parameters "<param>"
When API is available
Then User validate the status of response as "<statusCode>" 

Examples:
 |param|statusCode|
 |/api/2010-01-12|200|
 
 #Sceanrio No. 5
 @ValidateResponseBody
 Scenario Outline: Validate the values of response for Rates API for Specific date Foreign Exchange rates  
 
Given User hit the GET Request with parameters "<param>"
When API is available
Then User validate the values "<baseValue>",66.21,0.8972,"<date>" of response body

Examples:
 |param|baseValue|date|
 |/api/2010-01-12|EUR|2010-01-12|
 
 #Sceanrio No. 6
 @FutureDateValidation
 Scenario Outline: To validate the response matches for the current date when a future date is provided in the url

Given User hit the GET Request with parameters "<param>"
When API is available
Then User validate that the date "date" in response matched with current system date 

Examples:
 |param|
 |/api/2021-01-15|
 
 
 #Sceanrio No. 1
 #Note : This scenrio will fail because getting message as "Requested URL /api/latest HTTP/2 not found"  
 @StatusValidation
Scenario Outline: Validate the success status of Rates API for Latest Foreign Exchange rates 


Given User hit the GET Request with parameters "<param>"
When API is available	
Then User validate the status of response as "<statusCode>"

Examples:
 |param|statusCode|
 |/api/latest HTTP/2|200|
 
 #Sceanrio No. 2
 #Note : This scenrio will fail because getting message as "Requested URL /api/latest HTTP/2 not found"  
 @ValidateResponseForLatestFER
Scenario Outline: Validate the success status of Rates API for Latest Foreign Exchange rates 


Given User hit the GET Request with parameters "<param>"
When API is available	
Then User validate the response

Examples:
 |param|
 |/api/latest HTTP/2|
