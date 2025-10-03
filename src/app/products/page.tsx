import React from 'react';
import ProductList from '@/components/productList';
import { Product } from '@/types/product';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

async function Products() {
  try {
    const res = await fetch('https://dummyjson.com/products');

    if (!res.ok) {
      throw new Error('Foydalanuvchilarni yuklashda muammo!');
    }
    const data: ProductsResponse = await res.json();

    return <ProductList products={data.products} />;
  } catch (error: any) {
    return (
      <div className="text-red-500 font-bold container mx-auto">
        ❌ Xatolik: {error.message}
      </div>
    );
  }
}

export default Products;
