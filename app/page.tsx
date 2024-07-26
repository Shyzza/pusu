"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUsers } from '../lib/prisma'; // Adjust the path as necessary
import { User } from '@prisma/client';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      setUsers(users);
    }
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <div className="grid grid-cols-1 gap-4 mt-8 bg-white w-24 h-24">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </main>
  );
}