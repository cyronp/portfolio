"use client";

import { useState } from "react";
import { Terminal } from "./components/terminal-prompt/terminal";
import { History } from "./components/terminal-history/history";

export default function Home() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

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
    <div className="p-2">
      <History historyContext={terminalHistory} />
      <Terminal
        value={terminalInput}
        onKeyDown={handleKeyDown}
        onChange={(event) => setTerminalInput(event.target.value)}
      />
    </div>
  );
}
