import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import s from "./Charts.module.scss";

const ChartComponent = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true&price_change_percentage=24h"
      );
      const data = await response.json();
      const formattedData = data.map((coin) => ({
        name: coin.name,
        prices: coin.sparkline_in_7d.price.map((price, index) => ({ x: index, y: price })),
      }));
      setData(formattedData);
    };
    fetchData();
  }, []);

  return (
    <div className={s.chartWrapper}>
      {data.map((coin) => (
        <div key={coin.name}>
          <h3 className={s.title}>{coin.name}</h3>
          <LineChart width={800} height={200} data={coin.prices}>
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <XAxis dataKey="x" />
            <YAxis />
          </LineChart>
        </div>
      ))}
    </div>
  );
};

export default ChartComponent;
