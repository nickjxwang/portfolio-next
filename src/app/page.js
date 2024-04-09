import Link from 'next/link'
import Work from './work/page'

export default function Home() {
    return (
        <div className='xl:flex xl:flex-row-reverse xl:h-screen'>
            <div className='w-screen h-[90vh] mx-auto pt-32 p-5 sm:pt-60 xl:w-1/2 xl:flex-none overflow-hidden xl:h-screen bg-[#202020]'>
                <div className='flex flex-col gap-14'>
                    <div className='text-[3.6rem] font-medium leading-none flex flex-col -space-y-2 uppercase sm:text-[5rem] sm:text-center'>
                        <h2 className='pl-5 sm:pl-0'>art</h2>
                        <h2 className='pl-10 sm:pl-0'>design</h2>
                        <h2 className='text-center'>technology</h2>
                        {/* <h2 className='text-center'>art</h2>
                        <h2 className='text-center'>tech</h2>
                        <h2 className='text-center'>design</h2> */}
                    </div>
                    <div className='flex flex-col items-start gap-6 text-lg sm:items-center sm:gap-10'>
                        <div className='text-[#d9d9d9] ml-28 sm:ml-0 sm:text-center'>
                            {/* <p>
                                An agile developer with design thinking and
                                artistic creativity
                            </p> */}
                            <p className='sm:text-xl'>
                                A technologist with design thinking and artistic
                                creativity
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-full text-sm font-semibold'>
                            <Link href='/about'>
                                <div className='py-2 px-5 border-[#d9d9d9] border-[1px] sm:py-3 sm:px-6'>
                                    ABOUT ME
                                </div>
                            </Link>
                        </div>
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
