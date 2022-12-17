import { useEffect, useState } from "react";
import Movie from "./Movie";



const MovieSet = () => {
    const [marvelMovie, setMarvelMovie] = useState([]);
    const [disneyMovie, setDisneyMovie] = useState([]);

    const fetchData = async () => {
        const url = "http://www.omdbapi.com/?apikey=ab036132&s=marvel";
        try {
            const response = await fetch(url);
            const json = await response.json();

            // console.log(json.Search);

            setMarvelMovie(json.Search);
        } catch (error) {
            // console.log("error", error);
        }
        //   setItems(json)
    };

    const fetchData2 = async () => {
        const url = "http://www.omdbapi.com/?apikey=ab036132&s=disney";
        try {
            const response = await fetch(url);
            const json = await response.json();

            // console.log(json.Search);

            setDisneyMovie(json.Search);
        } catch (error) {
            // console.log("error", error);
        }
        //   setItems(json)
    };

    useEffect(() => {
        // clean up 
        return () => {
            // This detaches the realtime(fire-store) listener 
            fetchData();
            fetchData2();
        };
    }, []);

    // console.log(items);
    return (
        <>
            <div className='md:h-[349px] h-[240px]'>
                <span className='text-[18px] md:text-[24px] font-400 leading-[31px]'>Marvel</span>
                <div className='flex flex-row gap-[13px] mt-[18px] overflow-auto'>
                    {
                        marvelMovie.slice(0, 7).map((movie, i) => (
                            <Movie key={i} movie={movie} />
                        ))
                    }
                </div>
            </div>
            <div className='h-[349px] mt-[20px] md:my-[48px] mb-[-50px]'>
                <span className='text-[18px] md:text-[24px] font-400 leading-[31px]'>DC</span>
                <div className='flex flex-row gap-[13px] mt-[18px] overflow-auto'>
                    {
                        disneyMovie.slice(0, 7).map((movie, i) => (
                            <Movie key={i} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default MovieSet;
