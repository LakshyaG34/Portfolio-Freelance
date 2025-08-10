import Hero from "./components/Hero"
import Logo from "./components/Logo"
import LatestWork from "./components/LatestWork"
import About from "./components/About"
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
// import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
    <Hero/>
    {/* <Villain/> */}
    <Logo/>
    <About/>
    <LatestWork/>
    <Testimonials/>
    <Services/>
    <Offer/>
    {/* <Loading/> */}
    <Contact/>
    </>
  );
}
