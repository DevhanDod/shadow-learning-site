import Link from "next/link";
import type { Metadata } from "next";

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
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start for free and upgrade when you are ready. No hidden fees, no
            long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 ${
                  plan.highlighted
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
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
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary-dark"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I try Shadow Learning for free?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! Our free plan gives you access to 5 clips per day with
                basic pronunciation scoring. No credit card required to sign up.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel my subscription at any time?
              </h3>
              <p className="text-gray-600 text-sm">
                Absolutely. You can cancel your Premium or Annual subscription
                at any time. You will continue to have access until the end of
                your billing period.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 text-sm">
                We accept all major credit and debit cards, PayPal, and Apple
                Pay. All payments are processed securely through Stripe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there a student discount?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! Students with a valid university email address can get 20%
                off any paid plan. Contact us with your student email to claim
                your discount.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
