# Wizbee English School

An interactive English learning platform designed for children, featuring vocabulary, sentences, grammar exercises, and educational stories.

## Features

- **Wizbee Kids**: Interactive lessons for younger learners covering School, Home, and Environment topics
- **Senior Wizbee Kids**: Advanced grammar, vocabulary, picture descriptions, and stories for older students
- **Interactive Activities**: Sorting games, tense exercises, and comprehension activities
- **Multimedia Content**: Visual learning with images and organized content structure

## GitHub Pages Deployment Instructions

### Method 1: Direct Deployment (Recommended)

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it `wizbee` or your preferred name
   - Make it public (required for free GitHub Pages hosting)

2. **Push Code to GitHub**
   ```bash
   cd ~/Documents/Wizbee
   git init
   git add .
   git commit -m "Initial commit - Wizbee English School"
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
Wizbee/
├── index.html          # Main homepage
├── index offline.html  # Offline version
├── Vocabulary/         # Vocabulary lessons
├── Sentences/          # Sentence exercises
├── more activities/    # Additional activities
├── Videos/            # Video content
├── _config.yml        # GitHub Pages configuration
├── .nojekyll          # Bypass Jekyll processing
└── README.md          # This file
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

## License

© 2025 Wizbee English School. All rights reserved.
