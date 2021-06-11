import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../store/slices/authenticationSlice';
import axios from 'axios';
import { useQuery } from 'react-query';

function Login() {
    const isLoggedIn = useSelector((state) => state.authentication.value)
    const dispatch = useDispatch()

    let payload = { "username": "edq73637@cuoly.com", "password": "Test@123", "client_secret": "cKE8qsYPCBBAXQGFJZ00Nwe0d9ZJyOu1BiTM55iZ", "client_id": "2", "grant_type": "password" }
        ;


    const { refetch, isLoading } = useQuery('Login', async () => {
        const { data } = await axios.post("https://backend.scoutproportal.com/dev/oauth/token", payload)
        if (data.access_token) {
            dispatch(login(data));
        }
        return data
    }, {
        refetchOnWindowFocus: false,
        enabled: false
    })
    const handleLogin = () => {
        refetch();
    }

    if (isLoading) return <h1>Logging In</h1>
    if (isLoggedIn) return <Redirect to="/UserDashboard" />

    return (
        <div>
            <h1>Login Page</h1>
            <label htmlFor="usr">Username: </label>
            <input type="text" name="usr" id="usr" />
            <label htmlFor="pswd">Password: </label>
            <input type="password" name="pswd" id="pswd" />
            <button onClick={handleLogin}>Login</button> <br />

        </div>
    )
}

export default Login
