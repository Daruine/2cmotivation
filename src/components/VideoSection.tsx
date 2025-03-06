
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  format: "16:9" | "9:16";
}

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Il n'y a pas de raccourci tout finira pas payer…🤲🏻❤️‍🔥 #motivation #islam #developpementpersonnel",
    description: "Les épreuves que vous traversez aujourd'hui vous rendront plus fort pour demain.",
    url: "https://www.youtube.com/embed/slTUgQuvg7Y",
    format: "16:9"
  },
  {
    id: "2",
    title: "Appréciez chaque moment de votre vie! 🤲🏻❤️‍🔥 #motivation #islam #developpementpersonnel",
    description: "Un message inspirant sur l'importance d'apprécier chaque instant de notre vie.",
    url: "https://www.youtube.com/embed/rM4LgPbkQ7A",
    format: "9:16"
  },
  {
    id: "3",
    title: "La vie est un test…🤲🏻❤️‍🔥 #motivation #islam #developpementpersonnel",
    description: "Un rappel puissant que chaque épreuve dans la vie est un test qui nous fait grandir.",
    url: "https://www.youtube.com/embed/4pnr1YRP-ug",
    format: "9:16"
  },
  {
    id: "4",
    title: "La vie est une question de patience…🤲🏻❤️‍🔥 #motivation #islam #developpementpersonnel",
    description: "Une réflexion sur l'importance de la patience dans notre parcours de vie.",
    url: "https://www.youtube.com/embed/GN_8rzjIKNM",
    format: "9:16"
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
                <a href={`/videos/${video.id}`}>
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
