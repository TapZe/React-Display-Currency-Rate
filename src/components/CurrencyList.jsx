const CurrencyList = ({ rate }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
      <td className="py-4">{rate.symbol}</td>
      <td className="py-4">{rate.buyRate}</td>
      <td className="py-4">{rate.exchangeRate}</td>
      <td className="py-4">{rate.sellRate}</td>
    </tr>
  );
};

export default CurrencyList;
