
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

// Format de date pour l'affichage
export const formatDateFr = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

/**
 * Retourne la citation du jour selon la date et l'heure actuelles
 * Les citations changent à 7h30 chaque matin
 */
export const getQuoteOfTheDay = () => {
  const now = new Date();
  const targetHour = 7;
  const targetMinute = 30;
  
  // Créer une date pour aujourd'hui à 7h30
  const todayTarget = new Date(now);
  todayTarget.setHours(targetHour, targetMinute, 0, 0);
  
  // Si l'heure actuelle est avant 7h30, utiliser la citation d'hier
  const useYesterday = now < todayTarget;
  
  // Ajuster la date en fonction
  const targetDate = new Date(now);
  if (useYesterday) {
    targetDate.setDate(targetDate.getDate() - 1);
  }
  
  const formattedDate = `${targetDate.getFullYear()}-${String(targetDate.getMonth() + 1).padStart(2, '0')}-${String(targetDate.getDate()).padStart(2, '0')}`;
  
  // Recherche d'une citation pour la date exacte
  const quoteForToday = dailyQuotes.find(quote => quote.date === formattedDate);
  
  if (quoteForToday) {
    return {
      ...quoteForToday,
      displayDate: formatDateFr(quoteForToday.date)
    };
  }
  
  // Si aucune citation n'est programmée pour aujourd'hui, utiliser un index basé sur le jour du mois
  const dayOfMonth = targetDate.getDate();
  const index = dayOfMonth % dailyQuotes.length;
  return {
    ...dailyQuotes[index],
    displayDate: formatDateFr(now.toISOString().split('T')[0])
  };
};
