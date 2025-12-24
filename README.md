# Flowify Deploy

This repository is used for **deploying and testing the Flowify music application** using automated CI/CD with GitHub Actions and GitHub Pages.

⚠️ **Note:**  
This is **not the main development repository** of Flowify.  
It exists specifically to validate builds and handle deployment of the production-ready frontend.

---

## 🎶 About Flowify

**Flowify** — your personal world of music flow.  
Discover, listen, and create playlists that match your vibe 🎧

Flowify is a next-generation music streaming platform built with modern web technologies, focused on personalization, performance, and emotional connection to music.

### 🌟 Core Experience

- Discover trending music & playlists
- Create and manage personal playlists
- Explore tracks, artists, and albums
- Enjoy a smooth UI with dark & light mode
- Personalized music experience built around your vibe

---

## 💥 Flowify Features

- 🧑‍🎤 User profiles & personalized dashboards  
- 🎵 Playlist creation & sharing  
- 🔍 Smart search for tracks, albums & artists  
- ❤️ Like, follow, and save favorite songs  
- 🌗 Dark / Light mode  
- ⚙️ Built for scalability and speed  

---

## 🛠 Tech Stack (Main App)

| Category | Technologies |
|--------|-------------|
| Frontend | React / Next.js / TailwindCSS / Framer Motion |
| Backend | Node.js / Express / Prisma / PostgreSQL |
| Auth | JWT / OAuth 2.0 (Spotify, Google) |
| Storage | AWS S3 / Cloudinary |
| Music APIs | Spotify Web API / Deezer API |
| Deployment | Vercel / Docker / Railway |

---

## 🚀 Purpose of This Repository

This repository is responsible for:

- ✅ Building the Flowify frontend
- 🧪 Testing production builds
- 🌐 Deploying the app via **GitHub Pages**
- 🔁 Automatically redeploying on pushes to `main`

Deployment is handled using **GitHub Actions**.

---

## 🌍 Live Deployment

🔗 **Flowify (Deployment Preview):**  
https://nlklfor.github.io/flowify-deploy/

*(This deployment is for testing and preview purposes.)*

---

## 🔄 Deployment Workflow

On every push to the `main` branch:

1. Dependencies are installed
2. The app is built (`npm run build`)
3. The `dist` folder is uploaded
4. GitHub Pages publishes the site automatically

---

## 📌 Main Application Repository

👉 **Flowify (Main App Source Code):**  
https://github.com/yourusername/flowify  
*(Replace with the actual repository link if different.)*

---

## 🧠 Notes

- This repo may contain deployment-specific configs only
- No backend services are deployed from here
- Used primarily for CI/CD validation and preview builds

---

## 📫 Contact

If you have questions about Flowify or its deployment setup, feel free to open an issue.

🎶 Built with passion for music & clean code
