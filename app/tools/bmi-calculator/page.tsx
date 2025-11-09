"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calc = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h <= 0) return setBmi("数値を入力してください");
    setBmi((w / (h * h)).toFixed(2));
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">BMI計算ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="身長(cm)"
          className="w-28"
        />
        <Input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="体重(kg)"
          className="w-28"
        />
        <Button onClick={calc}>計算</Button>
      </div>
      <Input readOnly value={bmi} placeholder="BMI値がここに表示されます" />
    </ToolPage>
  );
}
