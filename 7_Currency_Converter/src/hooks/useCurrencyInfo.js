// Custom Hook
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

  const [data, setData] = useState({});

  useEffect(() => {
    // Fetching the data from the url
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      // Converting the response from string to json format
      .then((res) => res.json())

      // Selecting only the required part 
      .then((res) => setData(res[currency]));
      // useEffect hook is triggered when there is any change in currency
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
