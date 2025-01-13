"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="my-4">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
