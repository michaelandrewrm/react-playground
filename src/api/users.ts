import type { User } from '@/types/user';

export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('HTTP Error');
    return await res.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function fetchUserById(id: string): Promise<User> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error('HTTP Error');
    return await res.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
