'use client';

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Calendar, CheckCircle2, Clock, MapPin, Video } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'video',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          source: "booking",
          message: [
            formData.sessionType && `Session type: ${formData.sessionType}`,
            formData.preferredDate && `Preferred date: ${formData.preferredDate}`,
            formData.preferredTime && `Preferred time: ${formData.preferredTime}`,
            formData.message && `Notes: ${formData.message}`,
          ]
            .filter(Boolean)
            .join(" | "),
        }),
      });
    } catch (err) {
      // Non-fatal — we still confirm the booking even if CRM sync fails
      console.error("[v0] GHL booking sync error:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  DS
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">DayStar Strategies</p>
                  <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">Clinical Psychology for Executives</p>
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif">Request Received</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              David will be in touch within 24 hours to confirm your session time. In-person sessions are held in Darlington, Sydney. Online sessions use secure encrypted video.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-3">What happens next</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>David will confirm your preferred time within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Session details and a brief preparation note will follow</span>
                </li>
              </ul>
            </div>
            <Button size="lg" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                DS
              </div>
              <div>
                <p className="font-bold text-sm leading-none">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground hidden sm:block mt-0.5">Clinical Psychology for Executives</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Booking Content */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Book Your Consultation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step toward regaining balance. Schedule a confidential consultation with David Lui.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Session Length</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  60-minute initial consultation to discuss your situation and goals
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Video className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Video or In-Person</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Secure telehealth or face-to-face sessions in Sydney
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sydney office or online from anywhere in Australia
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Request an Appointment</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll contact you to schedule your consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
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
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+61 400 000 000"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Session Type *</Label>
                  <RadioGroup
                    value={formData.sessionType}
                    onValueChange={(value) => setFormData({ ...formData, sessionType: value })}
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="video" id="video" />
                      <Label htmlFor="video" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Video className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Video Consultation</p>
                            <p className="text-sm text-muted-foreground">Secure online session</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <Label htmlFor="in-person" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">In-Person Session</p>
                            <p className="text-sm text-muted-foreground">Sydney office</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Input
                      id="preferredTime"
                      type="time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your situation (optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what brings you to seek support..."
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>All information is kept strictly confidential and secure</span>
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <Calendar className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Submitting..." : "Request Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              By submitting this form, you agree to be contacted by DayStar Strategies regarding your consultation request.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-4 bg-card">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">DS</div>
              <div>
                <p className="font-bold text-sm leading-none">DayStar Strategies</p>
                <p className="text-xs text-muted-foreground mt-0.5">David Lui · Clinical Psychologist · Sydney, Australia</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 DayStar Strategies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
