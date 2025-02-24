
import { Navbar } from "@/components/Navbar";
import { QuoteOfTheDay } from "@/components/QuoteOfTheDay";
import { QuoteCard } from "@/components/QuoteCard";

const Citations = () => {
  const quotes = [
    {
      quote: "Ne soyez pas trop honnête dans ce monde, car les arbres droits sont toujours les premiers à être abattus.",
      author: "2C Motivation"
    },
    {
      quote: "Tout le monde ne mérite pas de connaître le vrai vous. Laissez-les critiquer celui qu'ils croient que vous êtes.",
      author: "2C Motivation"
    },
    {
      quote: "Entourez-vous des gens qui font ressortir le meilleur de vous-même, et non le stress.",
      author: "2C Motivation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <QuoteOfTheDay />
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Toutes nos Citations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quotes.map((quote, index) => (
                <QuoteCard key={index} {...quote} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Citations;
