//const url = "https://hotels4.p.rapidapi.com/v2/get-meta-data";
const url = 'https://hotels-com5.p.rapidapi.com/properties/detail?property_id=15438428';

async function listHotels() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "19dbfcc82dmshcf6e8399a8b7da3p18f3fbjsn5feb6ffce4db",
      //"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { listHotels };
