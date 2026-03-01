import Link from "next/link";
import AppMockup from "@/components/AppMockup";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Now with AI pronunciation scoring
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Learn English by{" "}
                <span className="text-primary">Shadowing</span> Your Favourite
                Shows
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Watch real TV and movie clips, read the subtitles, speak along,
                and instantly see how close your pronunciation is. The most
                natural way to master spoken English.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition-colors text-center"
                >
                  Try It Free
                </Link>
                <Link
                  href="/how-it-works"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-colors text-center"
                >
                  See How It Works
                </Link>
              </div>
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
            </div>

            {/* Right - App Mockup */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Glow effect behind mockup */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-2xl opacity-20" />
                <AppMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            How Shadow Learning Works
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Three simple steps to start improving your English pronunciation
            today
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Watch a Clip
              </h3>
              <p className="text-gray-600">
                Choose from hundreds of real movie and TV show scenes. Watch how
                native speakers naturally pronounce words and phrases.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Read &amp; Understand
              </h3>
              <p className="text-gray-600">
                See the sentence displayed below the clip along with its meaning
                and context, so you understand exactly what is being said.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Speak &amp; Compare
              </h3>
              <p className="text-gray-600">
                Press play and speak along. Our AI compares your pronunciation
                with the original and shows you how close you are.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="text-primary font-medium hover:underline"
            >
              Learn more about how it works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Shadow Learning?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real Content
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from actual movies and TV shows, not scripted textbook
                dialogues. Hear how English is really spoken.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instant Feedback
              </h3>
              <p className="text-gray-600 text-sm">
                Get immediate pronunciation scoring powered by AI. Know exactly
                where to improve after every attempt.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Context &amp; Meaning
              </h3>
              <p className="text-gray-600 text-sm">
                Every clip comes with the full sentence, meaning, and context so
                you learn vocabulary and grammar naturally.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Track Progress
              </h3>
              <p className="text-gray-600 text-sm">
                See your pronunciation accuracy improve over time with detailed
                progress tracking and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &ldquo;I tried many English apps, but Shadow Learning is the
                first one that actually improved my pronunciation. Learning from
                movies makes it so enjoyable!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Maria S.</p>
                  <p className="text-gray-500 text-xs">Spanish Speaker</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &ldquo;The instant pronunciation feedback is a game-changer. I
                can see exactly which words I need to work on. My confidence in
                speaking has grown so much.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                  K
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kenji T.</p>
                  <p className="text-gray-500 text-xs">Japanese Speaker</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 italic mb-4">
                &ldquo;I love that I can learn English while watching my
                favourite shows. It does not feel like studying at all. My IELTS
                speaking score improved by 1.5 bands!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Aisha R.</p>
                  <p className="text-gray-500 text-xs">Arabic Speaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Speaking English Confidently?
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Join thousands of learners who are improving their pronunciation
            with Shadow Learning. Sign up today and get started for free.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
