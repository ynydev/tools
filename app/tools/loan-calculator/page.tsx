"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [monthly, setMonthly] = useState("");

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n)) return setMonthly("数値を入力してください");

    const m = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthly(m.toFixed(0) + " 円／月");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">ローン返済計算ツール</h1>
      <div className="flex flex-col gap-3 mb-4 w-64">
        <Input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="借入金額（円）" />
        <Input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="年利（%）" />
        <Input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="返済年数（年）" />
        <Button onClick={calculate}>計算</Button>
      </div>
      <Input readOnly value={monthly} placeholder="月々の返済額が表示されます" />
    </ToolPage>
  );
}
