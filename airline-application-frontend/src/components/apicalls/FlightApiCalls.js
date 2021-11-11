import { API } from "../../backend";

export const showFlights = flights => {
  console.log(API);
    return fetch(`http://localhost:8001/api//user/showFlights`, {
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
  