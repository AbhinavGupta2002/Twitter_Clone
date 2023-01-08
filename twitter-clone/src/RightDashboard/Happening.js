import React from "react"

export const Happening = ({happening}) => {

    const isShowMore = true

    return (
        <div className="bg-rightDashboard rounded-lg overflow-hidden">
            <div className="font-extrabold text-lg py-2 px-3"><label>What's happening</label></div>
            <hr></hr>
            {happening.map(item => item.type === 'text' ?
                <>
                    <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100">
                        <div className="flex flex-row justify-between">
                            <div className="text-text1">Trending in {item.country}</div>
                            <div className="text-text1">...</div> {/*IMAGE_HERE*/}
                        </div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-text1">{item.tweets} Tweets</div>
                    </div>
                    <hr></hr>
                </> :
                <>
                    <div className="py-2 px-3 text-xs cursor-pointer hover:bg-gray-100 flex flex-row justify-between gap-2">
                        <div>
                            <div className="flex flex-row gap-1">
                                <div className="self-center"><img src={item.profileImage} className="w-3 h-3 rounded-sm object-cover"/></div>
                                {item.isTrending && <div className="font-semibold whitespace-nowrap">Trending in {item.country}</div>}
                                {item.isTrending && item.isThisMorning && <div className="text-text1">.</div>}
                                {/*IMAGE_HERE*/}
                                {item.isThisMorning && <div className="text-text1 whitespace-nowrap">This Morning</div>}
                            </div>
                            <div className="font-bold w-48">{item.title}</div>
                        </div>
                        <div className="self-center">
                            {/*IMAGE_HERE*/}
                            <img src={item.bodyImage} className= "w-rightDashboard h-rightDashboard rounded-xl object-cover"/>
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
        </div>
    )
}

export default Happening