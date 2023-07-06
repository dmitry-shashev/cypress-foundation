const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on(
    'file:preprocessor',
    browserify.default(config, {
      typescript: require.resolve('typescript'),
    })
  )
  return config
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://some-site.com',
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
})
