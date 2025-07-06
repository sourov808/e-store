import { Link } from "react-router-dom";

export type ProductListProps = {
  title: string;
  brand: string;
  description: string;
  img: string;
  rating: number;
  stock: number;
  price: number;
  id: number;
};

const ProductList = ({
  title,
  brand,
  description,
  img,

  price,
  id,
}: ProductListProps) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:shadow-2xl hover:border-2 hover:shadow-blue-200 transition-all">
        <figure>
          <img src={img} alt="Shoes" className="w-7/12" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <h2 className="card-title">{brand}</h2>

          <p className="font-bold text-xl">{price} $</p>

          <div className="card-actions justify-start">
            <button className="btn btn-primary">Add Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
