import AboutUs from "./components/AboutUs";
import Best from "./components/Best";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import SliderHero from "./components/SliderHero";
import Value from "./components/Value";

export default function Home() {
  return (
    <>
      <div className="relative mb-[127px] max-tablet:mb-[78px] max-tablet3:mb-[61px]">
        <Navbar />
        <Hero />
        <SliderHero />
        <p className="absolute left-2/4 -translate-x-2/4   service-half-heading text-center text-[150px] max-tablet:text-[90px] max-tablet3:text-[70px] font-medium bg-clip-text text-transparent bg-[linear-gradient(0deg,_#BEC9C3,_#0E0E0E)]">
          Services
        </p>
      </div>
      <Service />
      <AboutUs />
      <Best />
      <Value />
      <Contact />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline text-primary-content">
        Hello world!
      </h1>
      <h1 className="text-3xl font-quicksand font-bold underline text-primary">
        Hello world!
      </h1>
      <h1 className="text-3xl font-questrial font-bold underline text-primary">
        Hello world!
      </h1>
      <h1 className="text-3xl font-gendy  underline text-primary">
        Hello world!
      </h1> */}
      {/* <input
        type="checkbox"
        value="light"
        className="toggle theme-controller bg-amber-400 z-[9] absolute bottom-[0px] left-2/4 -translate-x-2/4 -translate-y-2/4"
      /> */}
      {/* <div>
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div>
      <div data-theme="light">
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div>

      <div data-theme="dark">
        This div will always use light theme
        <span data-theme="retro">This span will always use retro theme!</span>
      </div>

      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button> */}
    </>
  );
}
