import { historyProps } from "./history-props";

export const History = ({ historyContext }: { historyContext: historyProps[] }) => {
  return (
    <div>
      {historyContext.map((entry, i) => (
        <div key={i}>
          <p>visitor@visitor-PC:~$ {entry.input}</p>
        {Array.isArray(entry.output)
          ? entry.output.map((line, j) => (
              <p key={j} className="font-mono whitespace-pre">
                {line}
              </p>
            ))
          : <p className={entry.isError ? "text-red-400" : ""}>{entry.output}</p>
        }
        </div>
      ))}
    </div>
  );
};