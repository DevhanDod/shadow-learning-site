import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import FloatingParticles from "@/components/FloatingParticles";
import ParallaxFloat from "@/components/ParallaxFloat";

export const metadata: Metadata = {
  title: "Contact & Sign Up",
  description:
    "Get in touch with Shadow Learning or sign up for free. Join our email list for updates, tips, and exclusive content for English learners.",
  keywords: [
    "contact shadow learning",
    "sign up English learning",
    "shadow learning email",
    "English pronunciation app sign up",
    "language learning contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 py-16 lg:py-20 overflow-hidden">
        <FloatingParticles count={20} color="rgba(108, 60, 225, 0.12)" />
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxFloat speed={-0.1}>
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float" />
          </ParallaxFloat>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <TextReveal
            text="Get Started with Shadow Learning"
            as="h1"
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            stagger={70}
          />
          <ScrollReveal delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sign up to our email list to get early access, learning tips, and
              exclusive content. We would love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-1" />
        <div className="relative max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <TextReveal
              text="Join Our Email List"
              as="h2"
              className="text-2xl font-bold text-gray-900 mb-4 text-center"
            />
            <p className="text-gray-600 text-center mb-8">
              Subscribe to receive updates, pronunciation tips, and free learning
              resources directly to your inbox.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlowCard className="glass rounded-xl p-2">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe9yC6KHT99uhWxrkCJdjJHwiK-R6hPCCRZ9O59I-3uX7OL4g/viewform?embedded=true"
                width="100%"
                height="474"
                className="rounded-lg"
                title="Shadow Learning Email Sign Up Form"
              >
                Loading form...
              </iframe>
            </GlowCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-center text-sm text-gray-500 mt-4">
              You can also access the form directly:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe9yC6KHT99uhWxrkCJdjJHwiK-R6hPCCRZ9O59I-3uX7OL4g/viewform?embedded=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open Sign Up Form
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingParticles count={10} color="rgba(108, 60, 225, 0.05)" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TextReveal
              text="Other Ways to Reach Us"
              as="h2"
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "📧",
                title: "Email",
                content: (
                  <a
                    href="mailto:hello@shadowlearning.com"
                    className="text-primary hover:underline text-sm"
                  >
                    hello@shadowlearning.com
                  </a>
                ),
                glow: "rgba(108, 60, 225, 0.15)",
              },
              {
                icon: "💬",
                title: "Social Media",
                content: (
                  <p className="text-gray-600 text-sm">
                    Follow us on Instagram, TikTok, and YouTube for daily
                    pronunciation tips.
                  </p>
                ),
                glow: "rgba(255, 107, 53, 0.12)",
              },
              {
                icon: "🏢",
                title: "Office",
                content: (
                  <p className="text-gray-600 text-sm">
                    London, United Kingdom
                  </p>
                ),
                glow: "rgba(29, 185, 84, 0.12)",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <GlowCard className="glass rounded-xl p-6 text-center" glowColor={item.glow}>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  {item.content}
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-2" />
        <div className="relative max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <TextReveal
              text="Common Questions"
              as="h2"
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            />
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: "How quickly will I see improvement?",
                a: "Most users report noticeable improvement in pronunciation within 2-3 weeks of daily practice. Consistency is key — even 15 minutes a day can make a significant difference.",
              },
              {
                q: "Do I need any special equipment?",
                a: "All you need is a device with a microphone and internet connection. A smartphone, tablet, or laptop will work perfectly. Headphones are recommended for the best experience.",
              },
              {
                q: "Is Shadow Learning suitable for beginners?",
                a: "Yes! We have clips at beginner, intermediate, and advanced levels. Beginners will find slow, clearly spoken clips that are perfect for starting out.",
              },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
                <GlowCard className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
