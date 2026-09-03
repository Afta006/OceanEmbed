import { Waves, Menu, X } from "lucide-react";
import { C } from "../theme";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ navOpen, setNavOpen, scrollTo }) {
  return (
    <>
      <div
        className="flex items-center justify-between px-6 md:px-12 py-4 sticky top-0 z-50"
        style={{ background: "rgba(8,21,33,0.9)", backdropFilter: "blur(8px)", borderBottom: `1px solid ${C.border}` }}
      >
        <div className="flex items-center gap-2 oe-display font-semibold">
          <Waves size={18} color={C.teal} /> OceanEmbed
        </div>
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)} style={{ color: C.text }}>
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="hidden md:flex gap-6 text-sm" style={{ color: C.dim }}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="oe-navlink" style={{ color: C.dim }}>
              {l.label}
            </button>
          ))}
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col" style={{ background: C.bgPanel, borderBottom: `1px solid ${C.border}` }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => { scrollTo(l.id); setNavOpen(false); }}
              className="text-left px-6 py-3 text-sm"
              style={{ color: C.dim, borderTop: `1px solid ${C.border}` }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
