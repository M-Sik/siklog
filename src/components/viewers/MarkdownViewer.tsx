'use client';

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    //   remarkPlugins={[remarkGfm]}
    <ReactMarkdown
      className=" prose mt-16 max-w-none"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={atomDark}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code
              {...props}
              className="bg-gray-200 rounded-lg py-1 px-2 mx-1 before:content-none after:content-none"
            >
              {children}
            </code>
          );
        },
        pre: ({ node, ...props }) => <pre {...props} className="p-0" />,
        h1: ({ node, ...props }) => <h1 {...props} className="border-b" />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
