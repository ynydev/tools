"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [diff, setDiff] = useState("");

  const calc = () => {
    if (!start || !end) return;
    const d1 = new Date(start);
    const d2 = new Date(end);
    const days = Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    setDiff(`${days}日`);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">日付差計算ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        <span>〜</span>
        <Input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        <Button onClick={calc}>計算</Button>
      </div>
      <Input readOnly value={diff} placeholder="日数差がここに表示されます" />
    </ToolPage>
  );
}
