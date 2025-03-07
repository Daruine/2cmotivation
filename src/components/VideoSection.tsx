
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  youtubeLink: string;
  format: "16:9" | "9:16";
  isShort?: boolean;
}

const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Les vérités profondes d'Ultron #film #marvel #citation #cinema",
    url: "https://www.youtube.com/embed/jYs6MTBDx0w",
    youtubeLink: "https://youtube.com/shorts/jYs6MTBDx0w",
    format: "9:16",
    isShort: true
  },
  {
    id: "2",
    title: "SOYEZ PATIENT DANS LA VIE #motivation #sagesse #inspiration",
    url: "https://www.youtube.com/embed/dX8aFk6h-i0",
    youtubeLink: "https://youtube.com/shorts/dX8aFk6h-i0",
    format: "9:16",
    isShort: true
  },
  {
    id: "3",
    title: "Nul ne peut atteindre l'aube sans passer par la nuit #citation #inspiration",
    url: "https://www.youtube.com/embed/GN_8rzjIKNM",
    youtubeLink: "https://youtube.com/shorts/GN_8rzjIKNM",
    format: "9:16",
    isShort: true
  },
  {
    id: "4",
    title: "C'est quoi le couple parfait ? #citation #motivation #bonheurconjugal",
    url: "https://www.youtube.com/embed/rM4LgPbkQ7A",
    youtubeLink: "https://youtube.com/shorts/rM4LgPbkQ7A",
    format: "9:16",
    isShort: true
  }
];

export const VideoSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-12">Vidéos Inspirantes</h2>
        
        {/* Grid de vidéos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className={`relative ${video.format === "9:16" ? "max-w-[240px] mx-auto" : "w-full"}`}>
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
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                {video.description && <p className="text-gray-600 mb-4 line-clamp-3">{video.description}</p>}
              </div>
              <div className="p-4 pt-0">
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
