import React from "react";

function Stock({ id, name, ticker, type, price, onClick, actionNumber }) {
  return (
    <div onClick={() => onClick({ id, name, ticker, type, price }, actionNumber)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
