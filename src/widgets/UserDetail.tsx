import { useUserById } from '@/hooks/useUserById';

function UserDetail() {
  const { isPending, isFetching, data, error } = useUserById('1');

  if (isPending) return <p>Loading...</p>;
  if (isFetching) return <p>Updating...</p>;
  if (error) return <p>Failed to load user {error.message}</p>;
  if (!data) return null;

  return (
    <>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </>
  );
}

export default UserDetail;
