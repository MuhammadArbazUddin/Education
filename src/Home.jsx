import CardVerticalSlider from "./components/CardVerticalSlider";
import ContactForm from "./components/ContactForm";
import CreativeWorks from "./components/CreativeWorks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfiniteSlider from "./components/InfiniteSlider";
import Videos from "./components/Videos";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <WorkProcess />
        {/* <InfiniteSlider /> */}
        <Videos />
        {/* <CreativeWorks /> */}
        {/* <CardVerticalSlider /> */}
        <ContactForm />
      </div>
    </>
  );
}
