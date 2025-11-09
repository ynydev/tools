"use client"
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ReverseText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const reverseText = () => {
    const reversed = input.split("").reverse().join("");
    setOutput(reversed);
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold">文字列を逆順にする</h1>
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここに文字列を入力してください"
        className="min-h-[120px]"
      />

      <div className="flex flex-wrap gap-3">
        <Button onClick={reverseText}>逆順に変換</Button>
        <Button variant="outline" onClick={clear}>
          クリア
        </Button>
      </div>

      <Textarea
        value={output}
        readOnly
        placeholder="結果がここに表示されます"
        className="min-h-[120px] font-mono"
      />
    </ToolPage>
  );
}