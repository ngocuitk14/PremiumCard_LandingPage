import { FaUser } from 'react-icons/fa';
import { BsCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';
import { useSpring, animated } from 'react-spring';

const Content = () => {
    const customer = useSpring({ customer: 10245, from: { customer: 0 } });
    const card = useSpring({ card: 12045, from: { card: 0 } });

    return (
        <section className="md:flex md:flex-rows">
            <div className="ml-[70px] mr-[54px] text-bold flex items-center bg-gradient-to-b shadow-md flex-col from-white/40 to-transparent rounded-[24px] md:w-[20%]">
                <div className="mt-16 gap-8 flex items-start">
                    <FaUser size={'22px'} className="mt-[12px]" />
                    <div className="text-26">
                        <animated.div>
                            {customer.customer.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
                    </div>
                </div>
                <div className="flex items-start mb-16 gap-8">
                    <BsCreditCardFill size={'22px'} className="mt-[12px]" />
                    <p className="text-26">
                        <animated.div>
                            {card.card.to((val) => Math.floor(val))}
                        </animated.div>{' '}
                        <p className="text-13 font-semibold md:text-16">Card Issued</p>
                    </p>
                </div>
            </div>
            <div className="text-12 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]">
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Card reports sent to your phone every weeks</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>No external fees</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    );
};

export default Content;
