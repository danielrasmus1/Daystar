'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface LeadFormProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
  score?: number;
  resultType?: string;
}

export function LeadForm({ onSubmit, score, resultType }: LeadFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/ghl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          source: "quiz",
          quizScore: score,
          quizResult: resultType,
        }),
      });
    } catch (err) {
      // Non-fatal — user still progresses if CRM sync fails
      console.error("[v0] GHL quiz lead sync error:", err);
    }

    onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Get Your Results</CardTitle>
        <CardDescription className="text-base">
          Enter your details to see your stress assessment results and receive a personalised action plan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Smith"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+61 400 000 000"
            />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "View My Results"}
          </Button>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
            <Lock className="h-3 w-3" />
            <span>Your information is kept strictly confidential</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
