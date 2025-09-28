const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());

      config.env = config.env || {};
      //config.env.TAGS = config.env.TAGS || "@only"; // <-- descomente para executar apenas os cenários com a tag @only

      return config;
    },
  },
});
