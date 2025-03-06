
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ArticleTagsProps {
  tags?: string[];
}

export const ArticleTags = ({ tags }: ArticleTagsProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag) => (
        <Link key={tag} to={`/recherche?q=${encodeURIComponent(tag)}`}>
          <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
};
