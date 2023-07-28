import { User } from '@/types/note';

const getUserData = async (token: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      const { user }: { user: User } = await res.json();
      return { success: true, user };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export default getUserData;
