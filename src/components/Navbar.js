'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    return (
        <div className='fixed top-0 left-0 z-50 w-full p-5 text-sm font-semibold xl:p-8'>
            <div className='flex justify-between'>
                <Link href='/'>NICK</Link>
                {pathname === '/contact' ? (
                    ''
                ) : (
                    <Link href='/contact'>CONTACT</Link>
                )}
            </div>
        </div>
    )
}
