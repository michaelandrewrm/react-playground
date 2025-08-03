import { useQuery } from '@tanstack/react-query';
import type { User } from '@/types/user';
import { fetchUsers } from '@/api/users';

export const useUser = () => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
    staleTime: 2 * 60 * 1000,
  });
};
