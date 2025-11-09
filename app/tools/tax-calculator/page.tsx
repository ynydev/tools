"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("10");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState<"include" | "exclude">("include");

  const calculate = () => {
    const p = parseFloat(price);
    const r = parseFloat(rate);
    if (isNaN(p)) return setResult("金額を入力してください");

    const tax = mode === "include" ? p * (1 + r / 100) : p / (1 + r / 100);
    setResult(tax.toFixed(2) + " 円");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">税込み／税抜き計算ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="金額を入力"
          className="w-36"
        />
        <Select value={rate} onValueChange={setRate}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="税率" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10%</SelectItem>
            <SelectItem value="8">8%</SelectItem>
            <SelectItem value="5">5%</SelectItem>
          </SelectContent>
        </Select>
        <Select value={mode} onValueChange={(v) => setMode(v as any)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="計算モード" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="include">税込みを計算</SelectItem>
            <SelectItem value="exclude">税抜きを計算</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={calculate}>計算</Button>
      </div>
      <Input readOnly value={result} placeholder="結果がここに表示されます" />
    </ToolPage>
  );
}
