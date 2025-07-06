import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
  category: string;
};

const ProductInfo = () => {
  const { id } = useParams(); // ✅ capture product ID from URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 mt-4">{error}</div>;
  if (!product) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center gap-3 items-center">
      <div className="max-w-4xl mx-auto bg-white    border-2  rounded shadow p-6 mt-4">
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-80 object-cover rounded"
          />
          <div className="">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 font-bold mb-4">{product.brand}</p>
            <p className="mb-4 text-gray-800 text-xl">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">In stock: {product.stock}</p>
            <p className="text-sm text-yellow-500">
              ⭐ {product.rating} Rating
            </p>
            <p className="text-sm mt-1">Category: {product.category}</p>

            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
