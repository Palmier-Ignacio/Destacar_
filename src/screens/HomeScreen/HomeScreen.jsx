import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import UpperHomeSection from '../../components/UpperHomeSection/UpperHomeSection';
import About from '../../components/About/About';
import Opinions from '../../components/Opinions/Opinions';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
function HomeScreen() {
  return (
    <React.Fragment>
      <NavBar/>
      <main>
        <UpperHomeSection/>
        <About/>
        <Opinions/>
        <Contact/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
export default HomeScreen;