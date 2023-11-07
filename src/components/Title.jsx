

const Title = ({children}) => {
    return (
        <div className="max-w-[1500px] mx-auto pt-12 px-16">
            <div className='relative border-s-8 border-orange-400 ps-3'>
            <h2 className='text-6xl font-bold'>{children}</h2>
            <p className='absolute bottom-0 -z-10 md:text-[90px] lg:text-9xl mx-auto opacity-5'>{children}</p>
        </div>
        </div>
    );
};

export default Title;
