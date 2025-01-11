import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';
function HomeScreen() {
  return (
    <React.Fragment>
      <NavBar/>
      <main>
        <Hero/>
        <Testimonials/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
export default HomeScreen;