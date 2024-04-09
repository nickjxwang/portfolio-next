import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-black'>
            <h1>404</h1>
            <p>Page not found</p>
            <Link href='/work'>Discover Work</Link>
        </div>
    )
}
