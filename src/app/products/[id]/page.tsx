import { Product } from '@/types/product';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('❌ Productni yuklashda xato!');
  }

  const product: Product = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border border-green-300">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-green-600 font-bold text-xl mt-4">
          ${product.price}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <span className="text-yellow-500">⭐</span>
          <span>{product.rating.toFixed(1)} / 5</span>
        </div>

        {/* Extra Info */}
        <div className="mt-4 text-sm text-gray-600 space-y-1">
          <p>📦 Stock: {product.stock}</p>
          <p>🏷️ Brand: {product.brand}</p>
          <p>📂 Category: {product.category}</p>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <a
            href="/products"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            ⬅️ Back to Products
          </a>
        </div>
      </div>
    </div>
  );
}
