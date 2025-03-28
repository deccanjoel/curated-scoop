
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="font-bold text-2xl text-primary">
                CuratedScoop
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors">
                All News
              </Link>
              <Link to="/news/technology" className="text-foreground hover:text-primary transition-colors">
                Technology
              </Link>
              <Link to="/news/business" className="text-foreground hover:text-primary transition-colors">
                Business
              </Link>
              <Link to="/news/science" className="text-foreground hover:text-primary transition-colors">
                Science
              </Link>
            </nav>
            <div className="flex items-center">
              <Link to="/search" className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
                <Search size={20} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="border-t mt-10">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">CuratedScoop</h3>
              <p className="text-muted-foreground">
                Your source for carefully curated news and insights from around the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/news/technology" className="text-muted-foreground hover:text-primary transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link to="/news/business" className="text-muted-foreground hover:text-primary transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/news/science" className="text-muted-foreground hover:text-primary transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link to="/news/health" className="text-muted-foreground hover:text-primary transition-colors">
                    Health
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CuratedScoop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
