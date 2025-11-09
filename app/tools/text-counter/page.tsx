"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function TextCounter() {
  const [text, setText] = useState("");

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold">文字数カウンター</h1>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力してください"
      />
      <div className="text-lg">
        文字数：<span className="font-semibold">{text.length}</span>
      </div>
    </ToolPage>
  );
}
