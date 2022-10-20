import styles from './style';
import { GetStarted, Hero, Navbar, Footer, Card, Table, MobileCard } from "./components";
function App() {
  
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary fixed w-full mt-1 z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}h-[50vh] sm:h-[100vh]`}>
        <nav className={`${styles.boxWidth} flex justify-center`}>
          <Hero />
        </nav>
      </div>
      <div className='hidden sm:flex flex-wrap bg-greyWhite bg-gradient-to-t from-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter} mx-auto`}>
          <Card />
        </div>
      </div>
      <div className='sm:hidden bg-greyWhite bg-gradient-to-t from-primary'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <MobileCard />
        </div>
      </div>
      <div className='h-[100vh] forex-icon hidden md:flex'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
      <div className='xs:h-[h-80vh] xl:h-[100vh] bg-greyWhite'>
        <div className={`${styles.paddingX}`}>
          <Table />
        </div>
      </div>
      <div className='bg-black'>
        <div className={`${styles.paddingX}`}>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;