import React from 'react';

import { Product } from '@/types/product';
import ProductCard from '@/components/productCard';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
