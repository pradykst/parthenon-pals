# Parthenon Pals

Parthenon Pals is a web-based battle game built on the Movement Network.  
Each player owns a cute on-chain companion called a Pal, tied to a guild.  
You train your Pal through fast mini-games, battle other players and climb on-chain leaderboards.

The project is built for the **Movement M1 Hackathon** and targets:

- Best Gaming App on Movement  
- The People's Choice  
- Best App on Movement using Privy Wallets  

Crypto is used to make progress persistent, battles verifiable and tournaments real—not to gate basic gameplay.
<img width="2816" height="1536" alt="Gemini_Generated_Image_qs2ulgqs2ulgqs2u" src="https://github.com/user-attachments/assets/55d40e4f-d088-4b07-b74c-c3d8512e46ad" />

## Table of contents

- [Concept](#concept)
- [Core features](#core-features)
- [High-level architecture](#high-level-architecture)
- [Tech stack](#tech-stack)
- [Move modules](#move-modules)
- [Game flow](#game-flow)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment variables](#environment-variables)
  - [Install and run](#install-and-run)
- [Development notes](#development-notes)
- [Roadmap](#roadmap)
- [Hackathon checklist](#hackathon-checklist)
- [License](#license)

---

## Concept

Parthenon Pals takes inspiration from Movement's guild and quest culture.  
Every user mints a Pal NFT that belongs to a guild archetype and has basic stats.

### The core loop

1. Sign in with email or social login using Privy embedded wallets.  
2. Privy creates a wallet on Movement for the player in the background.  
3. The player mints a free starter Pal NFT on Movement testnet.  
4. The player enters quick mini-games and battles that take about 60 to 90 seconds.  
5. Results are resolved deterministically and written on-chain: XP, wins, losses and seasonal ranking.  
6. Seasonal guild tournaments use smart contracts that pool entry fees and pay out rewards.

---

## Core features

- **One-click onboarding** with Privy embedded wallets  
- **On-chain Pal NFTs** with guild, rarity and stat data in Move resources  
- **Match results recorded on Movement** so leaderboards are verifiable  
- **Seasonal tournaments** with prize pools and guild-based scoring  
- **Cosmetic NFT items** (skins, frames, arenas) for monetization  
- **Web-first UX** that runs in a browser and is mobile-friendly  
- **Gas-sponsored experience** for the first few actions to keep onboarding smooth

---

## High-level architecture

### Monorepo layout

- **`contracts/`**  
  Move modules that define Pals, battles and tournaments.

- **`web/`**  
  Next.js 15 app that handles UI, game logic, wallet integration and calls into Movement.

### Architecture pieces

#### Front end
- Next.js (App Router) with React and Tailwind  
- Game scenes are client-side components  
- Simple state management with React Context or Zustand  

#### Wallets and auth
- Privy React SDK for authentication and embedded wallets  
- On login, the app checks for an existing Movement wallet and creates one if needed  

#### On-chain layer (Movement)
- Move modules for Pals, battles and tournaments  
- Requests sent from the front end through a simple TypeScript Movement client  

#### Optional backend
- Next.js API routes used as a thin coordinator for things like matchmaking or anti-abuse checks  
- No gameplay-critical state is trusted off-chain; final authority is on-chain

---

## Tech stack

- **Blockchain**: Movement M1 testnet  
- **Smart contracts**: Move language  
- **Wallets and auth**: Privy embedded wallets (React SDK)  
- **Front end**: Next.js, React, TypeScript, Tailwind CSS  
- **State and data**: React Query or SWR for RPC data fetching, Zustand or Context for local game state  
- **Tooling**: Movement CLI, pnpm, ESLint, Prettier

---

## Move modules

Planned modules in `contracts/`:

### 1. `pals.move`
- Struct `Pal { id, owner, guild, level, xp, base_attack, base_defense, cosmetic_id }`  
- Functions to mint starter Pal, update XP and level up  

### 2. `battle.move`
- Battle request object with participants, seed and outcome  
- Function that takes Pal IDs and a random seed, computes the winner and writes result  

### 3. `tournament.move`
- Simple seasonal tournament  
- Players pay a small entry fee  
- Contract tracks wins per Pal and guild  
- At the end of the season, prize pool is split among top-ranked players or guild

The exact module structure can evolve during the hackathon, but the goal is to keep logic small and auditable.

---

## Game flow

### 1. Landing page
- Short explanation  
- **"Play now"** button that triggers Privy login  

### 2. Onboarding
- User signs in with email or social  
- Privy creates a Movement wallet behind the scenes  
- The app claims a starter Pal NFT for the user

### 3. Home lobby
- Shows Pal details and guild  
- Buttons: **Play quick match**, **Train** (single-player mini-game), **View leaderboard**, **Join tournament**  

### 4. Match
- Player enters a battle queue  
- For checkpoint builds this can be a simple local simulation vs bot  
- Front end sends battle request with chosen actions and a seed  
- Move module computes result and updates Pal stats  

### 5. Leaderboard and tournaments
- On-chain stats are read through RPC and rendered as guild and global rankings  
- Seasonal tournaments show a countdown and prize pool size

---

## Getting started

### Prerequisites

- Node.js 20 or later  
- pnpm or yarn  
- Movement CLI and access to Movement testnet RPC  
- Privy account with a React app configured

**Useful links:**

- [Movement docs](https://docs.movementnetwork.xyz)  
- [Movement developer portal](https://developer.movementnetwork.xyz)  
- [Privy docs](https://docs.privy.io)

### Environment variables

Create a `.env.local` file inside `web/`:

```env
# Privy
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id

# Movement
NEXT_PUBLIC_MOVEMENT_RPC_URL=https://rpc.testnet.movementnetwork.xyz
NEXT_PUBLIC_MOVEMENT_CHAIN_ID=your_chain_id

# Optional, for tournament entry fees or admin actions
NEXT_PUBLIC_TREASURY_ADDRESS=0x...
```

Values will change depending on the exact RPC and chain configuration provided by Movement during the hackathon.

### Install and run

From the root of the repo:

```bash
# Install dependencies
pnpm install

# Build Move modules
cd contracts
movement-cli build

# Run Next.js app
cd ../web
pnpm dev
```

Visit `http://localhost:3000` to see the app.

---

## Development notes

### Match making
For early versions, matchmaking can be kept simple:
- Player vs AI where AI choices are deterministic  
- Or quick matches against their own previous runs  

### Game logic
Game logic should always be reproducible by the on-chain code:
- Use a seeded random generator  
- Avoid relying on client-only randomness  

### First playable milestone
The first playable milestone includes:
1. Login with Privy  
2. Mint starter Pal  
3. Play a single training mini-game  
4. Update XP on-chain and reflect it in the UI  

---

## Roadmap

### Checkpoint 1
- Finalize game concept and UX flow  
- Set up repository, Next.js scaffold and Privy integration  
- Write first version of `pals.move` and deploy to Movement testnet  

### Checkpoint 2
- Implement training mini-game  
- Hook Pal minting and XP rewards to on-chain module  
- Basic leaderboard reading from chain  

### Checkpoint 3
- Implement real battles and deterministic resolution  
- Add seasonal tournament contract and simple entry flow  
- Wire up cosmetic NFTs  

### Final submission
- Polish UI and add responsive design  
- Integrate full game loop  
- Prepare recorded demo and deploy a public testnet instance  

---

## Hackathon checklist

- [ ] Deployed Move modules to Movement M1 testnet  
- [ ] Front end live and connected to Movement RPC  
- [ ] Privy embedded wallet integration working in production build  
- [ ] At least one fully on-chain game action from login to leaderboard update  
- [ ] Demo account with pre-funded testnet tokens  
- [ ] Clear instructions for judges in the README and on the landing page  

---

## License

This repository is released under the MIT License. See `LICENSE` for details.
