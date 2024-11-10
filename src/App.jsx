import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
// import Blogs from './components/Blogs';
import WhoWeAre from "./components/WhoWeAre";

import WhatWeOffer from "./components/WhatWeOffer";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <WhatWeOffer />
        <Collaboration />
        <WhoWeAre />
        <Clients />
        {/* <Blogs /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
