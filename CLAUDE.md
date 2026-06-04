# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server on port 3001
npm run build      # Production build
npm test           # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

ESLint and Prettier run automatically via lint-staged on commit. To run manually:
```bash
npx eslint --fix --ext .ts,.tsx src/
npx prettier --write src/
```

## Architecture

**Stack:** React 18, TypeScript, Redux Toolkit, React Router v6, styled-components, Ant Design 4, react-final-form, Axios.

**Module resolution:** `baseUrl` is `./src`, so all imports are absolute from `src/` (e.g., `import Button from 'components/Button'`).

### Routing
Routes are defined in [src/constants/routes.ts](src/constants/routes.ts) and wired to page components in [src/constants/routeComponents.tsx](src/constants/routeComponents.tsx). `RouteContainer` ([src/common/RouterContainer.tsx](src/common/RouterContainer.tsx)) wraps each page to set `document.title`. All routes are nested under a single `LayoutContainer` that renders `Header`, `Footer`, and an `<Outlet>`.

### State (Redux)
Single slice `app` ([src/store/app/reducer.ts](src/store/app/reducer.ts)) stores:
- `deviceType` — populated by the `useDeviceType` hook (dispatched on every resize, debounced 150ms).
- `contactFormData` — contact form submission data.
- `bybitTokensData` — Bybit market data fetched via API.

The store is configured with a DI container passed as `thunk.extraArgument` (see [src/store/config.ts](src/store/config.ts)).

### Data / API layer
`src/infrastructure/common/apiService.ts` — central Axios wrapper with `ApiType` enum (`Offers`, `Telegram`, `Bybit`) that selects the base URL. `GATEWAY_BASE()` in [src/infrastructure/common/config.service.ts](src/infrastructure/common/config.service.ts) reads from env vars.

`src/infrastructure/repository/AppRepository.ts` — repository with two methods:
- `sentContactFormToTelegramBot` — sends contact form data to multiple Telegram chat IDs.
- `getBybitTokens` — fetches Bybit linear perpetual instruments.

The repository is injected into Redux thunks via `src/app/index.ts` → `apiContainerBuilder`.

### Styling
- **styled-components** is the primary styling approach — each component typically has a companion `*.styles.ts` file.
- Design tokens are in `src/styles/configs/` (breakpoints, colors, offsets, typography, variables) and re-exported from `src/styles/configs/index.ts`.
- Breakpoints: mobile `< 768px`, tablet `768–1199px`, desktop `≥ 1200px`.
- Custom fonts: GT-America (compressed/condensed/expanded/standard variants) and Roboto, loaded via `src/styles/fonts/fonts.css`.
- Max content width is `1168px`, horizontal padding `32px`, vertical padding `100px` (set in `Layout.tsx`).

### Responsive / device detection
`useDeviceType` hook ([src/hooks/useDeviceType.tsx](src/hooks/useDeviceType.tsx)) detects device type via UA string + viewport width and writes to Redux. Components read `store.app.deviceType` to conditionally render mobile vs. desktop layouts.

### Code style
- Prettier: single quotes, 2-space indent, 80 char print width, trailing commas, semicolons.
- `@typescript-eslint/no-explicit-any` is disabled — `any` is widely used.
- Max line length: 120 chars (ESLint), 80 chars (Prettier — Prettier wins on format).

### Environment variables
Prefixed with `REACT_APP_`. Key vars: `REACT_APP_ENV`, `REACT_APP_DEVELOPMENT_DOMAIN`, `REACT_APP_PROTOCOL`. See [.env.development](.env.development) for the full list.
