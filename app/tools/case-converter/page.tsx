"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const toTitle = () =>
    setText(
      text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    );

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">大文字・小文字変換ツール</h1>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力してください"
        className="mb-4"
      />
      <div className="flex gap-2 mb-4">
        <Button onClick={toUpper}>大文字に変換</Button>
        <Button onClick={toLower}>小文字に変換</Button>
        <Button onClick={toTitle}>タイトルケースに</Button>
      </div>
    </ToolPage>
  );
}
