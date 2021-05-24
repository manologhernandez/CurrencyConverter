export const api = (baseCurrency, quoteCurrency) => {
  const apiKey = "5f0a7bcd46f0a9cdfe57"
  const url = `https://free.currconv.com/api/v7/convert?q=${baseCurrency}_${quoteCurrency}&compact=ultra&apiKey=${apiKey}`
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("hellooo!" + err))
}
