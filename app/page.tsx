import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="block">전생 직업 테스트</span>
        </h1>
        <p className="text-xl sm:text-2xl max-w-md mx-auto">
          당신의 전생 직업을 알아보는 흥미진진한 여정을 시작하세요!
        </p>
        <div className="mt-8">
          <Link href="/survey">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg">
              설문 시작하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}