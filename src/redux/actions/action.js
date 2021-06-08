import axios from "axios";
import { ERROR_TOKEN, ERROR_USER, GETTING_TOKEN, GETTING_USER, GOT_TOKEN, GOT_USER, SET_CODE } from "./action_types";
import queryString from "query-string"


export const setCode = code => ({
    type: SET_CODE,
    payload: code
})


export const gettingToken = () => ({
    type: GETTING_TOKEN
})


export const gotToken = (data) => ({
    type: GOT_TOKEN,
    payload: data
})

export const errorToken = (error) => ({
    type: ERROR_TOKEN,
    payload: error
})


export const getToken = () => {

    return async function (dispatch, getState) {
        const { tokenState: { code } } = getState();
        console.log("grom",code)
        const options = {
            method: 'POST',
            url: 'https://accounts.spotify.com/api/token',
            auth: {
                username: "27fcc8e98cf840fc8125e3925443640d",
                password: "3833a0452ff74aebbce9707b03c9d63a"
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: queryString.stringify({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: 'https://jolly-fermi-0e2fab.netlify.app/'
            })
        };

        try {
           
            let response = await axios.request(options);
            let data = await response;
            console.log("data",data)
            dispatch(gotToken(data.data.access_token));
        } catch (e) {
            dispatch(errorToken(e.message));
        }
    };
}


const gettingUser = () => ({
    type: GETTING_USER
})

const gotUser = data => ({
    type: GOT_USER,
    payload: data
})

const errorUser = (error) => ({
    type: ERROR_USER,
    payload: error
})




export const getUserInfo = () => {
    return async function (dispatch, getState) {
        const { tokenState: { token } } = getState();

        try {
            dispatch(gettingUser());
            let response = await axios.request({
                url: "https://api.spotify.com/v1/me",
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            const id = response.data.id;

            let user = await axios.request({
                url: `https://api.spotify.com/v1/users/${id}`,
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            console.log(user)
            dispatch(gotUser(user.data));
        }
        catch (err) {
            console.error(err);
            dispatch(errorUser(err));
        }
    }
}