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
  const [placeholderHelp, setPlaceholderHelp] = useState("");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    startIdleDebounce();
  }, []);

  useEffect(() => {
    const handleKeyDown = () => inputRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  const resetIdleState = () => {
    setPlaceholderHelp("");
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
  };

  const startIdleDebounce = () => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      setPlaceholderHelp("Write 'help' for guidance");
    }, 4000);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    resetIdleState();
    startIdleDebounce();

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
      resetIdleState();
      startIdleDebounce();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalInput(e.target.value);
    resetIdleState();
    startIdleDebounce();
  };

  const handleBlur = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <div className="p-2 min-h-screen" onClick={() => inputRef.current?.focus()}>
      <History historyContext={terminalHistory} />
      <Terminal
        ref={inputRef}
        placeholder={placeholderHelp}
        spanRice={style}
        value={terminalInput}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
    </div>
  );
}