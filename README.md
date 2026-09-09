# ORDI LP website

Static website prepared for GitHub Pages at `https://www.ordifund.com`.

## Publish on GitHub Pages

1. Create a new GitHub repository and upload the **contents of the `dist` folder** to the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. Under **Custom domain**, enter `www.ordifund.com` and save.
5. At your domain registrar, add a `CNAME` record for `www` pointing to `<your-github-username>.github.io`.
6. Add the four GitHub Pages `A` records for the root domain (`@`) if you also want `ordifund.com` to redirect to `www.ordifund.com`. Use the current values shown in GitHub's official custom-domain documentation.
7. When GitHub confirms the DNS check, enable **Enforce HTTPS**.

## Activate the inquiry form

The site uses Formspree so the destination email address does not appear in the public HTML or JavaScript.

1. Create a form at https://formspree.io and set its notification recipient to `info@ordifund.com`.
2. Copy the form ID from the endpoint Formspree provides.
3. In `dist/index.html`, replace `REPLACE_WITH_FORM_ID` with that ID.
4. In Formspree, restrict submissions to `https://www.ordifund.com` if your plan supports domain restrictions.
5. Enable Formspree's spam filtering/reCAPTCHA option if available for your plan.

Built-in protections include a hidden honeypot, a minimum completion-time check, browser validation, length limits, and no exposed ORDI email address. Client-side controls reduce basic bot traffic, but the form provider's server-side filtering is the main protection.

## Files

- `dist/index.html` — page content and inquiry form
- `dist/styles.css` — design and responsive layout
- `dist/script.js` — navigation and anti-spam checks
- `dist/favicon.svg` — browser-tab icon
- `dist/CNAME` — GitHub Pages custom domain
- `dist/.nojekyll` — disables Jekyll processing
