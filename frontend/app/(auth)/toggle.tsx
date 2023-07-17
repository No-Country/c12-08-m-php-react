'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ToggleButton = () => {
  const pathname = usePathname();

  return (
    <Link
      href={pathname === '/login' ? '/register' : '/login'}
      className='btn-secondary-outline'>
      {pathname === '/login' ? 'Registrate' : 'Inicia sesión'}
    </Link>
  );
};

export default ToggleButton;
