import React from 'react';
import Account from "@/components/Account";
import {
    BsFillPersonFill,
    DiGoogleDrive, GrGoogleWallet,
    SiGmail,
    SiGooglecalendar, SiGooglechat,
    SiGooglemeet,
    SiGooglesheets,
} from "react-icons/all";
import Link from "next/link";

interface AppsMenuProps {
    appsMenu: boolean;
}

const AppsMenu: React.FC<AppsMenuProps> = ({appsMenu}) => {
    const data = [
        {id: 1, text: "acccount", icon: <Account/>, color: ""},
        {id: 2, text: "gmail", icon: <SiGmail size={25}/>, color: ""},
        {id: 3, text: "drive", icon: <DiGoogleDrive size={25}/>, color: ""},
        {id: 4, text: "docs", icon: <SiGooglesheets size={25}/>, color: "blue"},
        {id: 5, text: "sheeds", icon: <SiGooglesheets size={25}/>, color: "green"},
        {id: 6, text: "slides", icon: <SiGooglesheets size={25}/>, color: "yellow"},
        {id: 7, text: "calendar", icon: <SiGooglecalendar size={25}/>, color: ""},
        {id: 8, text: "chat", icon: <SiGooglechat size={25}/>, color: "green"},
        {id: 9, text: "meet", icon: <SiGooglemeet size={25}/>, color: ""},
        {id: 10, text: "forms", icon: <SiGooglesheets size={25}/>, color: "purple"},
        {id: 11, text: "currents", icon: <GrGoogleWallet size={25}/>, color: "blue"},
        {id: 12, text: "sites", icon: <SiGooglesheets size={25}/>, color:" blue"},
        {id: 13, text: "persons", icon: <BsFillPersonFill size={25}/>, color: "blue"},
    ]
    return (
        <div className={`${appsMenu ? "block" : "hidden"} absolute bg-white w-80 h-96 shadow-2xl right-1 rounded top-[56px] overflow-scroll`}>
           <div className="flex flex-wrap p-3 items-center justify-between gap-y-3">
               {data?.map(item => (
                   <Link href="" style={{color: `${item.color}`}} className={`capitalize text-sm font-medium  flex items-center justify-center w-[80px] h-[80px] flex-col gap-1 hover:bg-gray-200 rounded-full`}>
                       <div>{item.icon}</div>
                       <div className="text-black text-xs font-medium">{item.text}</div>
                   </Link>
               ))}
           </div>
        </div>
    );
};

export default AppsMenu;
