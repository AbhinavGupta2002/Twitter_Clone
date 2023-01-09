import React from "react";
import ProfileImage from "../../../GeneralComponents/ProfileImage";

// icon imports
import { BsDot, BsThreeDots } from "react-icons/bs";
import {SiGoogleanalytics} from 'react-icons/si'
import {TbMessageCircle2} from 'react-icons/tb'
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {FiShare} from 'react-icons/fi'

export const FeedContent = ({content}) => {

    return (
        content.map(item => 
            <div className="p-3 flex gap-3 items-top border-b text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200">
                <div><ProfileImage image={item.profileImage}/></div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="font-bold">{item.name}</div>
                            {/*IMAGE_HERE FOR VERIFIED TICK*/}
                            <div className="text-text1">@{item.username}</div>
                            <div className="text-text1"><BsDot/></div>
                            <div className="text-text1">{item.time} min</div>
                        </div>
                        <div className="text-text1 cursor-pointer hover:bg-main hover:bg-opacity-20 rounded-full transition-all duration-200 hover:text-main p-2"><BsThreeDots/></div>
                    </div>
                    <div>{item.content}</div>
                    {item.link &&
                        <div className="mt-1 text-main cursor-pointer w-fit active:text-opacity-70 hover:underline"><a href={item.link} target="_blank">{item.link}</a></div>
                    }
                    {item.image &&
                        <div className="mt-2"><img src={item.image} className="w-full h-64 rounded-xl object-cover shadow-sm"/></div>
                    }
                    <div className="flex gap-8 items-center mt-6">
                        <div className="text-text1 flex gap-2 items-center hover:text-main transition-all duration-200">
                            <div><SiGoogleanalytics/></div>
                            <div>14.6M</div>
                        </div>
                        <div className="text-text1 flex gap-2 items-center hover:text-main transition-all duration-200">
                            <div className="text-xl"><TbMessageCircle2/></div>
                            <div>14.6M</div>
                        </div>
                        <div className="text-text1 flex gap-2 items-center hover:text-retweet transition-all duration-200">
                            <div className="text-xl"><AiOutlineRetweet/></div>
                            <div>14.6M</div>
                        </div>
                        <div className="text-text1 flex gap-2 items-center hover:text-heart transition-all duration-200">
                            <div className="text-xl"><AiOutlineHeart/></div>
                            <div>14.6M</div>
                        </div>
                        <div className="text-text1 hover:text-main transition-all duration-200">
                            <div className="text-lg"><FiShare/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default FeedContent