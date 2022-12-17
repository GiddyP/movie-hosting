
const Movie = ({ movie }) => {
    // console.log(movie.Title);

    const { Poster, Title, Type, Year, imdbID } = movie;

    return (
        <div className='flex flex-row p-[10px] gap-[10px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-[12px] bg-black'>
            <span className='w-[190px] md:w-[280px] h-[190px] md:h-[280px] font-[400] text-[18px] md:text-[24px] text-white leading-[31px] flex items-center justify-center text-center grow self-stretch'>{Title}</span>
        </div>
    );
};

export default Movie;
