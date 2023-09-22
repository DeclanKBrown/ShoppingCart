import { useState } from 'react';
import { items } from '../../Utilities/items'
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
    const item = items.find(item => item.name === params.name)
    console.log(item)
    return { item }
}


export default function ItemDetail() {
    const [qty, setQty] = useState(1)

    const { item } = useLoaderData()
    return (
        <main className='min-h-[89vh] py-16'>
            <div className="grid grid-cols-2">
                <div className='grid grid-cols-2 gap-3'>
                    <img src={item.imageFront} alt='imageFront' />
                    <img src={item.imageBack} alt='imageBack'/>
                </div>
                <div className='flex flex-col px-16 pr-80'>
                    <h1 className='text-3xl font-bold mb-6'>{item.name}</h1>
                    <h2 className='mb-4'>${item.price} AUD</h2>
                    <input type="number" className='border border-black mb-8 pl-4 w-20' min='1' max='5' value={qty} onChange={(e) => {setQty(e.value)}}/>
                    <button className='p-4 border border-black mb-6'>Add To Cart</button>
                    <span className='mb-4'>{item.description}</span>
                </div>
            </div>
        </main>
    )
}