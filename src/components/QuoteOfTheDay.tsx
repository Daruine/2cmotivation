
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export const QuoteOfTheDay = () => {
  const [todayQuote, setTodayQuote] = useState({
    quote: `Ce ne sont ni la maison, ni la voiture, ni l'argent qui construisent un couple. Ce sont les gestes quotidiens.

Les petits détails font les grandes histoires d'amour.

Apprenez à voir votre partenaire, à écouter, à apprécier ces petits riens qui créent l'intimité. Ne laissez jamais la routine éteindre l'amour.`,
    author: "Histoire d'Amour et de Regrets"
  });

  useEffect(() => {
    // La logique pour récupérer une citation aléatoire sera ajoutée plus tard
  }, []);

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
            </footer>
          </div>
        </Card>
        <p className="mt-6 text-white/80 text-sm">
          Une histoire qui nous rappelle l'importance des petits gestes quotidiens dans l'amour.
        </p>
      </div>
    </section>
  );
};
