import React from 'react'
import Home from './components/Home/Home'
import { useSelector, useDispatch } from 'react-redux'

import Profile from './components/Profile/Profile'


export const MainDashboard = () => {

    const type = useSelector((state) => state.type) // redux state

    return (
        type.mode == 'home' ? <Home/> : type.mode == 'profile' ? <Profile username={type?.value}/> : <></>
    )
}

export default MainDashboard