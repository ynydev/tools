"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import yaml from "js-yaml";

export default function Page() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const toJson = () => {
    try {
      const json = JSON.stringify(yaml.load(text), null, 2);
      setResult(json);
    } catch {
      setResult("YAML → JSON変換に失敗しました");
    }
  };

  const toYaml = () => {
    try {
      const obj = JSON.parse(text);
      setResult(yaml.dump(obj));
    } catch {
      setResult("JSON → YAML変換に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">YAML ⇄ JSON 変換ツール</h1>
      <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="YAML または JSONを入力" className="mb-4" />
      <div className="flex gap-2 mb-4">
        <Button onClick={toJson}>YAML → JSON</Button>
        <Button onClick={toYaml}>JSON → YAML</Button>
      </div>
      <Textarea readOnly value={result} />
    </ToolPage>
  );
}
