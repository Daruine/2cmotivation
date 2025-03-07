
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { articles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArticleTags } from "@/components/ArticleTags";
import { toast } from "@/components/ui/use-toast";

interface SearchResult {
  type: 'citation' | 'article' | 'video';
  title: string;
  content: string;
  url: string;
  tags?: string[];
}

const Recherche = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase();
    
    if (query) {
      console.log("Processing search for query:", query);
      setIsSearching(true);
      
      // Create a small delay to simulate search processing
      setTimeout(() => {
        // Search in articles
        const articleResults = articles.filter(article => {
          const inTitle = article.title.toLowerCase().includes(query);
          const inContent = article.content.toLowerCase().includes(query);
          const inExcerpt = article.excerpt.toLowerCase().includes(query);
          const inTags = article.tags?.some(tag => tag.toLowerCase().includes(query));
          
          // Return true if the query appears in any of these fields
          return inTitle || inContent || inExcerpt || inTags;
        }).map(article => ({
          type: 'article' as const,
          title: article.title,
          content: article.excerpt,
          url: `/articles/${article.id}`,
          tags: article.tags
        }));

        console.log("Found article results:", articleResults.length);
        
        // If no results were found, add a fallback article to ensure there's always a result
        if (articleResults.length === 0 && articles.length > 0) {
          // Add a message to inform the user
          toast({
            title: "Recherche limitée",
            description: "Nous vous montrons quelques articles qui pourraient vous intéresser.",
            duration: 5000,
          });
          
          // Add some fallback results
          const fallbackResults = articles.slice(0, 2).map(article => ({
            type: 'article' as const,
            title: article.title,
            content: `Suggestion basée sur votre recherche "${query}": ${article.excerpt}`,
            url: `/articles/${article.id}`,
            tags: article.tags
          }));
          
          setResults(fallbackResults);
        } else {
          setResults(articleResults);
        }
        
        setIsSearching(false);
      }, 500);
    }
  }, [searchParams]);

  // Get the current search query for display
  const currentQuery = searchParams.get('q') || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Rechercher</h1>
          <div className="mb-8">
            <SearchBar />
          </div>
          
          {currentQuery && (
            <div className="text-center mb-6">
              <p className="text-lg">Résultats pour : <span className="font-semibold">{currentQuery}</span></p>
            </div>
          )}
          
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-gray-600">Recherche en cours...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                  <div className="text-sm text-blue-600 mb-2 capitalize">{result.type}</div>
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <p className="text-gray-600 mb-4">{result.content}</p>
                  {result.tags && <ArticleTags tags={result.tags} />}
                  <Link to={result.url} className="text-blue-600 hover:underline block mt-4">
                    Voir plus
                  </Link>
                </div>
              ))}
            </div>
          ) : currentQuery ? (
            <div className="text-center py-8 bg-white rounded-lg shadow p-6">
              <p className="text-gray-500 mb-4">Aucun résultat trouvé pour "{currentQuery}"</p>
              <p className="text-gray-600">Essayez avec d'autres termes ou parcourez nos articles populaires.</p>
              <Link to="/articles" className="text-blue-600 hover:underline block mt-4">
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Utilisez la barre de recherche ci-dessus pour trouver du contenu
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recherche;
