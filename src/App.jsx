import { useState } from "react";
import { C } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import PipelineSection from "./components/PipelineSection";
import ResultsSection from "./components/ResultsSection";
import LiveDemoSection from "./components/LiveDemoSection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div
      style={{
        background: C.bgDeep,
        color: C.text,
        minHeight: "100%",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />
      <Reveal><ProblemSection /></Reveal>
      <Reveal><PipelineSection /></Reveal>
      <Reveal><ResultsSection /></Reveal>
      <Reveal><LiveDemoSection /></Reveal>
      <Footer />
    </div>
  );
}