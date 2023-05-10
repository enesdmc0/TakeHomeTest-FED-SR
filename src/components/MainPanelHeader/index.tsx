import React from 'react';
import {AiOutlineCaretDown} from "react-icons/ai";
import {BiDotsVerticalRounded, HiOutlineChevronLeft, HiOutlineChevronRight, MdRefresh} from "react-icons/all";

const MainPanelHeader = () => {
    return (
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                    <input type="checkbox"/>
                    <AiOutlineCaretDown size={15}/>
                </div>
                <MdRefresh size={20}/>
                <BiDotsVerticalRounded size={20}/>
            </div>
            <div className="flex gap-7">
                <div>1-22 of 22</div>
                <div className="flex items-center gap-5">
                    <HiOutlineChevronLeft/>
                    <HiOutlineChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default MainPanelHeader;
