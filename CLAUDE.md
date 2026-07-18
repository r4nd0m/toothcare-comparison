# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`toothcare-comparison` is a client-only Angular 17 single-page app for comparing dental insurance proposals. It computes how much a user would overpay under different insurance providers across a range of missing-teeth counts and visualizes the result as a line chart. There is no backend — all state persists to `localStorage`, and authentication is mocked.

## Commands

```bash
npm start              # ng serve --open (development)
npm run build          # production build with base-href /toothcare-comparison/ (GitHub Pages)
npm run build:amplify  # production build with base-href / (AWS Amplify)
npm run watch          # development build in watch mode

npm test               # unit tests (Jest via Angular builder)
npm run test:watch     # jest --watch
npm run test:coverage  # jest --coverage
npx jest path/to/file.spec.ts   # run a single test file
npx jest -t "test name"         # run tests matching a name

npm run cypress:open   # open Cypress e2e runner
npm run cypress:edge   # run Cypress e2e headless in Edge
```

Note: `ng test` is wired to the `@angular-devkit/build-angular:jest` builder, but a plain `jest.config.js` also exists (preset `jest-preset-angular`, roots in `src`), so `npx jest` works directly and is the way to target single files.

## Architecture

**Standalone components + zoneless.** There are no NgModules. The app bootstraps via `bootstrapApplication` in `src/main.ts` and uses `ɵprovideZonelessChangeDetection()` — change detection is driven entirely by Angular **signals**, not Zone.js. When adding reactive state, use signals; do not rely on Zone-based change detection.

**Routing & lazy loading** (`src/app/app.routes.ts`): three routes — `''` (providers), `/auth`, `/diagram` — each `loadComponent`-lazy-loaded. `''` and `/diagram` have guarded routes commented out (can be uncommented to protect via `authGuardFn`).

**Auth is a mock** (`src/app/auth/auth.service.ts`): `login()` resolves for any credentials *except* the hardcoded `invalid@email` / `invalidpassword` pair, which it rejects to emulate a server error. Login state is a `WritableSignal<boolean>` held in memory only (not persisted), so a page reload logs the user out. `authGuardFn` in `auth.guard.ts` is a factory returning a `CanActivateFn` that redirects to the given URL when logged out.

**DataService is the single source of truth** (`src/app/shared/data.service.ts`): owns providers, the missing-teeth parameters, and the selected theme as signals, and transparently mirrors each to `localStorage` (keys `insuranceProviders`, `missingTeethData`, `selectedTheme`). On first load with no saved providers it seeds a `dummyProviders` list of real German insurers. Components read via the `*Signal()` getters (returning read-only signals) and mutate only through DataService methods — keep this pattern; don't write to `localStorage` from components.

**Calculation** (`src/app/diagram/calculation.service.ts`): pure computation. For each provider and each teeth count in `[teeth_min, teeth_max]`, it sums monthly premiums across all age periods (`price * years * 12`), computes self-paid treatment cost adjusted by `coverage_part` (a percentage), and returns the **overpaid** amount (total paid minus raw treatment cost) as the chart series. Each series gets a random RGB color.

**Domain model** (`src/app/model.ts`): `InsuranceProvider` → many `InsurancePrice` (a `price` for an `InsurancePeriod` of `start`/`end` ages) plus a `coverage_part` percentage. These are classes with optional-arg constructors (used as data holders and rehydrated from JSON). Also defines type aliases: `ProviderCalculationResult`, `ProviderCalculationResultItem`, `MissingTeethData`, `UserCredentials`.

**Theming**: Bootstrap 5 dark mode. `DataService.toggleSelectedTheme()` flips the `Theme` signal; `AppComponent.applyTheme()` writes it to `document.documentElement.dataset.bsTheme`.

**Charts**: `ng2-charts` / Chart.js, registered per-component in `DiagramComponent` via `provideCharts(withDefaultRegisterables())`.

## Conventions

- **`.js` extensions in relative imports**: some files import model/services as `'../model.js'` / `'./to-rgba.pipe.js'` (see `calculation.service.ts`) while most omit the extension. Both resolve; match the surrounding file.
- Source uses **tabs** for indentation (see `.editorconfig`).
- TypeScript is `strict: false`, but Angular template type-checking is strict (`strictTemplates: true`).
- Each component/service/pipe/directive/guard has a colocated `.spec.ts` (Jest). Cypress e2e specs live in `cypress/e2e/` (`authentication`, `calculation_diagram`, `price_management`, `provider_management`).

## Deployment

Two production targets share one build: GitHub Pages (`npm run build`, base-href `/toothcare-comparison/`, live at https://r4nd0m.github.io/toothcare-comparison) and AWS Amplify (`npm run build:amplify`, base-href `/`).
