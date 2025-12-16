# Deployment Guide

## Your website is ready to go live!

### What's Already Done ✓
- Git repository initialized and configured
- All code pushed to GitHub: https://github.com/revarrOS/revarr-website
- Project successfully builds
- Vercel configuration file in place

---

## Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Connect to Vercel
1. Go to https://vercel.com/
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository
1. Click "Add New..." → "Project"
2. Find and select **revarr-website** from your repository list
3. Click "Import"

### Step 3: Configure Environment Variables
Before deploying, add your Supabase environment variables:

1. In the Vercel import screen, expand "Environment Variables"
2. Add these variables (get values from your `.env` file):
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://your-project-name.vercel.app`

### Step 5: Add Custom Domain (Optional)
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., revarr.com)
3. Follow the DNS configuration instructions provided by Vercel

---

## Alternative: Deploy to Netlify

### Step 1: Connect to Netlify
1. Go to https://app.netlify.com/
2. Sign up or login with GitHub
3. Click "Add new site" → "Import an existing project"

### Step 2: Configure Build Settings
1. Choose GitHub and select **revarr-website**
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

### Step 3: Deploy
1. Click "Deploy site"
2. Your site will be live in 2-3 minutes

---

## Important Notes

### Supabase Configuration
Your authentication system is already set up and will work once deployed. Make sure to:
1. Add your production domain to Supabase's allowed redirect URLs
2. Go to your Supabase dashboard → Authentication → URL Configuration
3. Add your Vercel/Netlify domain to "Site URL" and "Redirect URLs"

### Automatic Deployments
Every time you push to the `main` branch on GitHub, your site will automatically redeploy with the latest changes.

---

## Need Help?
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com
- Supabase Documentation: https://supabase.com/docs
