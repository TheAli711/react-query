import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

function UserDashboard() {
    const info = useQuery("GetProfile", () => axios.get("https://swapi.dev/api/people/1/"))

    console.log(info);


    if (info.isLoading) return <h1>Getting profile...</h1>
    if (info.isError) return <h1>Something went wrong</h1>
    return (
        <div>
            <h1>{JSON.stringify(info.data, null, 2)}</h1>
        </div>
    )
}

export default UserDashboard
