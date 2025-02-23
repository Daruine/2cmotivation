
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { QuoteCard } from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";

const inspiringQuotes = [
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

const articles = [
  {
    title: "Finding Your Inner Strength",
    excerpt: "Discover the power within yourself to overcome any obstacle...",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "The Power of Positive Thinking",
    excerpt: "Learn how positive thoughts can transform your life...",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    title: "Setting Achievable Goals",
    excerpt: "Master the art of setting and achieving meaningful goals...",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-text mb-6 animate-fadeIn">
            Transform Your Life Through
            <span className="text-primary"> Daily Motivation</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Discover inspiring stories, quotes, and resources to help you achieve your goals
            and live your best life.
          </p>
          <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Daily Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspiringQuotes.map((quote, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <QuoteCard {...quote} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">About 2cmotivation</h2>
          <p className="text-lg text-gray-600 mb-8">
            We believe in the power of motivation to transform lives. Our mission is to
            provide you with daily inspiration and practical resources to help you achieve
            your goals and live a more fulfilling life.
          </p>
          <Button variant="outline" size="lg">
            Learn More About Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
