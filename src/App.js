import "./App.css";
import { Article, CTA, Feature, Brand, Navbar } from "./Components";

import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./Containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
