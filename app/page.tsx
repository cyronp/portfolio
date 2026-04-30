"use client";
import { useEffect, useRef, useState } from "react";
import { Terminal } from "./components/terminal-prompt/terminal";
import { History } from "./components/terminal-history/history";
import { executeCommand } from "./src/terminal/executor";
import { historyProps } from "./components/terminal-history/history-props";
import { rices } from "./components/terminal-prompt/terminal-props";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<historyProps[]>([]);

  const [language, setLanguage] = useState("pt");
  const [style, setStyle] = useState<rices>("default");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = () => inputRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!terminalInput.trim()) return;

      const result = executeCommand(terminalInput, {
        language,
        setLanguage,
        style,
        setStyle,
      });

      if (result.clearHistory) {
        setTerminalHistory([]);
      } else {
        setTerminalHistory((prev) => [
          ...prev,
          { input: terminalInput, ...result },
        ]);
      }

      setTerminalInput("");
    }
  };

  return (
    <div className="p-2 min-h-screen" onClick={() => inputRef.current?.focus()}>
      <History historyContext={terminalHistory} />
      <Terminal
        ref={inputRef}
        spanRice={style}
        value={terminalInput}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => inputRef.current?.focus(), 0)}
        onChange={(e) => setTerminalInput(e.target.value)}
      />
    </div>
  );
}
