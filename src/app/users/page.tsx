// 'use client';

import AddUserForm from '@/components/form/AddUserForm';
import { getUser } from '@/service/user';

export default async function Home() {
  const users = await getUser();
  console.log('유저 정보리스트 => ', users);

  return (
    <section>
      {users &&
        users.map(({ _id, name, email }) => (
          <div className="flex gap-4" key={_id}>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
          </div>
        ))}
      <AddUserForm />
    </section>
  );
}
