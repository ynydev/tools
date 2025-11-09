"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Page() {
  const [seconds, setSeconds] = useState(60);
  const [remaining, setRemaining] = useState(60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer: any;
    if (running && remaining > 0) {
      timer = setInterval(() => setRemaining((r) => r - 1), 1000);
    }
    if (remaining <= 0) setRunning(false);
    return () => clearInterval(timer);
  }, [running, remaining]);

  const start = () => {
    setRemaining(seconds);
    setRunning(true);
  };

  const reset = () => {
    setRemaining(seconds);
    setRunning(false);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">カウントダウンタイマー</h1>
      <div className="flex gap-2 mb-4 items-center">
        <Input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          className="w-28"
        />
        <Button onClick={start}>開始</Button>
        <Button variant="secondary" onClick={reset}>リセット</Button>
      </div>
      <div className="text-3xl font-mono">{remaining} 秒</div>
    </ToolPage>
  );
}
