export interface JupiterToken {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
}

const JUPITER_TOKEN_LIST_URL = 'https://quote-api.jup.ag/v1/tokens';

export const fetchJupiterTokenList = async (): Promise<JupiterToken[]> => {
  try {
    const res = await fetch(JUPITER_TOKEN_LIST_URL);
    if (!res.ok) throw new Error('Failed to fetch Jupiter token list');
    const data = await res.json();
    return data.tokens as JupiterToken[];
  } catch (error) {
    console.error('fetchJupiterTokenList error:', error);
    return [];
  }
};
