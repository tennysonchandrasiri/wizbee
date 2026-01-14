# Wizbee App Releases

This directory contains the release binaries for Wizbee English School app.

## Download Links

The download buttons on the landing page point to GitHub Releases:
- **Windows**: `https://github.com/tennysonchandrasiri/wizbee/releases/latest/download/Wizbee-Setup.exe`
- **macOS**: `https://github.com/tennysonchandrasiri/wizbee/releases/latest/download/Wizbee.dmg`

## Creating a Release

1. Build the app using electron-builder:
   ```bash
   bun run dist:win    # For Windows
   bun run dist        # For all platforms
   ```

2. The built files will be in the `dist/` directory

3. Create a new GitHub Release and upload the following files:
   - `Wizbee-Setup.exe` (Windows installer)
   - `Wizbee.dmg` (macOS disk image)
   - `Wizbee-portable.exe` (Windows portable version, optional)

## Version Naming

Files should be named consistently:
- `Wizbee-Setup.exe` - Windows NSIS installer
- `Wizbee.dmg` - macOS disk image
- `Wizbee-{version}-{arch}.exe` - Versioned Windows builds
