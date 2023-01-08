import React from "react";
import FollowButton from "../GeneralComponents/FollowButton";
import ProfileImage from "../GeneralComponents/ProfileImage";

export const Follow = ({follow}) => {

    const isShowMore = true

    return (
        <div className="bg-rightDashboard rounded-lg overflow-hidden">
            <div className="font-extrabold text-lg py-2 px-3"><label>Who to follow</label></div>
            <hr></hr>
            {follow.map(item =>
                <>
                    <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100 flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <div><ProfileImage image={item.profileImage}/></div>
                            <div>
                                <div className="font-bold">{item.name}</div>
                                <div className="text-text1">@{item.username}</div>
                            </div>
                        </div>
                        <div><FollowButton/></div>
                    </div>
                    <hr></hr>
                </>
            )}
            {isShowMore &&
                <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100 text-main active:text-opacity-70">
                    Show More
                </div>
            }
        </div>
    )
}

export default Follow