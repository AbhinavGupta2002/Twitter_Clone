import React from "react";

export const ProfileImage = ({image}) => {
    return (
        <img src={image} className="w-10 h-10 object-cover rounded-full"/>
    )
}

export default ProfileImage