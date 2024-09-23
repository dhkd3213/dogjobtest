'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ImageGenerationClient() {
  const searchParams = useSearchParams();
  const job = searchParams.get('job') || ''; // null일 경우 빈 문자열로 처리
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!job) return; // job이 빈 문자열일 경우 함수 실행 중지

    setIsGenerating(true);
    try {
      const response = await fetch('/api/discord_bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job }),
      });
      const data = await response.json();
      console.log(data);
      
      // 실제 구현에서는 여기서 이미지 URL을 받아와야 합니다.
      // 예시를 위해 임시로 5초 후에 더미 URL을 설정합니다.
      setTimeout(() => {
        setImageUrl('https://example.com/dummy-image.jpg');
        setIsGenerating(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-md text-center space-y-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">이미지 생성</h1>
      <div className="bg-white text-purple-600 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">직업: {job || '알 수 없음'}</h2>
        {imageUrl ? (
          <img src={imageUrl} alt={job || '생성된 이미지'} className="w-full rounded-lg shadow-md" />
        ) : (
          <button
            onClick={generateImage}
            disabled={isGenerating || !job}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? '생성 중...' : '이미지 생성하기'}
          </button>
        )}
      </div>
      <Link href="/result">
        <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105 active:scale-95">
          결과 페이지로 돌아가기
        </button>
      </Link>
    </div>
  );
}