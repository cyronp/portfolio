import { forwardRef, useRef, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { terminalProps } from "./terminal-props";

const SpanRicing = {
  default: "",
  blue: "px-2 bg-blue-400 rounded-l-xl",
  cyronp: "",
};

export const Terminal = forwardRef<HTMLInputElement, terminalProps>(
  ({ spanRice = "default", value, placeholder, onKeyDown, onChange, onBlur }, ref) => {
    const measureRef = useRef<HTMLSpanElement>(null);
    const [inputWidth, setInputWidth] = useState(10);

    useEffect(() => {
      if (measureRef.current) {
        const measured = measureRef.current.offsetWidth;
        setInputWidth(Math.max(measured, 10));
      }
    }, [value, placeholder]);

    return (
      <div className="inline-flex items-center gap-2">
        <span
          ref={measureRef}
          className="absolute invisible whitespace-pre font-mono pointer-events-none"
          aria-hidden
        >
          {value || placeholder || ""}
        </span>

        <span className={SpanRicing[spanRice]}>visitor@visitor-PC:~$</span>

        <Input
          ref={ref}
          placeholder={placeholder}
          className="bg-transparent p-0 focus:outline-none focus:ring-0 focus:border-transparent"
          style={{ width: `${inputWidth}px` }}
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