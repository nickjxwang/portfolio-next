import Navbar from '@/components/Navbar'
import { IoTriangleSharp } from 'react-icons/io5'
import './globals.css'

export const metadata = {
    title: 'Portfolio',
    description: 'This is the personal portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />

                <IoTriangleSharp className='text-[10vh] text-[#d9d9d9] fixed bottom-[5vh] rotate-180 left-1/2 right-1/2 -translate-x-1/2 z-10 drop-shadow-[0_10px_8px_rgba(0,0,0,.2)]' />

                {children}
            </body>
        </html>
    )
}
