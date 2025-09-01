// Solana token program IDs and mint addresses
export const TOKEN_PROGRAMS = {
  SOL: 'So11111111111111111111111111111111111111112', // native SOL
  USDC: 'Es9vMFrzaCER1G9P5yMzGCEk9iQbYXvxMN4Gy2uU3j6', // USDC SPL token
  PLY: 'PLYKdaCUgxTUw6rSjWbgSN97Qtecb6Fy6SazWf1tvAC', // PLY token
  RECO: 'RECOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // RECO token placeholder
};

// Optional: Map token symbols to their programs (for RPC usage)
export const TOKEN_PROGRAM_IDS = {
  SOL: TOKEN_PROGRAMS.SOL,
  USDC: TOKEN_PROGRAMS.USDC,
  PLY: TOKEN_PROGRAMS.PLY,
  RECO: TOKEN_PROGRAMS.RECO,
};

// Token list for wallets, charts, and API calls
export const TOKEN_LIST = [
  { symbol: 'SOL', mint: TOKEN_PROGRAMS.SOL, decimals: 9 },
  { symbol: 'USDC', mint: TOKEN_PROGRAMS.USDC, decimals: 6 },
  { symbol: 'PLY', mint: TOKEN_PROGRAMS.PLY, decimals: 9 },
  { symbol: 'RECO', mint: TOKEN_PROGRAMS.RECO, decimals: 9 },
  // Add other tokens if needed
];
