
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Succès !",
      description: "Merci de vous être inscrit à notre newsletter !",
    });
  };

  return (
    <section className="bg-brand-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title mb-4">Recevez la Motivation Hebdomadaire</h2>
        <p className="text-lg text-gray-600 mb-8">
          Rejoignez notre newsletter et recevez des doses d'inspiration directement dans votre boîte de réception.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Votre email"
            className="flex-1"
            required
          />
          <Button type="submit">S'abonner</Button>
        </form>
      </div>
    </section>
  );
};
