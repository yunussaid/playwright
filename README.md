# Playwright QA Automation Framework

## Project Overview
This repository contains an automated testing framework developed for a SaaS environment, focusing on **reliability, scalability and AI-enhanced test coverage**. It uses **Playwright** with **TypeScript** to simulate real-world user workflows on a secure web platform.

## Key Features
* **Page Object Model (POM):** Structured into `pages/` and `tests/` to ensure the framework is maintainable and scalable. Comes in handy when transitioning from manual to automated testing.
* **AI-Driven Edge Case Testing:** Includes a utility (`aiDataGen.ts`) that simulates the use of Large Language Models (LLMs) to generate randomized test data, specifically targeting edge cases that manual testing might miss.
* **Regression Suite:** Covers 'Happy Path' login scenarios and structured failure handling to ensure software stability before release.

## Tech Stack
* **Language:** TypeScript
* **Framework:** Playwright
* **Methodology:** Page Object Model (POM)

## Getting Started
1. **Install dependencies:** ```bash npm install```
2. **Install browsers:** ```npx playwright install```
3. **Run tests:** ```npx playwright test --headed```