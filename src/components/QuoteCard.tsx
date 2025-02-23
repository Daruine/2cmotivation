
import { Card } from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  author: string;
}

export const QuoteCard = ({ quote, author }: QuoteCardProps) => {
  return (
    <Card className="p-6 card-hover">
      <blockquote className="text-lg font-medium mb-4">{quote}</blockquote>
      <footer className="text-sm text-gray-500">— {author}</footer>
    </Card>
  );
};
