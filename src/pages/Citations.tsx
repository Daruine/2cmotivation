
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { QuoteOfTheDay } from "@/components/QuoteOfTheDay";
import { QuoteCard } from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { allQuotes } from "@/utils/allQuotes";

const Citations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;
  const totalPages = Math.ceil(allQuotes.length / quotesPerPage);

  const startIndex = (currentPage - 1) * quotesPerPage;
  const endIndex = startIndex + quotesPerPage;
  const displayedQuotes = allQuotes.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <QuoteOfTheDay />
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Toutes nos Citations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedQuotes.map((quote, index) => (
                <QuoteCard key={startIndex + index} {...quote} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-12 gap-4">
              <Button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                variant="outline"
              >
                Précédent
              </Button>
              
              <span className="text-lg font-medium">
                Page {currentPage} sur {totalPages}
              </span>
              
              <Button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
              >
                Suivant
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Citations;
