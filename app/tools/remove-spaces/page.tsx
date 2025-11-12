"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    setOutput(input.replace(/\s+/g, ""));
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">空白削除ツール</h1>
      <p className="text-sm text-gray-600 mb-4">
        スペースやタブなどの空白文字をすべて削除します。
      </p>

      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="ここにテキストを入力"
        className="min-h-[200px]"
      />
      <div className="flex gap-2 my-4">
        <Button onClick={handleConvert}>変換する</Button>
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
