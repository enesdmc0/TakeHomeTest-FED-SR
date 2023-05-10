"use client"
import {useState} from 'react';
import {RiChat4Line} from "react-icons/all";
interface SidebarChatWindowProps {
    sidebarMenu: number | null
}

const SidebarChatWindow: React.FC<SidebarChatWindowProps> = ({ sidebarMenu }) => {
    const [hover, setHover] = useState(false)
    const handleEnter = () => {
        setHover(true)
    }
    const handleLeave = () => {
        setHover(false)
    }
    return (
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`${sidebarMenu === 2 || hover ? "block" : "hidden"} absolute w-[300px] h-[590px]   shadow-2xl bg-white top-4 left-20 rounded-2xl p-4 text-sm overflow-scroll`}>
            <div className="flex gap-5 border-b p-5">
                <RiChat4Line size={25}/>
                <span>New chat</span>
            </div>
            <div className="flex items-center justify-center h-full flex-col">
                <RiChat4Line size={30}/>
                <span className="font-medium text-md">No conversations</span>
                <span className="text-blue-700 font-medium">Start a chat</span>
            </div>
        </div>
    );
};

export default SidebarChatWindow;
