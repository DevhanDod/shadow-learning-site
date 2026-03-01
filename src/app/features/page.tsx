import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Shadow Learning features: clip-based learning, AI pronunciation scoring, sentence meaning, progress tracking, and multiple difficulty levels.",
  keywords: [
    "shadow learning features",
    "AI pronunciation feedback",
    "English learning app features",
    "pronunciation scoring",
    "language learning with movies features",
  ],
};

export default function FeaturesPage() {
  const features = [
    {
      icon: "🎬",
      title: "Real Movie & TV Clips",
      description:
        "Learn from authentic entertainment content, not scripted textbook dialogues. Our library includes clips from popular movies, TV series, documentaries, and interviews featuring a variety of English accents and speaking styles.",
      highlights: [
        "Hundreds of curated clips from popular content",
        "Multiple English accents (British, American, Australian)",
        "New clips added weekly",
        "Filtered by genre, difficulty, and topic",
      ],
    },
    {
      icon: "🎯",
      title: "AI Pronunciation Scoring",
      description:
        "Our advanced speech recognition AI listens to your pronunciation and provides detailed, word-by-word accuracy scoring. You will see exactly which words you pronounced well and which ones need more practice.",
      highlights: [
        "Word-level pronunciation accuracy scores",
        "Phoneme-level analysis for detailed feedback",
        "Comparison with native speaker audio",
        "Specific improvement suggestions",
      ],
    },
    {
      icon: "📖",
      title: "Sentence Meaning & Context",
      description:
        "Every clip comes with the complete sentence transcript, its meaning, and contextual notes. Understand not just what is being said, but why certain words and phrases are used in that context.",
      highlights: [
        "Full sentence transcript with timing",
        "Plain English meaning explanation",
        "Vocabulary highlights with definitions",
        "Grammar notes where relevant",
      ],
    },
    {
      icon: "📈",
      title: "Progress Tracking & Analytics",
      description:
        "Track your pronunciation improvement over time with detailed analytics. See your accuracy scores trend upwards as you practise more, and identify the specific sounds and words you find most challenging.",
      highlights: [
        "Daily, weekly, and monthly progress charts",
        "Pronunciation accuracy trends",
        "Most improved and most challenging words",
        "Practice streak and consistency tracking",
      ],
    },
    {
      icon: "🎚️",
      title: "Multiple Difficulty Levels",
      description:
        "Start at your current level and progress at your own pace. Our content is organised into beginner, intermediate, and advanced levels based on speaking speed, vocabulary complexity, and sentence length.",
      highlights: [
        "Beginner: Slow, clear speech with simple vocabulary",
        "Intermediate: Natural pace with common expressions",
        "Advanced: Fast speech with idioms and slang",
        "Adaptive difficulty suggestions based on performance",
      ],
    },
    {
      icon: "🔄",
      title: "Playback Speed Control",
      description:
        "Adjust the clip playback speed to match your learning needs. Slow it down to catch every sound or speed it up as you improve. This flexibility makes it easy to practise at a comfortable pace.",
      highlights: [
        "0.5x, 0.75x, 1x, 1.25x, and 1.5x speed options",
        "Loop specific sections for focused practice",
        "A-B repeat for difficult phrases",
        "Auto-pause after each sentence",
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Effective Learning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to master English pronunciation, all in one
            platform. Built for learners who want real results.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <span className="text-primary mt-0.5">&#10003;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Shadow Learning vs Traditional Methods
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-sm font-medium">Feature</th>
                  <th className="px-6 py-4 text-sm font-medium">
                    Shadow Learning
                  </th>
                  <th className="px-6 py-4 text-sm font-medium">
                    Traditional Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Content Source</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Real movies &amp; TV shows</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Scripted dialogues</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Pronunciation Feedback</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">AI-powered word-level scoring</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Basic or none</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Learning Method</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Shadowing (proven technique)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Repetition / flashcards</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Engagement</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">High (entertainment content)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Low (textbook style)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Context &amp; Meaning</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-medium">Full context with each clip</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Isolated sentences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience These Features Yourself
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Try Shadow Learning for free and see how effective clip-based
            pronunciation practice can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
