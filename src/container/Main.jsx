import React from 'react';
import About from '../components/About/About';
import Counter from '../components/section-counter/Counter';
// import Servies from '../components/Services/Servies';
import Testimonials from '../components/Testimonials/Testimonials';
// import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';

const Main = () => {
    return (
        <main id="main">
          <About />
          {/* <Servies />  */}
          {/* <Counter />  */}
          {/* <Work />  */}
          {/* <Testimonials />  */}
          {/* {/* <Blog />  */}
           <Contact />  
        </main>
    );
}

export default Main;
