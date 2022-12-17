import Hero from './components/Hero/Hero';
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
        <Hero />
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