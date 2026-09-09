# AGENTS.md

Luvin is a mobile-based bread-themed AI dating simulation app. The core concept is **"Love is all about timing"** — users' romantic tendencies are analyzed and expressed as bread types, and an AI avatar ("분신") that mirrors the user's personality participates in a dating simulation.

This repository is `luvin-frontend-v2` — a fresh Expo SDK 57 rewrite. Most of the app is not implemented yet, so **follow the conventions in this file when creating new files rather than inferring them from the (nearly empty) codebase.**

---

> ## ALWAYS READ FIRST BEFORE STARTING ANY TASK
>
> 1. **Read the Directory Architecture section** in this file before writing any code
> 2. **Read the Figma design** before implementing any UI — do NOT assume or hardcode design values
> 3. **Check `package.json`** for exact dependency versions before installing anything
> 4. **Use `pnpm`** — this project is not npm/yarn/bun based

---

# 1. Platform Principles

- **Target platforms**: iOS and Android
- Ensure identical UX, interface, and behavior on both platforms
- Avoid platform-specific styles or logic that cause visual inconsistencies unless strictly necessary (e.g. SafeArea padding)
- This project uses **native directories (`ios/`, `android/`) with `expo-dev-client`** — not Expo Go
  - Run with `pnpm ios` / `pnpm android` (`expo run:*`), which build the native app
  - `pnpm start` only starts the bundler; it requires an already-installed dev client build
  - Never delete or hand-edit `ios/` and `android/` without confirmation — config belongs in `app.json`

---

# 2. Tech Stack

> Always verify exact versions in `package.json` before use. Do not upgrade packages without confirmation.

| Category         | Library                               | Notes                                            |
| ---------------- | ------------------------------------- | ------------------------------------------------ |
| Framework        | `expo` (SDK 57)                       | Dev client + native projects                     |
| Routing          | `expo-router`                         | File-based routing under `src/app/`              |
| Runtime          | `react-native`, `react`, `typescript` | RN 0.86 / React 19 / TS 6 — check `package.json` |
| Styling          | `nativewind` (NativeWind v4)          | Tailwind CSS v3 compatible                       |
| State Management | `zustand`                             | Global state                                     |
| Async State      | `@tanstack/react-query`               | Data fetching and caching                        |
| Local Storage    | `react-native-mmkv`                   | Persisted key-value storage                      |
| Animation        | `react-native-reanimated` v4          | Requires `react-native-worklets`                 |
| Native UI        | `@expo/ui`, `expo-glass-effect`       | Prefer these over reimplementing native looks    |
| Auth             | Google OAuth only                     | No separate sign-up flow                         |

**No HTTP client is installed yet.** Do NOT assume `axios` exists. Before adding an API layer, ask the user whether to install `axios` or use `fetch`.

`app.json` enables `experiments.typedRoutes` and `experiments.reactCompiler`:

- Route paths are type-checked — use typed hrefs, do not cast to `any`
- The React Compiler handles memoization — do NOT add `useMemo` / `useCallback` / `memo` for performance unless there is a measured reason

---

# 3. Package & Dependency Rules

- **Package manager: `pnpm`** — do NOT use `npm`, `yarn`, or `bun` (the lockfile is `pnpm-lock.yaml`)
- Use the following command when adding new packages to ensure Expo SDK compatibility:
  ```bash
  pnpm expo install <package-name>
  ```
- Do not upgrade any package version without explicit confirmation from the user
- Adding a package with native code requires a rebuild (`pnpm ios` / `pnpm android`) — say so when you add one
- If a package is missing or version conflicts arise, report it and ask before resolving

---

# 4. Environment Variables

- Files: `.env.example` (committed template), `.env.local`, `.env.development` — never commit real secrets
- Expo only exposes variables prefixed with **`EXPO_PUBLIC_`** to the client; read them via `process.env.EXPO_PUBLIC_*`
- `.env.example` currently contains a stale `VITE_API_URL` key — this is a leftover and is NOT used; ask before renaming or repurposing it
- Add any new key to `.env.example` (with an empty or placeholder value) in the same change

---

# 5. Design System

> **All design values (colors, spacing, typography, border radius, etc.) must be read from Figma.**
> Do NOT hardcode or assume any design tokens.
>
> - Design tokens are stored in `tailwind.config.js`
> - If a token is missing in `tailwind.config.js`, read it from Figma and add it before using
> - **Figma File Key**: Do NOT hardcode anywhere. Ask the user for the file key before querying Figma.

