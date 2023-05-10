"use client"
import {useState} from 'react';
import {HiOutlinePencil} from "react-icons/hi";
import {BsInboxFill} from "react-icons/bs";
import {AiOutlineCaretDown, AiOutlinePlus, AiOutlineSend, AiOutlineStar} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import {
    ImLibreoffice,
    IoPeopleOutline,
    IoTicketOutline, MdLabel,
    MdLabelImportantOutline, MdLabelOutline,
    MdOutlineForum,
    MdOutlineUpdate
} from "react-icons/all";
import Link from "next/link";
interface SidebarMailWindowProps {
    sidebarMenu: number | null
}

const SidebarMailWindow: React.FC<SidebarMailWindowProps> = ({ sidebarMenu }) => {
    const data = [
        {id: 2, text: "inbox", icon: <BsInboxFill size={20}/>, href: "/", number: "43"},
        {id: 3, text: "starred", icon: <AiOutlineStar size={20}/>, href: "/", number: ""},
        {id: 4, text: "snoozed", icon: <BiTimeFive size={20}/>, href: "/", number: ""},
        {id: 5, text: "important", icon: <MdLabelImportantOutline size={20}/>, href: "/", number: ""},
        {id: 6, text: "sent", icon: <AiOutlineSend size={20}/>, href: "/", number: ""},
        {id: 7, text: "drafts", icon: <ImLibreoffice size={20}/>, href: "/", number: ""},
        {id: 8, text: "social", icon: <IoPeopleOutline size={20}/>, href: "/", number: "2"},
        {id: 9, text: "updates", icon: <MdOutlineUpdate size={20}/>, href: "/", number: "43"},
        {id: 10, text: "forums", icon: <MdOutlineForum size={20}/>, href: "/", number: ""},
        {id: 11, text: "promotions", icon: <IoTicketOutline size={20}/>, href: "/", number: "16"},
        {id: 12, text: "_domains_", icon: <MdLabel size={20}/>, href: "/", number: ""},
        {id: 13, text: "follow up", icon: <MdLabel size={20}/>, href: "/", number: ""},
        {id: 14, text: "misc", icon: <MdLabel size={20}/>, href: "/", number: ""},
        {id: 15, text: "priority", icon: <MdLabel size={20}/>, href: "/", number: ""},
    ]
    const [hover, setHover] = useState(false)
    const handleEnter = () => {
        setHover(true)
    }
    const handleLeave = () => {
        setHover(false)
    }
    return (
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`${sidebarMenu === 1 || hover ? "block" : "hidden"} absolute w-[300px] h-[590px]   shadow-2xl bg-white top-4 left-20 rounded-2xl p-4 text-sm overflow-scroll`}>
            <div className="flex gap-5 border-b pb-2 px-4">
                <HiOutlinePencil size={25}/>
                <span>Compose</span>
            </div>
            <div className="flex flex-col gap-1 pt-1">
                {
                    data?.slice(0, 6).map(item => (
                        <Link key={item.id} href={item.href}
                              className={`${item.number  && "font-bold "} flex items-center py-2 px-5 rounded-full hover:bg-gray-200 border border-white hover:border-gray-300 justify-between`}>
                            <div className="flex items-center gap-5">
                                <span>{item.icon}</span>
                                <span className="capitalize">{item.text}</span>
                            </div>
                            <div>{item?.number}</div>
                        </Link>
                    ))
                }
            </div>
            <div>
                <div className="flex gap-5 py-2 cursor-pointer">
                    <div className="flex gap-2">
                        <AiOutlineCaretDown size={15}/>
                        <MdLabelOutline size={20}/>
                    </div>
                    <span>Categories</span>
                </div>
                <div>
                    {data?.slice(6, 10).map(item => (
                        <Link key={item.id} href={item.href}
                            className={`${item.number  && "font-bold "}flex items-center py-2 px-5 rounded-full hover:bg-gray-200 border border-white hover:border-gray-300 justify-between`}>
                            <div className="flex items-center gap-5">
                                <span>{item.icon}</span>
                                <span className="capitalize">{item.text}</span>
                            </div>
                            <div>{item?.number}</div>
                        </Link>
                    ))}
                </div>
                <div>
                    <div className="flex items-center justify-between px-5 py-2 font-bold">
                        <span>Labels</span>
                        <AiOutlinePlus size={20}/>
                    </div>
                    <div>
                        {data?.slice(10,15).map(item => (
                            <Link key={item.id} href={item.href}
                                  className="flex items-center py-2 px-5 rounded-full hover:bg-gray-200 border border-white hover:border-gray-300 justify-between">
                                <div className="flex items-center gap-5">
                                    <span>{item.icon}</span>
                                    <span className="capitalize">{item.text}</span>
                                </div>
                                <div>{item?.number}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMailWindow;
