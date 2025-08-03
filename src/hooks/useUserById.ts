import { useQuery } from '@tanstack/react-query';
import type { User } from '@/types/user';
import { fetchUserById } from '@/api/users';

export const useUserById = (id: string) => {
  return useQuery<User>({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    staleTime: 2 * 60 * 1000,
  });
};
