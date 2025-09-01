# Polymers Web App - ESG Dashboard & Frontend

Version 1.0.0 beta – Fully production-ready, interactive web platform for ESG tracking, tokenized recycling, and reward management.

⸻

## Overview

Polymers Network is a gamified, blockchain-powered recycling ecosystem that transforms waste into rewards. We make every plastic and e-waste item a verifiable digital asset, rewarding consumers with PLY, RECO, and CRT tokens while providing businesses with traceable ESG data and carbon credits.
This web platform powers the consumer dApp, corporate ESG dashboard, and DePIN node management.

⸻

### Key Features
	•	Corporate Dashboard – Live PLY/CRT balances, stake/burn tokens, and Carbon Offset History
	•	NFT Badges & Gamification – Particle effects and animated badges for ESG milestones
	•	Leaderboards for Recyclers – Global and local rankings to encourage engagement
	•	Social Badge Sharing – Share achievements and ESG badges on social media
	•	DePIN IoT Network Integration – Real-time verification and network expansion
	•	Multi-Chain Wallet Support – Solana, SUI, and Ethereum
	•	Real-Time On-Chain Verification – Solana Pay + Helius events for live updates
	•	Analytics & Reports – ESG metrics, carbon offsets, audit trails
	•	Responsive Design – Mobile-friendly, touch-friendly, professional UI/UX

⸻

## Architecture

graph TB
    subgraph "Frontend Layer"
        Dashboard[**Corporate Dashboard<br/>React + Tailwind**]
        Analytics[**Charts & Analytics<br/>Recharts / D3.js**]
        Wallets[**Multi-Chain Wallet Connect<br/>Solana / SUI / Ethereum**]
        Notifications[**SMS / Email Alerts<br/>Twilio / Resend**]
    end

    subgraph "Context & State Management"
        Rewards[**RewardsContext<br/>PLY/CRT Balances + NFT Badges**]
        UIState[**UIStateContext<br/>ParticleEngine / Badge Animations**]
    end

    subgraph "Backend APIs"
        REST[**REST / GraphQL Endpoints**]
        Auth[**Authentication<br/>JWT + OAuth + Clerk**]
        Blockchain[**Solana / SUI RPC Nodes**]
        Storage[**IPFS / Arweave**]
    end

    Dashboard --> Rewards
    Dashboard --> UIState
    Dashboard --> REST
    REST --> Blockchain
    REST --> Storage
    Analytics --> REST
    Wallets --> Blockchain


⸻

### Flow
	1.	Corporate user connects wallet → dashboard displays live PLY/CRT balances
	2.	User stakes/burns CRT → ParticleEngine animation triggers + NFT badges unlock
	3.	Transaction processed on-chain → TX hash logged → copy-to-clipboard for audits
	4.	Leaderboards update in real-time → users can share badges on social media
	5.	Dashboard updates live with ESG metrics, carbon offsets, and gamified feedback

⸻

## Setup Instructions

#### Clone repository
git clone <repository-url>
cd polymers-web-dashboard

#### Install dependencies
npm install
#### or
yarn install

#### Start frontend development
npm run dev
#### or
yarn dev

## Environment Variables – create .env.local in root:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SOLANA_RPC=https://api.devnet.solana.com
NEXT_PUBLIC_HELIUS_API_KEY=your_helius_api_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
RESEND_API_KEY=your_resend_api_key
CIRCLE_API_KEY=your_circle_api_key
VITE_PLY_MINT=your_ply_token_mint_address
VITE_CRT_MINT=your_crt_token_mint_address


⸻

## Folder Structure

/frontend
├─ /components      # UI components (AnimatedBadge, ParticleEngine, Charts)
├─ /context         # RewardsContext, UIStateContext
├─ /hooks           # Custom hooks (useWallet, useRewards, useLeaderboards)
├─ /pages           # Next.js pages (Dashboard, Analytics, Settings)
├─ /services        # API services, blockchain integration
├─ /utils           # Utility functions, formatters
├─ /constants       # Token addresses, colors, config


⸻

## Technology Stack

Frontend: React 18 + Next.js, TypeScript, Tailwind CSS, Zustand
Blockchain: Solana RPC + Helius, SPL tokens (PLY/CRT), Metaplex NFTs
Authentication: Clerk + OAuth, JWT
Notifications: Resend (Email), Twilio (SMS)
Analytics & Graphs: Recharts / D3.js
Storage: IPFS + Arweave

⸻

## Gamification
	•	ParticleEngine animations for reward events
	•	AnimatedBadge unlocks for ESG milestones
	•	Leaderboards: Global, local, and corporate team rankings
	•	Social Badge Sharing: Share achievements directly to social media
	•	Reward multipliers for streaks, volume, quality, and referrals

⸻

## Security
	•	Multi-chain wallet integration with secure key handling
	•	Blockchain verification for every stake/burn
	•	Copyable TX hashes for audit and compliance
	•	GDPR-compliant and encrypted data transmissions

⸻

## Roadmap
	•	Phase 1: Corporate dashboard + live PLY/CRT balances
	•	Phase 2: NFT badges, particle effects, gamification, leaderboards
	•	Phase 3: Multi-chain support, advanced analytics, social sharing
	•	Phase 4: IoT integration and environmental impact monitoring

⸻

## Impact
	•	Track carbon offsets & ESG contributions in real-time
	•	Transparent reward distribution and audit trail
	•	Enable corporate sustainability programs globally

⸻

Built for a greener future with blockchain-powered transparency.
