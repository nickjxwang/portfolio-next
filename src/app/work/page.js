import Card from '@/components/Card'
import { data } from '../_data'
import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
    return (
        <div className='flex flex-col h-full gap-6 xl:flex-row'>
            <div className='grid w-full h-full grid-cols-1 gap-6 xl:grid-cols-2'>
                {data.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className='w-full h-[20rem] md:h-[26rem] xl:h-[32rem]'
                        >
                            <Card item={item} />
                        </div>
                    )
                })}
            </div>
            {/* <div className='grid w-full h-full grid-cols-1 gap-6'>
                {data.map((item, index) => {
                    if (index % 2 === 0) {
                        return null
                    }
                    return (
                        <div
                            key={item.id}
                            className={`w-full h-[${item.size}rem]`}
                        >
                            <Card item={item} />
                        </div>
                    )
                })}
            </div> */}
        </div>

        // <div className='grid grid-cols-2 gap-4 md:gap-8 xl:grid-cols-2'>
        //     {data.map(item => {
        //         return <Card key={item.id} item={item} className='h-[34rem]' />
        //     })}

        //     {/* {data.map((item, index) => {
        //         return (
        //             <div
        //                 key={index}
        //                 className={`bg-gray-200 ${
        //                     index % 2 === 1 ? 'h-[30rem]' : 'h-[34rem]'
        //                 } break-inside-avoid`}
        //             >
        //                 <h2>fdfsdgf</h2>
        //             </div>
        //         )
        //     })} */}
        // </div>
    )
}
