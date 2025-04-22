import { useState , useRef } from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Pitch from './Pitch';
import Newsletter from './Newsletter';
import Partners from './Partners';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

import "./styles.css";

function App() {

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const pricingRef = useRef(null);

  const handleScrollTo = (section) => {
    if (section === "Contacts") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "About") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if (section === "Home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if (section === "Pricing") {
      pricingRef.current?.scrollIntoView({ behavior: "smooth" });
    }else if (section === "Product") {
      productRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <header className="flex flex-col m-auto">
        <Navbar onNavigate={handleScrollTo}/>
        <Hero ref={homeRef}/>
      </header>
      <section>
        <Features ref={productRef}/>
      </section>
      <section>
        <Pitch />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Partners ref={aboutRef}/>
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Pricing ref={pricingRef}/>
      </section>
      <section>
        <Contact ref={contactRef}/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;