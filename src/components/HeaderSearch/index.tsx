"use client"
import {useState} from 'react';
import {AiOutlineSearch, GoSettings} from "react-icons/all";
import SearchSettings from "@/components/SearchSettings";

const HeaderSearch = () => {
    const [searchSettingsOpen, setSearchSettingOpen] = useState(false)
    const handleClick = () => {
        setSearchSettingOpen(!searchSettingsOpen)
    }
    return (
        <div className="flex relative items-center bg-gray-100 rounded px-1 py-1 gap-5 shadow-xl">
            <AiOutlineSearch size={25}/>
            <input className="outline-none bg-transparent w-[400px]" type="text" placeholder="Search in mail"/>
            <GoSettings onClick={handleClick} size={25} className="cursor-pointer hover:bg-gray-200 rounded-full p-1"/>
            <SearchSettings searchSettingsOpen={searchSettingsOpen}/>
        </div>
    );
};

export default HeaderSearch;
