const CurrencyTable = () => {
  return (
    <div className="overflow-x-auto py-8 px-4 md:px-16">
      <table className="min-w-full text-gray-200 bg-gray-800 shadow-lg rounded-lg text-center">
        <thead className="bg-gray-900 border-b border-gray-700">
          <tr>
            <th className=" py-3 text-sm font-semibold uppercase">Currency</th>
            <th className=" py-3 text-sm font-semibold uppercase">We Buy</th>
            <th className=" py-3 text-sm font-semibold uppercase">Exchange Rate</th>
            <th className=" py-3 text-sm font-semibold uppercase">We Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">CAD</td>
            <td className="py-4">001.7434</td>
            <td className="py-4">001.7092</td>
            <td className="py-4">001.6750</td>
          </tr>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">IDR</td>
            <td className="py-4">18522.3525</td>
            <td className="py-4">18159.1691</td>
            <td className="py-4">17795.9857</td>
          </tr>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">JYP</td>
            <td className="py-4">143.4565</td>
            <td className="py-4">140.6437</td>
            <td className="py-4">137.8308</td>
          </tr>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">CHF</td>
            <td className="py-4">001.3114</td>
            <td className="py-4">001.2857</td>
            <td className="py-4">001.2600</td>
          </tr>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">EUR</td>
            <td className="py-4">001.1937</td>
            <td className="py-4">001.1703</td>
            <td className="py-4">001.1469</td>
          </tr>
          <tr className="border-b border-gray-700 hover:bg-gray-700 transition">
            <td className="py-4">USD</td>
            <td className="py-4">001.3141</td>
            <td className="py-4">001.2884</td>
            <td className="py-4">001.2626</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
