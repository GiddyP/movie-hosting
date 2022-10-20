import styles from "../style";
import Button from "./Button";

function GetStarted() {
    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} flex-col p-40`}>
            <h2 className='flex-1 font-poppins font-semibold 
                ss:text-[40px] text-[32px] text-white ss:leading-[70px]
                leading-[75px]'>Ready to get started?</h2>
            <h2 className='flex-1 font-poppins font-semibold 
            ss:text-[30px] text-[25px] text-dimWhite ss:leading-[70px]
            leading-[75px] text-center mt-5'> Open an Account with iForex in just a few steps and gain access to all asset classes</h2>
           
                <Button styles={`cursor-pointer sm:flex font-poppins inline-block px-4 py-3 border-2 border-blue-700 
                text-white font-medium text-xs leading-tight rounded-md bg-blue-700 
                focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5`}
                    text={`Open Account`} />
         

        </div>
    );
}

export default GetStarted;
