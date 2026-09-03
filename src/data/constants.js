export const STANDARD_DEPTHS = [0, 5, 10, 20, 30, 50, 75, 100, 125, 150, 200, 300, 500, 700, 1000];
export const BOUNDS = { latMin: 10, latMax: 15, lonMin: 80, lonMax: 85 };
export const DATE_MIN = "2023-01-01";
export const DATE_MAX = "2023-04-30";

export const NAV_LINKS = [
  { id: "pipeline", label: "Pipeline" },
  { id: "results", label: "Results" },
  { id: "live-demo", label: "Live Demo" },
];

// Icon names only here (strings) — components import the actual lucide-react
// icons themselves, so this file has no JSX/React dependency.
export const PIPELINE = [
  { n: "01", title: "Acquire", desc: "Pull daily SST, SSS, SSH, currents and winds from satellite sources.", icon: "Satellite" },
  { n: "02", title: "Harmonize", desc: "Align multi-source grids to a common 0.25° spatial, daily temporal reference.", icon: "Layers" },
  { n: "03", title: "Standardize Depth", desc: "Resample ARGO and GLORYS targets onto 15 standard depth levels.", icon: "Ruler" },
  { n: "04", title: "Reconstruct", desc: "A CNN maps the surface embedding to a full 0–1000m temperature profile.", icon: "Cpu" },
  { n: "05", title: "Validate", desc: "Score against independent ARGO profiles using RMSE, correlation and bias.", icon: "CheckCircle2" },
];

// Illustrative hero chart — just a fixed sample shape for visual purposes,
// not tied to a real prediction. Fine to keep hardcoded permanently.
export const SAMPLE_HERO = [
  { depth: 0, value: 28.2 }, { depth: 20, value: 27.8 }, { depth: 50, value: 24.1 },
  { depth: 75, value: 19.5 }, { depth: 100, value: 16.2 }, { depth: 150, value: 13.1 },
  { depth: 200, value: 11.0 }, { depth: 300, value: 8.6 }, { depth: 500, value: 6.4 },
  { depth: 700, value: 5.3 }, { depth: 1000, value: 4.6 },
];
