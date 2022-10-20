const FeedbackCard = ({ content, title, styles }) => (
    <div className={`flex justify-between flex-col px-5
        py-5 rounded-[20px] max-w-[300px] mt-4
         my-5 ml-0 border bg-dimWhite mx-5 object-cover
         border-transparent ${styles}
    `}>

        <h3 className="flex justify-center mx-auto font-poppins font-semibold max-w-[145px] text-center leading-5">
            {title}
        </h3>
        <p className="mx-auto font-poppins font-normal text-[14px] leading-[32px]
             my-1 max-w-[170px] mt-0 text-center">
            {content}
        </p>
        <a className="cursor-pointer text-center hover:underline text-blue-700 font-semibold">Learn More</a>
    </div>
);

export default FeedbackCard;