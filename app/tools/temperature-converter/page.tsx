"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("C");
  const [to, setTo] = useState("F");
  const [result, setResult] = useState("");

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return setResult("数値を入力してください");

    let res = v;
    if (from === "C" && to === "F") res = v * 9 / 5 + 32;
    else if (from === "F" && to === "C") res = (v - 32) * 5 / 9;
    else if (from === "C" && to === "K") res = v + 273.15;
    else if (from === "K" && to === "C") res = v - 273.15;
    else if (from === "F" && to === "K") res = (v - 32) * 5 / 9 + 273.15;
    else if (from === "K" && to === "F") res = (v - 273.15) * 9 / 5 + 32;

    setResult(res.toFixed(2));
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">温度変換ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="温度を入力"
          className="w-28"
        />
        <Select value={from} onValueChange={setFrom}>
          <SelectTrigger className="w-20"><SelectValue placeholder="単位" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="C">℃</SelectItem>
            <SelectItem value="F">℉</SelectItem>
            <SelectItem value="K">K</SelectItem>
          </SelectContent>
        </Select>
        <span>→</span>
        <Select value={to} onValueChange={setTo}>
          <SelectTrigger className="w-20"><SelectValue placeholder="単位" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="C">℃</SelectItem>
            <SelectItem value="F">℉</SelectItem>
            <SelectItem value="K">K</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={convert}>変換</Button>
      </div>
      <Input readOnly value={result} placeholder="変換結果" />
    </ToolPage>
  );
}
