
// Collection de citations pour affichage quotidien
export const dailyQuotes = [
  {
    quote: "Ce ne sont ni la maison, ni la voiture, ni l'argent qui construisent un couple. Ce sont les gestes quotidiens.\n\nLes petits détails font les grandes histoires d'amour.\n\nApprenez à voir votre partenaire, à écouter, à apprécier ces petits riens qui créent l'intimité. Ne laissez jamais la routine éteindre l'amour.",
    author: "Histoire d'Amour et de Regrets",
    date: "2025-03-05"
  },
  {
    quote: "Ne soyez pas trop honnête dans ce monde, car les arbres droits sont toujours les premiers à être abattus.",
    author: "2C Motivation",
    date: "2025-03-06"
  },
  {
    quote: "Tout le monde ne mérite pas de connaître le vrai vous. Laissez-les critiquer celui qu'ils croient que vous êtes.",
    author: "2C Motivation",
    date: "2025-03-07"
  },
  {
    quote: "Entourez-vous des gens qui font ressortir le meilleur de vous-même, et non le stress.",
    author: "2C Motivation",
    date: "2025-03-08"
  },
  {
    quote: "Les gens ne vous diront peut-être pas toujours ce qu'ils ressentent pour vous, mais ils le montreront toujours. Soyez attentif !",
    author: "2C Motivation",
    date: "2025-03-09"
  },
  {
    quote: "Faites attention à ceux avec qui vous construisez, car les gens vous utiliseront pour les fondations et finiront la structure avec quelqu'un d'autre.",
    author: "2C Motivation",
    date: "2025-03-10"
  },
  {
    quote: "La vie ne change pas, mais les gens si. Apprenez à accepter que tout le monde n'est pas celui que vous pensiez connaître.",
    author: "2C Motivation",
    date: "2025-03-11"
  },
  {
    quote: "N'oubliez jamais qui vous a aidé alors que tout le monde trouvait des excuses.",
    author: "2C Motivation",
    date: "2025-03-12"
  },
  {
    quote: "La vie ne consiste pas à savoir qui est vrai en face de vous, mais à savoir qui est vrai dans votre dos.",
    author: "2C Motivation",
    date: "2025-03-13"
  },
  {
    quote: "Éloignez-vous des personnes négatives, elles ont un problème pour chaque solution.",
    author: "2C Motivation",
    date: "2025-03-14"
  }
];

/**
 * Retourne la citation du jour selon la date actuelle
 */
export const getQuoteOfTheDay = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  // Recherche d'une citation pour la date exacte
  const quoteForToday = dailyQuotes.find(quote => quote.date === formattedDate);
  
  if (quoteForToday) {
    return quoteForToday;
  }
  
  // Si aucune citation n'est programmée pour aujourd'hui, utiliser un index basé sur le jour du mois
  const dayOfMonth = today.getDate();
  const index = dayOfMonth % dailyQuotes.length;
  return dailyQuotes[index];
};
