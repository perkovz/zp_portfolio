# Zvonimir Perkovic — Portfolio

Personal portfolio of Zvonimir Perkovic, a Cleveland-based product designer. The site showcases retail software and connected-product case studies, personal projects, writing, work experience, and photography.

**Website:** [zpportfolio.vercel.app](https://zpportfolio.vercel.app/)

Built from [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) with a locally bundled [Once UI](https://once-ui.com) component and styling system.

## Current site

All six main sections are enabled in `src/app/resources/config.js`:

- `/` — introduction and work cards, ordered by publication date.
- `/about` — biography, work experience, education, and technical skills.
- `/work` — eight case studies: Propello AI Design Lab, Fairway+, Decor Contractor, Master Lock WiFi Bridge, Master Lock Vault Enterprise web, Vault Enterprise onboarding, Moen Smart Faucet, and the smart shower GUI.
- `/projects` — personal products and experiments; currently Subha Choghadiya Muhurta, a Chromium extension.
- `/blog` — four MDX articles about design systems, design/development collaboration, and design tools.
- `/gallery` — a photo collection configured in the content file.

Fairway+ has a dedicated React case-study page at `/work/fairway-plus`. It includes a first-login hero video with a poster fallback for reduced motion, a three-step interactive product tour, and sections covering the problem, design decisions, flows, outcomes, and reflections. Its MDX file supplies the listing metadata; the dedicated page supplies the case-study presentation.

Propello AI Design Lab has a dedicated React page at `/work/ai-design-lab`. It covers a code-first prototyping workspace initiated in Epicor’s Retail unit: challenge, approach, designing inside a working product environment, impact, and takeaway. Listing metadata lives in the MDX file; presentation lives in `src/components/work/ai-design-lab/`. The hero uses `design-excellence.mp4` with `cover.png` as the reduced-motion poster.

The site uses a dark theme with emerald branding and an orange accent. It includes responsive navigation, image/video project cards, generated page metadata and structured data, an Open Graph image endpoint, a sitemap, and robots configuration.

## Stack

- Next.js **15.5.25** with the App Router; authentication endpoints use Pages API routes.
- React and React DOM **19.2.3**.
- TypeScript, Sass/SCSS, and PostCSS.
- MDX content using `@next/mdx`, `next-mdx-remote`, and `gray-matter`.
- Once UI components, styles, tokens, and icons maintained in `src/once-ui/`.
- Yarn Classic lockfile (`yarn.lock`) and ESLint 8 with the Next.js configuration.

## Run locally

Use a Node.js version supported by Next.js 15. The framework minimum is [Node.js 18.18](https://nextjs.org/docs/15/pages/getting-started/installation); use a currently supported Node.js LTS release for development.

Install Yarn Classic (1.x), then:

```bash
git clone https://github.com/perkovz/zp_portfolio.git
cd zp_portfolio
yarn install --frozen-lockfile
yarn dev
```

Open [localhost:3000](http://localhost:3000).

No project-specific environment variables are currently required. `.env.example` is a placeholder, so copying it is optional. The layout uses `next/font/google` for Inter and Source Code Pro, which requires access to Google Fonts during a build.

### Available commands

- `yarn dev` — start the development server.
- `yarn build` — create a production build.
- `yarn start` — serve the production build; run `yarn build` first.
- `yarn lint` — run Next.js ESLint checks.
- `yarn export` — alias for `next build`; it does not produce a static export.

Builds currently skip ESLint checks through `next.config.mjs`, so run `yarn lint` separately. There is no automated test script or GitHub Actions workflow in the current repository. A `biome.json` configuration exists, but Biome is not installed or exposed through package scripts.

## Project structure

```text
src/
  app/
    about/                   Biography and experience page
    blog/posts/              Blog MDX content
    gallery/                 Photo gallery page
    projects/items/          Side-project MDX content
    resources/               Site configuration and personal content
    utils/                   MDX loading and date utilities
    work/
      projects/              Case-study MDX content and listing metadata
      ai-design-lab/         Dedicated AI Design Lab page
      fairway-plus/          Dedicated Fairway+ page
      decor-contractor/      Dedicated Decor Contractor page
      [slug]/                Other case-study pages
    og/                      Open Graph image endpoint
    layout.tsx               Fonts, metadata, theme, and shared layout
    page.tsx                 Home page
    robots.ts                Robots configuration
    sitemap.ts               Route and content sitemap
  components/                Portfolio components and MDX rendering
    work/fairway/            Fairway+ case study, tour, video, and data
    work/ai-design-lab/      AI Design Lab case study and data
    work/decor-contractor/   Decor Contractor case study and data
  once-ui/                   Bundled UI components, styles, and tokens
  pages/api/                 Authentication and cookie-check endpoints
public/
  images/                    Photography, project images, and MP4 videos
  fonts/                     Local font assets
  trademark/                 Logo assets
```

## Updating content and appearance

- **Site settings:** edit `src/app/resources/config.js` for enabled routes, the site domain (`baseURL`), theme, effects, header display options, and route protection. Metadata callers add the HTTPS scheme to `baseURL`.
- **Personal content:** edit `src/app/resources/content.js` for the profile, social links, home copy, about sections, gallery, and blog/work labels.
- **Side-project labels:** edit `src/app/resources/content-projects.js`.
- **Writing:** add or edit `.mdx` files in `src/app/blog/posts/`.
- **Work:** add or edit `.mdx` files in `src/app/work/projects/`.
- **Side projects:** add or edit `.mdx` files in `src/app/projects/items/`.
- **Media:** place assets under `public/images/` and reference them as `/images/...`.
- **UI foundations:** edit `src/once-ui/` for shared components, icons, styles, and design tokens.

MDX filenames become URL slugs. Copy an existing file in the same content collection to preserve its frontmatter format: `title`, `publishedAt`, and `summary`, plus fields such as `image`, `images`, `team`, `tag`, and `link` as needed. Work and side-project cards are sorted newest first.

For **Fairway+**, update both `src/app/work/projects/fairway-plus.mdx` (card metadata) and `src/components/work/fairway/` (page content and presentation). The current hero uses `fairway-first-login-marketing.mp4` and `fairway-first-login-poster.jpg` under `public/images/projects/fairway/`.

For **Propello AI Design Lab**, update `src/app/work/projects/ai-design-lab.mdx` (card metadata) and `src/components/work/ai-design-lab/` (page content). The hero uses `design-excellence.mp4` with `cover.png` as the reduced-motion poster, both under `public/images/projects/ai-design-lab/`.

For **Decor Contractor**, update both `src/app/work/projects/decor-contractor.mdx` (card metadata) and `src/components/work/decor-contractor/` (page content). The hero uses `payments-promo.mp4` with `payments-promo.jpg` as its poster, both under `public/images/projects/decor-contractor/`.

### Optional template features

The Mailchimp component and newsletter configuration remain in the repository, but newsletter rendering is commented out on the home page and the Mailchimp action is still a placeholder. The home-page blog preview is also commented out; the `/blog` page remains enabled.

Route protection is implemented by the client-side `RouteGuard` and `src/pages/api/` endpoints. The configured protected path currently has no matching case-study file. This is a template-level presentation gate, not server-side access control for confidential content.

## Deployment

For Vercel, import **this repository**, select the Next.js framework preset, and use the repository root. The production build command is `yarn build`; use the tracked Yarn lockfile for dependency installation.

When deploying to another domain, update `baseURL` in `src/app/resources/config.js` so generated metadata points to that domain. The project can also run on a Node.js host with `yarn build` followed by `yarn start`.

## Credits and license

Adapted from Magic Portfolio by Lorant Toth and Zsofia Komaromi, built with Once UI.

The repository's [LICENSE](LICENSE) declares **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.
