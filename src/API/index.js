



export default getAPIData = () => {
  return fetch('https://coronavirus-19-api.herokuapp.com/countries', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(responseJ => {
      // console.log("API Response:-\n", responseJ);
      return { body: responseJ };
    })
    .catch(error => {
      console.log("API Error:-\n", error);
      return { error: error };
    })
}