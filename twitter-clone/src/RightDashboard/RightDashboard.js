import React, { useState, useEffect } from "react";

// image imports
import headshotAbhinav from '../img/headshot.jpg'
import headshotAbhinav2 from '../img/headshot2.jpg'
import headshotSarvesh from '../img/headshot_sarvesh.jpg'
import headshotAryan from '../img/headshot_aryan.jpg'
import kitchen from '../img/kitchen.jpg'
import album from '../img/album_cover.jpg'
import { Search } from "./Search";
import Happening from "./Happening";
import Follow from "./Follow";
import Topics from "./Topics";
import Ending from "./Ending";

export const RightDashboard = () => {

    const [isSubNormal, setIsSubNormal] = useState(false)
    const [isAbNormal, setIsAbNormal] = useState(false)

    useEffect(() => {
        const handleLayout = () => {
            setIsAbNormal(window.innerWidth <= 1217)
            setIsSubNormal(window.innerWidth <= 1250)
        }
        window.addEventListener("resize", handleLayout)
        return () => window.removeEventListener("resize", handleLayout)
    })

    const happening = [
        {
            type: 'text',
            title: `What's happening`,
            isTrending: true,
            country: 'Canada',
            tweets: '16.9K'
        },
        {
            type: 'text',
            title: `What's happening`,
            isTrending: true,
            country: 'India',
            tweets: '13.2K'
        },
        {
            type: 'media-text',
            title: `The pros and cons of the new grilling technique`,
            isTrending: true,
            country: 'Germany',
            isThisMorning: true,
            profileImage: headshotAbhinav,
            bodyImage: kitchen
        },
        {
            type: 'media-text',
            title: `Famous popstar Abhinav Gupta releases new album`,
            isTrending: true,
            country: 'Canada',
            isThisMorning: true,
            profileImage: headshotAbhinav2,
            bodyImage: album
        }
    ]

    const follow = [
        {
            name: 'Abhinav Gupta',
            username: 'abhinav_2002',
            profileImage: headshotAbhinav
        },
        {
            name: 'Sarvesh Wanzare',
            username: 's_wanzare',
            profileImage: headshotSarvesh
        },
        {
            name: 'Aryan Sanyal',
            username: 'aryan7291',
            profileImage: headshotAryan
        },
    ]

    const [topics, setTopics] = useState([
        {
            title: 'Full Stack Development',
            body: 'Computer Programming'
        },
        {
            title: 'Top Gun: Maverick',
            body: 'Movies'
        },
        {
            title: 'The Weekend',
            body: 'Music'
        }
    ])

    return (
        !isAbNormal ?
            <div className="sticky right-32 top-2 h-fullRightDashboard transition-all duration-300">
                {!isSubNormal ?
                    <div className="flex flex-col gap-5 w-80">
                        <Search/>
                        <Happening happening={happening}/>
                        <Follow follow={follow}/>
                        <Topics topics={topics} setTopics={setTopics}/>
                        <Ending/>
                    </div>
                    :
                    <div className="flex flex-col gap-5 w-72">
                        <Search/>
                        <Happening happening={happening}/>
                        <Follow follow={follow}/>
                        <Topics topics={topics} setTopics={setTopics}/>
                        <Ending/>
                    </div>
                }

            </div> : <></>
    )
}

export default RightDashboard