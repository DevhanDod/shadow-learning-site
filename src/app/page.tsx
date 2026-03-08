import Link from "next/link";
import AppMockup from "@/components/AppMockup";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxFloat from "@/components/ParallaxFloat";
import FloatingParticles from "@/components/FloatingParticles";
import TextReveal from "@/components/TextReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlowCard from "@/components/GlowCard";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Particle background */}
        <FloatingParticles count={40} color="rgba(108, 60, 225, 0.2)" />

        {/* Floating background shapes for parallax depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ParallaxFloat speed={-0.15}>
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float" />
          </ParallaxFloat>
          <ParallaxFloat speed={-0.1}>
            <div className="absolute top-40 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed" />
          </ParallaxFloat>
          <ParallaxFloat speed={-0.2}>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-200/25 rounded-full blur-3xl animate-float-slow" />
          </ParallaxFloat>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <ScrollReveal direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 glow-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Now with AI speech scoring
                </div>
              </ScrollReveal>

              <TextReveal
                text="Learn English by Shadowing Your Favourite Shows"
                as="h1"
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                stagger={60}
              />

              <ScrollReveal direction="up" delay={400}>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Watch real TV and movie clips, read the subtitles, speak along,
                  and instantly see how close your accent is. The most
                  natural way to master spoken English.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={500}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-primary to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-center animated-gradient"
                  >
                    Try It Free
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 text-center"
                  >
                    See the Method
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={600}>
                <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-500">&#10003;</span> Free to start
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-500">&#10003;</span> No credit card
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-500">&#10003;</span> AI powered
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - App Mockup with parallax */}
            <ScrollReveal direction="right" delay={200}>
              <div className="lg:pl-8">
                <ParallaxFloat speed={-0.08}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 animate-float-slow" />
                    <AppMockup />
                  </div>
                </ParallaxFloat>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: "+", label: "Movie & TV Clips" },
              { value: 10000, suffix: "+", label: "Active Learners" },
              { value: 87, suffix: "%", label: "Avg. Accuracy Gain" },
              { value: 49, suffix: "/5", label: "User Rating", prefix: "4." },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix || ""}
                      className="gradient-text"
                    />
                  </div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingParticles count={15} color="rgba(108, 60, 225, 0.08)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TextReveal
              text="The Shadow Learning Method"
              as="h2"
              className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
            />
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Three simple steps to start improving your spoken fluency
              today
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Watch a Clip", desc: "Choose from hundreds of real movie and TV show scenes. Watch how native speakers naturally say words and phrases." },
              { num: "2", title: "Read & Understand", desc: "See the sentence displayed below the clip along with its meaning and context, so you understand exactly what is being said." },
              { num: "3", title: "Speak & Compare", desc: "Press play and speak along. Our AI compares your speech with the original and shows you how close you are." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 150}>
                <GlowCard className="bg-white p-6">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center glow-primary">
                        <span className="text-2xl font-bold text-white">{step.num}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/how-it-works"
                className="text-primary font-medium hover:underline"
              >
                Learn more about the method &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-2" />
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxFloat speed={-0.1}>
            <div className="absolute -top-32 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl animate-float" />
          </ParallaxFloat>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TextReveal
              text="Why Choose Shadow Learning?"
              as="h2"
              className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", title: "Real Content", desc: "Study with actual movies and TV shows, not scripted textbook dialogues. Hear how native speakers really talk." },
              { emoji: "🎯", title: "Instant Feedback", desc: "Get immediate speech scoring powered by AI. Know exactly where to improve after every attempt." },
              { emoji: "📖", title: "Context & Meaning", desc: "Every clip comes with the full sentence, meaning, and context so you pick up vocabulary and grammar naturally." },
              { emoji: "📈", title: "Track Progress", desc: "See your speaking accuracy improve over time with detailed progress tracking and analytics." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard className="glass rounded-xl p-6 h-full">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-primary via-purple-600 to-indigo-700 overflow-hidden animated-gradient">
        <FloatingParticles count={25} color="rgba(255, 255, 255, 0.12)" />
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxFloat speed={-0.12}>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-float" />
          </ParallaxFloat>
          <ParallaxFloat speed={-0.08}>
            <div className="absolute bottom-0 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float-delayed" />
          </ParallaxFloat>
        </div>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <TextReveal
              text="Ready to Start Speaking English Confidently?"
              as="h2"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            />
            <p className="text-purple-100 text-lg mb-8">
              Join thousands of learners who are improving their spoken fluency
              with us. Sign up today and get started for free.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started Free
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
