import { API } from "../../backend";

export const showFlights = flights => {
  console.log(API);
    return fetch(`http://localhost:3001/api/user/showFlights`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(flights)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const showFlight = flightNumber => {
      return fetch(`http://localhost:3001/api/user/showFlight`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(flightNumber)
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err));
    };
  