
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";
import { searchArticles, Article } from "@/data/articleData";

const SearchPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  
  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q") || "";
    setSearchQuery(query);
    
    if (query) {
      const results = searchArticles(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [location.search]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-4">Search Results</h1>
          <SearchBox />
        </div>
        
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl font-medium">
              {searchResults.length > 0 
                ? `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"} for "${searchQuery}"` 
                : `No results found for "${searchQuery}"`}
            </h2>
          </div>
        )}
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="bg-muted p-10 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try different keywords or browse our categories
            </p>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default SearchPage;
