import { useState, useEffect } from "react";
import { API_BASE } from "../config/constants";

export function useFormalVerify() {
  const [status, setStatus] = useState({ sva2sby: "?", sby: "?" });

  useEffect(() => {
    fetch(`${API_BASE}/api/health`)
      .then((r) => r.json())
      .then((d) => setStatus(d))
      .catch(() => setStatus({ sva2sby: "?", sby: "?" }));
  }, []);

  return { status };
}