## Figma MCP Rules

- Always read the Figma design before implementing any screen or component
- If the Figma MCP returns a localhost URL for an image or SVG, find the same asset from `assets/images`
- Do NOT add new icon packages — all icon assets come from Figma
- Do NOT create placeholder assets — use the actual Figma assets
- If Figma design is unavailable for a component, **ask before proceeding**

## Typography

Only two fonts are used in Luvin:

| Font               | Usage                                   |
| ------------------ | --------------------------------------- |
| `Yde Street Bold`  | Headlines, brand elements, display text |
| `Yde Street Light` | Body text, descriptions, subtext        |

Do NOT use any other font. All font usage details are defined in Figma.
Fonts are loaded with `expo-font` from `src/assets/fonts/` and registered as Tailwind `fontFamily` tokens — do not set font files inline per component.

---

# 6. Directory Architecture

> **Read this section before writing any code for every single task.**
> Place files exactly as described. Do not create new top-level directories without confirmation.

Note: unlike v1, **all source lives under `src/`, including the Expo Router routes (`src/app/`)**. Static app assets (icon, splash, logo) stay in the root-level `assets/`.

```
luvin-frontend-v2/
├── src/
│   ├── app/                      # Expo Router routes (file-based)
│   │   ├── _layout.tsx           # Root layout (imports @/global.css)
│   │   ├── index.tsx             # Entry screen
│   │   └── (tabs)/               # Tab navigator group
│   │       ├── _layout.tsx
│   │       └── index.tsx
│   │
│   ├── assets/
│   │   ├── fonts/                # Yde Street Bold, Yde Street Light
│   │   ├── icons/                # SVG icon components from Figma only
│   │   └── images/               # Image assets from Figma only
│   │
│   ├── components/
│   │   ├── ui/                   # Reusable domain-agnostic UI components
│   │   │                         # (Button, Input, TemperatureGauge, StatusTag, etc.)
│   │   └── ...                    # Domain-specific shared components
│   │
│   ├── constants/                # App-wide constants
│   ├── hooks/                    # Common custom hooks
│   │
│   ├── features/                 # Feature-based modules
│   │   └── <feature>/
│   │       ├── api/              # API calls
│   │       ├── components/       # Feature-specific components
│   │       ├── hooks/            # Feature hooks
│   │       ├── store/            # Zustand store
│   │       ├── types/            # TypeScript types
│   │       └── utils/
│   │
│   ├── lib/                      # Shared utilities, storage (MMKV), query client
│   ├── providers/                # Query provider, theme provider, font loader
│   └── types/                    # Global TypeScript types
│
├── assets/                       # App icon / splash / logo (referenced by app.json)
├── android/  ios/                # Native projects (managed by prebuild)
├── AGENTS.md                     # This file
├── CLAUDE.md                     # Includes AGENTS.md
├── CONTRIBUTING.md               # Commit / branch conventions
├── app.json
├── global.css                    # Tailwind entry (root level, per metro.config.js)
├── tailwind.config.js            # Contains design tokens
├── package.json
└── tsconfig.json
```

`src/components/ui`, `src/constants`, and `src/hooks` already exist. Everything else above is the convention to follow when the directory is first needed — create it in place, do not invent an alternative layout.

## Import Alias

`tsconfig.json` maps `@/*` to the **project root**, not to `src/`:

```ts
import "@/global.css";
import Button from "@/src/components/ui/button";
```

Always use `@/`-prefixed absolute imports — no `../../` relative climbing out of a directory.

### Component Placement Rules

| Situation                                        | Location                             |
| ------------------------------------------------ | ------------------------------------ |
| Reusable across any domain (Button, Input, etc.) | `src/components/ui/`                 |
| Shared but domain-specific                       | `src/components/`                    |
| Used only in one feature                         | `src/features/<feature>/components/` |
| API calls for a feature                          | `src/features/<feature>/api/`        |
| Zustand store for a feature                      | `src/features/<feature>/store/`      |
| TypeScript types for a feature                   | `src/features/<feature>/types/`      |
| Common hooks                                     | `src/hooks/`                         |
| Design tokens                                    | `tailwind.config.js`                 |

---

# 7. Component-First Development Rules

> **Read this before implementing any page.**

