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
      <div className="grid md:grid-cols-5 gap-3">
        {PIPELINE.map((p) => {
          const Icon = ICONS[p.icon];
          const isOpen = activeStep?.n === p.n;

          return (
            <button
              key={p.n}
              type="button"
              aria-expanded={isOpen}
              onClick={() => handleToggleStep(p)}
              className="oe-card rounded-xl p-4 text-left cursor-pointer"
              style={{ background: C.bgCard, border: `1px solid ${isOpen ? C.teal : C.border}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px]" style={{ color: C.dim, fontFamily: "'IBM Plex Mono', monospace" }}>{p.n}</span>
                <Icon size={16} color={C.teal} />
              </div>
              <div className="oe-display text-sm mb-1">{p.title}</div>
              <div className="text-[11px] leading-snug" style={{ color: C.dim }}>{p.desc}</div>
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