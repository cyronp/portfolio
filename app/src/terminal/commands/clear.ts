import { Command } from "../types";

export const clear: Command = {
  name: "clear",
  description: "Clear terminal",
  handler: (args) => {
    if (args.length === 0) {
      return {
        output: "",
        clearHistory: true,
      };
    }

    return { output: `Unknown subcommand:`, isError: true };
  },
};
