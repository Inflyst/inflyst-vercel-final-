
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Monetize Your Influence with AI
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Inflyst helps influencers turn content into income — with AI-powered monetization plans, content creation, and growth tools.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800">
          Join the Waitlist
        </button>
      </section>

      {/* Problem/Solution */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">Posting Daily, But Still Not Earning?</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Inflyst is your personal AI business coach — it shows you what to sell, creates the content, and tracks your growth. No guesswork. No burnout.
        </p>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Tell Us Your Niche</h3>
            <p>Inflyst learns who you are and what you do.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Get Your AI Growth Plan</h3>
            <p>We generate monetization ideas, offers, and content tailored to your brand.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Start Earning</h3>
            <p>Launch your offers and content — and track your income right from your dashboard.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">What You Get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">AI Monetization Planner</h3>
            <p>Get personalized strategies to sell courses, digital products, coaching, and more.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Content Generator</h3>
            <p>Generate scroll-stopping posts, captions, and scripts — fast.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Smart Link-in-Bio</h3>
            <p>Launch a branded offer page in seconds with built-in payment and lead capture.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Growth Analytics</h3>
            <p>Track what's working — and let AI optimize your content and income path.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center bg-gradient-to-t from-white to-gray-100">
        <h2 className="text-3xl font-semibold">Join Inflyst Early</h2>
        <p className="mt-2 text-lg max-w-xl mx-auto">
          Be the first to unlock AI tools that help you earn more from your influence.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800">
          Get Early Access
        </button>
      </section>
    </div>
  );
}
