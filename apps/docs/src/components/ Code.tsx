import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";

import { PropsWithClassName } from "../global.t";

type CodeProps = {
  children: string[];
} & PropsWithClassName;

export default function Code({ children, className }: CodeProps) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col space-y-2 p-4 bg-black"
      )}
    >
      <div className="flex items-center space-x-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-white rounded-full"
          />
        ))}
      </div>
      <CodeBlock
        language="ts"
        className="text-sm"
        showLineNumbers
      >
        {children.join("\n")}
      </CodeBlock>
    </div>
  );
}