## Before developing any page, you MUST:

1. **Identify all reusable UI elements** that appear across multiple pages (buttons, inputs, cards, tags, gauges, etc.) and implement them as shared components in `src/components/ui/` first
2. **Identify all image/illustration assets** used in the page and implement each as a dedicated component before use
3. **Check if the component already exists** in `src/components/ui/` or `src/features/<feature>/components/` before creating a new one — never duplicate

## Image & Asset Components

- **Every image, illustration, and SVG asset must be implemented as a React component**
- Copy SVG code from Figma and wrap it as a component in `src/assets/icons/`
- Do NOT use raw `<Image>` with a file path directly in a page — always wrap in a component
- Use `expo-image`'s `<Image>` for bitmap assets (not `react-native`'s)
- Naming convention: `<BreadCharacter type="salt" />`, `<OvenIllustration state="baking" />`, etc.

## Component Checklist (run through this before writing any page code)

- [ ] All shared UI components used in this page exist in `src/components/ui/`
- [ ] All image/SVG assets used in this page are wrapped as components
- [ ] All feature-specific components are defined in `src/features/<feature>/components/`
- [ ] No design values are hardcoded — all tokens reference `tailwind.config.js`
- [ ] No duplicate components — always reuse existing ones

---

# 8. Coding Rules

- Use functional components, hooks, and explicit TypeScript types/interfaces (`strict: true` is on)
- **Component declaration**: always use `export default function Name() {}` form
  - Exception: `forwardRef` wrapping — use `const Name = forwardRef(...)` + separate export
  - Small internal helper components — `const` arrow functions allowed
- Use **NativeWind `className`** for styling — avoid `style={{}}` and `StyleSheet.create`
- NativeWind v4 (Tailwind CSS v3): manage custom styles in `tailwind.config.js`
- Ensure `babel.config.js` and `metro.config.js` maintain NativeWind v4 config (`jsxImportSource: "nativewind"`, `withNativeWind({ input: "./global.css" })`)
- Async state: manage with **TanStack Query** (`useQuery`, `useMutation`) — no manual `useEffect` + `useState` fetching
- Persisted local state: **MMKV** via a single wrapper in `src/lib/` — do not call MMKV directly from components
- Animations: `react-native-reanimated` v4 — never `Animated` from `react-native`
- Preserve all existing comments and docstrings — do not remove them

---

# 9. Avoid Patterns

- Do not use `any` type — write `[feature]/types.ts` and export proper interfaces
- Avoid `margin`/`padding` — use `gap` or empty `h-{}` spacer views instead
- If a component exceeds 150 lines, split into separate hook or component files
- Do not use `React.[module]` — import directly: `import { useState } from 'react'`
- Do not use inline functions — use named handlers: `handle{Target}{Event}` (e.g. `handleCTAButtonPress`)
- Do not use inline styles
- Do not use `relative`/`absolute` layout — use flex Tailwind classes instead
- Do not create custom asset files — copy SVG from Figma and convert to SVG component
- Do not install new icon packages — all icons come from Figma
- Do not hardcode design values — always use `tailwind.config.js` or read from Figma
- Do not add `useMemo`/`useCallback`/`memo` by default — React Compiler is enabled
- Do not put routes anywhere but `src/app/` — no screen files under `src/features/`

---

# 10. Git Conventions

See `CONTRIBUTING.md` for the full table. Summary:

- Branch: `<type>/<jira-number>` → `feat/LUV-26`
- Commit: `<type>(<jira-number>) :: 변경 사항 요약` → `chore(LUV-26) :: 커밋 컨벤션 추가`
- Types: `feat`, `fix`, `refactor`, `test`, `chore`, `docs`, `delete`, `build`
- Subject within 50 characters; body optional, wrap at 72
- Ask before committing or pushing, and never commit directly to `main`

---

# 11. MCP Configuration Notes

- **Figma MCP requires authorization** — if it is unauthenticated, tell the user to authorize it (claude.ai connector settings, or `claude mcp` / `/mcp` in an interactive session) instead of guessing design values
- **Required flag**: `--stdio` (default HTTP mode is incompatible with Claude Code)
- **API token**: expires every 90 days — verify before use, never commit to repository
- **Figma File Key**: ask the user before querying — never hardcode in any file
- When querying Figma: specify `fileKey` and `node-id` separately for reliability
