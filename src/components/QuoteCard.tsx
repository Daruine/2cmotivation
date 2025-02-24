
import { Card } from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  author: string;
}

export const QuoteCard = ({ quote, author }: QuoteCardProps) => {
  return (
    <Card className="p-6 card-hover bg-[#1a1a4b] text-white border-[#d4a853] border-2">
      <div className="flex flex-col h-full">
        <div className="text-[#d4a853] text-4xl mb-4 font-serif">"</div>
        <blockquote className="text-lg font-medium mb-4 flex-grow whitespace-pre-line">
          {quote}
        </blockquote>
        <footer className="text-sm text-[#d4a853] mt-auto border-t border-[#d4a853] pt-4">
          — {author}
        </footer>
      </div>
    </Card>
  );
};
