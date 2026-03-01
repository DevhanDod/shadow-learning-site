import type { Metadata } from "next";

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
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Started with Shadow Learning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sign up to our email list to get early access, learning tips, and
            exclusive content. We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Join Our Email List
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Subscribe to receive updates, pronunciation tips, and free learning
            resources directly to your inbox.
          </p>

          {/*
            IMPORTANT: Replace the Google Form URL below with your actual Google Form embed URL.
            To get the embed URL:
            1. Create a Google Form at forms.google.com
            2. Click "Send" button
            3. Click the embed icon (<>)
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9yC6KHT99uhWxrkCJdjJHwiK-R6hPCCRZ9O59I-3uX7OL4g/viewform?embedded=true" width="640" height="474" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            4. Copy the src URL from the iframe code
          */}
          <div className="bg-white rounded-xl shadow-sm p-2 border border-gray-200">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9yC6KHT99uhWxrkCJdjJHwiK-R6hPCCRZ9O59I-3uX7OL4g/viewform?embedded=true"
              width="100%"
              height="474"
              className="rounded-lg"
              title="Shadow Learning Email Sign Up Form"
            >
              Loading form...
            </iframe>
          </div>

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
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Ways to Reach Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:hello@shadowlearning.com"
                className="text-primary hover:underline text-sm"
              >
                hello@shadowlearning.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm">
                Follow us on Instagram, TikTok, and YouTube for daily
                pronunciation tips.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 text-sm">
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly will I see improvement?
              </h3>
              <p className="text-gray-600 text-sm">
                Most users report noticeable improvement in pronunciation
                within 2-3 weeks of daily practice. Consistency is key — even 15
                minutes a day can make a significant difference.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do I need any special equipment?
              </h3>
              <p className="text-gray-600 text-sm">
                All you need is a device with a microphone and internet
                connection. A smartphone, tablet, or laptop will work perfectly.
                Headphones are recommended for the best experience.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">
                Is Shadow Learning suitable for beginners?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes! We have clips at beginner, intermediate, and advanced
                levels. Beginners will find slow, clearly spoken clips that are
                perfect for starting out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
