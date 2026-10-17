# Portfolio Project Plan

## Goal
A fast, single-page personal site for Takwa Benleghrissi that presents the CV (experience, projects, skills, education, certifications) and makes it easy to download the CV or get in touch.

## Stack
| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + TypeScript | Matches existing skills (React/TS); typed content data |
| Build tool | Vite 5 | Instant dev server, tiny static output |
| Styling | Plain CSS with custom properties | No extra dependency; light/dark theme via CSS variables |
| Content | `src/data/cv.ts` | Single source of truth; edit text without touching components |
| Fonts | Inter (Google Fonts) | Clean, readable |
| Contact | `mailto:` form | No backend to run or secure |
| Hosting (suggested) | Vercel / Netlify / GitHub Pages | Free static hosting, `npm run build` -> `dist/` |

No router and no UI library: a one-page site with anchor navigation doesn't need them.

## Structure
```
public/Takwa_Benleghrissi_CV.pdf   downloadable CV
src/data/cv.ts                     all content from the CV
src/hooks.ts                       theme, scroll-reveal, active-section hooks
src/components/                    Nav, Hero, About, Experience, Projects, Skills, Education, Contact, Section
src/styles.css                     design tokens + layout + responsive rules
```

## Sections
1. Hero: name, title, tagline, CTAs (work / CV / contact), core stack
2. About: summary, languages, key numbers
3. Experience: timeline of 5 roles with tech chips
4. Projects: Le Transfert + 3 academic/personal projects
5. Skills: grouped chips + certifications
6. Education
7. Contact: email, phone, GitHub, mailto form

## Milestones
1. Scaffold + content data (done)
2. Components + theming + responsive layout (done)
3. Verify: type-check, build, check in browser at mobile and desktop widths
4. Fill in LinkedIn URL, optionally add photo and project links/screenshots
5. Deploy to a static host

## Later ideas
- Profile photo and project screenshots / demo links
- FR/EN language switch (CV is fluent in both)
- Open Graph image for link previews
- Analytics (Plausible) if wanted

## Commands
```
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs dist/
npm run preview
```

Note: this folder is intentionally not a git repository; nothing has been committed.
