import image from '../../assets/surf.jpeg'
import image2 from '../../assets/surf1.jpeg'
import image3 from '../../assets/surf2.jpeg'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <main className="min-h-[89vh] flex flex-col sm:px-16 md:px-32 lg:px-64 xl:px-64">
            <div className='flex flex-col items-center'>
                <img className='w-full' src={image} />
                <h1 className='-translate-y-60 font-bold text-red-500 sm:text-1xl md:text-2xl lg:text-4xl xl:text-6xl'>Shop The Best Surfboards</h1>
                <Link to={'/shop'}>
                    <button className='border-solid border-black border-2 p-3 px-4 bg-white -translate-y-32 hover:opacity-80' type='button'>Shop Now</button>
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-16 items-center'>
                <div className='md:col-span-1 flex justify-center'>
                    <img className="w-2/3 md:w-full mb-2" src={image2} alt="Your Image" />
                </div>
                <div className='md:col-span-2'>
                    <div className='px-6 md:px-24 flex flex-col justify-items-center text-center md:text-left'>
                    <h1 className='font-semibold text-xl mb-4'>Ride the Waves with Confidence</h1>
                    <span className='text-lg'>Discover the perfect surfboard for your next adventure. Whether youre a seasoned pro or just getting started, our wide range of high-quality surfboards is designed to make every wave an unforgettable experience. Dive into our collection and find the board that matches your style and skill level.</span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-16 items-center'>
                <div className='md:col-span-2'>
                    <div className='px-6 md:pr-20 flex flex-col text-center md:text-left'>
                    <h1 className='font-semibold text-xl mb-4'>Unleash Your Inner Surfer</h1>
                    <span className='text-lg'>Embrace the sun, sea, and surf culture with our exceptional surfboards. Crafted with precision and passion, our boards are built to endure the most challenging waves. Whether youre chasing barrels or cruising the coastline, trust us to provide the ride of a lifetime. Dive into the surfboard paradise today!</span>
                    </div>
                </div>
                <div className='md:col-span-1 flex justify-center'>
                    <img className="w-2/3 md:w-full mb-2" src={image3} alt="Your Image" />
                </div>
            </div>
            <div className='flex mb-16 items-center justify-center'>
                <Link to={'/shop'}>
                    <button className='border-solid border-black border-2 p-3 px-4 bg-white hover:opacity-50' type='button'>Shop Now</button>
                </Link>
            </div>
        </main>
    )
}