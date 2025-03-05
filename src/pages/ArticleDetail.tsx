
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Newsletter } from "@/components/Newsletter";
import { useToast } from "@/hooks/use-toast";

const ArticleDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const articleId = parseInt(id || "1");
  
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
            <Link to="/articles">
              <Button>Retourner aux articles</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Erreur de partage', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié !",
        description: "Le lien de l'article a été copié dans votre presse-papiers.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/articles" className="text-primary hover:underline mb-4 inline-block">
              ← Retour aux articles
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-500 mb-4">
              Publié le {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          
          <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="flex justify-between items-center border-t border-b py-4 my-8">
            <div className="flex gap-4">
              <Button onClick={handleShare} variant="outline">
                Partager
              </Button>
              <Link to={`/articles/${articleId - 1}`}>
                <Button variant="outline" disabled={articleId <= 1}>
                  Article précédent
                </Button>
              </Link>
              <Link to={`/articles/${articleId + 1}`}>
                <Button variant="outline" disabled={articleId >= articles.length}>
                  Article suivant
                </Button>
              </Link>
            </div>
          </div>
        </article>
        
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Abonnez-vous à notre newsletter</h2>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
