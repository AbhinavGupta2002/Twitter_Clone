import React from "react"

export const NoTweets = ({username}) => {
    return (
        <div className="flex flex-col items-center mt-14">
            <div>
                <div className="font-extrabold text-3xl">@{username} hasn't</div>
                <div className="font-extrabold text-3xl">Tweeted</div>
                <div className="text-text1 mt-2">When they do, their Tweets will show up here.</div>
            </div>
        </div>
    )
}

export default NoTweets