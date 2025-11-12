"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const lines = input.trim() === "" ? 0 : input.split("\n").length;
    setCount(lines);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">行数カウントツール</h1>
      <p className="text-sm text-gray-600 mb-4">
        テキストの行数をカウントします。
      </p>

      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここにテキストを入力"
        className="min-h-[200px]"
      />
      <div className="flex gap-2 my-4">
        <Button onClick={handleCount}>カウントする</Button>
        <Button variant="secondary" onClick={() => { setInput(""); setCount(0); }}>
          リセット
        </Button>
      </div>

      <div className="text-sm text-gray-700">行数: {count}</div>
    </ToolPage>
  );
}
