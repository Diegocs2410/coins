import axios from 'axios';
const getData = async () => {
    const result = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false'
    );
    // console.log(result);
    return result;
};

export default getData;
