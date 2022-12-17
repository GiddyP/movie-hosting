// import Hero from './components/Hero/Hero';
import MovieSet from './components/MovieSet/MovieSet';
import Navbar from './components/Navbar';
import Search from './components/Search';
import styles from './style';
function App() {

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
        <MovieSet />
      </div>

    </div>

  );
}

export default App;