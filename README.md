# Canva Design + Music Integration

This folder contains a template to integrate your Canva wedding invitation design with background music functionality.

## How to Integrate Canva Published Website

### Step 1: Get Your Canva Website URL
1. Open your wedding invitation design in Canva
2. Click **Share** → **Website** (or **Publish**)
3. Click **Publish website** if not already published
4. Copy the published website URL (e.g., `https://yourname.my.canva.site/wedding`)

### Step 2: Add URL to index.html
1. Open `index.html`
2. Find the line: `src="YOUR_CANVA_WEBSITE_URL_HERE"`
3. Replace it with your actual Canva URL
4. Save the file

### Step 3: Add Your Music
1. Place your wedding song MP3 file in the `assets/` folder
2. Rename it to `wedding-song.mp3` or update the filename in `index.html`

### Step 4: Test It
1. Open `index.html` in your browser
2. Click "Open Invitation" to start music
3. Your Canva website will load with background music!

## Integration Methods Available

### Method 1: Iframe Embedding (DEFAULT - RECOMMENDED)
✅ Easiest to set up
✅ Canva design loads inside your page
✅ Music plays while users browse Canva site
✅ No need to download anything from Canva

**How it works:** Your Canva website is embedded in an iframe with music overlay
page that embeds Canva website with music
- `music-player.js` - Music functionality (works on mobile + desktop)
- `styles.css` - Styling for music controls and splash screen
- `assets/` - Folder for your music file

## Features
✅ Embeds your Canva published website
✅ Background music with user interaction (required for mobile)
✅ Splash screen with "Open Invitation" button
✅ Floating music control button (play/pause)
✅ Mobile-friendly
✅ No need to export/download from Canva

## Next Steps
1. Publish your design on Canva (Share → Website)
2. Copy the published URL
3. Paste URL in `index.html` (replace `YOUR_CANVA_WEBSITE_URL_HERE`)
4. Add your music file to `assets/` folder
5. Open `index.html` in browser to test

## Example URL Format
Your Canva URL should look like:
- `https://yourname.my.canva.site/wedding-invitation`
- `https://yourname.my.canva.site/save-the-date`

## Note on Canva Free vs Pro
- Both Free and Pro Canva accounts can publish websites
- The URL format might differ slightly
- Just copy whatever URL Canva gives you!
## Features
✅ Background music with user interaction (required for mobile browsers)
✅ Splash screen with "Open Invitation" button
✅ Music controls (play/pause, volume)
✅ Mobile-friendly
✅ Works with Canva designs

## Next Steps
1. Export your Canva design
2. Place files in the `assets/` folder
3. Update `index.html` with your content
4. Test in browser
