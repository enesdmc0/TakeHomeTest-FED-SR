import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ExtendedSidebar from "@/components/ExtendedSidebar";
import MainPanel from "@/components/MainPanel";
import Settings from "@/components/Settings";

const HomeContainer = () => {

    return (
        <>
            <Sidebar/>
            <div className="w-full h-full">
                <Header/>
               <div className="flex h-full p-3 gap-3">
                   <ExtendedSidebar/>
                   <MainPanel/>
                   <Settings/>
               </div>
            </div>
        </>
    );
};

export default HomeContainer;
