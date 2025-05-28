// import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import ScrollPopup from "./components/ScrollPopup";
import Videos from "./components/Videos";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <WorkProcess />
        <Videos />
        {/* <ContactForm /> */}
        <ScrollPopup />
      </div>
    </>
  );
}
