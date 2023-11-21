import axiosInstance from '@/services/axiosInstance';

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export const getUserInfo = async (): Promise<UserInfo> => {
  return await axiosInstance
    .get<UserInfo>('/api/user')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Get User info error:', error);
      throw error;
    });
};
