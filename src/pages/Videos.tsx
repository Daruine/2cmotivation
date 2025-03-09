
import { Navbar } from "@/components/Navbar";
import { VideoSection } from "@/components/VideoSection";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";

interface ShortVideo {
  id: string;
  title: string;
  url: string;
  youtubeLink: string;
}

const shortVideos: ShortVideo[] = [
  {
    id: "short1",
    title: "C'est quoi le couple parfait ? #citation #motivation #bonheurconjugal",
    url: "https://www.youtube.com/embed/rM4LgPbkQ7A",
    youtubeLink: "https://youtube.com/shorts/rM4LgPbkQ7A"
  },
  {
    id: "short2",
    title: "Tu ne peux pas effacer le passer, mais tu peux écrire ton futur #motivation #citations",
    url: "https://www.youtube.com/embed/4pnr1YRP-ug",
    youtubeLink: "https://youtube.com/shorts/4pnr1YRP-ug"
  }
];

const Videos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Nos Vidéos Motivantes</h1>
        </div>
        <VideoSection />
        
        {/* Section Shorts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-12">Nos Shorts</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {shortVideos.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative max-w-[400px] mx-auto">
                    <AspectRatio ratio={9/16}>
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
                    <h3 className="text-xl font-bold mb-4">{video.title}</h3>
                    <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">Voir le short</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bouton Plus de vidéos */}
            <div className="mt-12 text-center">
              <a 
                href="https://youtube.com/c/ClaimeCitationsetMotivation/?sub_confirmation=1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  Plus de vidéos
                  <ExternalLink size={18} />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
