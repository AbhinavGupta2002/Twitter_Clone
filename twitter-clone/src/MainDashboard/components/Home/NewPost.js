import React from "react";
import ProfileImage from "../../../GeneralComponents/ProfileImage";
import TweetButton from "../../../GeneralComponents/TweetButton";

// image imports
import icon1 from '../../../img/icons/icon1.svg'
import icon2 from '../../../img/icons/icon2.svg'
import icon3 from '../../../img/icons/icon3.svg'
import icon4 from '../../../img/icons/icon4.svg'
import icon5 from '../../../img/icons/icon5.svg'
import earth from '../../../img/icons/earth.svg'

export const NewPost = ({image}) => {
    return (
        <div className="flex gap-3 p-3">
            <div className="h-14 w-12"><ProfileImage image={image}/></div>
            <div className="w-full">
                <textarea className="w-full max-h-32 h-16 p-2 text-sm" placeholder="Create a new tweet"/>
                <div className="text-xs text-main font-semibold cursor-pointer w-fit flex items-center gap-2">
                    <div><img src={earth}/></div>
                    <div>Everyone can reply</div>
                </div>
                <hr className="my-3"></hr>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <div><img src={icon1} className="cursor-pointer"/></div>
                        <div><img src={icon2} className="cursor-pointer"/></div>
                        <div><img src={icon3} className="cursor-pointer"/></div>
                        <div><img src={icon4} className="cursor-pointer"/></div>
                        <div><img src={icon5} className="cursor-pointer"/></div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div><TweetButton/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPost