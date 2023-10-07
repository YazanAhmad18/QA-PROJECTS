const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      
    
    },

  
    chromeWebSecurity:false,
 
    specPattern:["./cypress/integration/examples/standard_user.js","cypress/integration/examples/problem_user.js","./cypress/integration/examples/locked_out_user.js"]
  },
  
});
