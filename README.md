# CardScout AI — Safe Professional Version

This version simplifies the website and makes the language safer for public/free use.

## What changed

- Cleaner navigation: Home, Discover, Scan, Collection, Favorites, Market, Profile, Safety
- Removed confusing Pro tabs from the main navigation
- Replaced risky language like “profit guarantee” and “investment advice” with safer research terms
- Added safety-first Terms and Privacy summaries
- Added disclaimers to reduce risk
- Added value ranges instead of exact profit promises
- Added confidence levels and risk explanations
- Added marketplace search links for card verification
- Kept the premium dark design
- Works on desktop, iPad, and iPhone
- PWA files included for Add to Home Screen
- Service worker included for future push notification support

## How to update your Vercel website

1. Unzip this folder.
2. Open your GitHub repository.
3. Upload/replace these files:
   - index.html
   - manifest.json
   - service-worker.js
   - icon-192.png
   - icon-512.png
   - README.md
4. Click Commit changes.
5. Vercel should automatically redeploy.
6. Open your Vercel URL to test.

## How to install on iPhone/iPad

1. Open your Vercel website in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Name it CardScout AI.
5. Tap Add.

## Push notifications: what is included now

This package includes:

- manifest.json
- service-worker.js
- browser notification permission test button
- Profile page notification instructions

This is enough for a basic PWA notification framework, but not enough for real deal alerts yet.

## Steps to add real push notifications

### Step 1 — Make sure the site is live on Vercel
You need a real HTTPS URL, such as:

https://your-site.vercel.app

### Step 2 — Add real accounts
Use Supabase Auth so each user has a secure account.

Create Supabase tables:

- profiles
- cards
- favorites
- push_subscriptions
- alerts
- research_candidates

### Step 3 — Save browser push subscriptions
Add a button: Enable Alerts.

When clicked:

1. Ask for notification permission.
2. Register the service worker.
3. Create a push subscription.
4. Save the subscription in Supabase under the current user.

### Step 4 — Add a backend send-alert function
Create an API route or Supabase Edge Function that uses the web-push npm package.

It should:

1. Read saved subscriptions.
2. Send a notification when an alert is created.
3. Remove expired subscriptions.

### Step 5 — Add VAPID keys
Generate web push VAPID keys.

Store them as environment variables in Vercel:

- NEXT_PUBLIC_VAPID_PUBLIC_KEY
- VAPID_PRIVATE_KEY
- VAPID_SUBJECT

### Step 6 — Create alert rules
Only send notifications for important alerts:

- Strong research candidate found
- Favorite player card appears
- Estimated price drops below target range
- Collection card reaches sell/watch target

### Step 7 — Add scheduled scanning
Use Vercel Cron or Supabase scheduled functions.

Recommended free starting point:

- Run once daily
- Later upgrade to every few hours

## Important legal note

This package includes basic safety language, but it is not legal advice. If you make the website public or monetize it, have an attorney review the Terms of Service, Privacy Policy, disclaimers, refund policy, and business setup.
