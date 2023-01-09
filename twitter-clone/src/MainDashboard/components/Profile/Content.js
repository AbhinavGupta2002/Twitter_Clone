import React, {useState} from "react";
import ProfileImage from "../../../GeneralComponents/ProfileImage";
import NoTweets from "./NoTweets";

// image imports
import headshotAbhinav from '../../../img/headshot.jpg'

// icon imports
import {BsDot, BsThreeDots} from 'react-icons/bs'
import {MdVerified} from 'react-icons/md'

export const Content = ({username}) => {

    const [current, setCurrent] = useState(0)

    return (
        <>
            <div className="flex -my-4 text-sm">
                <div className="flex flex-col items-center" onClick={() => setCurrent(0)}>
                    <div><button className="hover:bg-gray-200 font-bold py-4 px-11 transition-all duration-200">Tweets</button></div>
                    {current === 0 && <div className="h-1 w-16 -my-1 rounded-full bg-main"></div>}
                </div>
                <div className="flex flex-col items-center" onClick={() => setCurrent(1)}>
                    <button className="hover:bg-gray-200 font-bold py-4 px-11 transition-all duration-200 whitespace-nowrap">Tweets & replies</button>
                    {current === 1 && <div className="h-1 w-34 -my-1 rounded-full bg-main"></div>}
                </div>
                <div className="flex flex-col items-center" onClick={() => setCurrent(2)}>
                    <button className="hover:bg-gray-200 font-bold py-4 px-11 transition-all duration-200">Media</button>
                    {current === 2 && <div className="h-1 w-14 -my-1 rounded-full bg-main"></div>}
                </div>
                <div className="flex flex-col items-center" onClick={() => setCurrent(3)}>
                    <button className="hover:bg-gray-200 font-bold py-4 px-12 transition-all duration-200">Likes</button>
                    {current === 3 && <div className="h-1 w-12 -my-1 rounded-full bg-main"></div>}
                </div>
            </div>
            <div className="my-4"></div>
            <NoTweets username={username}/>
            <div className="p-4 flex gap-3 items-top border-b text-sm cursor-pointer hover:bg-gray-100 transition-all duration-200">
                <div><ProfileImage image={headshotAbhinav}/></div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <div className="font-bold">Abhinav Gupta</div>
                            <div className="text-main text-xl"><MdVerified/></div>
                            <div className="text-text1">@{username}</div>
                            <div className="text-text1"><BsDot/></div>
                            <div className="text-text1">3 h</div>
                        </div>
                        <div className="text-text1 cursor-pointer hover:bg-main hover:bg-opacity-20 rounded-full transition-all duration-200 hover:text-main p-2"><BsThreeDots/></div>
                    </div>
                    <div>This is indeed a test.</div>
                    {null &&
                        <div className="mt-1 text-main cursor-pointer w-fit active:text-opacity-70 hover:underline"><a href={null} target="_blank">{null}</a></div>
                    }
                    {null &&
                        <div className="mt-2"><img src={null} className="w-full h-64 rounded-xl object-cover shadow-sm"/></div>
                    }
                    <div>
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content