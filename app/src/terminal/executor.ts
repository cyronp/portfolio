import { commandRegistry } from "./commands";
import { CommandContext, CommandResult } from "./types";

export function executeCommand(input: string, ctx: CommandContext): CommandResult {
  const [name, ...args] = input.trim().split(/\s+/);

  const command = commandRegistry[name.toLowerCase()];
  if (!command) {
    return { output: `Command not found: "${name}". Type "help" for available commands.`, isError: true };
  }

  return command.handler(args, ctx);
}