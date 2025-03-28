
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBox from "@/components/SearchBox";
import { articles, getArticlesByCategory } from "@/data/articleData";

const NewsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [displayArticles, setDisplayArticles] = React.useState(articles);
  
  useEffect(() => {
    if (category) {
      setDisplayArticles(getArticlesByCategory(category));
    } else {
      setDisplayArticles(articles);
    }
  }, [category]);

  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : "All";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">{categoryTitle} News</h1>
          <p className="text-muted-foreground text-lg">
            {category 
              ? `Browse the latest articles in the ${categoryTitle} category` 
              : "Browse all articles across various categories"}
          </p>
        </div>
        
        <div className="mb-10">
          <SearchBox />
        </div>
        
        <CategoryFilter />
        
        {displayArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold">No articles found</h3>
            <p className="text-muted-foreground mt-2">Try selecting a different category</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewsPage;
