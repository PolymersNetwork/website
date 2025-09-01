/**
 * Authentication utilities for the Polymers ecosystem
 * Supports both traditional auth (Clerk) and web3 wallets
 */

// Wallet types
export enum WalletType {
  PHANTOM = 'phantom',
  SOLFLARE = 'solflare',
  BACKPACK = 'backpack',
  GLOW = 'glow',
  METAMASK = 'metamask',
}

// User role types
export enum UserRole {
  CITIZEN = 'citizen',
  BUSINESS = 'business',
  ADMIN = 'admin',
  VALIDATOR = 'validator',
}

// User profile interface
export interface UserProfile {
  id: string;
  email?: string;
  walletAddress?: string;
  role: UserRole;
  esgScore: number;
  totalPolyEarned: number;
  totalCarbonOffset: number;
  recyclingStreak: number;
  joinedAt: Date;
  isVerified: boolean;
  preferences: UserPreferences;
}

export interface UserPreferences {
  notifications: boolean;
  darkMode: boolean;
  language: string;
  defaultWallet?: WalletType;
  autoStaking: boolean;
  privacyLevel: 'public' | 'private' | 'friends';
}

// Wallet connection utilities
export const WALLET_CONFIG = {
  [WalletType.PHANTOM]: {
    name: 'Phantom',
    icon: '👻',
    downloadUrl: 'https://phantom.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).solana?.isPhantom,
  },
  [WalletType.SOLFLARE]: {
    name: 'Solflare',
    icon: '☀️',
    downloadUrl: 'https://solflare.com/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).solflare,
  },
  [WalletType.BACKPACK]: {
    name: 'Backpack',
    icon: '🎒',
    downloadUrl: 'https://backpack.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).backpack,
  },
  [WalletType.GLOW]: {
    name: 'Glow',
    icon: '✨',
    downloadUrl: 'https://glow.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).glow,
  },
  [WalletType.METAMASK]: {
    name: 'MetaMask',
    icon: '🦊',
    downloadUrl: 'https://metamask.io/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).ethereum?.isMetaMask,
  },
};

// Authentication state
export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  wallet: {
    connected: boolean;
    address: string | null;
    type: WalletType | null;
    balance: Record<string, number>;
  };
  loading: boolean;
  error: string | null;
}

// Mock auth functions (replace with actual implementation)
export const connectWallet = async (walletType: WalletType): Promise<string> => {
  // This would integrate with actual wallet adapters
  if (typeof window === 'undefined') {
    throw new Error('Wallet connection requires browser environment');
  }

  const wallet = WALLET_CONFIG[walletType];
  if (!wallet.isInstalled()) {
    throw new Error(`${wallet.name} wallet is not installed`);
  }

  // Mock connection - replace with actual wallet connection logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate for demo
        const mockAddress = `${walletType}${Math.random().toString(36).substring(2, 15)}`;
        resolve(mockAddress);
      } else {
        reject(new Error('Failed to connect wallet'));
      }
    }, 1000);
  });
};

export const disconnectWallet = async (): Promise<void> => {
  // Implementation for wallet disconnection
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};

export const signMessage = async (message: string, walletType: WalletType): Promise<string> => {
  // Implementation for message signing
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.05) { // 95% success rate
        resolve(`signed_${message}_${Date.now()}`);
      } else {
        reject(new Error('User rejected signature'));
      }
    }, 800);
  });
};

// ESG scoring functions
export const calculateESGScore = (activities: {
  recyclingEvents: number;
  carbonOffset: number;
  sustainabilityActions: number;
}): number => {
  const { recyclingEvents, carbonOffset, sustainabilityActions } = activities;
  
  // Base score calculation
  let score = 0;
  score += Math.min(recyclingEvents * 0.1, 4); // Max 4 points from recycling
  score += Math.min(carbonOffset * 0.01, 3); // Max 3 points from carbon offset
  score += Math.min(sustainabilityActions * 0.2, 3); // Max 3 points from other actions
  
  return Math.min(Math.round(score * 10) / 10, 10); // Cap at 10, round to 1 decimal
};

// Role-based permissions
export const hasPermission = (userRole: UserRole, action: string): boolean => {
  const permissions = {
    [UserRole.CITIZEN]: ['recycle', 'stake', 'trade', 'vote'],
    [UserRole.BUSINESS]: ['recycle', 'stake', 'trade', 'vote', 'bulk_purchase', 'esg_reporting'],
    [UserRole.VALIDATOR]: ['recycle', 'stake', 'trade', 'vote', 'validate', 'moderate'],
    [UserRole.ADMIN]: ['*'], // All permissions
  };
  
  const userPermissions = permissions[userRole];
  return userPermissions.includes('*') || userPermissions.includes(action);
};

// Authentication helpers
export const isWalletConnected = (authState: AuthState): boolean => {
  return authState.wallet.connected && authState.wallet.address !== null;
};

export const isFullyAuthenticated = (authState: AuthState): boolean => {
  return authState.isAuthenticated && (authState.user !== null);
};

export const requireAuth = (authState: AuthState, requiredRole?: UserRole): boolean => {
  if (!isFullyAuthenticated(authState)) return false;
  if (requiredRole && authState.user!.role !== requiredRole) return false;
  return true;
};