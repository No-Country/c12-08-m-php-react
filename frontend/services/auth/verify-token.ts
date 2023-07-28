export const verifyToken = async (token: string) => {
  console.log(`${process.env.NEXT_PUBLIC_URL_API}/verifyToken`);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/verifyToken`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Bearer ${token}`,
      },
    });

    if (res.status === 200) return { isAuth: true, message: 'Valid token' };
    return { isAuth: false, message: 'Invalid token' };
  } catch (error) {
    console.log(error);
    return { isAuth: false, message: 'Something went wrong' };
  }
};
