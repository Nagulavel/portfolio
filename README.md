# Nagulavel M — Portfolio

Dark-themed, animated portfolio built with Next.js 14. Ready for Vercel deployment.

---

## 🚀 How to Deploy (Step by Step)

### Step 1 — Install Node.js
Download from: https://nodejs.org (choose LTS version)

### Step 2 — Set up the project
Open a terminal/command prompt in the project folder and run:
```
npm install
```

### Step 3 — Test locally
```
npm run dev
```
Open http://localhost:3000 to see your site!

### Step 4 — Deploy to Vercel
1. Go to https://vercel.com and sign up (use GitHub login)
2. Push this folder to a GitHub repository
3. In Vercel, click "New Project" → Import your GitHub repo
4. Click Deploy — done! 🎉

---

## 📸 Adding Your Own Images

Replace the placeholder images in these files:

| File | What to replace |
|------|----------------|
| `components/About.js` | The `src` in the `<img>` tag (About section background) |
| `components/Services.js` | The `src` in the `<img>` tag (Services section background) |

Just drop your AI-generated images into the `public/` folder and reference them as `/your-image.jpg`

Example:
```
src="/my-about-bg.jpg"
```

---

## ✏️ Updating Your Content

All your personal data is easy to find and edit:

| What | File |
|------|------|
| Name, tagline, typing phrases | `components/Hero.js` |
| About text & stats | `components/About.js` |
| Skills list & levels | `components/Skills.js` |
| Projects | `components/Projects.js` |
| Services | `components/Services.js` |
| Email, LinkedIn, GitHub | `components/Contact.js` |

---

## 🎨 Changing Colors

Open `app/globals.css` and edit the `:root` section:
```css
--accent: #7c6dfa;   /* Purple — main accent color */
--accent2: #fa6d9a;  /* Pink — secondary accent */
--bg: #060608;       /* Background */
```

---

## 📦 Tech Stack
- Next.js 14 (App Router)
- Pure CSS animations (no extra libraries needed)
- Google Fonts: Bebas Neue + Syne + DM Sans
- Deployed on Vercel
