/**
 * Formatting utilities for the Polymers ecosystem
 */

// Token formatting
export const formatTokenAmount = (amount: number, decimals: number = 2): string => {
  if (amount >= 1e9) {
    return `${(amount / 1e9).toFixed(decimals)}B`;
  }
  if (amount >= 1e6) {
    return `${(amount / 1e6).toFixed(decimals)}M`;
  }
  if (amount >= 1e3) {
    return `${(amount / 1e3).toFixed(decimals)}K`;
  }
  return amount.toFixed(decimals);
};

// Carbon credit formatting
export const formatCarbonCredits = (amount: number): string => {
  return `${formatTokenAmount(amount)} CRT`;
};

// PLY token formatting
export const formatPolyTokens = (amount: number): string => {
  return `${formatTokenAmount(amount)} PLY`;
};

// Percentage formatting
export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`;
};

// Currency formatting
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

// Date formatting for recycling activities
export const formatRecyclingDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

// ESG score formatting
export const formatESGScore = (score: number): string => {
  return `${score.toFixed(1)}/10`;
};

// Wallet address formatting
export const formatWalletAddress = (address: string): string => {
  if (address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Transaction hash formatting
export const formatTxHash = (hash: string): string => {
  if (hash.length < 10) return hash;
  return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
};

// Recycling weight formatting
export const formatWeight = (grams: number): string => {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(1)} kg`;
  }
  return `${grams} g`;
};

// Time ago formatting
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return formatRecyclingDate(date);
};