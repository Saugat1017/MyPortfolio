# Saugat Bhatta — Portfolio

Personal portfolio for Saugat Bhatta, software engineer (ML platforms, cloud automation, edge AI). Built with React, TypeScript, Chakra UI and Framer Motion. Live at [saugatdev.com](https://saugatdev.com).

## Sections

Hero · Tech marquee · About · Experience · Projects (with live GitHub activity) · Skills · Career goals & what's next · Resume (preview + PDF download) · Contact

Extras: ⌘K / Ctrl+K command menu, a chat assistant that answers questions from the site's content, scroll-linked timeline, cursor-spotlight cards, and full `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Updating content

Almost everything lives in **`src/data/profile.ts`**: experience, projects, skills, career goals, stats and links. Every section, the chat assistant and the ⌘K menu read from it, so an edit there updates the whole site. Wrap words in `**double asterisks**` to bold them in bullet points.

To replace the resume:

1. Save the new PDF as `public/resume/Saugat_Bhatta_Resume.pdf`.
2. Regenerate the preview image (macOS):
   ```bash
   qlmanage -t -s 1400 -o /tmp public/resume/Saugat_Bhatta_Resume.pdf
   sips -Z 1150 -s format jpeg -s formatOptions 60 /tmp/Saugat_Bhatta_Resume.pdf.png --out public/resume/resume-preview.jpg
   ```
3. Update `resume.size` in `profile.ts` if the file size changed.

## Project structure

```
src/
  data/profile.ts        content (single source of truth)
  components/            one file per section + Navigation, Footer, ChatBot, CommandPalette
  components/ui/         shared primitives (Reveal, Magnetic, Counter, SpotlightCard, Flow, …)
  hooks/                 active-section tracking + smooth scrolling
  theme.ts               Chakra theme (fonts, colors)
  index.css, App.css     design tokens, effects and component styles
public/
  resume/                resume PDF + preview image
  images/profile.jpg     portrait
```
