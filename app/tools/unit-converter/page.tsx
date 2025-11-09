"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const conversions = {
  length: { m: 1, cm: 100, mm: 1000, km: 0.001 },
  weight: { kg: 1, g: 1000, mg: 1e6, t: 0.001 },
  volume: { L: 1, mL: 1000 },
} as const;

type Category = keyof typeof conversions;
type Unit<C extends Category> = keyof (typeof conversions)[C];

export default function Page() {
  const [category, setCategory] = useState<Category>("length");
  const [from, setFrom] = useState<Unit<"length">>("m");
  const [to, setTo] = useState<Unit<"length">>("cm");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return setResult("数値を入力してください");

    const categoryUnits = conversions[category] as Record<string, number>;
    const base = num / categoryUnits[from];
    const converted = base * categoryUnits[to];
    setResult(converted.toString());
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">単位変換ツール</h1>

      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Select value={category} onValueChange={(v) => {
          setCategory(v as Category);
          const firstUnit = Object.keys(conversions[v as Category])[0];
          setFrom(firstUnit as any);
          setTo(firstUnit as any);
        }}>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="カテゴリ" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="length">長さ</SelectItem>
            <SelectItem value="weight">重さ</SelectItem>
            <SelectItem value="volume">体積</SelectItem>
          </SelectContent>
        </Select>

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="値を入力"
          className="w-28"
        />

        <Select value={from} onValueChange={(v) => setFrom(v as any)}>
          <SelectTrigger className="w-20">
            <SelectValue placeholder="単位" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(conversions[category]).map((u) => (
              <SelectItem key={u} value={u}>
                {u}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <span>→</span>

        <Select value={to} onValueChange={(v) => setTo(v as any)}>
          <SelectTrigger className="w-20">
            <SelectValue placeholder="単位" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(conversions[category]).map((u) => (
              <SelectItem key={u} value={u}>
                {u}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={convert}>変換</Button>
      </div>

      <Input readOnly value={result} placeholder="変換結果" />
    </ToolPage>
  );
}
