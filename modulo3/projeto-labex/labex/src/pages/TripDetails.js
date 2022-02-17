import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../services/urls"

export const TripDetails = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        const id = ""
        axios.get(BASE_URL+'/trip/'+id, {headers: {auth: token}})
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response))
    }, [])

    return <p>TripDetails</p>
}