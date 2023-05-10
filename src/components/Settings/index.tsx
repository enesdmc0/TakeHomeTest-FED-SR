"use client"
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {actions as mailActions} from "@/redux/gmail-slice";

const Settings = () => {
    const {settingsMenu} = useSelector((state: any) => state.gmail)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(mailActions.toggleSettingsMenu())
    }
    return (
        <div className={`bg-white rounded-xl h-[550px] overflow-scroll font-medium flex-col flex-1 p-3 ${settingsMenu ? "flex" : "hidden"}`}>
           <div className="flex flex-col gap-5 border-b pb-5">
               <div className="flex items-center justify-between">
                   <h1>Quick settings</h1>
                   <span onClick={handleClick} className="hover:bg-gray-200 w-5 h-5 flex items-center justify-center rounded-full cursor-pointer">x</span>
               </div>
               <div className="text-center cursor-pointer border p-2 rounded-full text-blue-700">See all settings</div>
           </div>
            <div className="overflow-scroll py-5 flex flex-col gap-5">
                <div className="flex flex-col gap-5 border-b pb-5">
                    <h3 className="text-xs font-medium">Apps in Gmail</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <span>Chat and Meet</span>
                            <span className="text-blue-700">Customize</span>
                        </div>
                        <div className="relative w-[72px] h-[50px]">
                            <Image fill className="object-cover"  src="https://ssl.gstatic.com/ui/v1/icons/mail/quicksettings/nav/Nav_promo.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 border-b pb-5">
                    <label className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <input type="radio"/>
                            <span>Default</span>
                        </div>
                        <div className="relative w-[72px] h-[50px]">
                            <Image fill className="object-contain"  src="https://ssl.gstatic.com/ui/v1/icons/mail/quicksettings/displaydensity/Default.png" alt=""/>
                        </div>
                    </label>
                    <label className="flex items-center justify-between">
                        <div className="flex gap-2">
                           <input type="radio"/>
                           <span>Comfortable</span>
                       </div>
                        <div className="relative w-[72px] h-[50px]">
                            <Image fill className="object-contain"  src="https://ssl.gstatic.com/ui/v1/icons/mail/quicksettings/displaydensity/Compact.png" alt=""/>
                        </div>
                    </label>
                    <label className="flex items-center justify-between">
                        <div className="flex gap-2">
                        <input type="radio"/>
                        <span>Compact</span>
                        </div>
                        <div className="relative w-[72px] h-[50px]">
                            <Image fill className="object-contain"  src="https://ssl.gstatic.com/ui/v1/icons/mail/quicksettings/displaydensity/Default.png" alt=""/>
                        </div>
                    </label>
                </div>
                <div className="pb-5 flex flex-col border-b gap-4">
                    <div className="flex items-center justify-between">
                        <h3>Theme</h3>
                        <span>View all</span>
                    </div>
                    <div className="relative w-[72px] h-[50px]">
                        <Image fill src="https://ssl.gstatic.com/ui/v1/icons/mail/themes/basicwhite/previewHD5.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
