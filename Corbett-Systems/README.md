# Kevin-Brandon Corbett — Portfolio

Personal portfolio site for Kevin-Brandon Corbett — AI Engineer, Game Developer, and XR Engineer.

Live at **[kevincorbett.dev](https://kevincorbett.dev)** *(or your `.replit.app` domain until a custom domain is set)*

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Monorepo | pnpm workspaces |
| Runtime | Node.js 24 |

## Project structure

```
artifacts/portfolio/   # Main portfolio web app (React + Vite)
artifacts/api-server/  # Express API server (unused in production build)
lib/                   # Shared workspace libraries
scripts/               # Utility scripts
```

## Running locally

```bash
# Install dependencies
pnpm install

# Start the portfolio dev server
pnpm --filter @workspace/portfolio run dev

# Typecheck
pnpm --filter @workspace/portfolio exec tsc --noEmit
```

## Featured projects

- **SEA-GUARD** — Multi-agent reinforcement learning for autonomous surface vessels (Python, PyTorch, PPO)
- **Inquiry Engine** — LLM pipeline: transcript → claims → steelman arguments → evidence layer (Python, NLP, MLOps)
- **Quantum Strike** — Mixed reality action game with an OpenAI + ElevenLabs AI companion (Unity, C#, LLM)

## License

MIT — see [LICENSE](./LICENSE)
