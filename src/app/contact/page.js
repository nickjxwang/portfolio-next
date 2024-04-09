import Link from 'next/link'
import Work from '../work/page'

export default function Contact() {
    return (
        <div className='overflow-hidden xl:flex xl:flex-row-reverse xl:h-screen'>
            <div className='w-screen h-[90vh] pt-28 p-5 xl:w-1/2 md:flex-none md:pt-48 md:pl-36 md:h-screen bg-[#202020]'>
                <div className='text-[2rem] px-5 flex flex-col gap-12 md:text-[2.5rem]'>
                    <h2>Get in touch</h2>
                    <div className='text-base'>
                        <h3 className='font-semibold'>EMAIL</h3>
                        <a
                            className='text-lg'
                            href='mailto:n.chinhsueh.wang@gmail.com'
                        >
                            n.chinhsueh.wang@gmail.com
                        </a>
                        {/* <p className='font-light'>n.chinhsueh.wang@gmail.com</p> */}
                    </div>
                    <div className='flex gap-5 text-lg font-thin'>
                        <a
                            href='https://www.linkedin.com/in/nwang15'
                            target='_blank'
                        >
                            Linkedin
                        </a>
                        <a href='https://github.com/nickjxwang' target='_blank'>
                            Github
                        </a>
                        {/* <a href='https://www.behance.net' target='_blank'>
                            Behance
                        </a>
                        <a href='https://vimeo.com' target='_blank'>
                            Vimeo
                        </a> */}
                    </div>
                </div>
            </div>
            <div
                className='overflow-x-hidden overflow-y-auto xl:flex-auto'
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <Work />
            </div>
        </div>
    )
}
