import { Command } from "../types";

const now: Date = new Date();

const hours: number = now.getHours();
const minutes: number = now.getMinutes();
const seconds: number = now.getSeconds();

const neofetchLines = [
  "#######  #######    visitor@visitor-PC",
  "#######  #######    ------------------",
  "#######  #######    OS: Windows 11 Pro x86_64",
  `#######  #######    Current time: ${hours}:${minutes}:${seconds}`,
  "                    Packages: 2145 (dpkg)",
  "#######  #######    Shell: PowerShell 7.6.1",
  "#######  #######    Resolution: 1920x1080",
  "#######  #######    WM: Explorer",
  "#######  #######    CPU: Ryzen 5 3600",
  "                    GPU: RTX 3060 8GB",
  "                    Memory: 4125MiB / 15711MiB",
];

export const neofetch: Command = {
  name: "neofetch",
  description: "Secret command shhhh...",
  handler: (args, ctx) => {
    if (args.length === 0) return { output: neofetchLines };

    const [sub, value] = args;
    return { output: `Unknown subcommand: "${sub}"`, isError: true };
  },
};
