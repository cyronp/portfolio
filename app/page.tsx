"use client";

import { useEffect, useRef, useState } from "react";
import { Terminal } from "./components/terminal-prompt/terminal";
import { History } from "./components/terminal-history/history";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = () => inputRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleTerminalClick() {
    inputRef.current?.focus();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (!terminalInput.trim()) {
        return;
      }

      setTerminalHistory((prevHistory) => [...prevHistory, terminalInput]);
      setTerminalInput("");
    }
  };

  return (
    <div className="p-2 min-h-screen" onClick={handleTerminalClick}>
      <History historyContext={terminalHistory} />
      <Terminal
        ref={inputRef}
        value={terminalInput}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => inputRef.current?.focus(), 0)}
        onChange={(event) => setTerminalInput(event.target.value)}
      />
    </div>
  );
}
