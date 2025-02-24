
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

interface SearchResult {
  type: 'citation' | 'article' | 'video';
  title: string;
  content: string;
  url: string;
}

const Recherche = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Rechercher</h1>
          <div className="mb-8">
            <SearchBar />
          </div>
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="text-sm text-blue-600 mb-2">{result.type}</div>
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <p className="text-gray-600 mb-4">{result.content}</p>
                  <a href={result.url} className="text-blue-600 hover:underline">
                    Voir plus
                  </a>
                </div>
              ))}
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
