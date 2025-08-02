import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import fetchUser from '../store/actions/userActions';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.userState
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load user</p>;
  if (!user) return null;

  return (
    <>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </>
  );
};

export default UserProfile;
