import classes from './App.module.scss';
import ContactSection from './components/contact/ContactSection';
import FeatureSection from './components/features/FeatureSection';
import HeroSection from './components/hero/HeroSection';
import NavBar from './components/nav/Navbar';
import TestimonialsSection from './components/testimonials/TestimonialsSection';

function App() {
  return (
    <div className={classes.App}>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
