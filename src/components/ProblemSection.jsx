import { C } from "../theme";

export default function ProblemSection() {
  return (
    <div id="problem" className="px-6 md:px-12 py-10 max-w-2xl mx-auto">
      <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: C.dim }}>The problem</div>
      <p className="text-sm leading-relaxed mb-3">
        Satellites measure the ocean's skin — SST, salinity, height, currents and winds — continuously and
        at basin scale. But the temperature that matters for circulation, marine heatwaves and fisheries
        lives below the surface, where only sparse ARGO floats and ship surveys reach.
      </p>
      <p className="text-sm leading-relaxed" style={{ color: C.dim }}>
        OceanEmbed bridges the gap: a compact embedding of the surface state, mapped to a full depth
        profile, trained against GLORYS and validated against independent ARGO observations.
      </p>
    </div>
  );
}
