const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tastedive-api-documentation.readthedocs.io/en/latest/endpoints.html#parameters',
  },
});

