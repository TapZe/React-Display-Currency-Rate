# Currency Tracker

### Assignment 4 - Project: Display Rate Currency on Program Web Development + React Bootcamp IBM X Hacktiv8

Currency Tracker is a web application that displays the latest daily exchange rates and allows users to track buy/sell rates for various currencies (only for some currency for this project). This app uses data from a [free currency API](https://currencyfreaks.com) to fetch daily refreshed real-time information. **The demo website is deployed at [react-display-currency-rate.vercel.app](https://react-display-currency-rate.vercel.app)**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Features

- Displays the latest daily exchange rates for multiple currencies.
- Shows buy/sell rates for each currency (only for some currency for this project).
- Provides real-time updates with the latest daily data.
- Responsive and mobile-friendly design.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **API Fetching**: JavaScript (using `fetch`)
- **Styling**: TailwindCSS for layout and responsiveness
- **Icons**: Custom SVG icons for the web icon.

## Installation
Follow these steps to set up this project locally:

1. **Clone this repository:**

   ```
   git clone https://github.com/TapZe/React-Display-Currency-Rate.git
   ```

2. **Navigate to the project directory:**

   ```
   cd React-Display-Currency-Rate
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

5. **Set up your environment variables:**
   Create an `.env` file by renaming or copying `.env.example` in the root directory and add your API key and URL:

   ```
   VITE_CURRENCY_API_URI=https://api.currencyfreaks.com/
   VITE_CURRENCY_API_KEY=1234567890qwertyuiopasdfghjklzxcvbnm
   ```
   Replace `https://api.currencyfreaks.com/` and `1234567890qwertyuiopasdfghjklzxcvbnm` with your actual API link and key from Currency Freaks API.
   
6. **Install dependencies:**

   ```
   npm run dev
   ```
   This will start the development server, and you can view the project by navigating to http://localhost:5173.
