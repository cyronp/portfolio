"use client"

import { useState } from "react";

export default function Home() {
  const [terminalInput, setTerminalInput] = useState("")
    const handleKeyDown = (event: any) => {
    if (event.key === 'Enter'){
      console.log(terminalInput)
    }
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black font-sans">
      <div className="inline-flex gap-2">
      <span>
        visitor@visitor-PC:~$
      </span>
        <input autoFocus className="focus:outline-none focus:ring-0 focus:border-transparent" onKeyDown={handleKeyDown} onChange={(e) => setTerminalInput(e.target.value)}/>
      </div>
    </div>
  );
}
