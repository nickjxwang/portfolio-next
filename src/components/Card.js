import Image from 'next/image'
import Link from 'next/link'

export default function Card({ item }) {
    return (
        <div className={`relative w-full h-full`}>
            <Link href={`/work/${item.id}`}>
                <Image
                    src={item.img}
                    alt=''
                    // layout='fill'
                    // objectFit='cover'
                    className='object-cover w-full h-full'
                />
                <h3 className='absolute bottom-0 flex flex-col p-2'>
                    <div className='text-base font-medium uppercase'>
                        {item.title}
                        <span className='mx-1'>-</span>
                        {item.date}
                    </div>
                </h3>
            </Link>

            {/* <Link href={`/work/${item.id}`}>
                <Image
                    src={item.img}
                    alt=''
                    className='object-cover w-full h-full break-inside-avoid'
                />
                <h3 className='absolute bottom-0 flex flex-col p-2'>
                    <div className='text-[.8rem] font-medium uppercase'>
                        {item.title}
                    </div>
                    <div className='text-xs'>{item.data}</div>
                </h3>
            </Link> */}
            {/* <div className={`relative w-full`} style={{ height: `${item.size}px` }}> */}
        </div>
    )
}
