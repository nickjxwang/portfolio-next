import Image from 'next/image'
import Link from 'next/link'
import image from '../../../public/about.jpg'
import Work from '../work/page'

export default function About() {
    return (
        <div className='overflow-hidden xl:flex xl:flex-row-reverse xl:h-screen'>
            <div className='w-screen h-[90vh] pt-28 p-5 bg-[#202020] md:pt-32 xl:w-1/2 xl:flex-none xl:pt-36 xl:h-screen'>
                <div className='text-[3rem] leading-none flex flex-col items-center gap-10'>
                    <div className='w-[15rem] h-[13rem] overflow-hidden sm:h-[26rem] sm:w-1/2'>
                        <Image
                            src={image}
                            alt=''
                            width={500}
                            height={500}
                            className='object-fill'
                        />
                    </div>
                    <p className='px-5 text-base md:text-xl md:px-32 md:leading-relaxed'>
                        I'm passionate about technology and come from a
                        background in interactive design. I'm good at solving
                        problems and enjoy turning visual concepts into dynamic,
                        interactive, and user-friendly digital products
                    </p>
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
