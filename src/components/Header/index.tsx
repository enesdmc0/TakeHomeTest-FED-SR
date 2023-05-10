import HeaderLogo from "@/components/HeaderLogo";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderButtons from "@/components/HeaderButtons";

const Header = () => {

    return (
        <div className="w-full h-[56px] items-center justify-between px-4 flex text-[#5f6368]">
            <HeaderLogo/>
            <div className="flex gap-10 rounded-md">
                <HeaderSearch/>
                <div className="flex gap-5">
                    <HeaderButtons/>
                </div>
            </div>
        </div>
    );
};

export default Header;
