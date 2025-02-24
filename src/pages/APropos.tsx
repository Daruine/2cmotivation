
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const APropos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">À Propos de 2C Motivation</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              2C Motivation est née d'une passion pour le développement personnel et la motivation.
              Notre mission est d'inspirer et d'accompagner chaque personne dans son parcours vers
              la réalisation de ses objectifs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Chaque jour, nous partageons avec vous des citations inspirantes, des articles
              enrichissants et des vidéos motivantes pour vous aider à maintenir votre élan
              et à progresser vers vos rêves.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre communauté grandissante témoigne de l'impact positif que peut avoir
              la motivation quotidienne sur nos vies.
            </p>
            <div className="text-center">
              <Button size="lg">Rejoignez Notre Communauté</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
