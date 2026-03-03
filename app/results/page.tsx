'use client';

import { Button } from "@/components/ui/button"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ResultsDisplay } from "@/components/results-display";
import { calculateResult } from "@/lib/quiz-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  const router = useRouter();
  const [score, setScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedScore = localStorage.getItem('quizScore');
    
    if (!storedScore) {
      router.push('/quiz');
      return;
    }

    // Cap score at 35 maximum
    const parsedScore = Math.min(parseInt(storedScore, 10), 35);
    setScore(parsedScore);
    setIsLoading(false);
  }, [router]);

  if (isLoading || score === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  const result = calculateResult(score);

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
          </div>
        </div>
      </header>

      {/* Results Content */}
      <main className="container mx-auto px-4 py-12 md:py-20 mb-20 md:mb-0">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold mb-2">YOUR PERSONALIZED ASSESSMENT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Here's What Your Results Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Based on your responses, we've identified your stress patterns and created a personalized pathway forward.
          </p>
        </div>
        
        <ResultsDisplay result={result} totalScore={score} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-foreground flex items-center justify-center text-background font-bold">
                DS
              </div>
              <span className="font-bold text-xl">DayStar Strategies</span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Boutique executive coaching firm providing human-centered solutions to work burnout.
            </p>
            <p className="text-sm text-muted-foreground">
              David Lui • Clinical Psychologist • Sydney, Australia
            </p>
            <p className="text-xs text-muted-foreground pt-4">
              © 2024 DayStar Strategies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50 p-4 shadow-lg">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12" asChild>
          <Link href="/booking">
            Book Strategy Session - $395
          </Link>
        </Button>
      </div>
    </div>
  );
}
