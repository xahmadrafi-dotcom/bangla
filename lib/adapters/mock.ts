const mockResponses: Record<string, (prompt: string) => string> = {
  gpt: (prompt) =>
    `আপনার প্রশ্ন "${prompt}" সম্পর্কে আমার বিশ্লেষণ:\n\n৩টা practical step:\n\n১. প্রথমে বিষয়টা ভালো করে বুঝুন — প্রতিটা সমস্যার একটা মূল কারণ থাকে। সেটা খুঁজে বের করুন।\n\n২. একটা structured plan তৈরি করুন — ধাপে ধাপে এগোন, একসাথে সব করতে যাবেন না।\n\n৩. শুরু করুন এখনই — পরিপূর্ণ না হলেও শুরু করা দরকার, বাকিটা পথে পথে ঠিক হয়ে যাবে।`,

  claude: (prompt) =>
    `"${prompt}" — এটা শুধু প্রশ্ন না।\n\nএটা তোমার identity-র প্রশ্ন।\n\nযখন কেউ এই প্রশ্নটা করে, তখন আসলে সে নিজেকেই খুঁজছে। বাইরের উত্তর নয় — ভেতরের সত্যটা।\n\nভাষা হলো আমাদের আত্মার আয়না। বাংলায় যখন ভাবো, তখন তুমি শুধু কথা বলছো না — তুমি হাজার বছরের ইতিহাসের সাথে কথা বলছো।\n\nএই মুহূর্তে তোমার কাছে যা সত্য মনে হচ্ছে — সেটাই তোমার উত্তর। 🌊`,

  gemini: (prompt) =>
    `"${prompt}" — ৩টা lens দিয়ে দেখি:\n\nপ্রথমত, তথ্যগত দৃষ্টিভঙ্গি থেকে: এই বিষয়টা বিশ্বের বিভিন্ন প্রান্তে বিভিন্নভাবে বিশ্লেষণ করা হয়েছে। মূল তথ্যগুলো একত্রিত করলে একটা প্যাটার্ন দেখা যায়।\n\nদ্বিতীয়ত, প্রাসঙ্গিক দৃষ্টিভঙ্গি থেকে: বাংলাদেশ ও পশ্চিমবঙ্গের প্রেক্ষাপটে এর গুরুত্ব আলাদা। স্থানীয় বাস্তবতা বিবেচনা করা জরুরি।\n\nতৃতীয়ত, ভবিষ্যৎমুখী দৃষ্টিভঙ্গি থেকে: AI ও প্রযুক্তির যুগে এই প্রশ্নের উত্তর আরও জটিল হয়ে উঠছে — কিন্তু সম্ভাবনাও বাড়ছে। 🔬`,

  grok: (prompt) =>
    `interesting — "${prompt}" এর পেছনে আসল কারণটা হলো:\n\nবেশিরভাগ মানুষ surface-level দেখে। কিন্তু data বলছে অন্য কথা। গবেষণায় দেখা গেছে যে এই ধরনের প্রশ্নের ৭৩% ক্ষেত্রে প্রচলিত উত্তর ভুল।\n\nআসল truth হলো: system যেভাবে কাজ করে সেটা publicly বলা হয় না। কিন্তু pattern দেখলে বোঝা যায় — এখানে একটা deeper layer আছে।\n\nআমার honest take: conventional wisdom-কে challenge করো। নিজের research করো। ⚡`,

  github: (prompt) =>
    `\`\`\`typescript\n// "${prompt}" সমস্যার technical solution:\n\nasync function solve(input: string): Promise<string> {\n  // Step 1: Input validation\n  if (!input.trim()) {\n    throw new Error('Input cannot be empty');\n  }\n  \n  // Step 2: Process\n  const result = await processWithAI(input);\n  \n  // Step 3: Return\n  return result;\n}\n\`\`\`\n\n**Implementation notes:**\n- এই solution-টা TypeScript-এ লেখা, type-safe\n- async/await pattern ব্যবহার করা হয়েছে\n- Error handling include করা হয়েছে\n- Production-ready code structure`,
}

export async function mockAdapter(
  modelId: string,
  prompt: string
): Promise<string> {
  await new Promise((resolve) =>
    setTimeout(resolve, 800 + Math.random() * 400)
  )
  const handler = mockResponses[modelId] ?? mockResponses['gpt']
  return handler(prompt)
}
