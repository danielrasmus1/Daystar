'use client';

import type { QuizQuestion } from "@/lib/quiz-data";

interface QuizStepProps {
  question: QuizQuestion;
  onSelect: (value: number) => void;
}

export function QuizStep({ question, onSelect }: QuizStepProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-serif text-center mb-8 text-balance leading-snug px-2">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className="w-full text-left px-5 py-4 rounded-lg border border-border/50 bg-card text-foreground text-sm md:text-base leading-snug hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer whitespace-normal break-words"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}
