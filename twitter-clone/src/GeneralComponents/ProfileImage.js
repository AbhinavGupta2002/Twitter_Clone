import React from "react";

export const ProfileImage = ({image}) => {
    return (
        <img src={image} className="h-10 object-cover rounded-full" style={{minWidth: '2.5rem', maxWidth: '2.5rem'}}/>
    )
}

export default ProfileImage