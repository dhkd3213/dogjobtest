'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  { question: "어떤 성향이 더 강하다고 생각하나요?", option1: "리더", option2: "지원자" },
  { question: "어떤 활동을 더 좋아하나요?", option1: "실외 활동", option2: "실내 활동" },
  { question: "어떤 방식으로 문제를 해결하나요?", option1: "직접 행동", option2: "계획 후 실행" },
  { question: "일할 때 중요한 것은?", option1: "창의성", option2: "체계성" },
  { question: "혼자 일하는 것이 편한가요?", option1: "예", option2: "아니요" }
];

export default function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const router = useRouter();

  const handleAnswer = (answer: number) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push(`/result?answers=${JSON.stringify(updatedAnswers)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-blue-500 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">{questions[currentQuestion].question}</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleAnswer(1)}
            className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105 active:scale-95"
          >
            {questions[currentQuestion].option1}
          </button>
          <button
            onClick={() => handleAnswer(2)}
            className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300 transform hover:scale-105 active:scale-95"
          >
            {questions[currentQuestion].option2}
          </button>
        </div>
        <div className="mt-8 text-center">
          <span className="text-lg font-semibold">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
      </div>
    </div>
  );
}