const Header = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-16 bg-gray-800 shadow-lg">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span className="text-yellow-400 font-semibold text-lg md:text-xl">Currency Tracker</span>
      </div>

      <div className="space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center">
        <span className="hover:text-yellow-400 transition duration-300 text-sm md:text-base">
          Base Currency: (from API)
        </span>
        <span className="hover:text-yellow-400 transition duration-300 text-sm md:text-base">
          Last updated at: (time from API later)
        </span>
      </div>
    </nav>
  );
};

export default Header;

