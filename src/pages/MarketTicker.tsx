import React, { useEffect, useState } from "react";
import { fetchFallbackTickerData, TickerData } from "../services/tickerServices";

const MarketTicker: React.FC = () => {
  const [tickerData, setTickerData] = useState<TickerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFallbackTickerData();
      setTickerData(data);
      setLoading(false);
    };

    getData();

    // Optional: Auto-refresh every 60 seconds
    const interval = setInterval(getData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white px-4 py-2 rounded shadow-md">
      {loading ? (
        <p className="text-gray-500 text-sm">Loading market data...</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {tickerData.map((item) => (
            <div
              key={item.symbol}
              className={`px-3 py-1 rounded font-medium ${
                item.change >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {item.symbol}: ₹{item.price.toFixed(2)} ({item.change.toFixed(2)}%)
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketTicker;
