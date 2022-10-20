import styles from '../style';
import Button from './Button';
import { forexHero } from '../assets';


function Hero() {
    return (
        <section id='home' className={`flex flex-row sm:mt-10 
         ${styles.paddingY}`}>
            <div className={`md:flex-1 flex justify-center flex-col py-28
            xl:px-2 sm:px-4 px-6`}>

                <div className='flex flex-row justify-between
                items-center w-full'>
                    <h1 className='text-center flex-1 font-poppins font-semibold md:mt-6
                        ss:text-[40px] text-[32px] text-white ss:leading-[70px]
                        leading-[75px]'>
                        iForex is an <br className='sm:block hidden' />
                        award-winning platform
                    </h1>
                </div>

                <p className={`${styles.paragraph} max-w-[470px] mt-5 flex mx-auto md:text-start text-center`}>
                    Access 200+ Forex pairs across majors, minors and exotics,
                    crypto, plus spot metals, from only 0.3 pips
                </p>

                <div className='flex justify-center p-8'>
                    <div className="mr-5">
                        <Button styles={`cursor-pointer sm:flex font-poppins inline-block px-4 py-3 border-2 border-blue-700 
                            text-white font-medium text-xs leading-tight rounded-md bg-blue-700 
                            focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
                            text={`Open Account`}
                        />
                    </div>
                    <div>
                        <Button styles={`cursor-pointer sm:flex font-poppins inline-block px-4 py-3 border-2 border-blue-700 
                            text-blue-400 hover:text-greyWhite font-medium text-xs leading-tight rounded-md 
                            hover:bg-blue-700 focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
                            text={`Try Demo Account`}
                        />
                    </div>
                </div>

                {/* the gradient is added here  */}
                <div className='absolute z-[0] w-[40%] h-[35%] 
            top-0 pink__gradient' />
                <div className='absolute z-[0] w-[50%] h-[10%] 
            left-20 top-20 blue__gradient' />

            </div>

            <div className={`flex-1 hidden md:flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={forexHero} alt="billing"
                    className='object-contain rounded-md' />
            </div>
        </section>
    );
}

export default Hero;