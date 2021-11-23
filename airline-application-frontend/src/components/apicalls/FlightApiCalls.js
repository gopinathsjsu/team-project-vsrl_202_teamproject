
export const showFlights = flights => {
    return fetch(`${process.env.REACT_APP_BACKEND}user/showFlights`, {
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
      return fetch(`${process.env.REACT_APP_BACKEND}user/showFlight`, {
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
  