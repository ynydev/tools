"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [base, setBase] = useState("");
  const [percent, setPercent] = useState("");
  const [result, setResult] = useState("");

  const calc = () => {
    const b = parseFloat(base);
    const p = parseFloat(percent);
    if (isNaN(b) || isNaN(p)) return setResult("数値を入力してください");
    setResult(`${(b * p) / 100}`);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">パーセンテージ計算ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input
          value={base}
          onChange={(e) => setBase(e.target.value)}
          placeholder="基準値"
          className="w-28"
        />
        <span>の</span>
        <Input
          value={percent}
          onChange={(e) => setPercent(e.target.value)}
          placeholder="%"
          className="w-20"
        />
        <span>は？</span>
        <Button onClick={calc}>計算</Button>
      </div>
      <Input readOnly value={result} placeholder="結果がここに表示されます" />
    </ToolPage>
  );
}
