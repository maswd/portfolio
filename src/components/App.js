import Main from "../container/Main";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Hero from "./Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />

     <Main />

     <Footer />
      {/* <div id="preloader"></div> */}
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

    </div>
  );
}

export default App;
