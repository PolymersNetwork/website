import { fetchJupiterTokenList } from '@/api/jupiter';
import { fetchPythPrices } from '@/api/pyth';
import { fetchBirdeyePrices } from '@/api/birdeye';

const init = async () => {
  try {
    // Fetch token list from Jupiter
    const tokens = await fetchJupiterTokenList();
    
    // Fetch SOL price from Pyth
    const solPrice = await fetchPythPrice("SOL");
    
    // Fetch other token prices from Birdeye
    const birdeyePrices = await fetchBirdeyePrices();

    console.log("Jupiter Token List:", tokens);
    console.log("SOL Price (Pyth):", solPrice);
    console.log("Birdeye Prices:", birdeyePrices);
  } catch (err) {
    console.error("Failed to fetch token data:", err);
  }
};

// Call the init function to fetch data
init();
function fetchPythPrice(arg0: string) {
  throw new Error('Function not implemented.');
}

