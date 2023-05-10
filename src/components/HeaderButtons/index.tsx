"use client"
import {useState} from 'react';
import {BiHelpCircle, IoSettingsOutline, MdDateRange, TbGridDots} from "react-icons/all";
import {AiOutlineCaretDown} from "react-icons/ai";
import AppsMenu from "@/components/AppsMenu";
import {actions as mailActions} from "@/redux/gmail-slice";
import {useDispatch} from "react-redux";

const HeaderButtons = () => {
    const [appsMenu, setAppsMenu] = useState(false)
    const dispatch = useDispatch()
    const settingsClick = () => {
        dispatch(mailActions.toggleSettingsMenu())
    }
    const appsClick = () => {
        setAppsMenu(!appsMenu)
    }
    return (
        <>
            <div className="flex gap-3 items-center py-1 px-3 border rounded-full border-gray-300">
                <div className="w-4 h-4 bg-green-800 rounded-full"></div>
                <MdDateRange size={20}/>
                <AiOutlineCaretDown size={15}/>
            </div>
            <div className="flex items-center gap-3">
                <span className="cursor-pointer rounded-full p-1 hover:bg-gray-300"><BiHelpCircle size={25}/></span>
                <span className="cursor-pointer rounded-full p-1 hover:bg-gray-300" onClick={settingsClick}><IoSettingsOutline size={25} /></span>
                <span className="cursor-pointer rounded-full p-1 hover:bg-gray-300" onClick={appsClick}><TbGridDots size={25}/></span>
                <AppsMenu appsMenu={appsMenu}/>
            </div>
            <div className="rounded-md flex gap-3 items-center border border-gray-300 bg-white shadow-2xl p-1 cursor-pointer">
                <span className="font-bold text-xl text-gray-600">GOOGLE</span>
                <span className="w-9 h-9 bg-green-700 text-white font-medium rounded-full flex items-center justify-center">E</span>
            </div>
        </>
    );
};

export default HeaderButtons;
