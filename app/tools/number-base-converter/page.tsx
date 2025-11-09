"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const [toBase, setToBase] = useState("2");
  const [result, setResult] = useState("");

  const convert = () => {
    try {
      const num = parseInt(input, Number(fromBase));
      if (isNaN(num)) throw new Error();
      setResult(num.toString(Number(toBase)).toUpperCase());
    } catch {
      setResult("変換に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">進数変換ツール</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="変換したい数値を入力"
          className="w-40"
        />
        <Select value={fromBase} onValueChange={setFromBase}>
          <SelectTrigger className="w-28"><SelectValue placeholder="元の進数" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2進数</SelectItem>
            <SelectItem value="8">8進数</SelectItem>
            <SelectItem value="10">10進数</SelectItem>
            <SelectItem value="16">16進数</SelectItem>
          </SelectContent>
        </Select>
        <Select value={toBase} onValueChange={setToBase}>
          <SelectTrigger className="w-28"><SelectValue placeholder="変換後の進数" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2進数</SelectItem>
            <SelectItem value="8">8進数</SelectItem>
            <SelectItem value="10">10進数</SelectItem>
            <SelectItem value="16">16進数</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={convert}>変換</Button>
      </div>
      <Input readOnly value={result} placeholder="変換結果がここに表示されます" />
    </ToolPage>
  );
}
