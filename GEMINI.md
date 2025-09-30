# Twootle English School - Development Guide for Gemini CLI

## Project Overview

Twootle English School is an interactive English language learning platform designed for Sri Lankan children. The platform features vocabulary building, sentence construction, stories, games, and educational activities across different skill levels.

**Key Information:**
- **Platform**: Educational web application
- **Target Audience**: Sri Lankan children learning English
- **Technology**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Architecture**: Static web application with no backend dependencies
- **Funding**: General Education Modernization Project, Ministry of Education Sri Lanka
- **Developer**: Regional English Support Center, Ampara

## Project Structure

```
twootle-v0/
├── .github/                          # GitHub workflows and templates
│   └── prompts/                      # AI assistant prompt templates
├── build/                            # Build configuration files
│   ├── app.manifest                  # Application manifest
│   └── tailwind.config.js           # Tailwind CSS configuration
├── content/                          # Educational content and activities
│   ├── activities/                   # Interactive learning activities
│   │   ├── sentences/               # Sentence construction exercises (22 files)
│   │   └── vocabulary/              # Vocabulary building activities (23 files)
│   ├── levels/                      # Skill-level based content
│   │   ├── advanced/                # Advanced level content (95 files)
│   │   │   ├── grammar-*.html       # Grammar exercises
│   │   │   ├── picdes-*.html        # Picture description activities
│   │   │   ├── sort-*.html          # Sorting and categorization games
│   │   │   └── story-*.html         # Advanced reading stories
│   │   └── kids/                    # Beginner level content (21 files)
│   │       ├── present-*.html       # Present tense exercises
│   │       ├── sort-*.html          # Basic sorting activities
│   │       └── story-*.html         # Simple stories
│   └── media/                       # Multimedia assets
│       ├── audio/                   # Audio files for pronunciation (130+ files)
│       └── images/                  # Images for activities (300+ files)
├── docs/                            # Documentation pages
│   ├── about.html                   # About us page
│   ├── privacy-policy.html          # Privacy policy
│   └── terms-of-service.html        # Terms of service
├── src/                             # Source code
│   ├── assets/                      # Static assets
│   │   ├── fonts/                   # Web fonts
│   │   └── icon.png                 # Application icon
│   ├── main/                        # Electron main process (if needed)
│   └── renderer/                    # Web application files
│       ├── index.html               # Main application entry point
│       ├── input.css                # Source CSS
│       ├── output.css               # Compiled Tailwind CSS
│       ├── tailwind.css             # Tailwind base styles
│       └── twootle-theme.css        # Custom theme styles
├── package.json                     # Node.js dependencies and scripts
├── package-lock.json               # Dependency lock file
└── README.md                       # Project documentation
```

## Development Environment Setup

### Prerequisites
```bash
# Ensure you have Node.js installed
node --version  # Should be 16+ 
npm --version   # Should be 8+
```

### Installation
```bash
# Clone the repository
git clone https://github.com/tennysonchandrasiri/twootle-v0.git
cd twootle-v0

# Install dependencies
npm install

# Build CSS (if Tailwind setup exists)
npm run build  # Check package.json for available scripts
```

## Content Architecture

### Educational Content Types

1. **Activities** (`content/activities/`)
   - **Vocabulary**: Word learning with images and audio
   - **Sentences**: Sentence construction with drag-and-drop

2. **Level-Based Content** (`content/levels/`)
   - **Kids**: Basic grammar, simple stories, fundamental sorting
   - **Advanced**: Complex grammar, picture descriptions, advanced stories

3. **Media Assets** (`content/media/`)
   - **Audio**: Pronunciation guides (`.mp3`, `.wav`)
   - **Images**: Visual learning aids (`.png`)

### File Naming Conventions
- Grammar exercises: `grammar-[topic].html`
- Stories: `story-[title].html`
- Sorting activities: `sort-[categories].html`
- Picture descriptions: `picdes-[location].html`
- Sentence activities: `[topic]-b.html`

## Resource Path Structure

**CRITICAL**: All resource paths use relative paths from each file's location:

### From Activities Files (`content/activities/*/`)
```html
<!-- CSS & Fonts -->
<link rel="stylesheet" href="../../../src/renderer/output.css" />
<link rel="stylesheet" href="../../../src/renderer/twootle-theme.css" />
<link rel="preload" href="../../../src/assets/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Navigation -->
<a href="../../../src/renderer/index.html">Home</a>

<!-- Media (for vocabulary activities) -->
<img src="../../media/images/[filename].png" alt="..." />
<audio src="../../media/audio/[filename].mp3"></audio>
```

### From Level Files (`content/levels/*/`)
```html
<!-- CSS & Fonts -->
<link rel="stylesheet" href="../../../src/renderer/output.css" />
<link rel="stylesheet" href="../../../src/renderer/twootle-theme.css" />
<link rel="preload" href="../../../src/assets/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Navigation -->
<a href="../../../src/renderer/index.html">Home</a>

<!-- Media (for kids activities) -->
<img src="../../media/images/[filename].png" alt="..." />
```

### From Docs Files (`docs/`)
```html
<!-- CSS & Fonts -->
<link rel="stylesheet" href="../src/renderer/output.css" />
<link rel="stylesheet" href="../src/renderer/twootle-theme.css" />
<link rel="preload" href="../src/assets/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Navigation -->
<a href="../src/renderer/index.html">Home</a>
```

