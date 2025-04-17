# 💼 Personal Dynamic Portfolio

A visually stunning, interactive portfolio website with a clean admin panel for adding and editing projects and past experiences — all without a database.

## ✨ Features

- 🧑‍💻 **Projects Section**  
  Beautiful, animated grid of project cards with:
  - Title, description, image/screenshot
  - GitHub and live demo links
  - Hover effects and fade-in animations
  - Editable (add/edit/delete) when logged in

- 🕒 **Past Experience Section**  
  Timeline or stacked-card layout showing past job roles, companies, and achievements.  
  - Editable when logged in
  - Optional logos, bullet-point achievements
  - Slide/fade animations

- 🔐 **Secure Admin Login (No DB Needed)**  
  - Click the small lock icon in the top-right corner to login
  - Once logged in:
    - Add/edit/delete projects and experiences
    - Changes persist during session (in memory/localStorage)

- 🌙 **Dark Mode Toggle**
- 📱 Fully responsive
- ⚡ Smooth animations and transitions throughout

---

## 🛠 Getting Started

### ⚙️ Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- Node.js `v22.0.0`

### 🔧 Installation

```bash
nvm use 22.0.0
npm install --legacy-peer-deps
npm run dev
