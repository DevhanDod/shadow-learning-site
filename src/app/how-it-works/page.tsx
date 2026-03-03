import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import FloatingParticles from "@/components/FloatingParticles";
import ParallaxFloat from "@/components/ParallaxFloat";

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
      icon: "🎬",
    },
    {
      number: "02",
      title: "Watch the Clip",
      description:
        "Watch the short scene and listen carefully to how the native speaker pronounces each word. Pay attention to their intonation, rhythm, stress patterns, and natural flow of speech.",
      detail:
        "You can replay the clip as many times as you need. Slow it down to catch difficult sounds or speed it up as you improve.",
      icon: "👀",
    },
    {
      number: "03",
      title: "Read the Subtitle and Meaning",
      description:
        "Below each clip, you will see the exact sentence being spoken along with its meaning and contextual explanation. This helps you understand not just the words, but how and why they are used in that context.",
      detail:
        "Vocabulary highlights and grammar notes are provided so you learn more than just pronunciation.",
      icon: "📖",
    },
    {
      number: "04",
      title: "Speak Along",
      description:
        "Press the record button and say the sentence yourself. Try to match the native speaker's pronunciation, rhythm, and intonation as closely as possible. This is the shadowing technique used by language professionals.",
      detail:
        "You can record multiple attempts and compare each one to track your improvement over time.",
      icon: "🎤",
    },
    {
      number: "05",
      title: "Get Instant Feedback",
      description:
        "Our AI-powered pronunciation engine analyses your recording and compares it with the original. You get a detailed accuracy score showing exactly which words and sounds you nailed and which ones need more practice.",
      detail:
        "The feedback includes word-level scoring, phoneme analysis, and specific suggestions for improvement.",
      icon: "🎯",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <FloatingParticles count={20} color="rgba(108, 60, 225, 0.12)" />
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxFloat speed={-0.1}>
            <div className="absolute -top-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float" />
          </ParallaxFloat>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <TextReveal
            text="How Shadow Learning Works"
            as="h1"
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            stagger={70}
          />
          <ScrollReveal delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our five-step process makes it simple and enjoyable to improve your
              English pronunciation using real entertainment content.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="relative max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={100}
            >
              <div
                className={`flex flex-col md:flex-row gap-8 items-start mb-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl animate-float-slow" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center glow-primary">
                      <span className="text-3xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
                <GlowCard className="flex-1 glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-gray-500 text-sm italic">{step.detail}</p>
                </GlowCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* The Shadowing Technique */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingParticles count={10} color="rgba(108, 60, 225, 0.06)" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <TextReveal
              text="What Is the Shadowing Technique?"
              as="h2"
              className="text-3xl font-bold text-gray-900 mb-6 text-center"
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <GlowCard className="glass rounded-xl p-8">
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
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-primary via-purple-600 to-indigo-700 overflow-hidden animated-gradient">
        <FloatingParticles count={20} color="rgba(255, 255, 255, 0.1)" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <TextReveal
              text="Ready to Try It Yourself?"
              as="h2"
              className="text-3xl font-bold text-white mb-4"
            />
            <p className="text-purple-100 text-lg mb-8">
              Sign up for free and start improving your English pronunciation
              today with real movie and TV show clips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="/features"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
