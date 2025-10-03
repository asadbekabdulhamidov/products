import { User } from '@/types/user';
import React from 'react';

interface UserPageProps {
  params: { id: string };
}

async function UserPage({ params }: UserPageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    {
      cache: 'no-store', // har safar yangidan chaqirish uchun
    }
  );

  if (!res.ok) {
    throw new Error('User ma’lumotini olishda xato!');
  }

  const user: User = await res.json();

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg border border-green-300">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">@{user.username}</p>
          <p className="text-sm text-gray-400">User ID: {user.id}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-sm">
        <div>
          <p>
            📧 <span className="font-medium">Email:</span> {user.email}
          </p>
          <p>
            📞 <span className="font-medium">Phone:</span> {user.phone}
          </p>
          <p>
            🌐 <span className="font-medium">Website:</span> {user.website}
          </p>
        </div>
        <div>
          <p>
            📍 <span className="font-medium">Address:</span>{' '}
            {user.address.suite}, {user.address.street}, {user.address.city},{' '}
            {user.address.zipcode}
          </p>
          <p>
            🗺️ <span className="font-medium">Geo:</span> {user.address.geo.lat},{' '}
            {user.address.geo.lng}
          </p>
        </div>
      </div>

      {/* Company */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <h2 className="font-bold text-green-700">🏢 {user.company.name}</h2>
        <p className="italic text-gray-600">"{user.company.catchPhrase}"</p>
        <p className="text-gray-500">{user.company.bs}</p>
      </div>

      {/* Back button */}
      <div className="mt-6">
        <a
          href="/"
          className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          ⬅️ Back to Users
        </a>
      </div>
    </div>
  );
}

export default UserPage;
