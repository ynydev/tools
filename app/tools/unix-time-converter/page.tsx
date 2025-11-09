"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UnixTimeConverter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const toDate = () => {
    const date = new Date(Number(input) * 1000);
    setResult(isNaN(date.getTime()) ? "無効な値です" : date.toISOString());
  };

  const toUnix = () => {
    const date = new Date(input);
    setResult(isNaN(date.getTime()) ? "無効な日付です" : Math.floor(date.getTime() / 1000).toString());
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">Unixタイム変換</h1>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="日付（2000/01/01）またはUnix時間を入力"
        className="mb-4"
      />
      <div className="flex gap-2 mb-4">
        <Button onClick={toDate}>Unix → 日付</Button>
        <Button onClick={toUnix}>日付 → Unix</Button>
      </div>
      <Input readOnly value={result} placeholder="変換結果が表示されます" />
    </ToolPage>
  );
}
