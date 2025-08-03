import { useUser } from '@/hooks/useUser';

function UserList() {
  const { isPending, isFetching, data, error } = useUser();

  if (isPending) return <p>Loading...</p>;
  if (isFetching) return <p>Updating...</p>;
  if (error) return <p>Failed to load users {error.message}</p>;
  if (!data) return null;

  return (
    <>
      {data?.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;
