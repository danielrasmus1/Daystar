'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QuizProgress } from "@/components/quiz-progress";
import { QuizStep } from "@/components/quiz-step";
import { LeadForm } from "@/components/lead-form";
import { quizQuestions, calculateResult } from "@/lib/quiz-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const router = useRouter();

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (data: { name: string; email: string; phone: string }) => {
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const result = calculateResult(totalScore);

    localStorage.setItem('quizScore', totalScore.toString());
    localStorage.setItem('leadData', JSON.stringify(data));

    router.push('/results');
  };

  const currentScore = answers.reduce((sum, val) => sum + val, 0);
  const currentResult = calculateResult(currentScore);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-foreground flex items-center justify-center text-background font-bold">
                  DS
                </div>
                <div>
                  <h1 className="font-bold text-base leading-none">DayStar Strategies</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Clinical Psychology for Executives</p>
                </div>
              </div>
            </Link>
            {!showLeadForm && (
              <div className="text-sm text-muted-foreground hidden md:block">
                Question {currentStep + 1} of {quizQuestions.length}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        {!showLeadForm ? (
          <div className="space-y-10">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
                3-MINUTE ASSESSMENT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Executive Stress Scorecard</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Answer honestly to get the most accurate picture of your current stress patterns.
              </p>
            </div>
            
            <QuizProgress 
              currentStep={currentStep + 1} 
              totalSteps={quizQuestions.length} 
            />
            
            <QuizStep
              question={quizQuestions[currentStep]}
              onSelect={handleAnswer}
            />

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>All responses are confidential and secure</p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
                FINAL STEP
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Get Your Personalized Results</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enter your details to receive your stress assessment and personalized action plan.
              </p>
            </div>
            
            <LeadForm
              onSubmit={handleLeadSubmit}
              score={currentScore}
              resultType={currentResult.type}
            />
          </div>
        )}
      </main>
    </div>
  );
}
