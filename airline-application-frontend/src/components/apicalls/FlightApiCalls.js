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
  export const cancelFlightBookingAPI = flightData => {
    return fetch(`${process.env.REACT_APP_BACKEND}user/booking/cancelBooking`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },//userId
      body: JSON.stringify({"ticketNumber":flightData.ticketNumber},{"userId":flightData.userId})
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
 
  export const getUserData = userID => {
    console.log(userID.userId);
    return fetch(`${process.env.REACT_APP_BACKEND}user/getuser/${userID.userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //body: JSON.stringify({"userId":userID})
    })
      .then(response => {
       // console.log(response.json());
        return response.json();
      })
      .catch(err => console.log(err));
  };
  

  export const bookAndPayFlight = bookingData => {
    console.log(bookingData.userID);
    return fetch(`${process.env.REACT_APP_BACKEND}user/bookandpay/${bookingData.userID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({"bookingDetails":bookingData})
    })
      .then(response => {
       // console.log(response.json());
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  
  

