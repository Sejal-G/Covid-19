const siteUrl = "https://www.worldometers.info/coronavirus/";
const axios = require("axios");
const cheerio=require('cheerio');
const fetchData = async () => {
  const result = await axios.get(siteUrl);
  // console.log(result);  
   const $=cheerio.load(result.data);
   const table=$('.main_table_countries_today');
   console.log(table.html());
};
fetchData();