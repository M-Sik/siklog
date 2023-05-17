'use client';

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    //   remarkPlugins={[remarkGfm]}
    <ReactMarkdown
      className=" prose mt-16 max-w-none"
      components={{
        h1: ({ node, ...props }) => <h1 {...props} className="border-b" />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
}
