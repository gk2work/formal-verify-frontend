import FVPanel from "./components/FVPanel";
import { useFormalVerify } from "./hooks/useFormalVerify";

export default function App() {
  const { status } = useFormalVerify();
  const sbyOk = status.sby === "available";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#010409",
        color: "#e6edf3",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Top navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: 48,
          borderBottom: "1px solid #21262d",
          background: "#0d1117",
          flexShrink: 0,
        }}
      >
        {/* Left: logo + title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "linear-gradient(135deg,#6e40c9,#58a6ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: -0.5,
              flexShrink: 0,
            }}
          >
            FV
          </div>
          <div
            style={{
              width: 1,
              height: 18,
              background: "#21262d",
            }}
          />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3" }}>
            Formal Verification
          </span>
          <span
            style={{
              fontSize: 9,
              background: "#6e40c922",
              color: "#8b5cf6",
              border: "1px solid #6e40c944",
              padding: "2px 7px",
              borderRadius: 4,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            sby · Property Table
          </span>
        </div>

        {/* Right: status pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "#161b22",
              border: "1px solid #21262d",
              borderRadius: 20,
              padding: "3px 10px",
              color: "#7d8590",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#3fb950",
                flexShrink: 0,
              }}
            />
            lowering engine
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "#161b22",
              border: `1px solid ${sbyOk ? "#23863640" : "#f8514940"}`,
              borderRadius: 20,
              padding: "3px 10px",
              color: sbyOk ? "#3fb950" : "#f85149",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: sbyOk ? "#3fb950" : "#f85149",
                flexShrink: 0,
              }}
            />
            sby {sbyOk ? "ready" : "unavailable"}
          </span>
        </div>
      </div>

      {/* Main panel */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <FVPanel />
      </div>
    </div>
  );
}
