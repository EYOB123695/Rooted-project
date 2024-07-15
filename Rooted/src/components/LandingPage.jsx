import styles from '../style';
import { Hero, Testimonials, Footer } from './';  // Ensure Navbar is not imported

const LandingPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default LandingPage;
