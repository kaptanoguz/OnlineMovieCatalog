[README.md](https://github.com/user-attachments/files/25561982/README.md)
# 🎬 Online Movie Catalog

A beautiful desktop application to browse, discover, and track movies and TV shows.

![Electron](https://img.shields.io/badge/Electron-33-47848F?style=flat&logo=electron)
![TMDB](https://img.shields.io/badge/Powered%20by-TMDB-01d277?style=flat)
![License](https://img.shields.io/badge/License-ISC-blue)

## ✨ Features

- 🔍 **Search & Discover** — Browse thousands of movies and TV shows from TMDB
- 🎯 **Smart Filtering** — Filter by genre, year, rating, popularity, and more
- 🤖 **AI Analysis** — Get AI-powered movie analysis using Grok (xAI)
- ⭐ **Wishlist** — Save movies and shows to your personal list
- 🎬 **Trailers** — Watch trailers directly from YouTube
- 📦 **Collections** — See related movies in a series
- 💬 **Reviews** — Read top community reviews
- 🔗 **Watch Options** — Find where to stream, rent, or buy
- 🌍 **Multi-language** — Turkish and English interface
- 🎲 **Random Picks** — Get random movie recommendations
- 📜 **Infinite Scroll** — Continuously load more content as you scroll

## 📥 Installation

### Linux (.deb)

Download the latest `.deb` file from [Releases](https://github.com/kaptanoguz/OnlineMovieCatalog/releases) and install:

```bash
sudo dpkg -i online-movie-catalog_1.2.6_amd64.deb
```

### From Source

```bash
git clone https://github.com/kaptanoguz/OnlineMovieCatalog.git
cd OnlineMovieCatalog
npm install
npm start
```

## ⚙️ Configuration

### AI Analysis (Optional)
To use the AI movie analysis feature:
1. Get a free API key from [xAI Console](https://console.x.ai)
2. Open Settings (⚙️) in the app
3. Paste your API key in the "Grok (xAI) API Key" field

## 🛠️ Build

```bash
npm run build:linux    # Build .deb package
```

## 📸 Screenshots

*Launch the app and start discovering your next favorite movie!*

## 🙏 Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- AI analysis powered by [xAI Grok](https://x.ai/)
- Built with [Electron](https://www.electronjs.org/)
