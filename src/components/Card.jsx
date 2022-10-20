import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";



function Card() {
    return (

        <section id="clients" className={`${styles.paddingY} 
                    ${styles.flexCenter} flex-col relative`}
        >
            <h1 className={`${styles.heading2} ${styles.flexCenter} text-black py-3 text-center`}>
                Why trade Forex with i Forex
            </h1>
            <div className="flex mx-auto
                    w-full feedback-container relative z-[1]">
                {feedback.map((card) => (
                    <FeedbackCard key={card.id} {...card} styles={'feedback-card'} />
                ))}
            </div>
            <div className="text-center my-10">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">Tight, all-inclusive FX spreads</h2>
                <h2 className={`${styles.paragraph} text-greyWhite`}>We offer three levels of pricing depending on your account tier.</h2>
            </div>
        </section>

    );
}

export default Card;
