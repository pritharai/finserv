import axios from "axios";

const symbolsMap = {
  "^BSESN": "Sensex",
  "^NSEI": "Nifty 50",
  "^IXIC": "Nasdaq",
  "GC=F": "Gold",
  "SI=F": "Silver",
  "CL=F": "Crude Oil",
  "USDINR=X": "USD to INR",
};


const Base_URL = "https://query1.finance.yahoo.com/v8/finance/chart/";

const fetchMarketData = async () => {
  for (const symbol in symbolsMap) {
    try {
      const response = await axios.get(`${Base_URL}${symbol}`);
      const meta = response.data?.chart?.result?.[0]?.meta;
      const price = meta?.regularMarketPrice || meta?.previousClose;

      console.log(`${symbolsMap[symbol]} (${symbol}): ₹${price}`);
    } catch (error) {
      console.error(`Error fetching ${symbolsMap[symbol]} (${symbol}):`, error.message);
    }
  }
};

fetchMarketData();
