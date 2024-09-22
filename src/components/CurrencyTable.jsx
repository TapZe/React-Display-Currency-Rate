import { useState, useEffect } from "react";
import getCurrency from "../api/getCurrency";
import CurrencyList from "./CurrencyList";
import getBuySell from "../utils/getBuySell";

const CurrencyTable = () => {
  const [currencyData, setCurrencyData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const result = await getCurrency();
        const finalRates = getBuySell(result);
        setCurrencyData(finalRates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="overflow-x-auto py-8 px-4 md:px-16">
      <div className="mb-4 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center">
        <span className="hover:text-yellow-400 transition duration-300 text-sm md:text-base">
          Base Currency: {currencyData?.base || "N/A"}
        </span>
        <span className="hover:text-yellow-400 transition duration-300 text-sm md:text-base">
          Last updated at:{" "}
          {currencyData?.date ? formatDay(currencyData.date) : "N/A"}
        </span>
      </div>
      <table className="min-w-full text-gray-200 bg-gray-800 shadow-lg rounded-lg text-center">
        <thead className="bg-gray-900 border-b border-gray-700">
          <tr>
            <th className="py-3 text-sm font-semibold uppercase">Currency</th>
            <th className="py-3 text-sm font-semibold uppercase">We Buy</th>
            <th className="py-3 text-sm font-semibold uppercase">
              Exchange Rate
            </th>
            <th className="py-3 text-sm font-semibold uppercase">We Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.rates.map((rate) => <CurrencyList rate={rate} key={rate.symbol}/>)}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
