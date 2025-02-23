
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { QuoteCard } from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";

const inspiringQuotes = [
  {
    quote: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    author: "Winston Churchill",
  },
  {
    quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    author: "Steve Jobs",
  },
];

const articles = [
  {
    title: "Trouver Votre Force Intérieure",
    excerpt: "Découvrez la puissance qui sommeille en vous pour surmonter tous les obstacles...",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Le Pouvoir de la Pensée Positive",
    excerpt: "Apprenez comment les pensées positives peuvent transformer votre vie...",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    title: "Fixer des Objectifs Atteignables",
    excerpt: "Maîtrisez l'art de définir et d'atteindre des objectifs significatifs...",
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
            Transformez Votre Vie Par
            <span className="text-primary"> La Motivation Quotidienne</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Découvrez des histoires inspirantes, des citations et des ressources pour vous aider à atteindre vos objectifs
            et vivre votre meilleure vie.
          </p>
          <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" href="/creer">Commencer</Button>
            <Button size="lg" variant="outline" href="/apropos">
              En Savoir Plus
            </Button>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Inspiration Quotidienne</h2>
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
          <h2 className="section-title text-center">Derniers Articles</h2>
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
                  <Button variant="outline" className="w-full" href={`/articles/${index + 1}`}>
                    Lire Plus
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
          <h2 className="section-title">À Propos de 2C Motivation</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nous croyons en la puissance de la motivation pour transformer les vies. Notre mission est de
            vous fournir une inspiration quotidienne et des ressources pratiques pour vous aider à atteindre
            vos objectifs et vivre une vie plus épanouissante.
          </p>
          <Button variant="outline" size="lg" href="/apropos">
            En Savoir Plus Sur Nous
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
