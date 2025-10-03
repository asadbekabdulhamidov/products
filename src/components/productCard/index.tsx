import React from 'react';
import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-xl hover:scale-[1.02] transition transform duration-300">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {product.title}
        </h2>
        <p className="text-green-600 font-semibold text-lg">${product.price}</p>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-2 text-sm">
        <span className="text-yellow-500">⭐</span>
        <span>{product.rating.toFixed(1)}</span>
      </div>

      {/* Action Button */}
      <div className="mt-4">
        <Link
          href={`/products/${product.id}`}
          className="block text-center w-full py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
