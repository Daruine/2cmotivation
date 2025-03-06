
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { VideoSection } from "@/components/VideoSection";
import { SearchBar } from "@/components/SearchBar";
import { QuoteOfTheDay } from "@/components/QuoteOfTheDay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

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
          <div className="mb-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <SearchBar />
          </div>
          <div className="flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Link to="/citations">
              <Button size="lg">Voir les Citations</Button>
            </Link>
            <Link to="/a-propos">
              <Button size="lg" variant="outline">En Savoir Plus</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Citation du Jour */}
      <QuoteOfTheDay />

      {/* Articles Section */}
      <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Derniers Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
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
                  <Link to={`/articles/${article.id}`}>
                    <Button variant="outline" className="w-full">Lire Plus</Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

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
          <Link to="/a-propos">
            <Button variant="outline" size="lg">En Savoir Plus Sur Nous</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
