import React from "react";
import { useDispatch } from 'react-redux'
import { actions } from '../../../ReduxStates/index'
import { bindActionCreators } from 'redux'

// icon imports
import {BsArrowLeft} from 'react-icons/bs'
import {MdVerified} from 'react-icons/md'
import {RxCalendar} from 'react-icons/rx'
import {TfiLocationPin} from 'react-icons/tfi'

// image imports
import scenary from '../../../img/profiles/abhinav_2002/scenary.jpg'
import headshotAbhinav from '../../../img/headshot.jpg'
import FollowButton from "../../../GeneralComponents/FollowButton";

export const Header = ({username}) => {

    const dispatch = useDispatch()
    const {toggleMain} = bindActionCreators(actions, dispatch)
    
    return (
        <>
            <div className="p-3 flex gap-5 items-center">
                <div className="text-xl cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all duration-200 active:bg-gray-200" onClick={() => toggleMain({mode: 'home'})}><BsArrowLeft/></div>
                <div className="font-extrabold text-lg flex items-center gap-1"><div><label>Abhinav Gupta</label></div><div><MdVerified className="text-main text-xl"/></div></div>
            </div>
            <img src={scenary} className="w-full h-56 object-cover"/>
            <div className="flex justify-between">
                <div><img src={headshotAbhinav} className="w-36 h-36 object-cover rounded-full mx-4 -my-16 border-3 border-white relative"/></div>
                <div className="mx-4 my-2"><FollowButton/></div>
            </div>
            <div className="h-9"></div>
            <div className="p-4 text-sm">
                <div className="font-extrabold text-lg flex items-center gap-1"><div>Abhinav Gupta</div><div><MdVerified className="text-main text-xl"/></div></div>
                <div className="-my-1 text-text1 text-sm">@{username}</div>
                <div className="flex flex-col gap-2 my-4">
                    <div>Hello Tweeters, this is my profile!</div>
                    <div className="flex gap-3 text-text1">
                        <div className="flex gap-1 items-center">
                            <div><TfiLocationPin/></div>
                            <div>Waterloo, Canada</div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div><RxCalendar/></div>
                            <div>Joined January 2023</div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <span className="font-bold">24 </span>
                            <span className="text-text1">Following</span>
                        </div>
                        <div>
                            <span className="font-bold">849.6K </span>
                            <span className="text-text1">Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header