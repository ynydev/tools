"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const checkStatus = async () => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      setStatus(`HTTPステータス: ${res.status} ${res.statusText}`);
    } catch {
      setStatus("取得に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">HTTPステータスコードチェッカー</h1>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URLを入力してください（例：https://example.com）"
        className="mb-4"
      />
      <Button onClick={checkStatus}>ステータスを確認</Button>
      <p className="mt-4 font-mono">{status}</p>
    </ToolPage>
  );
}
