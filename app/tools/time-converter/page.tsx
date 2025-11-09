"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const units = {
  秒: 1,
  分: 60,
  時間: 3600,
  日: 86400,
} as const;

type Unit = keyof typeof units;

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState<Unit>("秒");
  const [to, setTo] = useState<Unit>("分");
  const [result, setResult] = useState("");

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return setResult("数値を入力してください");
    const seconds = v * units[from];
    const converted = seconds / units[to];
    setResult(converted.toString());
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">時間変換ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="値を入力" className="w-24" />
        <Select value={from} onValueChange={(v) => setFrom(v as Unit)}>
          <SelectTrigger className="w-20"><SelectValue /></SelectTrigger>
          <SelectContent>
            {Object.keys(units).map((u) => (
              <SelectItem key={u} value={u}>{u}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>→</span>
        <Select value={to} onValueChange={(v) => setTo(v as Unit)}>
          <SelectTrigger className="w-20"><SelectValue /></SelectTrigger>
          <SelectContent>
            {Object.keys(units).map((u) => (
              <SelectItem key={u} value={u}>{u}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={convert}>変換</Button>
      </div>
      <Input readOnly value={result} placeholder="結果" />
    </ToolPage>
  );
}
