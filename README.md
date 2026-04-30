# Tradecraft

Music and visual production studio built for the AI era.

## About

Tradecraft produces original music, cinematic music videos, and visual effects for independent artists and content creators. We combine a decade of feature-film experience with a modern AI/real-time production stack -- Kling AI, ComfyUI, Unreal Engine 5, Blender, Ableton Live, DaVinci Resolve, and a full suite of industry-standard VFX and post-production tools.

Major-label quality at indie-label cost. Our own artists are in production -- new music drops soon.

## Tech stack

- Vue 3 + Vue Router + Vuex
- Vite build tooling
- GSAP for animations
- Git LFS for video assets
- GitHub Pages hosting (auto-deployed via GitHub Actions)

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build runs `vite build` and then a post-build script (`scripts/post-build.js`) before the artifact is published.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push t