# Automated tests for stage.lokalise.com

UI automated tests are implemented using WebdriverIO (https://webdriver.io/) + Typescript (https://www.typescriptlang.org/) + Cucumber (https://cucumber.io/).

To run the UI automated tests first do npm install then run the npm test command:
```
npm install
npm test
```

To open the report after test execution is completed (make sure you are still in UI directory):
```
npm run allure:report
```

To clear up the report run:
```
rm -rf allure-results/*
```


### Test report
Example of the Allure automated test report for UI tests:

