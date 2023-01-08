import React from "react";

export const TweetButton = ({isSmall = true}) => {
    return (
        <button className={isSmall ? "text-xs border px-3 py-1 border-main rounded-full font-bold bg-main text-white" : "text-xs border px-16 py-3 border-main rounded-full font-bold bg-main text-white"}>Tweet</button>
    )
}

export default TweetButton