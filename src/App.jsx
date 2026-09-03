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

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: C.bgDeep, color: C.text, minHeight: "100%", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .oe-display { font-family: 'Space Grotesk', sans-serif; }

        @keyframes oe-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes oe-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            transition-duration: 0.001ms !important;
          }
        }

        .oe-cta {
          transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
        }
        .oe-cta:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(63,169,160,0.28);
        }
        .oe-cta:active:not(:disabled) {
          transform: translateY(0);
        }
        .oe-cta:disabled {
          cursor: not-allowed;
        }

        .oe-pill {
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .oe-pill:hover {
          border-color: ${C.teal} !important;
        }

        .oe-card {
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .oe-card:hover {
          transform: translateY(-2px);
          border-color: ${C.teal};
        }

        .oe-navlink {
          position: relative;
          transition: color 0.15s ease;
        }
        .oe-navlink:hover {
          color: ${C.text} !important;
        }
      `}</style>

      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Reveal><ProblemSection /></Reveal>
      <Reveal><PipelineSection /></Reveal>
      <Reveal><ResultsSection /></Reveal>
      <Reveal><LiveDemoSection /></Reveal>
      <Footer />
    </div>
  );
}