### From Main Index (`src/renderer/index.html`)
```html
<!-- CSS & Fonts -->
<link rel="stylesheet" href="output.css" />
<link rel="stylesheet" href="twootle-theme.css" />
<link rel="preload" href="../assets/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Content Links -->
<a href="../../content/activities/vocabulary/[activity].html">Activity</a>
<a href="../../content/levels/kids/[lesson].html">Kids Lesson</a>
<a href="../../content/levels/advanced/[lesson].html">Advanced Lesson</a>

<!-- Docs Links -->
<a href="../../docs/about.html">About</a>
<a href="../../docs/privacy-policy.html">Privacy Policy</a>
```

## Common Development Tasks

### Adding New Educational Content

1. **New Vocabulary Activity**:
```bash
# Copy existing template
cp content/activities/vocabulary/template.html content/activities/vocabulary/new-topic.html

# Update content, ensure correct paths:
# - CSS: ../../../src/renderer/
# - Fonts: ../../../src/assets/fonts/
# - Images: ../../media/images/
# - Audio: ../../media/audio/
# - Home: ../../../src/renderer/index.html
```

2. **New Kids Level Content**:
```bash
# Copy existing template
cp content/levels/kids/template.html content/levels/kids/new-lesson.html

# Update paths:
# - CSS: ../../../src/renderer/
# - Home: ../../../src/renderer/index.html
# - Media: ../../media/images/
```

3. **Adding Media Files**:
```bash
# Add images
mv new-image.png content/media/images/

# Add audio
mv new-audio.mp3 content/media/audio/

# Reference in HTML:
# From activities: ../../media/images/new-image.png
# From levels: ../../media/images/new-image.png
```

### Styling and Themes

The project uses a combination of:
- **Tailwind CSS**: Utility-first framework
- **Custom Theme**: `twootle-theme.css` with CSS variables

```css
/* Custom theme variables in twootle-theme.css */
:root {
  --twootle-color-primary: #3B82F6;
  --twootle-color-secondary: #F59E0B;
  --twootle-font-playful: "Bubblegum Sans", cursive;
  --twootle-font-heading: "Inter", sans-serif;
}
```

### Common UI Patterns

1. **Activity Container**:
```html
<div class="activity-container bg-white p-8 rounded-lg shadow-md">
  <!-- Activity content -->
</div>
```

2. **Navigation Header**:
```html
<header class="bg-blue-600 text-white p-6 shadow-lg rounded-b-xl">
  <div class="container mx-auto flex items-center justify-between">
    <h1 class="text-3xl font-extrabold">Twootle English School</h1>
    <a href="[path-to-index]" class="bg-gray-800 text-white px-4 py-2 rounded-lg">Home</a>
  </div>
</header>
```

3. **Interactive Elements**:
```html
<button class="twootle-btn bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg transition">
  Click Me
</button>
```

## Testing and Verification

### Path Verification Checklist
- [ ] CSS loads correctly (check browser dev tools)
- [ ] Fonts display properly
- [ ] Images show without 404 errors
- [ ] Audio plays when clicked
- [ ] Navigation links work bidirectionally
- [ ] All interactive elements function

### Cross-Browser Testing
- Chrome/Chromium (primary target)
- Firefox
- Safari
- Edge

### Responsive Testing
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## Deployment

### Static Hosting
The project is designed for static hosting (GitHub Pages, Netlify, etc.):

```bash
# Build assets (if build process exists)
npm run build

# Deploy entire project structure
# All paths are relative and will work in any hosting environment
```

### GitHub Pages Setup
```bash
# In repository settings, set source to:
# - Source: Deploy from a branch
# - Branch: main
# - Folder: / (root)
```

## Common Issues and Solutions

### Resource Path Issues
**Problem**: CSS/fonts/images not loading
**Solution**: Verify relative paths match the file structure documented above

### Audio Not Playing
**Problem**: Audio files don't play
**Solution**: 
- Check file exists in `content/media/audio/`
- Verify path is correct relative to HTML file
- Ensure audio format is supported (MP3/WAV)

### Navigation Broken
**Problem**: Links lead to 404
**Solution**: 
- Check `href` attributes match actual file locations
- Verify all target files exist
- Use relative paths as documented

### Styling Issues
**Problem**: Custom styles not applying
**Solution**:
- Ensure `twootle-theme.css` is loaded after `output.css`
- Check CSS custom properties are defined
- Verify Tailwind classes are compiled

## Contributing Guidelines

### File Organization
- Keep educational content in `content/`
- Put reusable assets in `src/assets/`
- Document any new path patterns
- Follow existing naming conventions

### Code Style
- Use semantic HTML5 elements
- Follow Tailwind utility-first approach
- Maintain responsive design patterns
- Ensure accessibility (alt text, ARIA labels)

### Content Guidelines
- Age-appropriate for Sri Lankan children
- Culturally relevant examples
- Progressive difficulty levels
- Include audio for pronunciation
- Provide visual learning aids

## Maintenance Notes

### Recent Major Changes
- **2025-01**: Comprehensive resource path fix after project restructuring
- **2024**: Platform development and content creation
- **2023**: Project initiation

### Important Files to Monitor
- `package.json`: Dependencies and scripts
- `src/renderer/index.html`: Main navigation hub
- `src/renderer/twootle-theme.css`: Custom styling
- `content/media/`: Media file organization

### Backup Considerations
- Educational content in `content/`
- Custom themes and styles
- Media assets (large files)
- Build configurations

---

**Contact**: Regional English Support Center, Ampara, Sri Lanka  
**Funding**: General Education Modernization Project, Ministry of Education Sri Lanka  
**Repository**: https://github.com/tennysonchandrasiri/twootle-v0