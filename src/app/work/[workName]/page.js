'use client'
import Image from 'next/image'
import { data } from '../../_data'
import { IoTriangleSharp } from 'react-icons/io5'
import { useRouter } from 'next/navigation'

export default function WorkDetails({ params }) {
    const workId = params.workName
    const workData = data[workId - 1]
    const router = useRouter()

    const closeHandler = () => {
        return router.back()
    }

    return (
        <div>
            <Image
                src={workData.img}
                alt=''
                className='object-cover w-full h-screen'
            />

            <div className='h-full mb-16'>
                <h3 className='absolute bottom-0 flex flex-col p-5 lg:pl-7'>
                    <div className='text-base font-medium uppercase'>
                        {workData.title}
                        <span className='mx-1'>-</span>
                        {workData.date}
                    </div>
                    {/* <div className='text-sm'>{workData.date}</div> */}
                </h3>
                <div className='flex flex-col w-full h-full p-5 pt-24 lg:pl-7'>
                    <div className='flex flex-col gap-8'>
                        <h3 className='text-sm font-bold uppercase'>
                            {workData.title}
                        </h3>

                        <div className='flex flex-col gap-8 pb-8'>
                            <p className='md:w-[75%] font-light xl:text-xl xl:w-[50%]'>
                                {workData.desc}
                            </p>
                            {workData.view || workData.code ? (
                                <div className='flex gap-10 font-semibold uppercase'>
                                    {workData.view ? (
                                        <a href={workData.view} target='_blank'>
                                            visit platform
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                    {workData.code ? (
                                        <a href={workData.code} target='_blank'>
                                            visit code
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                    {/* <a href={workData.view}>visit platform</a>
                        <a href={workData.code}>visit code</a> */}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-sm font-semibold uppercase'>
                                technologies
                            </h3>
                            <div className='flex items-center gap-5 pb-4 text-sm font-light xl:text-base'>
                                {workData.tool.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {workData.video ? (
                <div>
                    <iframe
                        src={workData.video}
                        frameborder='0'
                        allowfullscreen
                        className='object-cover w-full h-screen'
                    />
                </div>
            ) : (
                ''
            )}

            {workData.slider?.map((item, index) => {
                return (
                    <div key={index} className='h-screen'>
                        <Image
                            src={item}
                            alt=''
                            className='object-cover h-full'
                        />
                    </div>
                )
            })}

            {workId && (
                <div className='cursor-pointer' onClick={closeHandler}>
                    <IoTriangleSharp className='text-[10vh] text-[#d9d9d9] fixed bottom-[5vh] rotate-180 left-1/2 right-1/2 -translate-x-1/2 z-10 drop-shadow-[0_10px_8px_rgba(0,0,0,.2)]' />
                    <h3 className='fixed z-20 text-center text-black -translate-x-4 bottom-[10vh] left-1/2 right-1/2'>
                        Close
                    </h3>
                </div>
            )}
        </div>
    )
}
