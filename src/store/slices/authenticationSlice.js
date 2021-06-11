import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const authenticationSlice = createSlice({
    name: 'authenticated',
    initialState: {
        value: false,
        access_token: "",
        token_type: "",
        expires_in: 0,
        refresh_token: ""
    },
    reducers: {
        login: (state, props) => {
            state.access_token = props.access_token;
            // axios.interceptors.request.use(
            //     config => {
            //         if (state.access_token) {
            //             config.headers['Authorization'] = 'Bearer ' + state.access_token;
            //         }
            //         config.headers['Content-Type'] = 'application/json';
            //         return config;
            //     },
            //     error => {
            //         Promise.reject(error)
            //     });
            state.expires_in = props.expires_in;
            state.refresh_token = props.refresh_token;
            state.token_type = props.token_type;
            state.value = true;
        },
        logout: (state) => {
            state.access_token = null;
            state.expires_in = null;
            state.refresh_token = null;
            state.token_type = null;
            state.value = false
            axios.interceptors.request.use(function (config) {
                const token = state.access_token;
                config.headers.Authorization = token;
                return config;
            });
        }
    },
})

export const { login, logout } = authenticationSlice.actions

export default authenticationSlice.reducer