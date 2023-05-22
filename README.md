# E2E Tests with Cypress

This projects automates the add to cart process from [Amazon](https://www.amazon.com/) along with price filtering tests.
***

## Project Tools Used
- **Programming Language:** Javascript
- **Framework and Tools Used:** Cypress (*Version: 12.12.0*), Mochaawesome Reporter
- **IDE:** Visual Studio Code

## Project Structure

1. The project has been implemented following POM (Page Object Model) structure. The page objects are implemented inside the folder **/cypress/pages**.
2. The test classes are implemented inside the folder ***/cypress/e2e***.
3. A *fixture* file is maintained to initialize the test data. The file(s) can be fond in the path: **/cypress/fixtures**.

## Prerequisites

- You need to have the following installations in your machine:
    - NPM
    - NodeJS
    - Any IDE of your choice that supports Javascript
- A browser of your choice to check the HTML report

## Implementation Details

The test steps and corresponding validations are as mentioned below:

Pre-condition Steps |
--- |
1. Search with the text "computers & laptops" 
2. Filter by brand: "ASUS"
3. Apply price range
4. Filter by best sellers 

Test Case | Steps | Validation Points |
--- | --- | --- |
Add to cart | 1. Open product page <br> 2. Add product to cart <br> 3. Open cart | 1. Validate that correct product page has been opened. <br> 2. Validate "added to cart" successful message. <br> 3. Validate product price from cart. <br> 4. Validate total price from cart. |
Validate price range | 1. Get all the displayed product prices from the search result | 1. Validate if the product prices fall within our search range. |
Price filter test for minimum price and maximum price fields | Test with decimal points in min and max fields | 1. Validate that min and max fields are equal to the provided input in the search result page. |
 .. | Test with zero price in min and max fields | 1. Validate that min and max fields are empty in the search result page. |
 .. | Test with blank input in min and max fields | 1. Validate that min and max fields are empty in the search result page. |
 .. | Test with negative prices in min and max fields | 1. Validate that min and max fields are empty in the search result page. |
 .. | Test with minimum price greater than max price | 1. Validate that min and max fields are empty in the search result page. |
 .. | Test with character input in min and max fields | 1. Validate that min and max fields are empty in the search result page. |
 .. | Test with empty value in min and non empty value in max field | 1. Validate that min field is empty and max field contains the provided value. |
 .. | Test with non empty value in min and empty value in max field | 1. Validate that max field is empty and min field contains the provided value. |
 
 ## Project Import

1. Clone the project from GitHub or download the project and unzip it.
2. Open your IDE and import the project.

## How to Run
- To run with *Cypress* GUI, run the command from terminal:

 > npx cypress open
  
  From the GUI, select the browser of your choice and run the file ***e2e_test.cy.js*** and the tests will start to execute.
  
- To run with CLI and in headless mode, run the command from terminal:

> npx cypress run

- To run with CLI in headed mode, run the command from terminal:

> npx cypress run -- headed

## Result Observation:

1. If you run with GUI, you can check the test cases executed there.
2. If you run with CLI in headless mode, the results will be printed in the terminal console.
3. After execution, an HTML report will be generated in the folder: **/cypress/reports**.
4. For CLI execution:
- A test execution video will be saved in the folder: **/cypress/videos**.
- For failed tests, screenshots will be saved in the folder: **/cypress/screenshots**.

## Future Improvements

1. Add more test cases.
2. Test cases have not been written in *BDD* format, we can add any *Gherkin* framework to achieve that.
3. Add project with a CI/CD pipeline.
