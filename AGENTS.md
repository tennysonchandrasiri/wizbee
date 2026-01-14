# AGENTS.md

## Project Overview

**Wizbee English School** is an interactive English language learning desktop application designed for Sri Lankan children. Built with Electron, it provides vocabulary building, sentence construction, stories, games, and educational activities across different skill levels.

- **Platform**: Electron desktop app (Windows & macOS)
- **Target Audience**: Sri Lankan children learning English (ages 6-12)
- **Technology**: Electron, HTML5, CSS3, JavaScript, Tailwind CSS
- **Theme**: Honey bee / Winnie the Pooh inspired warm colors

## Setup Commands

```bash
# Install dependencies
npm install

# Start development
npm start

# Build CSS (Tailwind)
npm run build:css

# Package for distribution
npm run dist           # Current platform
npm run dist:win       # Windows
npm run dist -- --publish never  # Build without publishing
```

## Project Structure

```
wizbee/
├── .github/workflows/     # GitHub Actions (release, pages)
├── landing-page/          # Public website for downloads
├── content/               # Educational content
│   ├── activities/        # Interactive exercises
│   │   ├── sentences/     # Sentence construction
│   │   └── vocabulary/    # Vocabulary building
│   ├── levels/            # Skill-based content
│   │   ├── advanced/      # Advanced (grammar, stories, picdes)
│   │   └── kids/          # Beginner (basic grammar, stories)
│   └── media/             # Assets for content
│       ├── audio/         # Pronunciation MP3s
│       └── images/        # Activity images
├── docs/                  # In-app documentation
├── src/
│   ├── assets/            # App icons, fonts
│   ├── main/              # Electron main process
│   │   └── electron-main.js
│   └── renderer/          # Web UI
│       ├── index.html     # Main app entry
│       └── *.css          # Styles
└── package.json
```

## Code Style

- HTML5 semantic elements
- Tailwind CSS utility-first approach
- Vanilla JavaScript (no frameworks)
- Relative paths for all resources
- Child-friendly, accessible design

## Resource Paths

All paths are relative from each file's location:

**From `content/activities/*/` or `content/levels/*/`:**
```html
<link rel="stylesheet" href="../../../src/renderer/output.css" />
<a href="../../../src/renderer/index.html">Home</a>
<img src="../../media/images/[file].png" />
```

**From `docs/`:**
```html
<link rel="stylesheet" href="../src/renderer/output.css" />
<a href="../src/renderer/index.html">Home</a>
```

## File Naming Conventions

- Grammar: `grammar-[topic].html`
- Stories: `story-[title].html`
- Sorting: `sort-[categories].html`
- Picture descriptions: `picdes-[location].html`
- Vocabulary: `[topic]-b.html`

## Build & Release

The project uses GitHub Actions for automated releases:

1. Push a version tag (e.g., `v0.8.2`) to trigger builds
2. macOS and Windows builds run in parallel
3. Artifacts uploaded to GitHub Releases
4. Landing page auto-deploys to GitHub Pages

**Important**: Always use `--publish never` flag to prevent electron-builder from auto-publishing.

## Theme Colors (Honey Bee)

```css
/* Primary palette */
--honey-500: #FFC107;    /* Main honey yellow */
--honey-600: #FFB300;    /* Darker honey */
--honey-50: #FFF8E1;     /* Light cream background */
--pooh-brown: #795548;   /* Accent brown */
```

## Testing Checklist

- [ ] CSS loads correctly
- [ ] Fonts display properly  
- [ ] Images show without 404 errors
- [ ] Audio plays when clicked
- [ ] Navigation links work
- [ ] App launches in Electron
- [ ] Builds complete for both platforms

## Content Guidelines

- Age-appropriate for Sri Lankan children
- Culturally relevant examples
- Progressive difficulty levels
- Include audio for pronunciation
- Provide visual learning aids
- No ads or distractions

## Important Notes

- Landing page is in `landing-page/` folder (deployed to GitHub Pages)
- App icons are in `src/assets/` (mascot.png, wizbee.png)
- The app works offline once installed
- Content designed by Regional English Support Center, Ampara
- Funded by General Education Modernization Project, Ministry of Education Sri Lanka
