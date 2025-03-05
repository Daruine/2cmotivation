
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { getQuoteOfTheDay } from "@/utils/dailyQuotes";
import { useToast } from "@/components/ui/use-toast";

export const QuoteOfTheDay = () => {
  const [todayQuote, setTodayQuote] = useState({
    quote: `Ce ne sont ni la maison, ni la voiture, ni l'argent qui construisent un couple. Ce sont les gestes quotidiens.

Les petits détails font les grandes histoires d'amour.

Apprenez à voir votre partenaire, à écouter, à apprécier ces petits riens qui créent l'intimité. Ne laissez jamais la routine éteindre l'amour.`,
    author: "Histoire d'Amour et de Regrets",
    displayDate: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchTodayQuote = () => {
      try {
        const quote = getQuoteOfTheDay();
        setTodayQuote(quote);
      } catch (error) {
        console.error("Erreur lors du chargement de la citation du jour:", error);
        toast({
          title: "Erreur",
          description: "Impossible de charger la citation du jour",
          variant: "destructive",
        });
      }
    };

    // Charger la citation initiale
    fetchTodayQuote();

    // Vérifier si nous devons changer la citation toutes les minutes
    const checkForNewQuote = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Si l'heure actuelle est 7h30, rafraîchir la citation
      if (hours === 7 && minutes === 30) {
        fetchTodayQuote();
      }
    };

    // Vérifier périodiquement pour une nouvelle citation
    const intervalId = setInterval(checkForNewQuote, 60000); // Vérifier chaque minute

    return () => clearInterval(intervalId); // Nettoyage à la désinscription
  }, [toast]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Citation du Jour</h2>
        <Card className="p-8 card-hover bg-white/10 backdrop-blur-md text-white border-[#d4a853] border-2">
          <div className="flex flex-col h-full">
            <div className="text-[#d4a853] text-6xl mb-6 font-serif">"</div>
            <blockquote className="text-xl font-medium mb-6 flex-grow whitespace-pre-line">
              {todayQuote.quote}
            </blockquote>
            <footer className="text-lg text-[#d4a853] mt-auto border-t border-[#d4a853] pt-4">
              — {todayQuote.author}
              {todayQuote.displayDate && (
                <div className="text-sm text-white/70 mt-2">
                  {todayQuote.displayDate}
                </div>
              )}
            </footer>
          </div>
        </Card>
        <p className="mt-6 text-white/80 text-sm">
          Une nouvelle citation motivante chaque jour à 7h30 pour vous inspirer.
        </p>
      </div>
    </section>
  );
};
