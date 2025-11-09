"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");

  const decodeJwt = () => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) throw new Error("Invalid JWT");
      const payload = JSON.parse(atob(parts[1]));
      setResult(JSON.stringify(payload, null, 2));
    } catch {
      setResult("JWTのデコードに失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">JWTデコードツール</h1>
      <Textarea
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="JWTトークンを貼り付けてください"
        className="mb-4"
      />
      <Button onClick={decodeJwt}>デコード</Button>
      <h2 className="text-lg font-semibold mt-4">結果：</h2>
      <Textarea readOnly value={result} />
    </ToolPage>
  );
}
