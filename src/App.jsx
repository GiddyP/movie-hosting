// import Hero from './components/Hero/Hero';
import MovieSet from './MovieSet/MovieSet';
import Navbar from './components/Navbar';
import Search from './components/Search';
import styles from './style';
import { useEffect, useState } from 'react';
function App() {

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
    const url = await fetch("http://www.omdbapi.com/?apikey=ab036132&s=disney",
    {
      method: "GET",
    }
    )
    ;
    try {
      const response = await fetch(url);
      const json = await response.json();

      // console.log(json.Search);

      setDisneyMovie(json.Search);
    } catch (error) {
      console.log("error", error);
    }
    //   setItems(json)
  };

  useEffect(() => {
    // clean up 
    fetchData();
    fetchData2();
  
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className={`fixed w-full ${styles.flexCenter}`}>
        <Navbar />
      </div>

      <div className={`w-full ${styles.flexCenter} lg:h-[100vh] h-[320px]`}>
        <div
          className='text-white w-[100vw] z-[-10] hero__img'
        >
          <span className="absolute top-[100px] ds:top-[107px] left-[17%] sm:left-[22%] ss:left-[25%] ds:left-[77px] text-[28px] md:text-[72px] font-bold leading-[36px] md:leading-[94px] md:tracking-[-0.05em] md:top-[109px] md:left-[30%] text-center ds:text-start tracking-[-0.05em]"
          > Watch <br className="hidden md:flex" /> something <br /> incredible.</span>

        </div>
      </div>
      <div className={`w-full ${styles.flexCenter}`}>
        <Search />
      </div>
      <div className={`w-full pl-[28px] md:pl-[67px]`}>
        
          <div className='md:h-[349px] h-[240px]'>
            <span className='text-[18px] md:text-[24px] font-400 leading-[31px]'>Marvel</span>
            <div className='flex flex-row gap-[13px] mt-[18px] overflow-auto'>
              {
                marvelMovie.slice(0, 7).map((movie, i) => (
                  <div key={i} className='flex flex-row p-[10px] gap-[10px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-[12px] bg-black'>
                    <span className='w-[190px] md:w-[280px] h-[190px] md:h-[280px] font-[400] text-[18px] md:text-[24px] text-white leading-[31px] flex items-center justify-center text-center grow self-stretch'>{movie.Title}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='h-[349px] mt-[20px] md:my-[48px] mb-[-50px]'>
            <span className='text-[18px] md:text-[24px] font-400 leading-[31px]'>DC</span>
            <div className='flex flex-row gap-[13px] mt-[18px] overflow-auto'>
              {
                disneyMovie.slice(0, 7).map((movie, i) => (
                  <div key={i} className='flex flex-row p-[10px] gap-[10px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-[12px] bg-black'>
                    <span className='w-[190px] md:w-[280px] h-[190px] md:h-[280px] font-[400] text-[18px] md:text-[24px] text-white leading-[31px] flex items-center justify-center text-center grow self-stretch'>{movie.Title}</span>
                  </div>
                ))
              }
            </div>
          </div>
        
      </div>

    </div>

  );
}

export default App;