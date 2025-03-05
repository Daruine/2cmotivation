
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { dailyQuotes } from "@/utils/dailyQuotes";
import { QuoteCard } from "@/components/QuoteCard";
import { useToast } from "@/components/ui/use-toast";

const CitationsDuJour = () => {
  const [quotes, setQuotes] = useState(dailyQuotes);
  const { toast } = useToast();

  useEffect(() => {
    // Trier les citations par date (la plus récente en premier)
    try {
      const sortedQuotes = [...dailyQuotes].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setQuotes(sortedQuotes);
    } catch (error) {
      console.error("Erreur lors du tri des citations:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les citations programmées",
        variant: "destructive",
      });
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Citations du Jour</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre programmation de citations motivantes quotidiennes pour vous inspirer chaque jour
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {quotes.map((quote, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-sm text-gray-500 mb-2">
                  Programmée pour le: {new Date(quote.date).toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <QuoteCard quote={quote.quote} author={quote.author} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Newsletter />
    </div>
  );
};

export default CitationsDuJour;
