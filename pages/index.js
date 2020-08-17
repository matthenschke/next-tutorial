import Layout from "../components/Layout";
import PriceList from "../components/PriceList";

import axios from "axios";

const Index = ({ bpi }) => {
  return (
    <Layout>
      <div>
        <h1>Welcome To Bitcoin Prices</h1>
        <p>Check current Bitcoin Rates</p>
        <PriceList bpi={bpi} />
      </div>
    </Layout>
  );
};

// getInitialProps is like componentWillMount or useEffect in React
Index.getInitialProps = async function () {
  const { data } = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return {
    bpi: data.bpi,
  };
};

export default Index;
