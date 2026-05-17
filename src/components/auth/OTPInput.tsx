"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

export const OTPInput = ({ length = 6, onComplete }: { length?: number, onComplete: (otp: string) => void }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== "" && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (otp.every(v => v !== "")) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  return (
    <div className="flex justify-between gap-2">
      {otp.map((data, index) => (
        <Input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => { if (el) inputs.current[index] = el; }}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-14 text-center text-xl font-bold rounded-xl border-border/50 bg-muted/30 focus-visible:ring-gold focus-visible:ring-offset-0"
        />
      ))}
    </div>
  );
};
