
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/data/articleData";

interface ArticleCardProps {
  article: Article;
  size?: "small" | "medium" | "large";
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, size = "medium" }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          card: "h-full",
          image: "h-40",
          title: "text-lg font-semibold truncate-2-lines",
          summary: "text-sm truncate-2-lines"
        };
      case "large":
        return {
          card: "h-full",
          image: "h-80",
          title: "text-3xl font-bold truncate-2-lines",
          summary: "text-base truncate-3-lines"
        };
      default:
        return {
          card: "h-full",
          image: "h-56",
          title: "text-xl font-semibold truncate-2-lines",
          summary: "text-sm truncate-3-lines"
        };
    }
  };

  const sizeClasses = getSizeClasses();

  // Use placeholder image instead of article.imageUrl
  const placeholderImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";

  return (
    <Card className={`overflow-hidden ${sizeClasses.card} transition-all hover:shadow-lg`}>
      <Link to={`/article/${article.slug}`}>
        <div className={`${sizeClasses.image} w-full relative overflow-hidden`}>
          <img
            src={placeholderImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary hover:bg-primary/90">{article.category}</Badge>
          </div>
        </div>
      </Link>
      <CardHeader className="p-4 pb-0">
        <Link to={`/article/${article.slug}`}>
          <h3 className={sizeClasses.title}>{article.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className={`text-muted-foreground ${sizeClasses.summary}`}>{article.summary}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-muted-foreground text-sm">
        <span>{article.author}</span>
        <span>{formatDate(article.date)}</span>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
