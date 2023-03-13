import React, { useEffect, useState } from "react";
import "./Crypto.css";

const Crypto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h2 className="title">Cryptocurrency</h2>
      <div className="coinWrapper">
        {data?.map((coin) => (
          <div className="coin">
            <h3>{coin.name}</h3>
            <ul className="coin__list">
              <li>
                <img src={coin.image} className="coin__image" />
              </li>
              <li>
                <p>Current Price : {coin.current_price}</p>
              </li>
              <li>
                <p>Max Supply : {coin.max_supply ? coin.max_supply.toString().slice(0, 7) : 10000}</p>
              </li>
              <li>
                <p>Total Volume : {coin.total_volume.toString().slice(0, 7)}</p>
              </li>
              <li>
                <p>Market Rank : {coin.market_cap_rank}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Crypto;
