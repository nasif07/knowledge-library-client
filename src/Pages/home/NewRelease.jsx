
import Title from '../../components/Title';

import NewReleaseCart from '../../components/NewReleaseCart';

const NewRelease = () => {
    return (
        <>
            <Title>Latest Collection</Title>
            <div className="hero min-h-screen max-w-[1500px] px-16 mx-auto">
                <div className="flex flex-col lg:flex-row md:flex-col items-center justify-center gap-4">
                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold py-4'>Taste The New Spice</h1>
                        <h1 className="text-6xl font-medium pb-5 border-b-2">New Release Books</h1>
                        <p className="py-6 text-[#484848] text-xl">Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>
                        <div className=' md:flex gap-5 font-medium '>
                            <button className="w-[150px] border-2 mb-3 md:mb-3 rounded-lg bg-[#F99206] text-white h-12">View All</button>
                            <button className="w-[150px] p-3 border-2 rounded-lg">Read More</button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='md:flex gap-5'>
                            <NewReleaseCart></NewReleaseCart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewRelease;