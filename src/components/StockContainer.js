import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolio }) {
  
  const stockList = stocks.map(stock => <Stock {...stock} key={stock.id} onClick={handlePortfolio} actionNumber={1}/>)
  // Use generic OnClick to both add and remove

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;