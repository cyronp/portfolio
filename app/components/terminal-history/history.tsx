import { historyProps } from "./history-props";

export function History({ historyContext }: historyProps) {
  return (
    <div className="">
      {historyContext?.map((command, index) => (
        <p key={`${command}-${index}`}>{command}</p>
      ))}
    </div>
  );
}
