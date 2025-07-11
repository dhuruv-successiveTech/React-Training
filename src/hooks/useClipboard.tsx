'use client';

import { useState } from 'react';

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = (text:string) => {
    if (!text) return;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    // selects the text withing the textarea
    textarea.select();
    // copies all text inside it 
    document.execCommand('copy');
    document.body.removeChild(textarea);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset status
  };

  return { copied, copy };
}

export default useClipboard; 