import axios from 'axios';
const url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL,MSFT";
const res = await axios.get(url);
const quotes = res.data.quoteResponse.result;

console.log(quotes)