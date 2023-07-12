import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
  },
  component: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
