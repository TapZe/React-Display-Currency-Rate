import Navbar from "../components/Navbar";
import CurrencyTable from "../components/CurrencyTable";
import Footer from "../components/Footer";

const CurrencyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <CurrencyTable />
      </div>
      <Footer />
    </div>
  );
};

export default CurrencyPage;
