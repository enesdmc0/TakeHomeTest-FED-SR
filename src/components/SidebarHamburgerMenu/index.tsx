"use client"
import {actions as mailActions} from "@/redux/gmail-slice";
import {useDispatch} from "react-redux";

const SidebarHamburgerMenu = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(mailActions.toggleHamburgerMenu())
    }
    return (
        <div onClick={handleClick} className="flex flex-col gap-1.5 items-center justify-center cursor-pointer rounded-full hover:bg-gray-300 w-12 h-12">
            <div className="w-7 h-0.5 bg-black"></div>
            <div className="w-7 h-0.5 bg-black"></div>
            <div className="w-7 h-0.5 bg-black"></div>
        </div>
    );
};

export default SidebarHamburgerMenu;
