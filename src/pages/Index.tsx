
import React from "react";
import Layout from "@/components/Layout";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getFeaturedArticles, getRecentArticles, getCategories, getArticlesByCategory } from "@/data/articleData";

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(6);
  const categories = getCategories();
  
  // Get one article from each category for the category section
  const categoryArticles = categories.map(category => {
    const articles = getArticlesByCategory(category);
    return articles[0]; // Get the first article in each category
  });

  return (
    <Layout>
      <section className="container mx-auto px-4 pt-8 pb-16">
        {featuredArticles.length > 0 && (
          <FeaturedArticle article={featuredArticles[0]} />
        )}
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Latest News</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Stay updated with the most recent stories and insights from around the world</p>
          </div>
          <Link to="/news" className="group">
            <Button variant="outline" className="mt-4 md:mt-0 transition-all group-hover:translate-x-1">
              View All Articles
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Explore Categories</h2>
            <p className="text-muted-foreground">Discover articles in your favorite topics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryArticles.map((article) => (
              <div key={article.id} className="flex flex-col">
                <ArticleCard article={article} size="small" />
                <Link 
                  to={`/news/${article.category.toLowerCase()}`}
                  className="mt-4 text-center text-primary hover:text-primary/80 font-medium group flex items-center justify-center"
                >
                  More in {article.category}
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-secondary/20 rounded-xl p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for something specific?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Search our entire collection of articles to find exactly what you're looking for.
          </p>
          <SearchBox />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
