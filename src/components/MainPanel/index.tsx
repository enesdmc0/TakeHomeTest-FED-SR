"use client"
import {useState} from 'react';
import {
    BiArchiveIn,
    BsFillInboxFill,
    IoTicketOutline, MdLabelImportantOutline, MdOutlineMarkAsUnread, MdOutlinePeopleAlt,
    RiDeleteBinLine, BiTimeFive, AiOutlineStar
} from "react-icons/all";
import Link from "next/link";
import {data} from "@/data.json";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPanelHeader from "@/components/MainPanelHeader";

const MainPanel = () => {
    const [hover, setHover] = useState<null | number>(null)
    const [activeCat, setActiveCat] = useState<string>("promotions")
    const [filterData, setFilterData] = useState<Object | any>(data)
    const handleEnter = (id: number | null) => {
        setHover(id)
    }
    const handleLeave = () => {
        setHover(null)
    }
    const catClick = (cat: string) => {
        setActiveCat(cat)
    }
    const handleDelete = (id: number) => {
        const filter = data.filter(item => item.id !== id)
        setFilterData(filter)
        toast.success('Conservation moved to Trash', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }
    return (
        <div className="bg-white rounded-xl flex flex-col flex-3 p-3">
            <div className="flex flex-col gap-10">
                <MainPanelHeader/>
                <div className="flex items-center gap-40 ">
                    <div className="flex items-center gap-5 pb-4">
                        <BsFillInboxFill size={25}/>
                        <span>Primary</span>
                    </div>
                    <div className="flex gap-10">
                        <div onClick={() => catClick("promotions")}
                             className={`${activeCat === "promotions" && "text-blue-700 border-b-2 border-b-blue-700"} flex pb-4 items-center gap-3 cursor-pointer`}>
                            <IoTicketOutline size={25}/>
                            <span>Promotions</span>
                        </div>
                        <div onClick={() => catClick("social")}
                             className={`${activeCat === "social" && "text-blue-700 border-b-2 border-b-blue-700 pb-4"} flex pb-4 items-center gap-3 cursor-pointer`}>
                            <MdOutlinePeopleAlt size={25}/>
                            <span>Social</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2">
                <div>
                    {filterData?.filter((item: any) => item.category === activeCat).map((item: any) => (
                        <div onMouseEnter={() => handleEnter(item.id)} onMouseLeave={handleLeave}
                             className="border-x px-3 py-2 border-b"
                             key={item.id}>
                            <Link className="flex" href="">
                                <div className="flex flex-1 items-center gap-3">
                                    <input type="checkbox"/>
                                    <AiOutlineStar size={20}/>
                                    <MdLabelImportantOutline size={20}/>
                                    <span className="font-bold">{item.name}</span>
                                </div>
                                <div className="flex flex-5 items-center justify-between">
                                    <div>
                                        <span className="font-bold text-sm">{item.text}</span>
                                        <span className="text-sm">-{item.desc}</span>
                                    </div>
                                    {
                                        item.id === hover
                                            ? <div className="flex gap-2">
                                                <BiArchiveIn size={20}/>
                                                <RiDeleteBinLine onClick={() => handleDelete(item.id)} size={20}/>
                                                <MdOutlineMarkAsUnread size={20}/>
                                                <BiTimeFive size={20}/>
                                            </div>
                                            : <span className="font-bold ">{item.date}</span>
                                    }
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default MainPanel;
