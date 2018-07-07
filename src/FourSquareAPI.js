const api = "https://api.foursquare.com/v2/venues/search?near=";
const CLIENT_ID = "RQPQP3JV2UN4KAAY2WRRORV10RZ44SRHJEZZMQAHPBRSKFUD";
const CLIENT_SECRET = "HDPFUFC0GRJNBJE2KLMLMQJMGZTBHCJ5CYEOTOD4SCLBM5OA&v=20180318";

export const search = (place, stuff) =>
  fetch(`${api}${place}&query=${stuff}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
  .then(res => res.json())
  .then(data => data.response.venues)
  .catch(err => {
    console.log(err);
    window.alert(err);
  });
