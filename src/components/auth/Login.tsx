'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="h-screen px-4 pt-20 pb-10 bg-image">
      <div className="bg-white mx-auto rounded-lg max-w-[500px] py-7">
        <Header />
        <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
        <form onSubmit={handleLogin} className="mt-5">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex flex-col">
              <label htmlFor="Username" className="text-[#5c5c5c] text-[16px]">
                Login ID
              </label>
              <input type="text" value={username} className="p-3 rounded-[5px] mt-3 text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[#5c5c5c] text-[16px]">
                Password
              </label>
              <input
                type="password"
                value={password}
                className="p-3 rounded-[5px] mt-3 text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
              <button type="submit" className="p-4 bg-[#00767d] w-full text-white font-semibold rounded-md">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-[20px] flex items-center justify-center">
        <Image src="https://i.imgur.com/yzewqF1.png" width={230} height={230} className="w-[100px]" alt="logo" />
      </div>
    </div>
  );
}
