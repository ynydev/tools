"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [jsonData, setJsonData] = useState("");
  const [schemaData, setSchemaData] = useState("");
  const [result, setResult] = useState("");

  const validate = async () => {
    try {
      const data = JSON.parse(jsonData);
      const schema = JSON.parse(schemaData);
      const Ajv = (await import("ajv")).default;
      const ajv = new Ajv();
      const validate = ajv.compile(schema);
      const valid = validate(data);
      setResult(valid ? "有効なJSONです" : `不正: ${JSON.stringify(validate.errors, null, 2)}`);
    } catch {
      setResult("JSONの解析に失敗しました");
    }
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">JSONスキーマバリデータ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Textarea placeholder="JSONデータ" value={jsonData} onChange={(e) => setJsonData(e.target.value)} />
        <Textarea placeholder="スキーマ" value={schemaData} onChange={(e) => setSchemaData(e.target.value)} />
      </div>
      <Button onClick={validate}>検証する</Button>
      <Textarea readOnly className="mt-4" value={result} />
    </ToolPage>
  );
}
