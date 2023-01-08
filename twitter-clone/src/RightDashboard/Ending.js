import React from "react";

export const Ending = () => {
    return (
        <div className="flex gap-2 flex-wrap text-xs px-2">
            <div className="cursor-pointer hover:underline text-gray-500">Terms of Service</div>
            <div className="cursor-pointer hover:underline text-gray-500">Privacy Policy</div>
            <div className="cursor-pointer hover:underline text-gray-500">Cookie Policy</div>
            <div className="cursor-pointer hover:underline text-gray-500">Accessibility</div>
            <div className="cursor-pointer hover:underline text-gray-500">Ads Info</div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline text-gray-500">
                <div>More</div>
                <div>...</div>
            </div>
            <div className="font-bold text-main"><label>Developed by Abhinav Gupta</label></div>
        </div>
    )
}

export default Ending