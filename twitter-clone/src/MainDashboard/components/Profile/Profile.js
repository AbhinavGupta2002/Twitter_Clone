import React from "react";
import Content from "./Content";
import Header from "./Header";

export const Profile = ({username}) => {
    return (
        <div className="border-l border-r w-main">
            <Header username={username}/>
            <Content username={username}/>
        </div>
    )
}

export default Profile