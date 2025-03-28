
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/data/articleData";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="w-full h-[600px] relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-primary hover:bg-primary/90">{article.category}</Badge>
            <span className="text-white/70">{formatDate(article.date)}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-3xl">{article.summary}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-white/90">By {article.author}</span>
            </div>
            <Link to={`/article/${article.slug}`}>
              <Button variant="secondary">Read Full Article</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
