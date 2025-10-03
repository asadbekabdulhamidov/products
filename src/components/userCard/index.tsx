import React from 'react';

import { User } from '@/types/user';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  console.log(user);

  return (
    <div className="border rounded-xl shadow-md p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl hover:scale-[1.02] transition transform duration-300">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg shadow">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2 text-gray-600 text-sm">
        <p className="flex items-center gap-2">
          <span className="text-blue-500">📧</span> {user.email}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-green-500">📞</span> {user.phone}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-purple-500">🌐</span> {user.website}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-red-500">📍</span> {user.address.city},{' '}
          {user.address.street}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-5">
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
