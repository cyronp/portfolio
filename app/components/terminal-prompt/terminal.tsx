import { forwardRef } from "react";
import { Input } from "../ui/input";
import { terminalProps } from "./terminal-props";

const SpanRicing = {
  default: "",
  blue: "px-2 bg-blue-400 rounded-l-xl",
  cyronp: "",
};

export const Terminal = forwardRef<HTMLInputElement, terminalProps>(
  ({ spanRice = "default", value, onKeyDown, onChange, onBlur }, ref) => {
    const terminalValue = value ?? "";
    return (
      <div className="inline-flex items-center gap-2">
        <span className={SpanRicing[spanRice]}>visitor@visitor-PC:~$</span>
        <Input
          ref={ref}
          className="w-fit bg-transparent p-0 focus:outline-none focus:ring-0 focus:border-transparent"
          style={{ width: `${Math.max(terminalValue.length, 1)}ch` }}
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

Terminal.displayName = "Terminal";