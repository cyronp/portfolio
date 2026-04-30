import { rices } from "@/app/components/terminal-prompt/terminal-props";

export interface CommandResult {
  output: string | string[];
  isError?: boolean;
  clearHistory?: boolean;
}

export interface CommandContext {
  language: string;
  setLanguage: (lang: string) => void;
  style: string;
  setStyle: (style: rices) => void;
}

export interface Command {
  name: string;
  description: string;
  handler: (args: string[], ctx: CommandContext) => CommandResult;
}
