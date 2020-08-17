import { useState } from "react";
import Price from "./Price";
const PriceList = ({ bpi: { USD, GBP, EUR } }) => {
  const [currency, setCurrency] = useState("USD");
  let list = "";
  if (currency === "USD") {
    list = (
      <Price description={USD.description} code={USD.code} rate={USD.rate} />
    );
  } else if (currency === "GPB") {
    list = (
      <Price description={GBP.description} code={GBP.code} rate={GBP.rate} />
    );
  } else {
    list = (
      <Price description={EUR.description} code={EUR.code} rate={EUR.rate} />
    );
  }

  return (
    <div>
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className="form-control mb-5"
      >
        <option value="USD" selected>
          USD
        </option>
        <option value="GPB">GPB</option>
        <option value="EUR">EUR</option>
      </select>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default PriceList;
