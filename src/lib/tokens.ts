/**
 * Token utilities and constants for the Polymers ecosystem
 */

// Token types
export enum TokenType {
  PLY = 'PLY',
  RECO = 'RECO',
  CRT = 'CRT',
  SOL = 'SOL',
  USDC = 'USDC',
}

// Token metadata
export interface TokenInfo {
  symbol: string;
  name: string;
  decimals: number;
  color: string;
  icon: string; // Can be emoji, URL, or local asset
}

export const TOKEN_INFO: Record<TokenType, TokenInfo> = {
  [TokenType.PLY]: {
    symbol: 'PLY',
    name: 'Polymers',
    decimals: 9,
    color: 'hsl(var(--poly-green))',
    icon: '/assets/ply.png',
  },
  [TokenType.CRT]: {
    symbol: 'CRT',
    name: 'Carbon Credits',
    decimals: 9,
    color: 'hsl(var(--carbon-blue))',
    icon: '/assets/CRT.png',
  },
  [TokenType.SOL]: {
    symbol: 'SOL',
    name: 'Solana',
    decimals: 9,
    color: '#9945FF',
    icon: 'https://cryptoicons.cc/32/9945FF/SOL.png',
  },
  [TokenType.USDC]: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    color: '#2775CA',
    icon: 'https://cryptoicons.cc/32/2775CA/USDC.png',
  },
  [TokenType.RECO]: {
    symbol: 'RECO',
    name: 'RecycloCoin',
    decimals: 6,
    color: '#16651c',
    icon: '/assets/RECO.png',
  },
};

// Recycling rewards per material type
export const RECYCLING_REWARDS = {
  plastic: { poly: 10, crt: 2 },
  paper: { poly: 5, crt: 1 },
  glass: { poly: 8, crt: 1.5 },
  metal: { poly: 15, crt: 3 },
  electronics: { poly: 25, crt: 5 },
  organic: { poly: 3, crt: 0.5 },
  eWaste: { poly: 30, crt: 6 }, // NEW: electronic waste rewards
} as const;

// AI chat costs
export const AI_CHAT_COSTS = {
  basicMessage: 5, // PLY tokens per message
  imageAnalysis: 15,
  recyclingTips: 3,
  esgReport: 20,
} as const;

// Marketplace fees
export const MARKETPLACE_FEES = {
  platformFee: 0.002, // 0.2%
  networkFee: 0.00025, // Solana network fee in SOL
  escrowFee: 0.001, // 0.1%
} as const;

// Staking rewards (APY percentages)
export const STAKING_REWARDS = {
  polyStaking: 12, // 12% APY
  liquidityProvider: 18, // 18% APY for LP tokens
  carbonOffset: 8, // 8% APY for CRT staking
} as const;

// Token utility functions
export const calculateRecyclingReward = (
  materialType: keyof typeof RECYCLING_REWARDS,
  weight: number // in grams
): { poly: number; crt: number } => {
  const baseRewards = RECYCLING_REWARDS[materialType];
  const multiplier = Math.max(1, weight / 100); // Base reward per 100g

  return {
    poly: Math.floor(baseRewards.poly * multiplier),
    crt: Math.floor(baseRewards.crt * multiplier * 100) / 100, // 2 decimals
  };
};

export const calculateAIChatCost = (
  messageType: keyof typeof AI_CHAT_COSTS,
  quantity: number = 1
): number => {
  return AI_CHAT_COSTS[messageType] * quantity;
};

export const calculateMarketplaceFees = (price: number) => ({
  platformFee: price * MARKETPLACE_FEES.platformFee,
  escrowFee: price * MARKETPLACE_FEES.escrowFee,
  total: price * (MARKETPLACE_FEES.platformFee + MARKETPLACE_FEES.escrowFee),
});

export const calculateStakingRewards = (
  amount: number,
  stakingType: keyof typeof STAKING_REWARDS,
  days: number
): number => {
  const apy = STAKING_REWARDS[stakingType] / 100;
  const dailyRate = apy / 365;
  return amount * dailyRate * days;
};

// Token validation
export const isValidTokenAmount = (amount: number, tokenType: TokenType): boolean => {
  if (amount <= 0) return false;
  const decimals = TOKEN_INFO[tokenType].decimals;
  const factor = Math.pow(10, decimals);
  return Number.isInteger(amount * factor);
};

// Convert between token units and smallest units
export const toSmallestUnit = (amount: number, tokenType: TokenType): number => {
  const decimals = TOKEN_INFO[tokenType].decimals;
  return Math.floor(amount * Math.pow(10, decimals));
};

export const fromSmallestUnit = (amount: number, tokenType: TokenType): number => {
  const decimals = TOKEN_INFO[tokenType].decimals;
  return amount / Math.pow(10, decimals);
};
