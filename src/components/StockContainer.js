import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolio, sort, filter }) {
  
  const stockList = stocks
    .filter(stock => filter === "" || stock.type.toUpperCase() === filter.toUpperCase())
    .sort((stock_one, stock_two) => {
      if (sort === "Alphabetically") {
        const nameA = stock_one.name.toUpperCase(); // ignore upper and lowercase
        const nameB = stock_two.name.toUpperCase(); // ignore upper and lowercase
        return nameA.localeCompare(nameB, 'en')
        // if (nameA < nameB) {
        //   return -1;
        // }
        // if (nameA > nameB) {
        //   return 1;
        // }

        // // names must be equal
        // return 0;
      } else {
        return stock_one.price - stock_two.price
      }
    })
    .map(stock => <Stock {...stock} key={stock.id} onClick={handlePortfolio} actionNumber={1}/>)
    // Use generic OnClick to both add and delete stocks

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;