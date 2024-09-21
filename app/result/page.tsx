import { Suspense } from 'react';
import ClientResult from './ClientResult';

export default function ResultPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-blue-500">
      <Suspense fallback={<p className="text-white text-xl font-semibold">결과를 계산 중입니다...</p>}>
        <ClientResult />
      </Suspense>
    </div>
  );
}