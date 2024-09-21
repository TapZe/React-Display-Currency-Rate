import Navbar from "./components/Navbar";
import CurrencyTable from "./components/CurrencyTable";

function App() {
  return (
    <>
      <section className="min-h-screen bg-gray-900 text-gray-200">
        <Navbar />
        <CurrencyTable />
      </section>
    </>
  );
}

export default App;
