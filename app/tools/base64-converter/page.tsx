"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Base64Converter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encodeBase64 = () => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const base64 = btoa(String.fromCharCode(...data));
      setResult(base64);
    } catch (e) {
      setResult("エンコード中にエラーが発生しました");
    }
  };

  const decodeBase64 = () => {
    try {
      const binary = atob(text);
      const bytes = new Uint8Array([...binary].map((c) => c.charCodeAt(0)));
      const decoder = new TextDecoder();
      const decoded = decoder.decode(bytes);
      setResult(decoded);
    } catch (e) {
      setResult("デコード中にエラーが発生しました。");
    }
  };

  const clear = () => {
    setText("");
    setResult("");
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">Base64 ⇄ 文字列 変換ツール</h1>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここに文字列またはBase64を入力してください"
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <Button onClick={encodeBase64}>Base64に変換</Button>
        <Button onClick={decodeBase64}>文字列に変換</Button>
        <Button variant="secondary" onClick={clear}>
          クリア
        </Button>
      </div>

      <h2 className="text-lg font-semibold mb-2">結果：</h2>
      <Textarea
        readOnly
        value={result}
        placeholder="変換結果がここに表示されます"
        className="mb-2"
      />
    </ToolPage>
  );
}
