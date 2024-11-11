
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('file:preprocessor', cucumber())
    },

    specPattern: ["cypress/**/*cy.{js,ts}", "cypress/**/*.{feature,features}"],
    baseUrl: "http://localhost",
    viewportWidth: 1366,
    viewportHeight: 768
  },

});