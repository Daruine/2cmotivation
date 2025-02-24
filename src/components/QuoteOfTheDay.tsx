
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export const QuoteOfTheDay = () => {
  const [todayQuote, setTodayQuote] = useState({
    quote: "Éloignez-vous des personnes négatives, elles ont un problème pour chaque solution.",
    author: "2C Motivation"
  });

  useEffect(() => {
    // Ici, vous pourrez plus tard ajouter la logique pour récupérer une citation aléatoire
    // ou la citation du jour depuis votre base de données
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Citation du Jour</h2>
        <Card className="p-8 card-hover bg-white/10 backdrop-blur-md text-white border-[#d4a853] border-2">
          <div className="flex flex-col h-full">
            <div className="text-[#d4a853] text-6xl mb-6 font-serif">"</div>
            <blockquote className="text-2xl font-medium mb-6 flex-grow">
              {todayQuote.quote}
            </blockquote>
            <footer className="text-lg text-[#d4a853] mt-auto border-t border-[#d4a853] pt-4">
              — {todayQuote.author}
            </footer>
          </div>
        </Card>
      </div>
    </section>
  );
};
