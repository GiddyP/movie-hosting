import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


function MobileCard() {
    return (

        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
        >
            <h1 className={`${styles.heading2} ${styles.flexCenter} text-black py-3 text-center md:text-start`}>
                Why trade Forex <br className="md:hidden" /> with iForex
            </h1>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >


                    <div className="flex flex-wrap sm:justify-start justify-center
                    w-full feedback-container relative z-[1]">
                        {feedback.map((card) => (
                            <SwiperSlide>
                                <FeedbackCard key={card.id} {...card} styles={'w-[300px] h-[300px] feedback-card'} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </>;



            <div className="text-center my-10">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] mb-3 md:mb-5 w-full">Tight, all-inclusive <br className="md:hidden" /> FX spreads</h2>
                <h2 className={`${styles.paragraph} text-greyWhite`}>We offer three levels of pricing <br className="ss:hidden " /> depending on your account tier.</h2>
            </div>
        </section>

    );
}

export default MobileCard;
