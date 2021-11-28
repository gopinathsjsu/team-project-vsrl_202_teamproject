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


  export const cancelFlight = flightNumber => {
    return fetch(`${process.env.REACT_APP_BACKEND}user/cancelFlight`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"flightNumber":flightNumber})
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  export const getUserData = userID => {
    console.log(userID);
    return fetch(`${process.env.REACT_APP_BACKEND}user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({"flightNumber":userID})
    })
      .then(response => {
      body: JSON.stringify(userID)
    })
      .then(response => {
       // console.log(response.json());
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  

