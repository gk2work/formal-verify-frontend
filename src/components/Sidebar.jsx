export default function Sidebar({ status, open }) {
  return (
    <div
      style={{
        width: open ? 254 : 0,
        overflow: "hidden",
        transition: "width .25s ease",
        background: "#0d1117",
        borderRight: "1px solid #21262d",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ padding: "18px 14px 10px", borderBottom: "1px solid #21262d" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "linear-gradient(135deg,#6e40c9,#58a6ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            FV
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: -0.3 }}>
              Formal Verify
            </div>
            <div style={{ fontSize: 9, color: "#7d8590", fontFamily: "'JetBrains Mono',monospace" }}>
              SVA + SymbiYosys
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div style={{ padding: "8px 14px", borderBottom: "1px solid #21262d" }}>
        <div
          style={{
            display: "flex",
            gap: 10,
            fontSize: 9,
            fontFamily: "'JetBrains Mono',monospace",
            color: "#7d8590",
          }}
        >
          <span>
            lowering: <span style={{ color: "#3fb950" }}>custom engine</span>
          </span>
          <span>
            sby:{" "}
            <span style={{ color: status.sby === "available" ? "#3fb950" : "#f85149" }}>
              {status.sby || "checking..."}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
