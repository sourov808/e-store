import { SkeletonCard } from "@/lib/Skeleton";

import { useEffect, useState } from "react";
import ProductList from "./ProductList";

type Product = {
  id: number;
  title: string;
  brand: string;

  description: string;
  images: string[]; // images is an array of strings
  price: number;
  rating: number;
  stock: number;

  // add other product fields as needed
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setLoading] = useState(true);

  const productsFetch = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
      console.log(data.products);
    } catch (error) {
      console.error("Products fetching error", error);
    }
  };

  useEffect(() => {
    productsFetch();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : products.slice(0, visibleCount).map((product) => (
              <ProductList
                key={product.id}
                id={product.id}
                title={product.title}
                brand={product.brand}
                description={product.description}
                img={product.images[0]} // use the first image from the array
                rating={product.rating}
                stock={product.stock}
                price={product.price}
              />
            ))}
      </div>
      {!isLoading && visibleCount < products.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
