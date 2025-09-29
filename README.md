# Twootle English School

An interactive English learning platform designed for children, featuring vocabulary, sentences, grammar exercises, and educational stories.

## Features

- **Twootle Kids**: Interactive lessons for younger learners covering School, Home, and Environment topics
- **Senior Twootle Kids**: Advanced grammar, vocabulary, picture descriptions, and stories for older students
- **Interactive Activities**: Sorting games, tense exercises, and comprehension activities
- **Multimedia Content**: Visual learning with images and organized content structure

## GitHub Pages Deployment Instructions

### Method 1: Direct Deployment (Recommended)

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it `twootle` or your preferred name
   - Make it public (required for free GitHub Pages hosting)

2. **Push Code to GitHub**
   ```bash
   cd ~/Documents/Twootle
   git init
   git add .
   git commit -m "Initial commit - Twootle English School"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
   - It may take a few minutes for the site to become available

### Method 2: Using GitHub Actions (Alternative)

If you want more control over the build process, you can create a GitHub Actions workflow:

1. Create `.github/workflows/deploy.yml` file with deployment configuration
2. Push to repository
3. GitHub Actions will automatically build and deploy

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the root directory with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. Enable HTTPS in repository settings

## Local Development

To run the site locally:

1. Open `index.html` directly in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Project Structure

```
twootle-v0/
├── src/                    # Source code and configuration
│   ├── main/              # Electron main process
│   │   ├── electron-main.js
│   │   └── preload.js
│   ├── renderer/          # Web application files
│   │   ├── index.html     # Main homepage
│   │   ├── index offline.html
│   │   ├── twootle-theme.css
│   │   └── *.css          # Compiled stylesheets
│   └── assets/            # Static assets
│       ├── fonts/         # Font files
│       └── icon.png       # Application icon
├── content/               # Educational content
│   ├── activities/        # Learning activities
│   │   ├── vocabulary/    # Vocabulary lessons
│   │   ├── sentences/     # Sentence exercises
│   │   └── grammar/       # Grammar activities
│   ├── media/            # Media files organized by type
│   │   ├── audio/        # Audio files (.mp3, .wav)
│   │   ├── images/       # Image files (.png, .jpg)
│   │   └── videos/       # Video content
│   └── levels/           # Content by difficulty level
│       ├── kids/         # Activities for younger learners
│       ├── intermediate/ # Mid-level activities
│       └── advanced/     # Advanced activities (formerly "Senior")
├── docs/                 # Documentation and legal pages
│   ├── about.html
│   ├── privacy-policy.html
│   └── terms-of-service.html
├── build/                # Build configuration
│   ├── tailwind.config.js
│   └── app.manifest
├── dist/                 # Built application (gitignored)
└── README.md
```

## Configuration Notes

- The site uses Tailwind CSS via CDN for styling
- No build process required - pure HTML/CSS/JS
- The `.nojekyll` file tells GitHub Pages to serve files directly without Jekyll processing
- The `_config.yml` is optional but included for Jekyll compatibility if needed

## Updating Content

To update the site content:

1. Edit the HTML files directly
2. Commit and push changes to GitHub
3. GitHub Pages will automatically update (usually within minutes)

## Credits

Designed by the Regional English Support Center, Ampara  
Funded by the General Education Modernization Project of Ministry of Education Sri Lanka

## Electron Desktop App

An Electron wrapper allows running Twootle as an offline desktop application with native menus.

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Install Dependencies
```bash
npm install
```

### Run in Development (hot reload of renderer via standard file reload)
```bash
npm start
```
This launches the Electron app loading `index.html`.

### Packaging (Local Builds)
```bash
npm run dist
```
Artifacts are generated in the `dist/` folder (dmg/zip for macOS, exe/nsis for Windows, AppImage for Linux as configured).

### Scripts Overview
- `npm start`: Runs Electron in production mode
- `npm run dev`: Runs Electron in development mode
- `npm run build:css`: Builds CSS using Tailwind
- `npm run package`: Creates unpackaged Electron bundles
- `npm run dist`: Creates distributable installers
- `npm run dist:win`: Creates Windows installers
- `npm run dist:win32`: Creates Windows 32-bit installers
- `npm run dist:win64`: Creates Windows 64-bit installers

### Updating Branding / Theme
A unified theme file (planned: `twootle-theme.css`) will centralize colors and typography. Include it in all primary pages for consistent look. Tailwind CDN may later be replaced with a local build for full offline use.

### App Icons
Add platform icons under `build/icons/` (e.g., `icon.icns`, `icon.ico`, `icon.png` sizes). Update `electron-builder` config in `package.json` accordingly.

### Code Signing (Optional / Future)
Configure appropriate certificates for macOS and Windows before distributing publicly.

## License

© 2025 Twootle English School. All rights reserved.
