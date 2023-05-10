import '../styles/reset.css'
import '../styles/globals.css'
import {Open_Sans} from 'next/font/google'

import StoreProvider from "@/redux/store-provider";

const openSans = Open_Sans({subsets: ['latin']})


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={openSans.className}>
        <StoreProvider>
        <main>{children}</main>
        </StoreProvider>
        </body>
        </html>
    )
}
