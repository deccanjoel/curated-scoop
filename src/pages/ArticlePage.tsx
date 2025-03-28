
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/ArticleCard";
import { getArticleBySlug, getArticlesByCategory, Article } from "@/data/articleData";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    if (slug) {
      const currentArticle = getArticleBySlug(slug);
      if (currentArticle) {
        setArticle(currentArticle);
        
        // Get related articles from the same category
        const related = getArticlesByCategory(currentArticle.category)
          .filter(item => item.id !== currentArticle.id)
          .slice(0, 3);
        setRelatedArticles(related);
      }
    }
  }, [slug]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/news" className="text-primary hover:underline">
            Back to news
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-muted-foreground mb-8">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.date)}</span>
          </div>
          
          <div className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="border-t pt-8">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-muted">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ArticlePage;
