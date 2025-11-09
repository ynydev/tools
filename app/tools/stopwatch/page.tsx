"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (running) interval = setInterval(() => setTime((t) => t + 10), 10);
    return () => clearInterval(interval);
  }, [running]);

  const reset = () => setTime(0);

  const format = (ms: number) => {
    const s = (ms / 1000).toFixed(2);
    return `${s} 秒`;
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">ストップウォッチ</h1>
      <div className="text-3xl font-mono mb-4">{format(time)}</div>
      <div className="flex gap-2">
        <Button onClick={() => setRunning(!running)}>{running ? "停止" : "開始"}</Button>
        <Button onClick={reset} variant="secondary">リセット</Button>
      </div>
    </ToolPage>
  );
}
