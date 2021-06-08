import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserInfo } from '../redux/actions/action';
import './Profile.css';
import { useEffect } from 'react'


export const Profile = () => {


    const userState = useSelector(state => state.userState)
    const dispatch = useDispatch();
    const { user, loading} = userState;

    useEffect(() => {
        if(loading){
            dispatch(getUserInfo());
        }
        // eslint-disable-next-line 
    }, []);



    if(loading) return <h1>Getting Your Data</h1>
    
    
    const image = user.images[0].url || "/images/user.svg"
    

    return (
        <div className="profile-container">
            <div className="header">
                <img src={image} alt={user.display_name} />
                <h1>{user.display_name}</h1>
                <div className="info-bar">
                    <div className="followers">{user.followers.total}<h6>FOLLOWERS</h6></div>
                    <div className="following">29<h6>FOLLOWING</h6></div>
                    <div className="playlist">6<h6>PLAYLISTS</h6></div>
                </div>
            </div>
        </div>
    )
}
