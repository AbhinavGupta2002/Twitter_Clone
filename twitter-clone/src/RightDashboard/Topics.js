import React from "react";
import FollowButton from "../GeneralComponents/FollowButton";

export const Topics = ({topics, setTopics}) => {

    const isShowMore = true

    const deleteTopic = (index) => {
        setTopics(topics.filter((item, currIndex) => currIndex !== index))
    }

    return (
        topics.length ?
            <div className="bg-rightDashboard rounded-lg overflow-hidden">
                <div className="font-extrabold text-lg py-2 px-3"><label>Topics to follow</label></div>
                <hr></hr>
                {topics.map((item, index) =>
                    <>
                        <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100 flex flex-row justify-between items-center">
                            <div>
                                <div className="font-bold">{item.title}</div>
                                <div className="text-text1">{item.body}</div>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <div><FollowButton/></div>
                                <div className="text-text1" onClick={() => deleteTopic(index)}>X</div>
                            </div>
                        </div>
                        <hr></hr>
                    </>
                )}
                {isShowMore &&
                    <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100 text-main active:text-opacity-70">
                        Show More
                    </div>
                }
            </div> : <></>
    )
}

export default Topics