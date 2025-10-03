import UserList from '@/components/userList';
import { User } from '@/types/user';

async function Home() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) {
      throw new Error('Foydalanuvchilarni yuklashda muammo!');
    }

    const users: User[] = await res.json();

    return (
      <div className="container mx-auto px-3">
        <UserList users={users} />
      </div>
    );
  } catch (error: any) {
    return (
      <div className="text-red-500 font-bold container mx-auto">
        ❌ Xatolik: {error.message}
      </div>
    );
  }
}

export default Home;
