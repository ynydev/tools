"use client";
import ToolPage from "@/components/layout/ToolPage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [birth, setBirth] = useState("");
  const [age, setAge] = useState("");

  const calc = () => {
    if (!birth) return;
    const birthDate = new Date(birth);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    if (!hasBirthdayPassed) years--;
    setAge(`${years}歳`);
  };

  return (
    <ToolPage>
      <h1 className="text-2xl font-bold mb-4">年齢計算ツール</h1>
      <div className="flex gap-2 mb-4 items-center">
        <Input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} />
        <Button onClick={calc}>計算</Button>
      </div>
      <Input readOnly value={age} placeholder="年齢がここに表示されます" />
    </ToolPage>
  );
}
