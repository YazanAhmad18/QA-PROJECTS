const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity:false,
    specPattern: "./cypress/intergration/examples/test1.spec.js"
  },
 
});
