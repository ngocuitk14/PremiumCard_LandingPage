import Cards from '../../assets/desktop/isocard.svg';

const Slogan = () => {
    return (
        <section className="text-36 my-14 relative font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p >Earn <span className="text-purple-600 dark:text-purple-300">More</span></p>
                <p>Pay Less</p>
                <button className="text-white text-20 px-6 py-[6px] font-bold mt-6 bg-purple-500 rounded-lg hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:my-[8px]">Start</button>
            </div>
            <div className='mt-14 md:absolute md:right-[-5rem]'>
                <img src={Cards} alt='credit Card'/>
            </div>
        </section>
    );
};

export default Slogan;
