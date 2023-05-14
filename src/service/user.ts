import { User } from '@/types/userType';

export async function getUser(): Promise<User[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC__API_URL}/api/users`, {
    method: 'GET',
    cache: 'no-store',
  });
  const data = await response.json();
  return data;
}

export async function addUser(name: string, email: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC__API_URL}/api/users`, {
    method: 'POST',
    body: JSON.stringify({ name: name, email: email }),
  });
  const data = await response.json();
  return data;
}
