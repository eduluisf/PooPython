interface CodeBlockProps {
  code: string;
  title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 my-4">
      {title && (
        <div className="text-sm text-gray-400 mb-2 border-b border-gray-700 pb-2">
          {title}
        </div>
      )}
      <pre className="text-green-400 overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}