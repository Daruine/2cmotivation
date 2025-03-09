
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArticleTags } from "@/components/ArticleTags";
import { Footer } from "@/components/Footer";

const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Articles Inspirants</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <ArticleTags tags={article.tags} />
                  <Link to={`/articles/${article.id}`} className="block mt-4">
                    <Button variant="outline" className="w-full">Lire Plus</Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
