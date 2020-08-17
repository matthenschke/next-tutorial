import Layout from "../components/Layout";
import axios from "axios";
const Index = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome To Bitcoin Prices</h1>
        {props.bpi.USD.code}
      </div>
    </Layout>
  );
};

// getInitialProps is like componentWillMount or useEffect in React
Index.getInitialProps = async function () {
  const { data } = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  console.log(data);
  return {
    bpi: data.bpi,
  };
};

export default Index;
