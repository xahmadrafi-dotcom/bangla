# OM AI — বাংলার কণ্ঠ

**Miracle Code™ — Think Beyond Time. Live Beyond Limits.**

বাংলা ভাষাকে জীবিত রাখার জন্য একটি AI platform। এখানে GPT, Claude, Gemini, এবং Grok — চারটি AI একসাথে বাংলায় উত্তর দেয়।

---

## 🌟 মিশন

বাংলা ভাষাকে AI-র যুগে এগিয়ে নিয়ে যাওয়া। প্রতিটি প্রশ্নের উত্তর বাংলায়। প্রতিটি চিন্তা বাংলায়।

---

## 📁 ফোল্ডার কাঠামো

```
bangla/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts       # API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main UI
├── components/
│   ├── ChatInput.tsx          # Input component
│   ├── ModelPanel.tsx         # Model response panel
│   └── StatusBadge.tsx        # Status indicator
├── config/
│   └── mode.ts                # mock | gateway | direct
├── lib/
│   ├── adapters/
│   │   ├── anthropic.ts       # Claude adapter
│   │   ├── github.ts          # GitHub Models adapter
│   │   ├── google.ts          # Gemini adapter
│   │   ├── mock.ts            # Mock responses (Bangla)
│   │   └── openai.ts          # GPT adapter
│   ├── models.ts              # Model registry
│   └── orchestrator.ts        # Parallel orchestration
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 কিভাবে চালাবেন (locally)

### ধাপ ১: dependencies install করুন

```bash
npm install
```

### ধাপ ২: dev server চালু করুন

```bash
npm run dev
```

এরপর browser-এ যান: [http://localhost:3000](http://localhost:3000)

**কোনো API key লাগবে না।** Mock mode-এ সব কাজ করবে।

---

## 🔑 Real API Keys যোগ করবেন কিভাবে

`.env.local` ফাইল তৈরি করুন:

```env
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
GOOGLE_AI_KEY=your_google_ai_key_here
GITHUB_TOKEN=your_github_token_here
```

শুধু environment variable যোগ করুন — **কোনো code পরিবর্তন করতে হবে না।**

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Background | `#050505` (deep black) |
| Primary text | `#F5F0E8` (warm white) |
| Accent | `#C9A84C` (gold) |
| GPT | `#3B82F6` (blue) |
| Claude | `#F97316` (orange) |
| Gemini | `#22C55E` (green) |
| Grok | `#A855F7` (purple) |

---

## 🤖 AI Models

| Model | Personality | Adapter |
|-------|-------------|---------|
| GPT-4o | Structured, practical | `lib/adapters/openai.ts` |
| Claude 3.5 | Philosophical, thoughtful | `lib/adapters/anthropic.ts` |
| Gemini 1.5 | Analytical, multi-lens | `lib/adapters/google.ts` |
| Grok | Bold, research-driven | `lib/adapters/github.ts` |

---

## 📋 মূল নিয়ম

১. `npm run dev` — কোনো configuration ছাড়াই কাজ করবে
২. Mock mode default — কোনো API key লাগবে না
৩. UI এবং adapter logic সম্পূর্ণ আলাদা
৪. সব user-facing text বাংলায়
৫. Real API key যোগ করতে শুধু `.env.local` পরিবর্তন করুন

---

## 🪐 Miracle Code™

> "আপনি কখনও অলৌকিক থেকে আলাদা ছিলেন না।"

**© 2026 Miracle Code™ · OM AI · বাংলার কণ্ঠ**
