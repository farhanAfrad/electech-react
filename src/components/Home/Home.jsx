
import { Link } from 'react-router-dom';
import apple from '../../../public/apple.png';
import samsung from '../../../public/samsung.png';
import oneplus from '../../../public/oneplus.png';
import oppo from '../../../public/oppo.png';
import realme from '../../../public/realme.png';
import nokia from '../../../public/nokia.png';

const Home = () => {
    return (
        <div className='bg-base-200 h-screen'>
            <div className='text-center pt-10'>
                <h2 className='text-xl font-semibold'>Leading Brands</h2>
                <p className='text-lg'>Buy Prouducts from our Diverse brand Selection!</p>
            </div>
            <div className='grid grid-cols-3 w-5/6 mx-auto mt-20 space-y-5'>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={apple} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/apple'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>Apple</p>
                </div>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={samsung} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/samsung'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>Samsung</p>
                </div>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={oneplus} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/oneplus'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>onePlus</p>
                </div>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={oppo} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/oppo'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>Oppo</p>
                </div>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={realme} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/realme'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>Realme</p>
                </div>
                <div className='flex justify-center items-center flex-col mx-auto'>
                    <div className='border bg-white rounded w-4/5 p-4 relative group cursor-pointer'>
                        <div>
                            <img src={nokia} alt="" className='' />
                        </div>
                        <div className='bg-red-400 w-full absolute h-0 top-0 left-0 group-hover:h-full duration-500 group-hover:opacity-100 flex justify-center items-center flex-col opacity-0 rounded'>
                            <Link to='/products/nokia'>
                                <button className='text-red-800 btn bg-white'>all product</button>
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>nokia</p>
                </div>
            </div>
        </div >
    );
};

export default Home;