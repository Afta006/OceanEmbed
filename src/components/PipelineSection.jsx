import { Satellite, Layers, Ruler, Cpu, CheckCircle2 } from "lucide-react";
import { C } from "../theme";
import { PIPELINE } from "../data/constants";

// Maps the icon name stored in constants.js (a plain string, so that file
// stays free of JSX/React imports) to the actual lucide-react component.
const ICONS = { Satellite, Layers, Ruler, Cpu, CheckCircle2 };

export default function PipelineSection() {
  return (
    <div id="pipeline" className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
      <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: C.dim }}>Pipeline</div>
      <div className="grid md:grid-cols-5 gap-3">
        {PIPELINE.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <div key={p.n} className="oe-card rounded-xl p-4" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px]" style={{ color: C.dim, fontFamily: "'IBM Plex Mono', monospace" }}>{p.n}</span>
                <Icon size={16} color={C.teal} />
              </div>
              <div className="oe-display text-sm mb-1">{p.title}</div>
              <div className="text-[11px] leading-snug" style={{ color: C.dim }}>{p.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
