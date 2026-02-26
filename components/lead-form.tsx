'use client';

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface LeadFormProps {
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export function LeadForm({ onSubmit }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-serif">Get Your Results</CardTitle>
        <CardDescription className="text-base">
          Enter your details to see your stress assessment results and receive a personalized action plan
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
          <Button type="submit" className="w-full" size="lg">
            View My Results
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
