
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getCategories } from "@/data/articleData";

const CategoryFilter: React.FC = () => {
  const location = useLocation();
  const categories = getCategories();
  
  const isActive = (category: string) => {
    const path = location.pathname.toLowerCase();
    return path === `/news/${category.toLowerCase()}`;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link 
        to="/news" 
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          location.pathname === "/news" 
            ? "bg-primary text-white" 
            : "bg-secondary/50 hover:bg-secondary/80 text-foreground"
        )}
      >
        All
      </Link>
      
      {categories.map(category => (
        <Link 
          key={category}
          to={`/news/${category.toLowerCase()}`}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            isActive(category)
              ? "bg-primary text-white" 
              : "bg-secondary/50 hover:bg-secondary/80 text-foreground"
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
