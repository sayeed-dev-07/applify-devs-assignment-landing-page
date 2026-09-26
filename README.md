# EchoGPT - AI Platform Interface

A highly modular, high-contrast monochrome React/Next.js application. This project features a strictly component-based architecture for maximum maintainability, isolated data structures for easy content updates, and smooth GSAP animations for a premium user experience.

## Key Features

* **Component-Based Architecture:** Every route (e.g., `ai-job-analysis`, `ai-sop-builder`) is broken down into small, single-responsibility components within its own local `components` directory. This makes debugging easier, UI updates more seamless, and components highly reusable.

* **Data-Driven Content:** All textual content and platform data, including pricing, tasks, history, and templates, are separated from the UI logic and stored in `public/data` as JSON files. By updating these files, you can instantly change the page content without modifying the core React components.

* **Premium UX with GSAP:** Utilizes GSAP and `@gsap/react` for performant micro-interactions. Features include staggered card reveals, smooth fade-ups, and subtle scale animations that elevate the overall user experience.

* **High-Contrast Monochrome Design:** A sleek, minimal design system utilizing the latest Tailwind CSS v4.

## Tech Stack

* **Framework:** Next.js `v16.3.6`
* **Library:** React & React DOM `v19.2.8`
* **Styling:** Tailwind CSS `v4` with PostCSS
* **Animations:** GSAP `v3.15.0` & `@gsap/react` `v2.1.2`
* **Icons:** Lucide React `v1.47.0` & React Icons `v5.7.0`
* **Language:** TypeScript `v5`

## Project Structure

```text
├── app/
│   ├── components/                  # Global shared components (ChatHero, ModelSelector, etc.)
│   ├── ai-job-analysis/
│   │   ├── components/              # Route-specific isolated components
│   │   └── page.tsx                  # Route orchestrator
│   ├── ai-sop-builder/               # SOP Builder route and isolated components
│   ├── ai-tasks/                     # AI Tasks dashboard route
│   ├── api-platform/                 # API Platform route
│   ├── compare/                      # Model comparison route
│   ├── connectors/                   # Integrations route
│   ├── fonts/                        # Local font assets
│   ├── history/                      # User activity history route
│   ├── image-studio/                 # Image generation route
│   ├── newsletter/                   # Newsletter route
│   ├── store/                        # Extensions/Store route
│   ├── subscriptions/                # Pricing and billing route
│   ├── support/                      # Help and support route
│   ├── video-studio/                 # Video generation route
│   ├── layout.tsx                    # Global layout wrapper
│   └── page.tsx                      # Main landing page
│
├── public/
│   └── data/                         # Centralized JSON data for all routes
│       ├── ai-tasks.json             # AI Tasks directory data
│       ├── chat-models.json          # Available chat models
│       ├── chat-suggestions.json     # Chat prompt suggestions
│       ├── connectors.json            # Connectors/integrations data
│       ├── history.json              # Mock history data
│       ├── image-models.json         # Image generation models
│       ├── navbar.json               # Navigation links data
│       ├── pricing.json              # Subscription plans data
│       ├── sop-templates.json        # SOP Builder templates
│       ├── store-items.json          # Store extensions data
│       ├── support-categories.json   # Support topics data
│       └── video-models.json         # Video generation models
│
├── types/
│   └── site.ts                       # Global TypeScript interfaces and types
│
├── tailwind.config.ts                # Tailwind CSS configuration
└── package.json                      # Project dependencies and scripts
```

## How to Modify and Maintain

### 1. Changing Text or Content

To update text, pricing, categories, or available models on any page, **do not edit the React components directly**.

Instead, navigate to the `public/data/` folder and open the relevant JSON file, such as:

* `pricing.json`
* `sop-templates.json`
* `chat-models.json`
* `ai-tasks.json`

Update the required values in the JSON file. The application is designed to automatically fetch and reflect these changes in the UI.

### 2. Fixing Bugs or Changing UI Layouts

Because the application uses a strict component-based architecture, UI changes are highly isolated.

For example, if you need to fix a bug or modify the layout of the Job Analysis page, navigate to:

```text
app/ai-job-analysis/components/
```

You will find the relevant components, such as the header, form, or report, without having to work through a large monolithic page file.

### 3. Adjusting Animations

Page and component animations are powered by GSAP.

To modify animation behavior such as:

* Duration
* Delay
* Stagger
* Scale
* Easing
* Bounce effects

Locate the `useGSAP` hook inside the relevant React component and adjust the GSAP timeline or animation parameters.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Open the Application

Open the following URL in your browser:

```text
http://localhost:3000
```

The application should now be running in development mode.
