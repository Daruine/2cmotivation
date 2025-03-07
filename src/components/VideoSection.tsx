
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  youtubeLink: string;
  format: "16:9" | "9:16";
}

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Le discours de Charlie Chaplin que tout le monde devrait écouter | Le dictateur",
    description: "Ne manquez pas cette vidéo inspirante ! Découvrez ce discours emblématique de Charlie Chaplin dans \"Le Dictateur\", il partage un message puissant et intemporel que tout le monde devrait écouter. Ce discours est plus pertinent que jamais dans le monde d'aujourd'hui.",
    url: "https://www.youtube.com/embed/1OuVY-av4FQ",
    youtubeLink: "https://youtu.be/1OuVY-av4FQ",
    format: "16:9"
  },
  {
    id: "2",
    title: "CITATIONS DES MÉCHANTS QUI AVAIENT ABSOLUMENT RAISON",
    description: "Les méchants nous laissent presque toujours des citations profondes dans les films et, bien souvent, nous ne réalisons pas qu'ils ont aussi leur raison. Un méchant et un héros ne sont pas si différents si l'on se place à différents points de vue chacun fait ce qu'il croit être le mieux pour ceux qui l'entourent. Les méchants sont-ils toujours les Mauvais dans l'histoire ? ou est-ce parce qu'ils voient seulement ce que les autres ne peuvent pas voir et qu'ils sont prêts à sacrifier leur vie si nécessaire pour y parvenir.",
    url: "https://www.youtube.com/embed/slTUgQuvg7Y",
    youtubeLink: "https://youtu.be/slTUgQuvg7Y",
    format: "16:9"
  }
];

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-12">Vidéos Inspirantes</h2>
        
        {/* Grid de vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`relative ${video.format === "9:16" ? "max-w-[400px] mx-auto" : "w-full"}`}>
                <AspectRatio ratio={video.format === "16:9" ? 16/9 : 9/16}>
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">Voir la vidéo</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
