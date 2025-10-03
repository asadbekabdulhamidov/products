import React from 'react';

//componnts
import UserCard from '@/components/userCard';

import { User } from '@/types/user';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10">
      {users &&
        users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
    </div>
  );
};

export default UserList;
