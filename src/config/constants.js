export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export const MODES = [
  {
    id: "fv",
    label: "Formal Verification",
    icon: "\u{1F52C}",
    desc: "File-based formal verification",
  },
];

export const FORMAL_CONFIG = {
  defaultClock: "clk",
  defaultReset: "rst_n",
  defaultSolver: "boolector",
  defaultBmcDepth: 20,
  solvers: [
    { id: "boolector", label: "Boolector", desc: "Fast BMC solver (recommended)" },
    { id: "yices", label: "Yices 2", desc: "SMT solver, good for k-induction" },
    { id: "z3", label: "Z3", desc: "General-purpose SMT solver (fallback)" },
  ],
  protocols: [
    { id: "axi", label: "AXI4 / AXI4-Lite" },
    { id: "ahb", label: "AHB" },
    { id: "apb", label: "APB" },
    { id: "spi", label: "SPI" },
    { id: "i2c", label: "I2C" },
    { id: "uart", label: "UART" },
    { id: "fifo", label: "FIFO" },
    { id: "fsm", label: "FSM / State Machine" },
  ],
  bmcDepthRange: { min: 5, max: 100, step: 5 },
};

export const SVA_CONSTRUCTS = {
  supported: [
    { name: "|->", desc: "Overlapping implication" },
    { name: "|=>", desc: "Non-overlapping implication" },
    { name: "##N", desc: "Fixed delay (N cycles)" },
    { name: "##[M:N]", desc: "Range delay (M to N cycles)" },
    { name: "[*N]", desc: "Bounded consecutive repetition" },
    { name: "[->N]", desc: "Goto repetition (N occurrences)" },
    { name: "[=N]", desc: "Non-consecutive repetition" },
    { name: "$rose", desc: "Rising edge detection" },
    { name: "$fell", desc: "Falling edge detection" },
    { name: "$stable", desc: "Value unchanged from previous cycle" },
    { name: "$changed", desc: "Value changed from previous cycle" },
    { name: "throughout", desc: "Condition holds during entire sequence" },
    { name: "disable iff", desc: "Reset/disable condition" },
  ],
  banned: [
    { name: "$past", fix: "Use $stable or $changed" },
    { name: "first_match", fix: "Use bounded repetition" },
    { name: "intersect", fix: "Use separate properties" },
    { name: "within", fix: "Use throughout" },
    { name: "[*] / [+]", fix: "Use bounded [*N] or [*M:N]" },
    { name: "$onehot", fix: "Implement as explicit logic" },
  ],
};
