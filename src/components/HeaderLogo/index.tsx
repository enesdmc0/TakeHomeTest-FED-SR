import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
    return (
        <Link href="" className="flex items-center h-full">
            <div className="relative w-32 h-12">
                <Image className="object-contain" fill src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt=""/>
            </div>
        </Link>
    );
};

export default HeaderLogo;
