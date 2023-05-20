const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  env: {
    url: 'https://www.amazon.com/',
  },
  retries: {
    runMode: 1,
  },
  reporter: 'mochawesome',
  "reporterOptions": {
    "html": true,
    "json": true,
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": true 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
