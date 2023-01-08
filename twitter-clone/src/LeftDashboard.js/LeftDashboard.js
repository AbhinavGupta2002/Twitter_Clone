import React, { useEffect, useState } from "react";
import ProfileImage from "../GeneralComponents/ProfileImage";
import TweetButton from "../GeneralComponents/TweetButton";

// image imports
import headshotAbhinav from '../img/headshot2.jpg'

// icon imports
import {FiHome, FiHash, FiBell, FiMail, FiBookmark} from 'react-icons/fi'
import {CgList, CgMoreO} from 'react-icons/cg'
import {BsTwitter} from 'react-icons/bs'

export const LeftDashboard = () => {

    const [isSubNormal, setIsSubNormal] = useState(false)

    useEffect(() => {
        const handleLayout = () => {
            setIsSubNormal(window.innerWidth <= 1350)
        }
        window.addEventListener("resize", handleLayout)
        return () => window.removeEventListener("resize", handleLayout)
    })

    return (
        <div className="flex flex-col gap-3">

            {!isSubNormal ?
                <div className="h-2 w-42"></div> :
                <div className="h-2 w-16"></div>
            }

            {!isSubNormal ?
                <div className="flex flex-col gap-2 fixed text-lg">
                    <div className="font-semibold p-2 cursor-pointer w-fit text-2xl text-main"><BsTwitter/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2 text-main">
                        <div><FiHome/></div>
                        <div>Home</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><FiHash/></div>
                        <div>Explore</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><FiBell/></div>
                        <div>Notifications</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><FiMail/></div>
                        <div>Messages</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><FiBookmark/></div>
                        <div>Bookmarks</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><CgList/></div>
                        <div>Lists</div>
                    </div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all flex items-center gap-2">
                        <div><CgMoreO/></div>
                        <div>More</div>
                    </div>
                    <div><TweetButton isSmall={false}/></div>
                </div> :
                <div className="flex flex-col gap-2 fixed text-xl">
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit text-main"><FiHome/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><FiHash/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><FiBell/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><FiMail/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><FiBookmark/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><CgList/></div>
                    <div className="font-semibold p-2 cursor-pointer hover:bg-gray-100 rounded-full duration-200 transition-all w-fit"><CgMoreO/></div>
                    <div><TweetButton isSmall={true}/></div>
                </div>
            }

            <div className="w-42 fixed bottom-3">
                <div className="flex text-xs cursor-pointer">
                    {!isSubNormal && <div className="w-2/5"><ProfileImage image={headshotAbhinav}/></div>}
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-bold">Abhinav Gupta</div>
                            <div className="text-text1">@abhinavgupta</div>
                        </div>
                        {!isSubNormal && <div className="text-text1">...</div>}
                        {/*IMAGE_HERE*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftDashboard