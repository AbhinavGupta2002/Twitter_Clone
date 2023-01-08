import React from "react";
import ProfileImage from "../../../GeneralComponents/ProfileImage";

export const FeedContent = ({content}) => {

    return (
        content.map(item => 
            <div className="p-3 flex gap-3 items-top border-b text-sm cursor-pointer">
                <div><ProfileImage image={item.profileImage}/></div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <div className="font-bold">{item.name}</div>
                            {/*IMAGE_HERE FOR VERIFIED TICK*/}
                            <div className="text-text1">@{item.username}</div>
                            <div>.</div> {/*IMAGE_HERE*/}
                            <div className="text-text1">{item.time} min</div>
                        </div>
                        <div className="text-text1 cursor-pointer">...</div> {/*IMAGE_HERE*/}
                    </div>
                    <div>{item.content}</div>
                    {item.link &&
                        <div className="mt-1 text-main cursor-pointer w-fit active:text-opacity-70 hover:underline"><a href={item.link} target="_blank">{item.link}</a></div>
                    }
                    {item.image &&
                        <div className="mt-2"><img src={item.image} className="w-full h-64 rounded-xl object-cover shadow-sm"/></div>
                    }
                    <div>
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                        {/*IMAGE_HERE*/}
                    </div>
                </div>
            </div>
        )
    )
}

export default FeedContent