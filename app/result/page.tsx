'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const results = [
  { job: "왕", description: "당신은 강력한 리더십을 가진 왕이었습니다." },
  { job: "기사", description: "당신은 충성스러운 전사였습니다." },
  { job: "학자", description: "당신은 지식을 탐구하는 학자였습니다." },
  { job: "예술가", description: "당신은 창의적인 예술가였습니다." },
  { job: "상인", description: "당신은 번영을 추구하는 상인이었습니다." },
  { job: "농부", description: "당신은 자연과 함께 일하는 농부였습니다." },
  { job: "어부", description: "당신은 바다에서 생계를 유지하던 어부였습니다." },
  { job: "궁사", description: "당신은 뛰어난 활 솜씨를 자랑하는 궁사였습니다." },
  { job: "마법사", description: "당신은 신비로운 힘을 다루던 마법사였습니다." },
  { job: "사제", description: "당신은 사람들에게 지혜를 전파하던 사제였습니다." }
];

const calculateResult = (answers: number[]) => {
  const score = answers.reduce((acc, answer) => acc + answer, 0);
  const resultIndex = score % results.length;
  return results[resultIndex];
};

export default function Result() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<{ job: string, description: string } | null>(null);

  useEffect(() => {
    const answers = JSON.parse(searchParams.get('answers') || '[]');
    const result = calculateResult(answers);
    setResult(result);
  }, [searchParams]);

  if (!result) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-blue-500">
      <p className="text-white text-xl font-semibold">결과를 계산 중입니다...</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-blue-500 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">당신의 전생 직업은...</h1>
        <div className="bg-white text-purple-600 rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{result.job}</h2>
          <p className="text-lg sm:text-xl">{result.description}</p>
        </div>
        <Link href="/">
          <button className="mt-8 bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105 active:scale-95">
            다시 테스트하기
          </button>
        </Link>
      </div>
    </div>
  );
}