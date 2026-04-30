import { Command } from "../types";

const LANGUAGES = ["en", "pt", "es"];

export const languageCommand: Command = {
  name: "language",
  description: "Manage terminal language",
  handler: (args, ctx) => {
    if (args.length === 0) return { output: `Current language: ${ctx.language}` };

    const [sub, value] = args;

    if (sub === "list") return { output: LANGUAGES };
    if (sub === "change") {
      if (!value) return { output: "Usage: language change <value>", isError: true };
      if (!LANGUAGES.includes(value)) return { output: `Unknown language: "${value}"`, isError: true };
      ctx.setLanguage(value);
      return { output: `Language changed to: ${value}` };
    }

    return { output: `Unknown subcommand: "${sub}"`, isError: true };
  },
};