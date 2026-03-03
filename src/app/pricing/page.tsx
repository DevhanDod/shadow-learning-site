import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import GlowCard from "@/components/GlowCard";
import FloatingParticles from "@/components/FloatingParticles";
import ParallaxFloat from "@/components/ParallaxFloat";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the Shadow Learning plan that suits you. Free plan available. Premium plans with unlimited clips, advanced AI feedback, and progress analytics.",
  keywords: [
    "shadow learning pricing",
    "English learning app cost",
    "pronunciation app pricing",
    "affordable English learning",
    "language learning subscription",
  ],
};

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "Rs.0",
      period: "forever",
      description: "Perfect for trying out Shadow Learning",
      features: [
        "5 clips per day",
        "Basic pronunciation scoring",
        "Beginner difficulty clips",
        "Sentence meaning & context",
        "Community support",
      ],
      notIncluded: [
        "Advanced AI feedback",
        "Unlimited clips",
        "Progress analytics",
        "All difficulty levels",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "Rs.500",
      period: "per month",
      description: "For serious learners who want real results",
      features: [
        "Unlimited clips per day",
        "Advanced AI pronunciation scoring",
        "All difficulty levels",
        "Sentence meaning & context",
        "Detailed progress analytics",
        "Word-level phoneme analysis",
        "Playback speed control",
        "Priority support",
      ],
      notIncluded: [],
      cta: "Start Premium",
      highlighted: true,
    },
    {
      name: "Annual",
      price: "Rs.6000",
      period: "per year",
      description: "Best value — save 33% with annual billing",
      features: [
        "Everything in Premium",
        "Save 33% compared to monthly",
        "Early access to new features",
        "Exclusive content library",
        "Personalised learning path",
        "Certificate of completion",
      ],
      notIncluded: [],
      cta: "Start Annual",
      highlighted: false,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <FloatingParticles count={20} color="rgba(108, 60, 225, 0.12)" />
        <div className="absolute inset-0 pointer-events-none">
          <ParallaxFloat speed={-0.1}>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-float" />
          </ParallaxFloat>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <TextReveal
            text="Simple, Transparent Pricing"
            as="h1"
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            stagger={70}
          />
          <ScrollReveal delay={300}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start for free and upgrade when you are ready. No hidden fees, no
              long-term contracts. Cancel anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 150}>
                <GlowCard
                  className={`rounded-xl p-8 h-full ${
                    plan.highlighted
                      ? "bg-gradient-to-br from-primary via-purple-600 to-indigo-700 text-white shadow-xl scale-105 glow-primary-strong animated-gradient"
                      : "glass"
                  }`}
                  glowColor={plan.highlighted ? "rgba(108, 60, 225, 0.3)" : "rgba(108, 60, 225, 0.15)"}
                  tiltIntensity={0}
                >
                  {plan.highlighted && (
                    <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h2
                    className={`text-xl font-bold mb-1 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-purple-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span
                      className={`text-sm ml-1 ${
                        plan.highlighted ? "text-purple-100" : "text-gray-500"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span
                          className={
                            plan.highlighted ? "text-green-300" : "text-green-500"
                          }
                        >
                          &#10003;
                        </span>
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          plan.highlighted
                            ? "text-purple-200 line-through"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        <span>&#10007;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-gray-100 hover:shadow-lg"
                        : "bg-gradient-to-r from-primary to-purple-500 text-white hover:shadow-lg hover:shadow-primary/30"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingParticles count={10} color="rgba(108, 60, 225, 0.05)" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <TextReveal
              text="Frequently Asked Questions"
              as="h2"
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            />
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: "Can I try Shadow Learning for free?",
                a: "Yes! Our free plan gives you access to 5 clips per day with basic pronunciation scoring. No credit card required to sign up.",
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Absolutely. You can cancel your Premium or Annual subscription at any time. You will continue to have access until the end of your billing period.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit and debit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.",
              },
              {
                q: "Is there a student discount?",
                a: "Yes! Students with a valid university email address can get 20% off any paid plan. Contact us with your student email to claim your discount.",
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
