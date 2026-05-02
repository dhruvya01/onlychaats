# Only Chaats

A modern, neo-brutalist landing page for Only Chaats, featuring easy ordering via Swiggy, Zomato, and WhatsApp.

## 🚀 Local Development

Follow these steps to run the project locally on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download the repository.
2. Open your terminal in the project root directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

## 📦 Deployment to GitHub Pages

This project is pre-configured for automatic deployment to GitHub Pages using GitHub Actions.

### Steps to Deploy:

1. **Push to GitHub**: Push your code to a GitHub repository.
2. **Enable Actions**: 
   - Go to your GitHub repository's **Settings** tab.
   - Click on **Pages** in the left sidebar.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. **Trigger Workflow**: The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your app every time you push to the `main` branch.

### Customizing for Production

If you are hosting on a custom domain (like `onlychaats.in`), ensure that `vite.config.ts` has `base: '/'`. 
If you are hosting on a GitHub subpath (e.g., `username.github.io/repository-name/`), use `base: '/repository-name/'`.
Current configuration is set to `base: '/'` for the custom domain.

## 🌐 Custom Domain Setup (onlychaats.in)

To host this on your custom domain using GitHub Pages:

### Step 1: DNS Configuration
Log in to your domain provider (e.g., GoDaddy) and add these records:
- **A Records** (Point `@` to these IPs):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **CNAME Record**:
  - Host: `www`
  - Value: `YOUR_GITHUB_USERNAME.github.io` (Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)

### Step 2: GitHub Settings
1. Go to **Settings > Pages** in your GitHub repo.
2. Under **Custom domain**, enter `onlychaats.in`.
3. Check **Enforce HTTPS**.

### Troubleshooting Photos Not Loading
If images are not showing up on GitHub Pages:
1. **Latest Configuration**: We have successfully updated the app to use **Direct Imports for Images**. The images are now stored in `src/images/` and imported automatically by Vite. This means Vite explicitly manages their URLs during the build process, guaranteeing they always load regardless of your hosting setup (custom domain or GitHub subpath).
2. **Push the files**: Double-check that all files, especially the `src/images/` folder, have been successfully pushed to GitHub.
3. **Wait for Build**: After you push to GitHub, it takes about a minute for the "Actions" to build and deploy the new code. Watch for the green checkmark in the Actions tab.
4. **Browser Cache**: Your browser might be stuck on the old "broken" version of the site. Try a **Hard Refresh** (Ctrl+F5 or Cmd+Shift+R) or open in **Incognito mode**.

### Troubleshooting `InvalidDNSError` or Action "Red Cross" Failures
If GitHub shows a DNS error, or if your **Deploy to GitHub Pages** Action fails with a Red Cross:

1. **Enable GitHub Actions for Pages:**
   - Go to your repository on GitHub.
   - Click the **⚙️ Settings** tab.
   - On the left sidebar, click **Pages**.
   - Under **Build and deployment**, find the **Source** dropdown.
   - Change it from "Deploy from a branch" to **GitHub Actions**.
   - *This is the most common reason the deployment step fails!*

2. **Wait for DNS:** If you're using `onlychaats.in`, it can take up to 24 hours for DNS changes to propagate globally.
1. **Verification**: DNS changes can take up to 24 hours. Check progress at [whatsmydns.net](https://www.whatsmydns.net/).
2. **A Records**: Ensure you have created **all four** A records for the Apex domain (`onlychaats.in`) pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **CNAME for WWW**: Ensure you have a CNAME record for the `www` host pointing to `YOUR_GITHUB_USERNAME.github.io`.
4. **GitHub Settings**: In your repo's **Settings > Pages**, the custom domain should be set to `onlychaats.in`. GitHub will automatically check the DNS and issue an SSL certificate.

### Troubleshooting: GitHub Actions "Failures"
If the workflow fails with a permission error:
1. Go to **Settings > Actions > General**.
2. Scroll to **Workflow permissions**.
3. Select **Read and write permissions** and click **Save**.
(Note: The included workflow file already requests these, but some organizations require manual approval).

---

Made with ❤️ for Only Chaats.
Built by [Reguluslabs.in](https://reguluslabs.in)
