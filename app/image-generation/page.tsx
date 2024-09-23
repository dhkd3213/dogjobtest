import { Suspense } from 'react';
import ImageGenerationClient from './ImageGenerationClient';

export default function ImageGenerationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-blue-500">
      <Suspense fallback={<p className="text-white text-xl font-semibold">로딩 중...</p>}>
        <ImageGenerationClient />
      </Suspense>
    </div>
  );
}