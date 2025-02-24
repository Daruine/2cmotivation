
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
    title: "Comment garder sa motivation",
    description: "Découvrez les secrets pour rester motivé même dans les moments difficiles.",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    format: "16:9"
  },
  {
    id: "2",
    title: "Méditation quotidienne",
    description: "Une courte méditation pour commencer votre journée du bon pied.",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
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
