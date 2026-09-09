import { useState } from "react";
import { Satellite, Layers, Ruler, Cpu, CheckCircle2 } from "lucide-react";
import { C } from "../theme";
import { PIPELINE } from "../data/constants";
import Modal from "./Modal";

const ICONS = { Satellite, Layers, Ruler, Cpu, CheckCircle2 };

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState(null);

  const handleToggleStep = (step) => {
    setActiveStep((current) => (current?.n === step.n ? null : step));
  };

  return (
    <div id="pipeline" className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
      <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: C.dim }}>Pipeline</div>
      <div className="grid md:grid-cols-5 gap-4">
        {PIPELINE.map((p, i) => {
          const Icon = ICONS[p.icon];
          const isOpen = activeStep?.n === p.n;

          return (
            <button
              key={p.n}
              type="button"
              aria-expanded={isOpen}
              onClick={() => handleToggleStep(p)}
              className="oe-card oe-card-enter rounded-xl p-6 text-left cursor-pointer relative overflow-hidden"
              style={{
                background: C.bgCard,
                border: `1px solid ${isOpen ? C.teal : C.border}`,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Accent top bar — signals importance/order */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: C.teal,
                  opacity: isOpen ? 1 : 0.55,
                }}
              />

              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[11px] font-semibold"
                  style={{ color: C.teal, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.05em" }}
                >
                  {p.n}
                </span>
                <span className="oe-card-icon" style={{ display: "inline-flex" }}>
                  <Icon size={22} color={C.teal} />
                </span>
              </div>

              <div
                className="oe-display text-lg font-bold mb-2"
                style={{ color: C.text, letterSpacing: "-0.01em" }}
              >
                {p.title}
              </div>

              <div
                className="text-[13px]"
                style={{ color: C.text, opacity: 0.85, lineHeight: 1.6 }}
              >
                {p.desc}
              </div>
            </button>
          );
        })}
      </div>

      <Modal
        open={!!activeStep}
        onClose={() => setActiveStep(null)}
        title={activeStep?.title}
        icon={activeStep && (() => {
          const Icon = ICONS[activeStep.icon];
          return <Icon size={20} color={C.teal} />;
        })()}
      >
        {activeStep && (
          <ul className="space-y-2.5">
            {activeStep.details.map((line, i) => (
              <li key={i} className="text-sm leading-relaxed flex gap-2.5" style={{ color: C.dim }}>
                <span style={{ color: C.teal, flexShrink: 0 }}>—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </div>
  );
}