import axiosInstance from '@/services/axiosInstance';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const postRegister = async (data: RegisterData) => {
  return await axiosInstance
    .post('/api/register', data)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Register error:', error);
      throw error;
    });
};
