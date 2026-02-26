export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When facing high-stakes decisions or complex problems, how would you describe your mental clarity?",
    options: [
      { text: "Sharp and decisive—I process information quickly and confidently", value: 1 },
      { text: "Generally clear, though occasionally slower than I'd like", value: 2 },
      { text: "Noticeably foggy—decision-making takes more effort than it used to", value: 3 },
      { text: "Significantly impaired—I second-guess decisions or feel mentally stuck", value: 4 },
      { text: "Severely compromised—even routine choices feel overwhelming", value: 5 },
    ],
  },
  {
    id: 2,
    question: "At the end of your workday, how long does it typically take you to mentally transition away from work mode?",
    options: [
      { text: "Under 30 minutes—I decompress easily and shift focus to personal time", value: 1 },
      { text: "30-60 minutes with intentional effort (exercise, meditation, etc.)", value: 2 },
      { text: "1-2 hours, and work thoughts still intrude into evening activities", value: 3 },
      { text: "Several hours—my mind replays work scenarios well into the night", value: 4 },
      { text: "I never fully disconnect—work dominates my thoughts 24/7", value: 5 },
    ],
  },
  {
    id: 3,
    question: "How has your sleep pattern changed in the past 3-6 months?",
    options: [
      { text: "No change—I sleep 7+ hours and wake feeling restored", value: 1 },
      { text: "Slightly worse—occasional restless nights or early morning waking", value: 2 },
      { text: "Noticeably degraded—I wake tired despite sleeping 6-7 hours", value: 3 },
      { text: "Significantly disrupted—difficulty falling asleep, frequent waking, or insomnia", value: 4 },
      { text: "Severely impaired—I'm surviving on 4-5 hours and feel exhausted constantly", value: 5 },
    ],
  },
  {
    id: 4,
    question: "When unexpected challenges arise at work, how do you typically respond emotionally?",
    options: [
      { text: "Calm and adaptive—I problem-solve without emotional reactivity", value: 1 },
      { text: "Minor frustration but maintain composure and professionalism", value: 2 },
      { text: "Noticeable irritation or anxiety that affects my immediate interactions", value: 3 },
      { text: "Strong emotional reactions—anger, overwhelm, or shutting down", value: 4 },
      { text: "Intense dysregulation—I struggle to control my emotional responses", value: 5 },
    ],
  },
  {
    id: 5,
    question: "Compared to 6-12 months ago, how has your tolerance for workplace conflict or difficult conversations changed?",
    options: [
      { text: "No change—I navigate difficult conversations with confidence", value: 1 },
      { text: "Slightly lower—I notice minor avoidance or discomfort", value: 2 },
      { text: "Noticeably reduced—I actively avoid confrontation when possible", value: 3 },
      { text: "Significantly diminished—conflicts drain me for hours afterward", value: 4 },
      { text: "Almost nonexistent—I feel on the verge of emotional breakdown during conflicts", value: 5 },
    ],
  },
  {
    id: 6,
    question: "How often do you experience physical symptoms of stress (tension headaches, jaw clenching, digestive issues, chest tightness)?",
    options: [
      { text: "Rarely—I'm physically comfortable throughout my workday", value: 1 },
      { text: "Occasionally during peak stress periods (1-2x per month)", value: 2 },
      { text: "Regularly during work hours (weekly or multiple times per week)", value: 3 },
      { text: "Frequently—physical symptoms are a daily occurrence", value: 4 },
      { text: "Constantly—my body is in a chronic state of tension and pain", value: 5 },
    ],
  },
  {
    id: 7,
    question: "When you think about Monday morning or returning to work after time off, what's your honest emotional response?",
    options: [
      { text: "Neutral to positive—I feel ready and even energized", value: 1 },
      { text: "Mild reluctance but no significant dread", value: 2 },
      { text: "Noticeable anxiety or heaviness in my chest", value: 3 },
      { text: "Strong dread—I lose sleep Sunday night or feel physically ill", value: 4 },
      { text: "Severe distress—I fantasize about calling in sick or quitting", value: 5 },
    ],
  },
  {
    id: 8,
    question: "How has your capacity for empathy and patience with colleagues, clients, or family members evolved recently?",
    options: [
      { text: "Unchanged—I'm still engaged, present, and emotionally available", value: 1 },
      { text: "Slightly diminished—I'm less patient than I used to be", value: 2 },
      { text: "Noticeably reduced—I catch myself being dismissive or short with people", value: 3 },
      { text: "Significantly depleted—I feel emotionally detached or cynical most of the time", value: 4 },
      { text: "Almost nonexistent—I resent interactions and feel nothing toward others' concerns", value: 5 },
    ],
  },
  {
    id: 9,
    question: "Over the past month, how many times have you engaged in activities purely for joy or personal fulfillment (hobbies, social time, creative pursuits)?",
    options: [
      { text: "Multiple times per week—I prioritize personal enjoyment regularly", value: 1 },
      { text: "2-3 times per month—less than I'd like but still present", value: 2 },
      { text: "Once per month or less—personal time has become rare", value: 3 },
      { text: "Almost never—I can't remember the last time I did something just for me", value: 4 },
      { text: "Never—I've completely abandoned personal interests and relationships", value: 5 },
    ],
  },
  {
    id: 10,
    question: "When you assess your professional performance over the past 3 months, which statement feels most accurate?",
    options: [
      { text: "I'm operating at or above my typical high standards", value: 1 },
      { text: "Slightly below my peak—minor slips but still solid performance", value: 2 },
      { text: "Noticeably declined—I'm delivering work that feels mediocre by my standards", value: 3 },
      { text: "Significantly struggling—I'm missing deadlines, making errors, or producing subpar work", value: 4 },
      { text: "Crisis-level decline—my performance is barely functional and reputation is at risk", value: 5 },
    ],
  },
];

export interface QuizResult {
  type: 'controlled' | 'risk' | 'overload';
  title: string;
  description: string;
  scoreRange: string;
}

export function calculateResult(totalScore: number): QuizResult {
  if (totalScore <= 20) {
    return {
      type: 'controlled',
      title: 'High Performance with Warning Signs',
      description: 'You\'re still operating at a high level, but subtle indicators suggest your current pace isn\'t fully sustainable. Early intervention now—before symptoms escalate—will help you maintain peak performance long-term while protecting your health and relationships.',
      scoreRange: '10-20',
    };
  } else if (totalScore <= 35) {
    return {
      type: 'risk',
      title: 'Significant Burnout Risk',
      description: 'You\'re experiencing clear warning signals that your system is overloaded. Your performance, relationships, and well-being are being compromised. Without strategic intervention, you\'re on track for clinical burnout within 3-6 months. Professional support is strongly recommended.',
      scoreRange: '21-35',
    };
  } else {
    return {
      type: 'overload',
      title: 'Critical Stress Overload',
      description: 'You\'re in a state of advanced burnout with severe impacts across physical, emotional, and professional domains. Immediate professional intervention is essential—your current state is not sustainable and poses serious risks to your health, career, and relationships. This is a crisis that requires urgent attention.',
      scoreRange: '36-50',
    };
  }
}
