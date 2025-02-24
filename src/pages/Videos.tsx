
import { Navbar } from "@/components/Navbar";
import { VideoSection } from "@/components/VideoSection";

const Videos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Nos Vidéos Motivantes</h1>
        </div>
        <VideoSection />
      </div>
    </div>
  );
};

export default Videos;
