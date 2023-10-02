// 'use client'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BitcoinInfo = () => {
//   const [bitcoinData, setBitcoinData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBitcoinData = async () => {
//       try {
//         const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
//           params: {
//             ids: 'bitcoin',
//             vs_currencies: 'usd',
//             market_cap_usd: true,
//             total_volume_usd: true,
//             circulating_supply: true,
//             last_updated: true,
//             // Additional fields
//             high_24h: true, // 24-hour high price
//             low_24h: true,  // 24-hour low price
//             ath: true,      // All-time high price
//             ath_date: true, // Date of the all-time high
//           },
//         });

//         if (response.status === 200) {
//           setBitcoinData(response.data.bitcoin);
//           setLoading(false);
//           setError(null);
//         } else {
//           throw new Error('Network response was not ok');
//         }
//       } catch (err) {
//         console.error('Error fetching Bitcoin data:', err);
//         setLoading(false);
//         setError('Error loading Bitcoin data');
//       }
//     };

//     fetchBitcoinData();
//   }, []);

//   return (
//     <div>
//       <h2>Bitcoin Information</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         <div>
//           <p>Price in USD: ${bitcoinData.usd}</p>
//           <p>Market Cap in USD: ${bitcoinData.market_cap_usd}</p>
//           <p>Total Volume in USD: ${bitcoinData.total_volume_usd}</p>
//           <p>Circulating Supply: {bitcoinData.circulating_supply} BTC</p>
//           <p>Last Updated: {new Date(bitcoinData.last_updated * 1000).toLocaleString()}</p>
//           <p>24-Hour High: ${bitcoinData.high_24h}</p>
//           <p>24-Hour Low: ${bitcoinData.low_24h}</p>
//           <p>All-Time High: ${bitcoinData.ath}</p>
//           <p>All-Time High Date: {bitcoinData.ath_date}</p>
//           {/* Add more Bitcoin information as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BitcoinInfo;



'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BitcoinInfo = () => {
  // Provide the initial shape of the bitcoinData object
  const [bitcoinData, setBitcoinData] = useState({
    usd: 0,
    market_cap_usd: 0,
    total_volume_usd: 0,
    circulating_supply: 0,
    last_updated: 0,
    high_24h: 0,
    low_24h: 0,
    ath: 0,
    ath_date: '',
    // Add more properties as needed
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin',
            vs_currencies: 'usd',
            market_cap_usd: true,
            total_volume_usd: true,
            circulating_supply: true,
            last_updated: true,
            // Additional fields
            high_24h: true, // 24-hour high price
            low_24h: true,  // 24-hour low price
            ath: true,      // All-time high price
            ath_date: true, // Date of the all-time high
          },
        });

        if (response.status === 200) {
          setBitcoinData(response.data.bitcoin);
          setLoading(false);
          setError(null);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        console.error('Error fetching Bitcoin data:', err);
        setLoading(false);
        // setError('Error loading Bitcoin data');
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <div>
      <h2>Bitcoin Information</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>Price in USD: ${bitcoinData.usd}</p>
          <p>Market Cap in USD: ${bitcoinData.market_cap_usd}</p>
          <p>Total Volume in USD: ${bitcoinData.total_volume_usd}</p>
          <p>Circulating Supply: {bitcoinData.circulating_supply} BTC</p>
          <p>Last Updated: {new Date(bitcoinData.last_updated * 1000).toLocaleString()}</p>
          <p>24-Hour High: ${bitcoinData.high_24h}</p>
          <p>24-Hour Low: ${bitcoinData.low_24h}</p>
          <p>All-Time High: ${bitcoinData.ath}</p>
          <p>All-Time High Date: {bitcoinData.ath_date}</p>
          {/* Add more Bitcoin information as needed */}
        </div>
      )}
    </div>
  );
};

export default BitcoinInfo;
