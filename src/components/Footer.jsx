import { iforex4 } from "../assets";
import styles from "../style";


import { footerLinks, socialMedia } from "../constants";

function Footer() {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8  w-full border-t-[1px] border-t-[#3F3E45]`}>
                <div className="flex-[0.4] flex flex-col justify-start">
                    <img src={iforex4} alt="iforex4"
                        className="w-[180px] h-[90px] object-cover cursor-pointer"
                    />
                    <p className={`${styles.paragraph} md:max-w-[150px] text-dimWhite p-3`}>
                        iForex Bank (Headquarters) Lorem, ipsum. Suto 15 plot 9 Lagos, Nigeria</p>
                    <div className="flex flex-row md:mt-0 mt-6 ml-3">
                        {
                            socialMedia.map((social, index) => (
                                <img
                                    key={social.id}
                                    src={social.icon}
                                    alt={social.name}
                                    className={`w-[21px] h-[21px] object-contain
                   cursor-pointer ${index !== socialMedia.length
                                            - 1 ? 'mr-3' : 'mr-0'}`} />
                            ))
                        }
                    </div>
                </div>

                <div className="flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLinks.keys} className="flex flex-col
                            ss:my-0 my-4 mr-4 min-w-[200px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[21px] text-white mt-6">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name}
                                        className=
                                        {`font-poppins font-normal text-[12] leading-[24px] 
                                text-dimWhite hover:text-secondary cursor-pointer
                                ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden w-full md:flex justify-center items-center md:flex-row
        flex-col py-3 border-y-[1px] border-y-[#3F3E45]">
                <div className="text-dimWhite">
                    <ul className="flex">
                        <li className="px-2 cursor-pointer">Compliance</li>
                        <li className="px-2 cursor-pointer">Risk warning</li>
                        <li className="px-2 cursor-pointer">Terms of Use</li>
                        <li className="px-2 cursor-pointer">Investor relations</li>
                        <li className="px-2 cursor-pointer">Banking licence</li>
                        <li className="px-2 cursor-pointer">Protection of funds</li>
                        <li className="px-2 cursor-pointer">Privacy</li>
                        <li className="px-2 cursor-pointer">Cookie policy</li>
                        <li className="px-2 cursor-pointer">General business terms</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;