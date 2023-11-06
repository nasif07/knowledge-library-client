

const Title = ({children}) => {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className='relative border-s-8 border-orange-400 ps-3'>
            <h2 className='text-6xl font-bold'>{children}</h2>
            <p className='absolute bottom-0 text-9xl max-w-2xl mx-auto opacity-5'>{children}</p>
        </div>
        </div>
    );
};

export default Title;