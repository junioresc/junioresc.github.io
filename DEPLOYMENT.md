# Deployment Guide

This guide will help you deploy your modernized portfolio to GitHub Pages.

## Prerequisites

Before deploying, make sure you have:

- Git installed and configured
- GitHub account with access to the repository
- All changes committed to your branch

## Deployment Steps

### 1. Test Locally

First, make sure everything works locally:

```bash
# Start the development server
npm start
```

Visit `http://localhost:3000` and verify:

- ✅ All sections load correctly (Hero, About, Work, Contact)
- ✅ Navigation works properly
- ✅ Project modals open and display correctly
- ✅ Contact form validation works
- ✅ All images load
- ✅ Resume download works
- ✅ Footer links work
- ✅ Responsive design looks good on different screen sizes

### 2. Build for Production

Create an optimized production build:

```bash
npm run build
```

This should complete successfully with output like:

```
Compiled successfully.
File sizes after gzip:
  164.52 kB  build/static/js/main.xxxxx.js
```

### 3. Test the Production Build

Optionally, you can test the production build locally:

```bash
# Install serve globally (one time only)
npm install -g serve

# Serve the build folder
serve -s build
```

Visit `http://localhost:3000` to test the production build.

### 4. Deploy to GitHub Pages

Deploy your site with a single command:

```bash
npm run deploy
```

This command will:

1. Run `npm run build` to create a production build
2. Deploy the build folder to the `gh-pages` branch
3. Push to GitHub

**Note**: This requires the `gh-pages` package which is already installed.

### 5. Configure GitHub Repository

After the first deployment:

1. Go to your GitHub repository: `https://github.com/junioresc/junioresc.github.io`
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### 6. Verify Deployment

After a few minutes, your site should be live at:

**https://junioresc.github.io/**

Check:

- ✅ Site loads correctly
- ✅ All styles are applied
- ✅ Images load properly
- ✅ Navigation works
- ✅ Links work correctly

## Branch Strategy

### Current Setup

- `development` branch - Your working branch (where you are now)
- `main` branch - Production-ready code
- `gh-pages` branch - Auto-generated, contains built files

### Recommended Workflow

1. **Make changes** in `development` branch
2. **Test locally** with `npm start`
3. **Build and test** with `npm run build`
4. **Deploy** with `npm run deploy` (deploys from current branch)
5. When ready, **merge** `development` → `main`

## Continuous Deployment

Every time you run `npm run deploy`, your site will update automatically!

### Quick Update Workflow

```bash
# 1. Make your changes
# ... edit files ...

# 2. Test locally
npm start

# 3. Deploy
npm run deploy
```

That's it! Your changes will be live in 1-2 minutes.

## Troubleshooting

### Issue: "Failed to get remote.origin.url"

**Solution**: Make sure you're in a git repository and have a remote origin:

```bash
git remote -v
# Should show: origin  https://github.com/junioresc/junioresc.github.io.git
```

### Issue: "Permission denied"

**Solution**: Make sure you're authenticated with GitHub:

```bash
# Use GitHub CLI or generate a personal access token
gh auth login
```

### Issue: Site shows old version

**Solution**: Clear your browser cache or use hard refresh:

- Chrome/Edge: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Firefox: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

### Issue: 404 Error on refresh

**Solution**: This is expected for GitHub Pages with client-side routing. The homepage field in `package.json` is correctly set to `"http://junioresc.github.io/"` which should handle this.

### Issue: Images not loading

**Solution**: Make sure all image imports use the correct path:

```javascript
import imageName from '../../assets/images/screenshots/image.png'
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder:

   ```
   your-domain.com
   ```

2. Update `package.json`:

   ```json
   "homepage": "https://your-domain.com"
   ```

3. Configure DNS with your domain provider:

   - Add A records pointing to GitHub's IPs
   - Or add a CNAME record pointing to `junioresc.github.io`

4. Redeploy:
   ```bash
   npm run deploy
   ```

## Environment Variables (If Needed)

If you need environment variables for production:

1. Create `.env.production` file
2. Add variables with `REACT_APP_` prefix
3. Use in code: `process.env.REACT_APP_YOUR_VAR`
4. Never commit sensitive data - use GitHub Secrets for sensitive values

## Monitoring

After deployment, monitor:

- **GitHub Actions** (if configured) for build status
- **Browser console** for any errors
- **Network tab** to ensure all resources load
- **Lighthouse** in Chrome DevTools for performance metrics

## Next Steps

- ✅ Portfolio is modernized with React 18 and Material UI
- ✅ Ready to deploy to GitHub Pages
- 🎯 Run `npm run deploy` when ready
- 🎯 Update resume PDF when needed
- 🎯 Add new projects to the portfolio
- 🎯 Keep dependencies updated

---

**Need Help?**

- Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review the [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)
- Contact: junioresc1092@gmail.com
