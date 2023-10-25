import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  // Billing,
  Carousel,
  Testimonials,
  Clients,
  CallToAction,
  Footer,
} from "./components";

const App = () => {
  return (
    /** Header starts */
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <header className={`${styles.boxWidth}`}>
          <Navbar />
        </header>
      </div>
      {/* Header ends */}
      {/* Hero starts */}
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* Hero ends */}
      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Carousel />
          <Testimonials />
          <Clients />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
