"use client"
import {useState} from 'react';
import Link from "next/link";
/*Icons*/
import {GrMail, BsChatLeft, MdPeopleOutline, AiOutlineVideoCamera} from "react-icons/all";
/*Components*/
import SidebarMailWindow from "../SidebarMailWindow";
import SidebarHamburgerMenu from "@/components/SidebarHamburgerMenu";
import SidebarChatWindow from "@/components/SidebarChatWindow";
const Sidebar = () => {
    const [sidebarMenu, setSidebarMenu] = useState<number | null>(null)
    const data = [
        {id: 1, text: "mail", icon: <GrMail size={21}/>, href: "/"},
        {id: 2, text: "chat", icon: <BsChatLeft size={21}/>, href: "/"},
        {id: 3, text: "spaces", icon: <MdPeopleOutline size={21}/>, href: "/"},
        {id: 4, text: "meet", icon: <AiOutlineVideoCamera size={21}/>, href: "/"},
    ]
    const handleEnter = (id: null | number) => {
        setSidebarMenu(id)
    }
    const handleLeave = () => {
        setTimeout(() => {
            setSidebarMenu(null)
        }, 2000)
    }
    return (
        <div className="w-[80px] h-screen sticky top-0 left-0 space-y-10 flex flex-col pt-3 items-center text-[#202124]">
            <SidebarHamburgerMenu/>
            <div className="flex flex-col gap-5 items-center">
                {data?.map(item => (
                    <Link onMouseEnter={() => handleEnter(item.id)} onMouseLeave={handleLeave} className="hover:bg-gray-300 rounded-full px-4 py-1 flex flex-col items-center" key={item.id} href={item.href}>
                        <div>{item.icon}</div>
                        <div className="capitalize text-sm font-medium">{item.text}</div>
                    </Link>
                ))}
            </div>
            <SidebarMailWindow sidebarMenu={sidebarMenu}/>
            <SidebarChatWindow sidebarMenu={sidebarMenu}/>
        </div>
    );
};

export default Sidebar;
