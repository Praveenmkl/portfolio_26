'use client';

import dynamic from 'next/dynamic';

const AIAssistant = dynamic(
  () => import('./AIAssistant.jsx'),
  { ssr: false }
);

export default function AIAssistantWrapper() {
  return <AIAssistant />;
}
