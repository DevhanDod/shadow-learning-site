import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover how Shadow Learning helps you master English pronunciation using real movie and TV show clips. Watch, read, speak, and get instant AI feedback.",
  keywords: [
    "how shadow learning works",
    "English pronunciation method",
    "learn English with movies method",
    "shadowing technique English",
    "pronunciation practice steps",
  ],
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Choose a Scene",
      description:
        "Browse our library of clips from popular movies and TV shows. Filter by difficulty level, accent, genre, or topic. Whether you love action films, comedies, or dramas, there is content that matches your interests and learning level.",
      detail:
        "Each clip is carefully selected and curated to feature clear dialogue that is useful for everyday English conversation.",
    },
    {
      number: "02",
      title: "Watch the Clip",
      description:
        "Watch the short scene and listen carefully to how the native speaker pronounces each word. Pay attention to their intonation, rhythm, stress patterns, and natural flow of speech.",
      detail:
        "You can replay the clip as many times as you need. Slow it down to catch difficult sounds or speed it up as you improve.",
    },
    {
      number: "03",
      title: "Read the Subtitle and Meaning",
      description:
        "Below each clip, you will see the exact sentence being spoken along with its meaning and contextual explanation. This helps you understand not just the words, but how and why they are used in that context.",
      detail:
        "Vocabulary highlights and grammar notes are provided so you learn more than just pronunciation.",
    },
    {
      number: "04",
      title: "Speak Along",
      description:
        "Press the record button and say the sentence yourself. Try to match the native speaker's pronunciation, rhythm, and intonation as closely as possible. This is the shadowing technique used by language professionals.",
      detail:
        "You can record multiple attempts and compare each one to track your improvement over time.",
    },
    {
      number: "05",
      title: "Get Instant Feedback",
      description:
        "Our AI-powered pronunciation engine analyses your recording and compares it with the original. You get a detailed accuracy score showing exactly which words and sounds you nailed and which ones need more practice.",
      detail:
        "The feedback includes word-level scoring, phoneme analysis, and specific suggestions for improvement.",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How Shadow Learning Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our five-step process makes it simple and enjoyable to improve your
            English pronunciation using real entertainment content.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row gap-8 items-start mb-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-gray-500 text-sm italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Shadowing Technique */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What Is the Shadowing Technique?
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Shadowing</strong> is a well-established language learning
              method where you listen to a native speaker and immediately repeat
              what they say, mimicking their pronunciation, rhythm, and
              intonation. It was originally developed by Professor Alexander
              Arguelles and has been widely adopted by polyglots and language
              professionals worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Research shows that shadowing activates the motor cortex of the
              brain, strengthening the neural pathways between listening and
              speaking. This leads to faster improvement in fluency and
              pronunciation compared to traditional methods like reading
              textbooks or memorising vocabulary lists.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Shadow Learning takes this proven technique and enhances it with{" "}
              <strong>AI-powered pronunciation feedback</strong>, making it
              possible to practise effectively without a human tutor. Combined
              with engaging content from movies and TV shows, learning becomes
              both effective and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try It Yourself?
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Sign up for free and start improving your English pronunciation
            today with real movie and TV show clips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/features"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
