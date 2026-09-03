import { useEffect, useState, useCallback } from "react";
import { RotateCw } from "lucide-react";
import { C } from "../theme";
import { fetchResults } from "../api/predictions";
import DepthChart from "./DepthChart";
import Skeleton from "./Skeleton";

export default function ResultsSection() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchResults()
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <div id="results" className="px-6 md:px-12 py-10 max-w-6xl mx-auto">
      <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: C.dim }}>Validation results</div>

      {loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
                <Skeleton lines={2} />
              </div>
            ))}
          </div>
          <div className="rounded-xl p-5" style={{ background: C.bgPanel, border: `1px solid ${C.border}` }}>
            <Skeleton block height={300} />
          </div>
        </>
      )}

      {error && !loading && (
        <div
          className="rounded-xl p-5 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: "rgba(232,115,92,0.08)", border: `1px solid ${C.coral}` }}
        >
          <p className="text-xs" style={{ color: C.coral }}>
            Couldn't load results from the backend: {error}
          </p>
          <button
            onClick={load}
            className="oe-cta flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold shrink-0"
            style={{ background: C.coral, color: C.bgDeep }}
          >
            <RotateCw size={12} /> Retry
          </button>
        </div>
      )}

      {results && !loading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <div className="oe-card rounded-xl p-5" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
              <div className="text-[11px] uppercase mb-2" style={{ color: C.dim }}>Random Forest RMSE</div>
              <div className="text-2xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {results.rf_rmse}<span className="text-xs ml-1" style={{ color: C.dim }}>°C</span>
              </div>
            </div>
            <div className="oe-card rounded-xl p-5" style={{ background: C.tealSoft, border: `1px solid ${C.teal}` }}>
              <div className="text-[11px] uppercase mb-2" style={{ color: C.dim }}>CNN RMSE</div>
              <div className="text-2xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {results.cnn_rmse}<span className="text-xs ml-1" style={{ color: C.dim }}>°C</span>
              </div>
            </div>
            <div className="oe-card rounded-xl p-5" style={{ background: C.bgCard, border: `1px solid ${C.border}` }}>
              <div className="text-[11px] uppercase mb-2" style={{ color: C.dim }}>ARGO profiles used</div>
              <div className="text-2xl" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {results.argo_profiles_used.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="rounded-xl p-5" style={{ background: C.bgPanel, border: `1px solid ${C.border}` }}>
            <DepthChart
              xLabel="RMSE (°C)"
              series={[{
                name: "CNN RMSE",
                color: C.amber,
                data: results.rmse_by_depth.map((d) => ({ depth: d.depth, value: d.rmse })),
              }]}
            />
          </div>
          <p className="text-xs leading-relaxed mt-4 max-w-2xl" style={{ color: C.dim }}>
            Error peaks around the thermocline (roughly 50–100&nbsp;m), where surface signals carry the least
            information about the sharp vertical gradient beneath — and eases again in the stable deep water.
          </p>
        </>
      )}
    </div>
  );
}