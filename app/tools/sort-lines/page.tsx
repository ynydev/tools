"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    const lines = input.split("\n").sort((a, b) => a.localeCompare(b));
    setOutput(order === "desc" ? lines.reverse().join("\n") : lines.join("\n"));
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">文字列整列ツール</h1>
      <p className="text-sm text-gray-600 mb-4">
        テキスト行を昇順または降順に並べ替えます。
      </p>

      <div className="flex gap-2 mb-4">
        <Button
          variant={order === "asc" ? "default" : "outline"}
          onClick={() => setOrder("asc")}
        >
          昇順
        </Button>
        <Button
          variant={order === "desc" ? "default" : "outline"}
          onClick={() => setOrder("desc")}
        >
          降順
        </Button>
      </div>

      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここにテキストを入力"
        className="min-h-[200px]"
      />
      <div className="flex gap-2 my-4">
        <Button onClick={handleSort}>並べ替え</Button>
        <Button variant="secondary" onClick={() => { setInput(""); setOutput(""); }}>
          リセット
        </Button>
      </div>

      <Textarea
        readOnly
        value={output}
        placeholder="結果がここに表示されます"
        className="min-h-[200px] bg-gray-50 font-mono"
      />
    </ToolPage>
  );
}
