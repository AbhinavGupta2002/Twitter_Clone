import React from "react";
import { ContentDivider } from "../../../GeneralComponents/ContentDivider";
import FeedContent from "./FeedContent";
import NewPost from "./NewPost";

// image imports
import headshotAbhinav from '../../../img/headshot2.jpg'
import Serv2ULogo from '../../../img/serv2u_logo.jpg'
import Serv2UPage from '../../../img/serv2u_dashboard.png'

export const Home = () => {

    const content = [
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: "https://www.serv2u.org",
            image: Serv2UPage,
            content: "We have developed our beautiful customer dashboard on the website for the desktop platform, led by our CTO - Abhinav Gupta. Check out the dashboard and order some freshly prepared home-cooked food too!"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        ,
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        },
        {
            profileImage: Serv2ULogo,
            name: "Serv2U",
            username: "serv2u",
            time: "2", // in minutes
            link: null,
            image: Serv2UPage,
            content: "HELLO How are you  boss?"
        }
    ]

    return (
        <div className="border-l border-r w-main">
            <div className="p-3">
                <div className="font-extrabold text-lg"><label>Home</label></div>
                {/*IMAGE_HERE*/}
            </div>
            <hr></hr>
            <NewPost image={headshotAbhinav}/>
            <ContentDivider/>
            <FeedContent content={content}/>
        </div>
    )
}

export default Home