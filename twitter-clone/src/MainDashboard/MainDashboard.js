import React from 'react'
import Home from './components/Home/Home'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../ReduxStates/index'
import { bindActionCreators } from 'redux'


export const MainDashboard = () => {

    const type = useSelector((state) => state.type) // redux state
    const dispatch = useDispatch()
    const {toggleMain} = bindActionCreators(actions, dispatch)

    return (
        type == 'home' ? <Home/> : type == 'test' ? <div onClick={() => toggleMain("home")}>HELLO</div> : <></>
    )
}

export default MainDashboard