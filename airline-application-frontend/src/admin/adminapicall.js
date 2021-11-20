import {API} from '../backend'

export const createFlight = (values)=>{
    return fetch('http://localhost:8004/api/admin/createflight',{
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
