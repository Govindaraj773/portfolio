import React, { useState } from "react";
import {
  Footer,
  Navbar,
  Header,
  About,
  ContactUS,
  Portfolio,
  Services,
  Skills,
} from "./components/index";

const App = () => {
  const [page, setPage] = useState("Header");
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page == "Header" && <Header />}
      {page == "About Me" && <About />}
      {page == "Projects" && <Portfolio />}
      {page == "Skills" && <Skills />}
      {page == "Capabilities" && <Services />}
      {page == "Contact Me" && <ContactUS />}
      <Footer page={page} setPage={setPage} />
    </>
  );
};

export default App;
