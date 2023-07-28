// import { Item } from '@/types/types';

// const getItems = async (token: string) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/items`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (res.status === 200) {
//       const { items }: { items: Item[] } = await res.json();
//       return { success: true, items };
//     }
//     return { success: false };
//   } catch (error) {
//     console.log(error);
//     return { success: false };
//   }
// };

// export default getItems;
