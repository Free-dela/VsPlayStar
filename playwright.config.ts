import { defineConfig, devices } from '@playwright/test';
// import allure from 'allure-playwright';

export default defineConfig({    // ['allure', { outputFolder: 'allure-results' }]  // Allure reporter with output folder

  workers: process.env.CI ? 2 : undefined,
  testDir: 'Star', // Directory where test files are located
  timeout: 160000, // Global test timeout (30 seconds)
  retries: 1,   
  reporter: [
    ['html'], 
    ['allure-playwright'],  // Add allure reporter
    ['dot']            // HTML reporter
  ],
  use: {
    headless: false, // Run tests in headless mode (false = launch browser UI)
    trace: 'on', // Enable tracing for failed tests
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
