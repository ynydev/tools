"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page() {
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [seconds, setSeconds] = useState(WORK_TIME);
  const [running, setRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);

  useEffect(() => {
    let timer: any;
    if (running && seconds > 0) {
      timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else if (running && seconds === 0) {
      setIsWork((w) => !w);
      setSeconds(isWork ? BREAK_TIME : WORK_TIME);
      alert(isWork ? "作業終了！休憩に入りましょう" : "休憩終了！作業を再開しましょう");
    }
    return () => clearInterval(timer);
  }, [running, seconds, isWork]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const reset = () => {
    setRunning(false);
    setIsWork(true);
    setSeconds(WORK_TIME);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">ポモドーロタイマー</h1>
      <div className="text-xl mb-2">
        {isWork ? "作業中" : "休憩中"}
      </div>
      <div className="text-5xl font-mono mb-4">{formatTime(seconds)}</div>
      <div className="flex gap-2">
        <Button onClick={() => setRunning(!running)}>
          {running ? "停止" : "開始"}
        </Button>
        <Button variant="secondary" onClick={reset}>
          リセット
        </Button>
      </div>
    </ToolPage>
  );
}
