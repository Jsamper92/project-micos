import Carousel from "./components/Carousel";
import Contact from "./components/Contacto";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Promotion from "./components/Promotion";
import { Services } from "./components/Services";



export default function Home() {


  return (
    <>
      <Header />
      <main style={{ letterSpacing: '2px' }}>
        <Promotion />
        <Carousel />
        <Services />
        <Facilities />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
