export interface BirdeyePrices {
  [symbol: string]: number;
}

const BIRDEYE_API_URL = 'https://api.birdeye.so/v1/prices';

export const fetchBirdeyePrices = async (): Promise<BirdeyePrices> => {
  try {
    const res = await fetch(BIRDEYE_API_URL);
    if (!res.ok) throw new Error('Failed to fetch Birdeye prices');
    const data = await res.json();
    // Ensure the structure matches { prices: { SYMBOL: number } }
    return data.prices as BirdeyePrices;
  } catch (error) {
    console.error('fetchBirdeyePrices error:', error);
    return {};
  }
};
