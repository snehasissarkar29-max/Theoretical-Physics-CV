import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, block = false, className = '' }) => {
  const renderedHtml = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        strict: false,
        trust: true,
      });
    } catch (error) {
      console.warn('KaTeX rendering error for expression:', math, error);
      return `<span class="text-red-400 font-mono text-sm">${math}</span>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div
        className={`katex-display my-2 overflow-x-auto text-slate-100 ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <span
      className={`inline-math text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export default MathView;
