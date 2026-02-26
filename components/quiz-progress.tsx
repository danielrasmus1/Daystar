import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">
          Question {currentStep} of {totalSteps}
        </p>
        <p className="text-sm font-medium text-primary">
          {Math.round(progress)}%
        </p>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
