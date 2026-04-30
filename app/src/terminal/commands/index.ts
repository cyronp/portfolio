import { Command } from "../types";
import { languageCommand } from "./language";
import { styleCommand } from "./style";
import { neofetch } from "./neofetch";
import { clear } from "./clear";

export const commandRegistry: Record<string, Command> = {
  language: languageCommand,
  style: styleCommand,
  neofetch: neofetch,
  clear: clear,
  help: {
    name: "help",
    description: "List all available commands",
    handler: (_, ctx) => ({
      output: Object.values(commandRegistry).map((c) => `${c.name} — ${c.description}`),
    }),
  },
};