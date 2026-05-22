# Kevin-Brandon Corbett — Career Portfolio

Personal portfolio website for Kevin-Brandon Corbett — AI Engineer, Game Developer, and XR Engineer.

## 🚀 Live Site
The portfolio is deployed and live at:
### **👉 [kevincorbett.dev](https://kevincorbett.dev)**

---

## 🛠️ Stack & Architecture

This repository is set up as a **pnpm monorepo** containing the frontend web application and libraries:

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + Vite + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion |
| **Monorepo** | pnpm workspaces |
| **Runtime** | Node.js 24 |

### Project Layout
- [`Corbett-Systems/artifacts/portfolio/`](./Corbett-Systems/artifacts/portfolio/) — Main portfolio React + Vite web application
- [`Corbett-Systems/lib/`](./Corbett-Systems/lib/) — Shared workspace libraries and packages

---

## 🌟 Featured Projects

- **SEA-GUARD** — Multi-agent reinforcement learning for autonomous surface vessels (Python, PyTorch, PPO)
- **Inquiry Engine** — LLM pipeline: transcript → claims → steelman arguments → evidence layer (Python, NLP, MLOps)
- **Quantum Strike** — Mixed reality action game with an OpenAI + ElevenLabs AI companion (Unity, C#, LLM)

---

## 💻 Running Locally

To run the project locally:

1. **Install dependencies:**
   ```bash
   cd Corbett-Systems
   pnpm install
   ```

2. **Start the portfolio dev server:**
   ```bash
   pnpm --filter @workspace/portfolio run dev
   ```

3. **Run typechecking:**
   ```bash
   pnpm --filter @workspace/portfolio exec tsc --noEmit
   ```

---

## 📄 License

MIT — see [LICENSE](./Corbett-Systems/LICENSE)
