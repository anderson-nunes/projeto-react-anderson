import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { Company } from "./components/Company";
import { Contact } from "./components/pages/Contact";
import { NewProject } from "./components/pages/NewProject";
import { Container } from "./components/layout/Container";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Projetcs } from "./components/pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/projects" element={<Projetcs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
