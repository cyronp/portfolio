import { Command } from "../types";
import { rices } from "@/app/components/terminal-prompt/terminal-props";

const STYLES: rices[] = ["default", "blue", "cyronp"];

export const styleCommand: Command = {
  name: "style",
  description: "Manage terminal style",
  handler: (args, ctx) => {
    if (args.length === 0) return { output: `Current style: ${ctx.style}` };

    const [sub, value] = args;

    if (sub === "list") return { output: STYLES };
    if (sub === "change") {
      if (!value) return { output: "Usage: style change <value>", isError: true };
      if (!STYLES.includes(value as rices)) return { output: `Unknown style: "${value}"`, isError: true };
      ctx.setStyle(value as rices);
      return { output: `Style changed to: ${value}` };
    }
    if (sub === "--help") {
      return { output: [
        "Options:",
            "     style list                List styling options." ,
            "     style change <value>      Change to wanted style."
          ]
        };
    }

    return { output: `Unknown subcommand: "${sub}"`, isError: true };
  },
};