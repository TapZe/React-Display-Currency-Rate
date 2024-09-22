async function getCurrency() {
    const { VITE_CURRENCY_API_URI, VITE_CURRENCY_API_KEY } = import.meta.env;
    const apiUrl = `${VITE_CURRENCY_API_URI}rates/latest?apikey=${VITE_CURRENCY_API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`;
    const response = await fetch(
        apiUrl
    );
    const currencyRates = await response.json(); 
    return currencyRates;
}

export default getCurrency;