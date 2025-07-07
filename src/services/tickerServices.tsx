// services/tickerService.ts
import axios from "axios";

export type TickerData = {
  symbol: string;
  price: number;
  change: number;
};

const fallbackSymbols: Record<string, string> = {
  NIFTY: "NSE:NIFTY",
  SENSEX: "BSE:SENSEX",
  Gold: "XAU/USD",
  Silver: "XAG/USD",
  NASDAQ: "NDX",
  FTSE: "UKX",
  NIKKEI: "N225",
  "Crude Oil": "CL=F",
  "USD/INR": "USD/INR",
};

const API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY;

export async function fetchFallbackTickerData(): Promise<TickerData[]> {
  const results: TickerData[] = [];

  await Promise.all(
    Object.entries(fallbackSymbols).map(async ([title, symbol]) => {
      try {
        const { data } = await axios.get("https://api.twelvedata.com/quote", {
          params: {
            symbol,
            apikey: API_KEY,
          },
        });

        if (data && !data.code) {
          results.push({
            symbol: title,
            price: parseFloat(data.close),
            change: parseFloat(data.percent_change),
          });
        }
      } catch (err) {
        console.error(`Error fetching ${symbol}:`, (err as Error).message);
      }
    })
  );

  return results;
}
