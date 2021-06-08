
import './Login.css';
import { loginUrl } from "./Spotify";
import {getTokenFromUrl } from './Spotify'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { gettingToken, getToken, getUserInfo, setCode,  } from '../redux/actions/action';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";



export default function Login() {


    const history = useHistory();

    const dispatch = useDispatch();

    const tokenState = useSelector(state => state.tokenState)

    const {token} = tokenState;


    
    useEffect(() => {

       
        const code = getTokenFromUrl();
        window.location.hash = "";
        
        if(token == null && code){
            dispatch(setCode(code));
            dispatch(gettingToken());
            dispatch(getToken());
        }
        if (token) {
            history.push({ pathname: "/profile" });
            return;
        }
        // eslint-disable-next-line 
    }, [token]);



    return (

        <div className='login'>
            <h1> Spotify Profile</h1>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}