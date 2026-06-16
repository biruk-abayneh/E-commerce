import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Explore Our Categories
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest trends in eco-friendly fashion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
      <footer className="relative mt-20 border-t border-gray-800/60 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Top Row: Split Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-b border-gray-800/80 pb-8">
            {/* Column 1: Personality / Bio */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-xl font-bold text-emerald-400 tracking-wide font-mono">
                &lt;BuiltByMe /&gt;
              </h3>
              <p className="text-gray-400 max-w-sm text-sm sm:text-base leading-relaxed mx-auto md:mx-0">
                Designed, engineered, and fueled by clean code. Bringing
                sustainable fashion to the digital runway, one component at a
                time.
              </p>
            </div>

            {/* Column 2: Contact Address & Connect */}
            <div className="flex flex-col space-y-4 text-center md:text-right items-center md:items-end">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-1">
                  Get In Touch
                </h4>
                <p className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-200 mb-1">
                  <a href="mailto:your.email@example.com">
                    birukabayneh2@gmail.com
                  </a>
                </p>
                <p className="text-xs text-gray-400 italic">
                  Available for remote collaborations worldwide 🌐
                </p>
              </div>

              {/* Creative Quick Links */}
              <div className="flex space-x-6 pt-2 justify-center md:justify-end text-sm">
                <a
                  href="https://github.com/biruk-abayneh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/biruk-abayneh/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-emerald-400 hover:underline underline-offset-4 transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Minimalist Signature */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-gray-500 space-y-4 sm:space-y-0">
            <p>© {new Date().getFullYear()} EcoFashion. All rights reserved.</p>
            <p className="flex items-center gap-1 group cursor-default selection:bg-emerald-500">
              Handcrafted with
              <span className="text-emerald-400 animate-pulse group-hover:scale-125 transition-transform duration-200">
                ⚡
              </span>
              and React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
