import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [error, setError] = useState("")
  const [portfolio, setPortfolio] = useState([])
  const [filter, setFilter] = useState("")
  const [sort, setSort] = useState("")

  useEffect (() => {
    fetch('http://localhost:3002/stocks')
      .then(resp => {
        if (!resp.ok) {
          throw new Error('The json server is not running!')
        }
        return resp.json()
      })
        .then(data => setStocks(data))
      .catch(err => setError(err.message))
  }
  , [])

  // For num, 0 to remove, 1 to add
  const handlePortfolio = (stockToWorkOn, num) => {
    if (num) {
      const match = portfolio.find(stock => stock.id === stockToWorkOn.id)
      return match ? null: setPortfolio(currentPortfolio => [...currentPortfolio, stockToWorkOn])
    } 
    else {
      setPortfolio(currentPortfolio => currentPortfolio.filter(stock => stock.id !== stockToWorkOn.id))
    }
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <div>
      {error ? <span>{error}</span> : null}
      <SearchBar 
        filter={filter}
        handleFilter={handleFilter} 
        sort={sort}
        handleSort={handleSort}
        />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={stocks} 
            handlePortfolio={handlePortfolio}
            sort={sort}
            filter={filter}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio} 
            handlePortfolio={handlePortfolio} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

  //https://github.com/gnappo1/react-hooks-practice-stocks/blob/091123-solution/README.md