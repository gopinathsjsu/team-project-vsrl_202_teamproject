export const createFlight = (values)=>{
    return fetch(`${process.env.REACT_APP_BACKEND}admin/createflight`,{
        method: "POST",
       headers: {
            Accept: "application/json",
        "Content-Type":"application/json"
        // Authorization: `Bearer ${token}`
       },
       body: JSON.stringify(values)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}
export const cancelFlightAPI = flightData => {
    return fetch(`${process.env.REACT_APP_BACKEND}admin/cancelFlight`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },//userId
      body: JSON.stringify({"flightNumber":flightData.flightNumber})
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };